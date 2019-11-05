import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../../products.service';
import { Router, RouterLinkActive, ActivatedRoute } from '@angular/router';
import { UserService } from '../../user.service';
import {Products, Team} from '../../IProducts';
import { MailRequest } from 'src/app/mail-request';
import { UserStoryService } from 'src/app/service/user-story.service';
import { UserStoryInterface } from 'src/app/model/user-story-interface';
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {
  productList = [];
  userList = [];
  teamList = [];
  private message: string;
  private subject: string;
  private product: Products = {};
  private team: Team = {};
  private productBacklog: string;
  private memberId: string;
  private memberEmail: string;
  private productId: string;
  private mailRequest: MailRequest = {'memberEmail': "", "productId":'','subject':'','userId':'','teamName':"",'memberName':''};
  private userStoryList: UserStoryInterface[] = [];

  constructor(private spinner: NgxSpinnerService,
    private _userStoryService: UserStoryService,
    private _userService: UserService, 
    private _productService: ProductsService, 
    private activatedRoute: ActivatedRoute,
    private _snackBar: MatSnackBar) { }

  ngOnInit() {

    this.productId = this.activatedRoute.snapshot.params.id;
    this.mailRequest.productId = this.productId;

    this._productService.getItems()
    .subscribe(data => {
      this.productList.push(data);
      this.productBacklog = this.productList[0].productName;
  });

    this._userService.getItems()
  .subscribe(data => { this.userList = this.userList.concat(data);
    this.userList.reverse();
  });

    this._productService.getTeam()
  .subscribe(data => {
    this.teamList = this.teamList.concat(data);

  });
  
  }

  getTeam(teamData) {
    this.team = teamData;
    this.mailRequest.memberEmail=this.team.memberEmail;
    this.mailRequest.userId=this.team.userId;
    this.mailRequest.productId = this.productId;
    this.subject = `Invitation to join ${this.productBacklog} project`; 
    this.mailRequest.subject = this.subject;
    this.mailRequest.memberName = this.team.memberName;
    this.mailRequest.teamName= this.productBacklog;

    this.teamList.forEach(data=>{
      if(data.memberEmail!=this.team.memberEmail){
        this._productService.sendEmail(this.mailRequest)
    .subscribe((data) => console.log('email sent data is', data));
    this.message= "Mail sent";
    this._snackBar.open(this.message, "", {
      duration: 2000,
    });
      }
      else{
        this.message="User already exists in team";
        this._snackBar.open(this.message, "", {
          duration: 2000,
        });
      }
    });

  }

  getTeamName(id: string) {
    this.memberId = id;
    this._productService.deleteItem(this.memberId)
    .subscribe((data: Products) => {
      this.teamList = data.teams;
      this.message= "Member deleted";
      this._snackBar.open(this.message, "", {
        duration: 2000,
      });
    });
  }

  getMemberEmail(memberEmail: string) {
    console.log('Received email at parent', memberEmail);
    this.memberEmail = memberEmail;
    console.log('*********', this.memberEmail);
    this.mailRequest.memberEmail = this.memberEmail;
    this.mailRequest.productId = this.productId;
    this.mailRequest.userId = null;
    this.subject = `Invitation to join ${this.productBacklog} project`; 
    this.mailRequest.subject = this.subject;
    this.mailRequest.teamName= this.productBacklog;
    console.log(this.mailRequest.teamName);
    this.mailRequest.memberName = null;

    this.teamList.forEach(data=>{
      if(data.memberEmail!=this.team.memberEmail){
        this._productService.sendEmail(this.mailRequest)
        .subscribe((data) => {console.log('email sent data is', data)
        this.message= "Mail sent";
        this._snackBar.open(this.message, "", {
          duration: 2000,
        });
      });
        
      }
      else{
        this.message="User already exists in team";
        this._snackBar.open(this.message, "", {
          duration: 2000,
        });
      }
    });
  }
}
