import { BoardAdminComponent } from './board-admin/board-admin.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChartProductComponent } from './product-back/chart-product/chart-product.component';
 
const routes: Routes = [
 
  //{ path: 'admin', component: BoardAdminComponent },
  {  path: '', component: HomeComponent,
    children: [
      {
        path: 'user',
        loadChildren: () =>
          import('./user/user.module').then(
            (m) => m.UserModule
          ),
      },
      {
        path: 'stock',
        loadChildren: () =>
          import('./stock/stock.module').then(
            (m) => m.StockModule
          ),
      },
      {
        path: 'product',
        loadChildren: () =>
          import('./product-back/product-back.module').then(
            (m) => m.ProductBackModule
          ),
      },
      {

        path: 'rayon',
        loadChildren: () =>
          import('./rayon/rayon.module').then(
            (m) => m.RayonModule
          ),
          
      },{
      path:'note',
      loadChildren: () =>
          import('./note/note.module').then(
            (m) => m.NoteModule
          ),
    },
    {
      path: 'chartProduct',
      component: ChartProductComponent,
  
    }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackOfficeRoutingModule {}
