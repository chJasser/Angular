import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockRoutingModule } from './stock-routing.module';
import { MainStockComponent } from './main-stock/main-stock.component';
import { AddStockComponent } from './add-stock/add-stock.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StockListComponent } from './stock-list/stock-list.component';
import { StockDetailComponent } from './stock-detail/stock-detail.component';
import { UpdateStockComponent } from './update-stock/update-stock.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSliderModule} from '@angular/material/slider';
import {MatExpansionModule} from '@angular/material/expansion';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [MainStockComponent, AddStockComponent, StockListComponent, StockDetailComponent, UpdateStockComponent],
  imports: [
    CommonModule,
    StockRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatDatepickerModule,
    MatSliderModule,
    MatExpansionModule,
    ToastrModule

  ],
})
export class StockModule {}
