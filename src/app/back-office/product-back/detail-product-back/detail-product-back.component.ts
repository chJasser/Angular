import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produit } from 'src/Model/Produit';
import { Stock } from 'src/Model/Stock';
import { Rayon } from 'src/Model/Rayon';
import { ProduitSService } from 'src/ServicesProduct/product-s.service';

@Component({
  selector: 'app-detail-product-back',
  templateUrl: './detail-product-back.component.html',
  styleUrls: ['./detail-product-back.component.css']
})
export class DetailProductBackComponent implements OnInit {

 p:Produit;

Rayon1:Rayon;
stock:Stock;

  constructor(private ps:ProduitSService,private route:ActivatedRoute) { }

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
