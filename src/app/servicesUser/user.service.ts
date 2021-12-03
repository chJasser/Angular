import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8089/SpringMVC/api/test/';
const REAL_URL = 'http://localhost:8089/SpringMVC/user/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  ngOnInit() {

    }
  body ={ 'id':8} ;
  assignAdmin(id: number): any {
//MAHYECH 9A3DA T3AYET LEL LIEN WALA MANICH AAREF
    console.log("service called with id : "+ id)
     return this.http.put('http://localhost:8089/SpringMVC/user/assign-admin/',id , { responseType: 'text' } ).subscribe( 
      data => console.log(data) );
  }
  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
}
