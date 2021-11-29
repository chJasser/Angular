import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { EndNavComponent } from './end-nav/end-nav.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontOfficeRoutingModule } from './front-office-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [HomeComponent,
    HeaderComponent, 
    EndNavComponent,
    FooterComponent, 
    LoginComponent, 
    RegisterComponent, 
    ProfileComponent],
  imports: [
    CommonModule, 
    FrontOfficeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
})
export class FrontOfficeModule {}
