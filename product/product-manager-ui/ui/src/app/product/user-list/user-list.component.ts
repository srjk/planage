import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../user.service';
import { ProductsService } from '../../products.service';
import { Team } from '../../IProducts';
import { User } from '../../iuser';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormArray, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.sass']
})
export class UserListComponent implements OnInit {
  @Input() userList = [];
  @Output() addTeam = new EventEmitter<Team>();
  @Output() memberEmail = new EventEmitter<String>();
  // @Input() productList = [];
  // @Input() teamList = [];
  private team: Team = {};
  private userEmail: String;
  private productName: String;
  // private memberEmail:String;
  customStyle = {
    backgroundColor: "#035382",
    borderRadius: "50%",
    color: "white",
    cursor: "pointer",
  };

  myform = this.formBuilder.group({
    memberEmail: ['', Validators.compose([
      // Validators.minLength(30),
      // Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      Validators.email,
      Validators.required
    ])]
  });

  constructor(private formBuilder: FormBuilder, private _userService: UserService, private _productService: ProductsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    // this._userService.getItems()
    //   .subscribe(data => {this.userList = data.result;
    //     this.userEmail = data.result[0].user_email;
    //           console.log(this.userList)});

    // this._productService.getItems(this.activatedRoute.snapshot.params.id)
    // .subscribe(data => {this.productList.push(data.result);
    //   this.productName = this.productList[0].productName;                
    // });
  }
  addUser(id: string, name: string, email: string) {
    console.log(id + "" + name + "" + email);
    this.team.memberName = name;
    this.team.userId = id;
    this.team.memberEmail = email;
    this.addTeam.emit(this.team);
    // this._productService.updateTeam(this.team)
    // .subscribe(data =>{console.log(data.result);   
    // }); 
  }

  submit(attr) {
    this.team.memberEmail = attr.memberEmail;

    console.log(attr);
    this.memberEmail.emit(attr.memberEmail);
  }

  onKeyUp(){
    console.log("noooo");
  }
  
}
