import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ImageModel } from 'src/Model/ImageModel';
import { Produit } from 'src/Model/Produit';
import { ProduitSService } from 'src/ServicesProduct/product-s.service';
import { ImageService } from '../image.service';


@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  ListProduct:Produit[]=new Array()

  addProductStatus = false;
  updateProductStatus = false;
  productToUpdate: Produit;
  productId: number;
  ImageAdd:ImageModel;
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;
  retrievedImagetab: any[]=new Array();
  libellesearched:string;
  ppproduit:Produit
revenu:any;
bbbb:any
tableau:bigint[];
  constructor(private is:ImageService,private ps:ProduitSService,private HS:HttpClient) { }





  getAllproduits(){
    this.ps.getAllproduct().subscribe((res) => {
      this.ListProduct = res;
      this.getIDS();
      console.log(this.ListProduct);
      for(this.ppproduit of this.ListProduct){
        console.log(this.ppproduit)
        this.getImage(this.ppproduit.idProduit);
      }
    });
  }

  getProductBylibelle(libelle:string){
if(libelle!= ''){
this.ps.getProductBylibelle(libelle).subscribe(res=>this.ListProduct=res) ;

  }
else{
  this.getAllproduits();
}}

  getProductList(p:Produit){
    this.getAllproduits();
  }
  salut(p:Produit){
    console.log(p);
    this.productToUpdate = p;
    
    console.log(this.productToUpdate);
  }
/*   toogleAddStock() {
    this.addstockStatus = !this.addstockStatus;
    this.updateStockStatus = false;
  } */
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
saami(){
  console.log(this.ListProduct)

}


getIDS(){
  this.ps.getids().subscribe((res)=>{this.tableau=res;
    });
}
  ngOnInit(): void {
this.getAllproduits();

  }

  delete() {
    this.ps.delete(this.productId).subscribe((res) => {
      this.getAllproduits();
    });
  }

  addProductToList(product: Produit) {
    this.ListProduct.push(product);
    this.getAllproduits();
  }
  toogleAddProduct() {
    this.addProductStatus = !this.addProductStatus;
    this.updateProductStatus = false;
  }

  toogleStatus() {
    this.addProductStatus = false;
    this.getAllproduits();
  }
  CloseUpdate() {
    this.updateProductStatus = false;
    this.getAllproduits();
  }
  getProductID(id: number) {
    this.productId = id;
  }
  toogleUpdateProduct(product: Produit) {
    console.log("Produit  selectionné"+product)
    this.productToUpdate = product;
    console.log("Produit  selectionné"+this.productToUpdate)
    this.updateProductStatus = true;
    this.addProductStatus = false;
  }




}
