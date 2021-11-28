import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/Model/Stock';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css'],
})
export class StockListComponent implements OnInit {
  my_Stock: Stock[];
  addstockStatus = false;

  constructor(private stockService: StockService) {}
  getAllStocks() {
    this.stockService.getAllStock().subscribe((res) => {
      this.my_Stock = res;
      console.log(this.my_Stock);
    });
  }
  toogleAddStock() {
    this.addstockStatus = !this.addstockStatus;
  }
  ngOnInit(): void {
    this.getAllStocks();
  }
  addStockToList(stock: Stock) {
    this.my_Stock.push(stock);
    this.getAllStocks();
  }
  toogleStatus() {
    this.addstockStatus = false;
  }
}
