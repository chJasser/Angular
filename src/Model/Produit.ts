import { rayon } from "./rayon";
import { detailProduit } from "./detaiProduit";
import { Stock } from "./Stock";
import { ImageModel } from "./ImageModel";


export class Produit{
    idProduit?:number;
    code:string;
    libelle:string;
    prixUnitaire:number;
    rayon?:rayon;
    stock?:Stock;
    detailProduit:detailProduit;
    Image:ImageModel;

    constructor(code,libelle,prixunitaire,detailproduit,Image){
        this.code=code
        this.libelle=libelle
        this.prixUnitaire=prixunitaire
        this.detailProduit=detailproduit
        this.Image=Image
    }
    
    }
