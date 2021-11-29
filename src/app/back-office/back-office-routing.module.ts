import { BoardAdminComponent } from './board-admin/board-admin.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
 
const routes: Routes = [

  { path: 'admin', component: BoardAdminComponent },
  {  path: '', component: HomeComponent,
    children: [
      {
        path: 'stock',
        loadChildren: () =>
          import('./stock/stock.module').then(
            (m) => m.StockModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackOfficeRoutingModule {}
