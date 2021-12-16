import { SearchRayon } from './../../../Model/SearchRayon';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Rayon } from 'src/Model/Rayon';

@Injectable({
  providedIn: 'root',
})
export class RayonService {
  constructor(private httpClient: HttpClient) {}
  private url = 'http://localhost:8089/SpringMVC/rayon/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  deleteRayon(id: bigint): Observable<bigint> {
    const url = this.url + 'remove-rayon/' + id;
    return this.httpClient.delete<bigint>(url);
  }

  getAllRayons(): Observable<Rayon[]> {
    return this.httpClient.get<Rayon[]>(this.url + 'retrieve-all-rayons');
  }

  getRayonById(id: number): Observable<Rayon> {
    return this.httpClient.get<Rayon>(this.url + 'retrieve-rayon/' + id);
  }

  addRayon(rayon: Rayon): Observable<Rayon> {
    return this.httpClient.post<Rayon>(
      this.url + 'add-rayon',
      rayon,
      this.httpOptions
    );
  }
  updateRayon(rayon: Rayon): Observable<Rayon> {
    return this.httpClient.put<Rayon>(
      this.url + 'modify-rayon',
      rayon,
      this.httpOptions
    );
  }

  search(searchRayon: SearchRayon): Observable<Rayon[]> {
    console.log(searchRayon);
    return this.httpClient.post<Rayon[]>(
      this.url + 'search-rayon',
      searchRayon,
      this.httpOptions
    );
  }

  getRayonByCreatedDateDesc(): Observable<Rayon[]> {
    return this.httpClient.get<Rayon[]>(
      this.url + 'rayon-createdAt-Desc',
      this.httpOptions
    );
  }

  getRayonByCreatedDateAsc(): Observable<Rayon[]> {
    return this.httpClient.get<Rayon[]>(
      this.url + 'rayon-createdAt-Asc',
      this.httpOptions
    );
  }

  getRayonByUpdatedDateDesc(): Observable<Rayon[]> {
    return this.httpClient.get<Rayon[]>(
      this.url + 'rayon-uapdatedAt-Desc',
      this.httpOptions
    );
  }

  getRayonByUpdatedAtDateAsc(): Observable<Rayon[]> {
    return this.httpClient.get<Rayon[]>(
      this.url + 'rayon-uapdatedAt-Asc',
      this.httpOptions
    );
  }

  getRayonByQteDesc(): Observable<Rayon[]> {
    return this.httpClient.get<Rayon[]>(
      this.url + 'rayon-qte-Desc',
      this.httpOptions
    );
  }

  getRayonByQteAsc(): Observable<Rayon[]> {
    return this.httpClient.get<Rayon[]>(
      this.url + 'rayon-qte-Asc',
      this.httpOptions
    );
  }

  getRayonByLibelleDesc(): Observable<Rayon[]> {
    return this.httpClient.get<Rayon[]>(
      this.url + 'rayon-libelle-desc',
      this.httpOptions
    );
  }

  getRayonByLibelleAsc(): Observable<Rayon[]> {
    return this.httpClient.get<Rayon[]>(
      this.url + 'rayon-libelle-asc',
      this.httpOptions
    );
  }
  getRayonByCodeDesc(): Observable<Rayon[]> {
    return this.httpClient.get<Rayon[]>(
      this.url + 'rayon-code-desc',
      this.httpOptions
    );
  }

  getRayonByCodeAsc(): Observable<Rayon[]> {
    return this.httpClient.get<Rayon[]>(
      this.url + 'rayon-code-asc',
      this.httpOptions
    );
  }
  assignListproductToRayon(rayonId: bigint, listId: number[]) {
    return this.httpClient.put(
      this.url + 'assign-productlist-to-rayon/' + rayonId,
      listId,
      this.httpOptions
    );
  }

  calculQte(rayonId: bigint) {
    return this.httpClient.put(
      this.url + 'calcul-qte/' + rayonId,
      this.httpOptions
    );
  }
}
