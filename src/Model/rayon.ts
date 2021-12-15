import { Produit } from 'src/Model/Produit';
export class Rayon {
  idRayon: bigint;
  code: string;
  libelle: string;
  qte: number;
  produitList?: Produit[];
  createdAt: Date;
  updatedAt: Date;

  constructor(code: string, libelle: string, idRayon?: bigint, qte?: number) {
    this.code = code;
    (this.libelle = libelle), (this.idRayon = idRayon);
    this.qte = qte;
  }
}
