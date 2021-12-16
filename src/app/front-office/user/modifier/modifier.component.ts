import { AuthService } from './../../../servicesUser/auth.service';
import { Router } from '@angular/router';
import { TokenStorageService } from './../../../servicesUser/token-storage.service';
import { UserService } from './../../../servicesUser/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/Model/User';
import { Route } from '@angular/compiler/src/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent implements OnInit {


  user: User ;

  constructor(private userService: UserService,private token: TokenStorageService,private router: Router,private authService: AuthService) { }

  ngOnInit(): void {
    this.getUSer();
  }

  getUSer(): void{
    this.userService.getUser(this.token.getUser().id).subscribe(
      data=> {
        console.log(data);
        this.user = data ;
      }
    )
  }
  updateUser(): void {
  this.userService.modifier(this.user).subscribe(data => {
    console.log(data);
  }) ;
  this.getUSer();
 // this.router.navigate(['/home/user/profile']);
 this.changeLocation();
 this.router.navigate(['/home/user/profile']);

  }

  changeLocation() {

    // save current route first
    const currentRoute = this.router.url;

    this.router.navigateByUrl('/home/user/profile', { skipLocationChange: true }).then(() => {
        this.router.navigate([currentRoute]); // navigate to same route
    }); 
    
}

  onSubmit() {
    this.updateUser();    
  }
}
