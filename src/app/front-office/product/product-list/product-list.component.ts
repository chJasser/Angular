import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/Model/Produit';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }
  ListProduct:Produit[];



  ngOnInit(): void {

  }

}
