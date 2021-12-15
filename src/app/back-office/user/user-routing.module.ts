import { AddAdminComponent } from './add-admin/add-admin.component';
import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
      {
        path: 'addadmin',component: AddAdminComponent ,
      },
    
    ];
     
    
    @NgModule({
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    })
    export class UserRoutingMdule { }
    