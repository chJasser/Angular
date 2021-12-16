import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../servicesUser/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any = {
    username: null,
    email: null,
    password: null,
    nom:null,
    prenom: null,
    dateNaissance:null,
    profession: null,
    categorieClient: 'Ordinaire'
  }; 
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    //assigned form to object
    const { username, email, password , nom , prenom , dateNaissance , profession , categorieClient } = this.form;

    this.authService.register(username, email, password, nom, prenom , dateNaissance , profession , categorieClient ).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}