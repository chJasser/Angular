import { detailProduit } from "./detaiProduit";
import { Stock } from "./Stock";
import { ImageModel } from "./ImageModel";
import { Rayon } from "./Rayon";


export class Produit{
    idProduit?:number;
    code:string;
    libelle:string;
    prixUnitaire:number;
    rayon?:Rayon;
    stock?:Stock;
    detailProduit?:detailProduit;
    Image?:ImageModel;
    NoteMoyenne?:any;

    constructor(code,libelle,prixunitaire,detailproduit,Image){
                this.code=code
                this.libelle=libelle
                this.prixUnitaire=prixunitaire
                this.detailProduit=detailproduit
                this.Image=Image
            }

        }
