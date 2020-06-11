import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Cliente } from 'src/app/models/cliente.model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }


  public postCliente(cliente: Cliente) {
    console.log(cliente)
    return this.http.post(this.apiUrl, cliente)
  }

  public loginCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.apiUrl + '/auth', cliente)
  }

  public getBalance(): Observable<Cliente> {
    return this.http.get<Cliente>(this.apiUrl + '/' + localStorage.getItem('login'))
  }

  public sacar(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(this.apiUrl + '/withdraw/' + localStorage.getItem('login'), cliente)
  }

}
