import { UserService } from './../../../servicesUser/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/Model/User';

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

  page = 1;
  count = 0;
  pageSize = 3;
  pageSizes = [3, 6, 9];

  constructor(private userService : UserService) { }
 
  ngOnInit(): void {
    this.retrieveTutorials();
  }

  
  getRequestParams(email: string, page: number, pageSize: number): any {
    let params: any = {};

    if (email) {
      params[`email`] = email;
    }

    if (page) {
      params[`page`] = page - 1;
    }

    if (pageSize) {
      params[`size`] = pageSize;
    }

    return params;
  }

  retrieveTutorials(): void {
    const params = this.getRequestParams(this.email, this.page, this.pageSize);

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
    this.retrieveTutorials();
  }

  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.retrieveTutorials();
  }

  searchTitle(): void {
    this.page = 1;
    this.retrieveTutorials();
  }
 /* refreshList(): void {
    this.retrieveTutorials();
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
