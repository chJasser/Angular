import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/Model/Produit';
import { ProductSService } from 'src/ServicesProduct/product-s.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private ps:ProductSService) { }
  ListProduct:Produit[];


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
