import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produit } from 'src/Model/Produit';
import { Stock } from 'src/Model/Stock';
import { Rayon } from 'src/Model/Rayon';
import { ProduitSService } from 'src/ServicesProduct/product-s.service';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-detail-product-back',
  templateUrl: './detail-product-back.component.html',
  styleUrls: ['./detail-product-back.component.css']
})
export class DetailProductBackComponent implements OnInit {

 p:Produit;

Rayon1:Rayon;
stock:Stock;
retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;
  retrievedImagetab: any[]=new Array();

  constructor(private is:ImageService,private ps:ProduitSService,private route:ActivatedRoute) { }

  ngOnInit(): void {


    this.route.paramMap.subscribe(
      (next) =>
        this.ps
          .getProductById(Number(next.get('id')))
          .subscribe((res) => {
            this.p = res;
            console.log(this.p)
            this.getImage(this.p.idProduit)
            console.log( this.p.idProduit)
          }),
      (error) => console.log(error)
      
    );
    this.Rayon1=this.p.rayon
    console.log( this.Rayon1)
    this.stock=this.p.stock
    console.log( this.stock)

  }



  getImage(idProduit:any) {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.is.Retrieve(idProduit)
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImagetab[idProduit] = 'data:image/jpeg;base64,' + this.base64Data;
       //  console.log(this.retrievedImage) 
         
         console.log( this.retrievedImagetab[idProduit] )   
       
        }
      );
  }

}
