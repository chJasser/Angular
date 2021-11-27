import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from 'src/Model/Stock';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  constructor(private HS: HttpClient) {}
  private url = 'http://localhost:8089/SpringMVC/stock/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  /*   delete(myObject: number): Observable<Stock> {
    const id = typeof myObject === 'number' ? myObject : myObject;
    return this.HS.delete<Stock>(
      'http://localhost:8089/SpringMVC/stock/remove-stock' + '/' + id
    );
  }
 */
  getAllStock(): Observable<Stock[]> {
    return this.HS.get<Stock[]>(this.url + 'retrieve-all-stocks');
  }

  getStockById(id: number): Observable<Stock> {
    return this.HS.get<Stock>(this.url + 'retrieve-stock/' + id);
  }

  addStock(stock: Stock): Observable<Stock> {
    return this.HS.post<Stock>(this.url + 'add-stock', stock, this.httpOptions);
  }
}
