import { Stock } from 'src/Model/Stock';
import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock/stock.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private stockService: StockService) {}

  ngOnInit(): void {
    this.getStockEnRupture();
  }
  stockList: Stock[];
  getStockEnRupture() {
    this.stockService.getAllStockEnRupture().subscribe((res) => {
      this.stockList = res;
    });
  }
  myStock: Stock;
  deleteNotif(stock: Stock) {
    this.myStock = new Stock(
      stock.qteMin,
      stock.libelleStock,
      stock.idStock,
      stock.createdAt,
      stock.updatedAt,
      stock.qte,
      true
    );

    this.stockService.updateStock(this.myStock).subscribe((res) => {
      this.getStockEnRupture();
    });
  }
}
