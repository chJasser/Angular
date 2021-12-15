import { CategorieProduit } from "./CategorieProduit";

export class SearchProduit {
    query?: string;
    prixUnitaire?:any
    dateDebut?: Date;
    dateFin?: Date;
    categorie?:CategorieProduit;
  
    constructor(libelle1,d11,d22,prixUnitairee,categoriee) {
this.query=libelle1;
this.dateDebut=d11;
this.dateFin=d22;
this.prixUnitaire=prixUnitairee;
        this.categorie=categoriee;
    }
  }
  