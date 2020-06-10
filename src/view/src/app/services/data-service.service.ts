import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Cliente } from 'src/app/models/cliente.model'

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  public createCliente(cliente: Cliente) {
    return this.http.post<Cliente>(this.apiUrl, cliente)
  }

}
