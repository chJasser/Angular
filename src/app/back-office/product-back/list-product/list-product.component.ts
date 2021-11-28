import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/Model/Produit';
import { ProductSService } from 'src/ServicesProduct/product-s.service';


@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  ListProduct:Produit[]

  constructor(private ps:ProductSService) { }
  getAllproduits(){
    this.ps.getAllProductsByJson().subscribe((res) => {
      this.ListProduct = res;
      console.log(this.ListProduct);
    });
  }


  ngOnInit(): void {
this.getAllproduits();
  }



}
