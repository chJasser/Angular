import { detailProduit } from './detaiProduit';
import { Rayon } from './Rayon';
import { Stock } from './Stock';

export class Produit {
  idProduit: number;
  code: string;
  libelle: string;
  prixUnitaire: number;
  rayon?: Rayon;
  stock?: Stock;
  detailproduit?: detailProduit;

  /*constructor(id,code,libelle,prixunitaire,tauxTva){
        this.id=id
        this.code=code
        this.libelle=libelle
        this.prixunitaire=prixunitaire
        this.tauxTva=tauxTva
    }
    */
}
