import { SearchStock } from './../../../../Model/SerachStock';
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
  updateStockStatus = false;
  searchVal: string = '';
  stockToUpdate: Stock;
  stockId: bigint;
  panelOpenState = false;
  constructor(private stockService: StockService) {}
  getAllStocks() {
    this.stockService.getAllStock().subscribe((res) => {
      this.my_Stock = res;
    });
  }
  toogleAddStock() {
    this.addstockStatus = !this.addstockStatus;
    this.updateStockStatus = false;
  }
  ngOnInit(): void {
    this.getAllStocks();
  /*   this.getStockCreatedAtAsc();
    this.getStockCreatedAtDesc(); */
 /*    this.getStockUpdatedAtAsc();
    this.getStockUpdatedAtDesc(); */
    this.getStockQtetAsc();
    this.getStockQteDesc();
  }
  addStockToList(stock: Stock) {
    this.my_Stock.push(stock);
    this.getAllStocks();
  }
  getStockList(stock: Stock) {
    this.getAllStocks();
  }
  toogleStatus() {
    this.addstockStatus = false;
  }
  CloseUpdate() {
    this.updateStockStatus = false;
  }
  getStockID(id: bigint) {
    this.stockId = id;
  }
  delete() {
    this.stockService.deleteStock(this.stockId).subscribe((res) => {
      this.getAllStocks();
    });
  }

  toogleUpdateStock(stock: Stock) {
    this.stockToUpdate = stock;
    this.updateStockStatus = true;
    this.addstockStatus = false;
  }
  searchStock: SearchStock;
  serach(p?: string, d1?: string, d2?: string, nbr?: number) {
    this.searchStock = new SearchStock(p, d1, d2, nbr);
    this.stockService.search(this.searchStock).subscribe((res) => {
      this.my_Stock = res;
    });
  }
  formatLabel(value: number) {
    return value + 'P';
  }
  serachh(d: any) {
    console.log(d.value);
  }
  getStockCreatedAtDesc() {
    this.stockService.getStockByCreatedDateDesc().subscribe((res) => {
      this.my_Stock = res;
      console.log(this.my_Stock);
    });
  }
  getStockCreatedAtAsc() {
    this.stockService.getStockByCreatedDateAsc().subscribe((res) => {
      this.my_Stock = res;
      console.log(this.my_Stock);
    });
  }

  getStockUpdatedAtDesc() {
    this.stockService.getStockByUpdatedDateDesc().subscribe((res) => {
      this.my_Stock = res;
      console.log(this.my_Stock);
    });
  }
  getStockUpdatedAtAsc() {
    this.stockService.getStockByUpdatedAtDateAsc().subscribe((res) => {
      this.my_Stock = res;
      console.log(this.my_Stock);
    });
  }
  getStockQteDesc() {
    this.stockService.getStockByQteDesc().subscribe((res) => {
      this.my_Stock = res;
      console.log(this.my_Stock);
    });
  }
  getStockQtetAsc() {
    this.stockService.getStockByQteAsc().subscribe((res) => {
      this.my_Stock = res;
      console.log(this.my_Stock);
    });
  }
}
