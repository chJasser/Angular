import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from 'src/app/back-office/product-back/image.service';
import { ImageModel } from 'src/Model/ImageModel';
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
  constructor(private is:ImageService,private ps:ProduitSService,private route:ActivatedRoute) { }
p:Produit
Rayon1:Rayon;
stock:Stock;
ImageAdd:ImageModel;
selectedFile: File;
retrievedImage: any;
base64Data: any;
retrieveResonse: any;
message: string;
imageName: any;
retrievedImagetab: any[]=new Array();
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

