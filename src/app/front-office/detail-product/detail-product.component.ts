import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produit } from 'src/Model/Produit';
import { Rayon } from 'src/Model/Rayon';
import { Stock } from 'src/Model/Stock';
import { ProduitSService } from 'src/ServicesProduct/product-s.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
  constructor(private ps:ProduitSService,private route:ActivatedRoute) { }
p:Produit
Rayon1:Rayon;
stock:Stock;
  ngOnInit(): void {


    this.route.paramMap.subscribe(
      (next) =>
        this.ps
          .getProductById(Number(next.get('id')))
          .subscribe((res) => {
            this.p = res;
            console.log(this.p)
          }),
      (error) => console.log(error)
    );
    this.Rayon1=this.p.rayon
    console.log( this.Rayon1)
    this.stock=this.p.stock
    console.log( this.stock)
  }

}

