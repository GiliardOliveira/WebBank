import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model'
import { MatTableDataSource } from '@angular/material/table';
import { DataServiceService } from 'src/app/services/data-service.service';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cliente = {} as Cliente

  constructor(private dataService: DataServiceService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
