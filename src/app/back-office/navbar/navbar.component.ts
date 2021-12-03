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

  deleteNotif(stock: Stock) {
    stock.checked = true;
    this.stockService.updateStock(stock).subscribe((res)=>{
      this.getStockEnRupture();
    });
  }
}
