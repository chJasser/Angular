import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Input, Type } from '@angular/core';
import { Observable } from 'rxjs';
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

  addProduct(produit: Produit,idStock:number): Observable<Produit> {
    return this.HS.post<Produit>(this.url + 'add-produit/'+idStock+'/1', produit, this.httpOptions);
  }
        




  
}