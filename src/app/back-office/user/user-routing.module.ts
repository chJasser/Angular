import { ChartClientsComponent } from './chart-clients/chart-clients.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
      {
        path: 'addadmin',component: AddAdminComponent },
      {  path: 'chart',component: ChartClientsComponent 
      },
    
    ];
     
    
    @NgModule({
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    })
    export class UserRoutingMdule { }
    