import { Produit } from './Produit';

export class Stock {
  idStock?: bigint;
  qte?: number;
  qteMin: number;
  libelleStock: string;
  produitList?: Produit[];
  createdAt:Date;
  updatedAt:Date;
  checked:boolean

  constructor(qteMin, libelleStock, idStock?,createdAt?,updatedAt?,qte?,checked?) {
    this.qteMin = qteMin;
    this.libelleStock = libelleStock;
    this.idStock = idStock;
    this.createdAt=createdAt;
    this.updatedAt=updatedAt;
    this.qte=qte;
    this.checked=checked;
  }
}
