import { UserRoutingMdule } from './user-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAdminComponent } from './add-admin/add-admin.component';



@NgModule({
  declarations: [
    AddAdminComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    UserRoutingMdule
  ]
})
export class UserModule { }
