export class SearchProduit {
    libelle: string;
    prixUnitaire?:any
    d1?: Date;
    d2?: Date;
  
    constructor(libelle,d1,d2,prixUnitaire) {
this.libelle=libelle;
this.d1=d1;
this.d2=d2;
this.prixUnitaire=prixUnitaire;
    }
  }
  