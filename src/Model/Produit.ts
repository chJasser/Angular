
import { rayon } from "./rayon";
import { detailProduit } from "./detaiProduit";
import { Stock } from "./Stock";


export class Produit{
    idProduit?:number;
    code:number;
    libelle:string;
    prixUnitaire:number;
    rayon?:rayon;
    stock?:Stock;
    detailproduit:detailProduit;


    constructor(code,libelle,prixunitaire,detailproduit){
        this.code=code
        this.libelle=libelle
        this.prixUnitaire=prixunitaire
        this.detailproduit=detailproduit
    }
    
    }
