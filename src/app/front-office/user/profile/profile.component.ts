import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../../servicesUser/token-storage.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: any;
  redirectUrl: '/home/user/login';

  constructor(private token: TokenStorageService,public router: Router) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
  } 
}