import { Router } from '@angular/router';
import { UserService } from './../../../servicesUser/user.service';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-user-action-button',
  templateUrl: './user-action-button.component.html',
  styleUrls: ['./user-action-button.component.css']
})
export class UserActionButtonComponent implements OnInit {

  constructor(private userService : UserService,private router:Router ) { }

  ngOnInit(): void {
  }
  @Input() action: string;
  @Input() id: number;
  @Output() editedEmitter = new EventEmitter<number>();

 // @Output() onClick = new EventEmitter<any>();
  
  onClickButton(event) {

     if ( this.action=="delete" ) {
      console.log("DELETE CLICKED ");
      
     }
     if ( this.action=="make_admin" ) {
      this.userService.assignAdmin(this.id);
     }
     if ( this.action=="withhold_admin" ) {
      this.userService.withholdAdmin(this.id);
     }
    }

   /* ngOnChanges(changes: SimpleChange) {
      if ( this.action=="delete" ) {
        console.log("CHANGES DELETE CLICKED ");
        console.log(this.id);
       }
       if ( this.action=="make_admin" ) {
        console.log("CHANGES MAKE ADMIN CLICKED ");
        console.log(this.id);
       }
    }*/

}
