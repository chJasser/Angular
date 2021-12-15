import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteService } from 'src/app/back-office/note/NoteService/note.service';
import { RayonService } from 'src/app/back-office/rayon/rayon.service';
import { StockService } from 'src/app/back-office/stock/stock.service';
import { CategorieProduit } from 'src/Model/CategorieProduit';
import { ImageModel } from 'src/Model/ImageModel';
import { Note } from 'src/Model/Note';
import { Produit } from 'src/Model/Produit';
import { Rayon } from 'src/Model/Rayon';
import { SearchProduit } from 'src/Model/SearchProduit';
import { Stock } from 'src/Model/Stock';
import { ProduitSService } from 'src/ServicesProduct/product-s.service';
import { ImageService } from '../../../back-office/product-back/image.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private is:ImageService,private ns:NoteService ,private rs:RayonService,private ss:StockService,private ps:ProduitSService,private router:Router,private route:ActivatedRoute) { }
  ListProduct:Produit[];
  idProduittt:number;
  SearchProduit1:SearchProduit;
  prixUnitaire:number;
  libelle:string;
  code:string;
  rayon:Rayon;
  ImageAdd:ImageModel;
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;
  retrievedImagetab: any[]=new Array();
  stock:Stock;
  Category:CategorieProduit;
   ppp:Produit;
  nn:Note;
  note:any;
  pNote:Produit;
  average:any;
  ProduitModifie:Produit
  averageee:any;
  @Output() prod= new EventEmitter<number>();
   k:number=0;
   idP:number;
   ppproduit:Produit;
p:Produit

getid(id:number){
  console.log(id)
this.idProduittt=id;
console.log(this.idProduittt)
this.ps.getProductById(id).subscribe(res=> this.p=res);
  this.prixUnitaire=this.p.prixUnitaire;
  console.log(this.prixUnitaire)
this.code=this.p.code;
this.libelle=this.p.libelle;
this.code=this.p.code;
this.rayon=this.p.rayon;
this.stock=this.p.stock;
this.Category=this.p.detailProduit.categorieProduit;
}


affecterNote(idProduit:number,noote:any){
   
  this.note=noote;
  this.ps.getProductById(idProduit).subscribe(res=>this.pNote=res);
  console.log(this.note)

  /* let n:Note=new Note(25,"salut",p)

this.ns.addNote(n,idProduit).subscribe(); */

}

averagee(idaa:number){
  console.log(idaa);
  this.ns.average(idaa).subscribe((res)=>{this.average=res;
  console.log(this.averageee);})
}
Ajouternote(Commentaire:String){
  console.log(Commentaire);
 //this.nn=new Note("salut",1,null,null,this.pNote)
console.log(this.nn);
this.ns.addNote(Commentaire,this.note,this.pNote.idProduit).subscribe();

 this.averagee(this.pNote.idProduit)
this.pNote.NoteMoyenne=this.averageee;
console.log(this.averageee); 

  this.ppp=this.ListProduct.find(x => x.idProduit === 1);
console.log(this.ppp.NoteMoyenne)
this.ps.updateProduct(this.pNote,this.pNote.idProduit).subscribe((res)=>{this.ProduitModifie=res;console.log(this.ProduitModifie)});
  console.log(this.ProduitModifie)
}






/*   this.route.queryParams.subscribe((params:any)=> {
    this.
  })}
  */

   getProduit(id:any){
    console.log(id)
    this.idProduittt=id

    
    console.log(this.idProduittt)
   }
  getAllproduits(){
    this.ps.getAllproduct().subscribe((res) => {
      this.ListProduct = res;
      console.log(this.ListProduct);
      for(this.ppproduit of this.ListProduct){
        console.log(this.ppproduit)
        this.getImage(this.ppproduit.idProduit);
      }
    });
  }

/*   getProductBylibelle(libelle:string){
    if(libelle == ''){
      this.getAllproduits()
    }else{
    this.ps.getProductBylibelle(libelle).subscribe(res=> this.ListProduct=res);
    this.router.navigate(['/home/product']);
    }
    
    

  } */

/*   getproduitsByprix(price:number){
    this.ps.getProductByprixbetween(price).subscribe(res=> this.ListProduct=res);
  }

  getproduitsBycat(categorie:CategorieProduit){
    console.log(categorie)
    this.ps.getProductByCategory(categorie).subscribe(res=> this.ListProduct=res);
    console.log(this.ListProduct)
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


  


  
  serach(SearchProduit1:SearchProduit) {
    console.log(SearchProduit1);
    this.ps.Recherche(SearchProduit1).subscribe((res) => {
      this.ListProduct= res;
      console.log(this.ListProduct);
    });
  }


  ngOnInit(): void {
if(this.k==0){
this.getAllproduits();
}

  }

}
