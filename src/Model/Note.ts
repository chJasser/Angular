import { Produit } from "./Produit";
import { User } from "./User";

export class Note{
    idNote?:number;
    noote:any;
    dateNote?:Date;
    coommentaire:String;
    produit?:Produit;
    client?:User;

     constructor(Coommentaire,noote,dateNotee,client,produit){
         this.noote=noote;
         this.coommentaire=Coommentaire;
         this.produit=produit;
          this.dateNote = dateNotee;
         this.client = client; 
     }
     }
