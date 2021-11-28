import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Type } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from '../Model/Produit';

@Injectable({
  providedIn: 'root'
})
export class ProductSService {

  constructor(private HS:HttpClient) { }
  private url="http://localhost:3000/products"
  private urlDelete=""
  private n:Number=0
/*
 getAllProducts(): Product[] {
return [
  { id: 1, code: 127,libelle: "PC", prixunitaire : 2000, tauxTva :10},
  { id: 2, code: 128,libelle: "TV", prixunitaire : 1000, tauxTva :20},
  { id: 3, code: 129,libelle: "Table", prixunitaire : 200, tauxTva :30},
  { id: 4, code: 130,libelle: "Table", prixunitaire : 200, tauxTva :30},
  { id: 5, code: 131,libelle: "Table", prixunitaire : 200, tauxTva :30},
  { id: 6, code: 132,libelle: "Table", prixunitaire : 200, tauxTva :30},
  ]
  }
*/
/*
getNbProductsByLibelle(libelle:string):Number{
let n=0
  let ListProduit:Product[]=this.getAllProducts()
for (let i = 0; i < ListProduit.length; i++) {
  if(ListProduit[i].libelle==libelle){
n=n+1
  }
}

  return n
}
*/

getAllProductsByJson():Observable<Produit[]>{

    return this.HS.get<Produit[]>("http://localhost:8089/SpringMVC/produit/retrieve-all-produits");
    }




    delete (myObject:number): Observable<Produit> {
      const id = typeof myObject === 'number' ? myObject : myObject;
      return this.HS.delete<Produit>(this.url+'/'+id);
      }
/*
    delete1(id){
      this.urlDelete=this.url+ '/' +id
      return this.HS.delete(this.url+'/'+id)
    }
  */



    //Partie spring +angular
    getProductById(id){
     return this.HS.get("http://localhost:8089/SpringMVC/produit/retrieve-stock"+'/'+id)
    }


    httpOptions = {
      headers: new HttpHeaders({
      'Content-Type': 'application/json'
      })
      }
    updateProduct (id:number, product:Produit): Observable<Produit> {
      return this.HS.put<Produit>(this.url+'/'+ id,product, this.httpOptions);
    
    }
    
      addProduct (product: Produit): Observable<Produit> {

        return this.HS.post<Produit>(this.url,product, this.httpOptions);
      }
      
        
}