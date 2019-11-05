import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductsService } from '../../products.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Team } from '../../IProducts';
@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.sass']
})
export class MembersListComponent implements OnInit {
  // public itemsList = [];
  @Input() teamList = [];
  @Output() removeTeam = new EventEmitter<String>();
  customStyle = {
    backgroundColor: "#035382",
    borderRadius: "50%",
    color: "white",
    cursor: "pointer",
  };
  length: number;
  constructor(private _productsService:ProductsService, private router:Router, private activatedRoute: ActivatedRoute) { }
  deleteMember(id:String)
  {
    console.log(name);
   this.removeTeam.emit(id);
  }
  ngOnInit() {
    console.log(this.teamList);
  }

    
  
  

}
