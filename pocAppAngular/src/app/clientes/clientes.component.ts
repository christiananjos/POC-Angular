import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface clientes {
  nome: string;
  telefone: string;
  email: string;
  detalhes: string;
}

const ELEMENT_DATA: clientes[] = [
  { nome: 'Cliente 1', telefone: '11999999999', email: 'teste@teste.com.br', detalhes: '' },
  { nome: 'Cliente 2', telefone: '11999999999', email: 'teste@teste.com.br', detalhes: '' },
  { nome: 'Cliente 3', telefone: '11999999999', email: 'teste@teste.com.br', detalhes: '' },
  { nome: 'Cliente 4', telefone: '11999999999', email: 'teste@teste.com.br', detalhes: '' },
];

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})


export class ClientesComponent {
  displayedColumns: string[] = ['nome', 'telefone', 'email', 'detalhes'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
