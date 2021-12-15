import { Component, OnInit } from '@angular/core';
import { ImageModel } from 'src/Model/ImageModel';
import { Note } from 'src/Model/Note';
import { Produit } from 'src/Model/Produit';
import { User } from 'src/Model/User';
import { ProduitSService } from 'src/ServicesProduct/product-s.service';
import { ImageService } from '../../product-back/image.service';
import { NoteService } from '../NoteService/note.service';

@Component({
  selector: 'app-consulter-note',
  templateUrl: './noteconsulter.component.html',
  styleUrls: ['./noteconsulter.component.css']
})
export class ConsulterNoteComponent implements OnInit {

  constructor(private ns:NoteService,private ps:ProduitSService,private is:ImageService) { }
  produit:Produit;
k:number;
aaa:boolean=false;
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

  ppr:Produit;
  salut:number;
NoteList:Note[];
NoteListC:Note[];
Listusers:User[];
prodd:number;
libelle:any;

getAllNote(){
  let n:Note
/* for(let i:number=0;i<this.NoteList.length;i++){
  console.log()
} */

}

odhher(){ this.k++;
this.aaa=true

if(this.k>=2){
  this.aaa=false;
}


}

getAllNoteByClient(idCient:number){
  this.ns.getNoteByClient(idCient).subscribe((res)=>{
    this.NoteListC=res;
   // this.libelle=
  console.log(this.NoteListC)})
}
getAllNoteByClientProduit(idProduit:number,idCient:number){
  this.ps.getProductById(idProduit).subscribe((res)=>this.ppr=res);
  this.getImage(this.ppr.idProduit);

  this.ns.getNoteByproduitClient(idProduit,idCient).subscribe((res)=>{
    this.NoteList=res;

  console.log(this.NoteList)})
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




  ngOnInit(): void {

  }

}
