import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produit } from 'src/Model/Produit';
import { ProduitSService } from 'src/ServicesProduct/product-s.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  constructor(private ps:ProduitSService,private route:ActivatedRoute) { }

  //@Output() idaa= new EventEmitter<number>();

  @Input() idaa: number;
  prixUnitaire:number;

  idd:number;
p:Produit;
getProduit(a:number){
console.log(a)
  this.ps.getProductById(1).subscribe(res=> this.p=res);

}



/* ngOnChanges(changes: SimpleChanges): void {

    console.log (changes.currentValue);
 
} */
/* ngOnChanges(changes: SimpleChange) {
  if(changes.isFirstChange){
console.log (changes);
this.getProduit(changes.currentValue)

  }
} */

  ngOnInit(): void {
    console.log(this.idaa);
    console.log(this.idaa);
    console.log(this.p);
    this.getProduit(1);
    console.log(this.p);
    this.prixUnitaire=this.p.prixUnitaire;
    console.log(this.prixUnitaire);
/*     
this.route.queryParams.subscribe((params:any)=> {
  this.idd=params.data
}) */

  }

}
