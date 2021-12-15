import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from 'src/Model/Note';
import { Produit } from 'src/Model/Produit';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  constructor(private HS:HttpClient) { }
  private url = 'http://localhost:8089/SpringMVC/note/';


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  

  addNote(commentaire:String,note:any,idProduit:number) {
    console.log(commentaire);
    console.log(note);
    return this.HS.post<Note>(this.url + 'add-note/'+idProduit+'/'+commentaire+ '/' + note,this.httpOptions);
  }
  ///retrieve-all-notes-By-Clients-produits/


 /*  getAllNote(): Observable<Note[]> {
    return this.HS.get<Note[]>(this.url + '/retrieve-all-notes-By-Clients');
  }
 */
  getNoteByproduitClient(idProduit: number,idClient: number): Observable<Note[]> {
    return this.HS.get<Note[]>(this.url + 'retrieve-all-notes-By-Clients-produits/'+idProduit+ '/'+idClient);
  }
  
  getNoteByClient(idClient: number): Observable<Note[]> {
    return this.HS.get<Note[]>(this.url + 'retrieve-all-notes-By-Clients/'+idClient);
  }

  average(idProduit: number): Observable<any> {
    return this.HS.get<any>(this.url + 'average/'+idProduit);
  }

 
}
