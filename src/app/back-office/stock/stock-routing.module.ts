import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainStockComponent } from './main-stock/main-stock.component';

const routes: Routes = [{ path: '', component: MainStockComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StockRoutingModule {}
