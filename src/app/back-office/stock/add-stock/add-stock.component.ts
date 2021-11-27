import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/Model/Stock';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css'],
})
export class AddStockComponent implements OnInit {
  constructor(private stockService: StockService) {}
  stock: FormGroup;
  myStock: Stock;
  ngOnInit(): void {
    this.stock = new FormGroup({
      id: new FormControl(),
      qteMin: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
      ]),
      libelleStock: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(12),
        Validators.pattern('^[a-zA-Z]*$'),
      ]),
    });
  }

  addStock() {
    this.myStock = new Stock(
      this.stock.get('qteMin').value,
      this.stock.get('libelleStock').value
    );

    console.log(this.myStock);
    this.stockService.addStock(this.myStock).subscribe((res) => {
      console.log('stock created!', res);
    });
  }
}
