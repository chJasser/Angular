import { Router } from '@angular/router';
import { UserService } from './../../../servicesUser/user.service';
import { Component, OnInit, Output } from '@angular/core';
import { User } from 'src/Model/User';
import { UserActionButtonComponent } from '../user-action-button/user-action-button.component';
@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  users: User[] = [];
 // currentTutorial: User = {}; 
  currentIndex = -1;
  email = '';
  categorie ='';
  page = 1;
  count = 0;
  pageSize = 3;
  pageSizes = [3, 6, 9];


 isUidPresent :false;

 @Output() action :string;

  constructor(private userService : UserService,private router:Router    ) { }
 
  ngOnInit(): void {
    this.retrieveUsers();
  }

  refreshUsers($event): void {
    this.retrieveUsers();
  }

  onChangeCategorie(event,cat:string){
    this.categorie=cat;
  }

   
  getRequestParams(categorie: string ,email: string, page: number, pageSize: number): any {
    let params: any = {};

    if (email) {
      params[`email`] = email;
    }
    if (categorie) {
      params[`categorie`] = categorie;
    }
    if (page) {
      params[`page`] = page - 1;
    }

    if (pageSize) {
      params[`size`] = pageSize;
    }

    return params;
  }

  retrieveUsers(): void {
    const params = this.getRequestParams(this.categorie,this.email, this.page, this.pageSize);
 
    this.userService.getAll(params)
    .subscribe(
      response => {
        const { users, totalItems } = response;
        this.users = users;
        this.count = totalItems;
        console.log(response);
      },
      error => {
        console.log(error);
      });
  }

  handlePageChange(event: number): void {
    this.page = event;
    this.retrieveUsers();
  }

  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.retrieveUsers();
  }

  searchTitle(): void {
    this.page = 1;
    this.retrieveUsers();
  }
 /* refreshList(): void {
    this.retrieveUsers();
    this.currentTutorial = {};
    this.currentIndex = -1;
  }
*/
  setActiveTutorial(tutorial: User, index: number): void {
  //  this.currentTutorial = tutorial;
  // this.currentIndex = index;
  } 

 /* removeAllTutorials(): void {
    this.tutorialService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  } */


}
