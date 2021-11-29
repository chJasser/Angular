import { Produit } from 'src/Model/Produit';
export class Rayon {
  idRayon: bigint;
  code: string;
  libelle: string;
  produitList?: Produit[];
}
