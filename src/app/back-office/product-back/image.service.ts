import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageModel } from 'src/Model/ImageModel';
import { Produit } from 'src/Model/Produit';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private HS:HttpClient) { }
  url:String="http://localhost:8089/SpringMVC/image/upload";


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

 upload(uploadImageData:any): Observable<any>{
 return this.HS.post<any>('http://localhost:8089/SpringMVC/image/upload', uploadImageData);
 }

 Retrieve(idProduit:any): Observable<any>{
  return  this.HS.get('http://localhost:8089/SpringMVC/image/get/' + idProduit);
}

    
}
