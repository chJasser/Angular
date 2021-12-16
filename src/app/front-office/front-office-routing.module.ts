
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
const routes: Routes = [       
  {  path: '', component: HomeComponent,
    children: [
      {
        
        path: 'product',
        loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
        
      },
      

        {
          path: 'user',
          loadChildren: () => import('./user/user.module').then(m => m.UserModule)
          },
    ],
  },
  /* { path: 'product', component: ProductComponent },
{ path: '', redirectTo: 'product', pathMatch: 'full' }, */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrontOfficeRoutingModule {}
