import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface dieta {
  nomeCliente: string;
  dieta: string;
  data: string;
  detalhes: string;
}

const ELEMENT_DATA: dieta[] = [
  { nomeCliente: 'Cliente 1', dieta: 'Exemplo plano 1', data: '10/10/2022', detalhes: '' },
  { nomeCliente: 'Cliente 2', dieta: 'Exemplo plano 1', data: '10/10/2022', detalhes: '' },
  { nomeCliente: 'Cliente 3', dieta: 'Exemplo plano 1', data: '10/10/2022', detalhes: '' },
  { nomeCliente: 'Cliente 4', dieta: 'Exemplo plano 1', data: '10/10/2022', detalhes: '' },

];


@Component({
  selector: 'app-dieta',
  templateUrl: './dieta.component.html',
  styleUrls: ['./dieta.component.css']
})

export class DietaComponent {
  displayedColumns: string[] = ['nomeCliente', 'dieta', 'data', 'detalhes'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
