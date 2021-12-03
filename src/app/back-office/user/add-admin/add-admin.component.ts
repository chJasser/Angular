import { UserService } from './../../../servicesUser/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {
  id: any;
  constructor(private userService : UserService) { }

  ngOnInit(): void {
  }
  
  assignAdmin(){
    
    this.userService.assignAdmin(this.id);
    console.log("called with id : "+ this.id)
  }
}
