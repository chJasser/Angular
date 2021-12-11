import { UserRoutingMdule } from './user-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { UserActionButtonComponent } from './user-action-button/user-action-button.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ActionButtonComponent } from './action-button/action-button.component';



@NgModule({
  declarations: [
    AddAdminComponent,
    ListUsersComponent,
    UserActionButtonComponent,
    ActionButtonComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    UserRoutingMdule,
    NgxPaginationModule
  ]
})
export class UserModule { }
