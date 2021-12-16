export class SearchStock {
 query?:string;
 dateDebut?:string;
 dateFin?:string;
 nbrProduct?:number


  constructor(query?: string,dateDebut?: string, dateFin?: string,nbrProduct?:number ) {
    this.query = query;
    this.dateDebut = dateDebut;
    this.dateFin = dateFin;
    this.nbrProduct=nbrProduct;

  }
}
