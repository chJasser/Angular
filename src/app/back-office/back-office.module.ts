import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackOfficeRoutingModule } from './back-office-routing.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';






@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    BodyComponent,
  ],
  imports: [
    CommonModule,
    BackOfficeRoutingModule,
    HttpClientModule
  ]
})
export class BackOfficeModule { }
