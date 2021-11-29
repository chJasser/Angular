import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/Model/Produit';
import { ProduitSService } from 'src/ServicesProduct/product-s.service';



@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  ListProduct:Produit[]

  constructor(private ps:ProduitSService) { }
  getAllproduits(){
    this.ps.getAllproduct().subscribe((res) => {
      this.ListProduct = res;
      console.log(this.ListProduct);
    });
  }


  ngOnInit(): void {
this.getAllproduits();
  }

  delete(id: number){
    console.log("bfore")
    this.ps.delete(id).subscribe(()=>{
      this.ListProduct=this.ListProduct.filter(produit=>produit.idProduit!=id)
    })
    console.log("after")
  }

}
