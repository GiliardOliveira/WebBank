import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Cliente } from 'src/app/models/cliente.model'

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

}
