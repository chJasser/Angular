import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Input, Type } from '@angular/core';
import { Observable } from 'rxjs';
import { CategorieProduit } from 'src/Model/CategorieProduit';
import { SearchProduit } from 'src/Model/SearchProduit';
import { Produit } from '../Model/Produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitSService {

  constructor(private HS:HttpClient) { }
  private url = 'http://localhost:8089/SpringMVC/produit/';


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
     delete(myObject: number): Observable<Produit> {
    const id = typeof myObject === 'number' ? myObject : myObject;
    return this.HS.delete<Produit>(
      'http://localhost:8089/SpringMVC/produit/remove-produit' + '/' + id
    );
  }
 
  getAllproduct(): Observable<Produit[]> {
    return this.HS.get<Produit[]>(this.url + 'retrieve-all-produits');
  }

  getProductById(id: number): Observable<Produit> {
    return this.HS.get<Produit>(this.url + 'retrieve-produit/' + id);
  }

  getProductBylibelle(lib: string): Observable<Produit[]> {
    return this.HS.get<Produit[]>(this.url + 'retrieve-all-produits3/' + lib);
  }

  getRevenuBrut(idProduit:number,d1:string ,d2:string):Observable<any>{
    return this.HS.get<any>('http://localhost:8089/SpringMVC/detail-invoce/get-revenue-brute/'+ idProduit + '/' + d1 + '/' + d2);
  }

  getMin(): Observable<Produit> {
    return this.HS.get<Produit>(this.url + 'get-Min');
  }

  getMax(): Observable<Produit> {
    return this.HS.get<Produit>(this.url + 'get-Max');
  }


  getProductByCategory(category: CategorieProduit): Observable<Produit[]> {
    return this.HS.get<Produit[]>(this.url + 'retrieve-all-produits1/' + category);
  }

  getProductByprixbetween(prix: any): Observable<Produit[]> {
    return this.HS.get<Produit[]>(this.url + 'retrieve-all-produits2/' + prix);
  }


  getids(): Observable<any[]> {
    return this.HS.get<any[]>(this.url + 'get-idProduits');
  }

  addProduct(produit: Produit,idStock:number,idRayon:number): Observable<Produit> {

    return this.HS.post<Produit>(this.url + 'add-produit/'+idStock+'/'+idRayon, produit, this.httpOptions);
  }
        
  updateProduct(produit: Produit,id:number): Observable<Produit> {
    return this.HS.put<Produit>(this.url + 'modify-produit/'+id,produit,this.httpOptions);
  }

  assignProduitToImage(id:number,idProduit:number):Observable<Produit> {
    return this.HS.put<Produit>(this.url + 'assignProduitToImage/'+id + '/'+idProduit,this.httpOptions);

  }

  assignProduitTorayon(idProduit:number,id:number):Observable<Produit> {
    return this.HS.put<Produit>(this.url + 'assignProduitToRayon/'+idProduit + '/'+id,this.httpOptions);

  }



  Recherche(SearchProduit1:SearchProduit):Observable<Produit[]> {
    return this.HS.post<Produit[]>(this.url + 'search-produit',SearchProduit1,this.httpOptions);
  }



  
}