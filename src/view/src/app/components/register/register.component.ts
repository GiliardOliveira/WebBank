import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model'
import { DataServiceService } from 'src/app/services/data-service.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  nome: Text
  cpf: Text
  password: Text

  constructor(private dataService: DataServiceService, private formBuilder: FormBuilder) { }

  public createConta(nome: Text, cpf: Text, password: Text) {
    const cliente: Cliente = <Cliente><unknown>{
      "name": nome,
      "cpf": cpf,
      "password": password
    }
    console.log(cliente)
    this.postClient(cliente)
  }

  public postClient(cliente: Cliente) {
    this.dataService.createCliente(cliente).subscribe()
  }

  ngOnInit(): void {
  }


}
