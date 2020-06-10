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

  cliente = {} as Cliente

  constructor(private dataService: DataServiceService, private formBuilder: FormBuilder) { }


  public createConta() {
    console.log(this.cliente)
    this.dataService.postCliente(this.cliente).subscribe()
  }

  ngOnInit(): void {
  }


}
