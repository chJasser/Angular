import { Stock } from 'src/Model/Stock';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StockService } from '../stock.service';
import { ImageService } from '../../product-back/image.service';
import { Produit } from 'src/Model/Produit';

@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.css'],
})
export class StockDetailComponent implements OnInit {


  retrievedImage: any;
    base64Data: any;
    retrieveResonse: any;
    message: string;
    imageName: any;
    retrievedImagetab: any[]=new Array();



  constructor(private is:ImageService,private ac: ActivatedRoute, private stockService: StockService) {}
  stock: Stock;
  Produit11:Produit; 
  ngOnInit(): void {
    this.ac.paramMap.subscribe(
      (next) =>
        this.stockService
          .getStockById(Number(next.get('id')))
          .subscribe((res) => {
            this.stock = res;
            for(this.Produit11 of this.stock.produitList){
              console.log(this.Produit11)
              this.getImage(this.Produit11.idProduit);
            }
           
            console.log(this.stock)
          }),
      (error) => console.log(error)
    );
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
