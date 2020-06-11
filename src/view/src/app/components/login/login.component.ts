import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente.model'
import { DataServiceService } from 'src/app/services/data-service.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;

  cliente = {} as Cliente
  message: string

  constructor(private router: Router, private dataService: DataServiceService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  register() {
    this.router.navigate(['/register'])
  }

  login() {
    this.dataService.loginCliente(this.cliente).subscribe((res) => {
      if (res.status) {
        localStorage.setItem('login', res.id)
        this.router.navigate(['/dashboard'])
      } else {
        this.message = 'CPF não existe'
      }
      
    })
   // console.log(this.cliente)
  }

}
