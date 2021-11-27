
import { rayon } from "./rayon";
import { detailProduit } from "./detaiProduit";
import { Stock } from "./Stock";


export class Produit{
    idProduit:number;
    code:number;
    libelle:string;
    prixUnitaire:number;

    rayon?:rayon;
    stock?:Stock;
    detailproduit?:detailProduit;


    /*constructor(id,code,libelle,prixunitaire,tauxTva){
        this.id=id
        this.code=code
        this.libelle=libelle
        this.prixunitaire=prixunitaire
        this.tauxTva=tauxTva
    }
    */
    }
