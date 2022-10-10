import { Component} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface avaliacoes {
  nomeCliente: string;
  dieta: string;
  data: string;
  detalhes: string;
}

const ELEMENT_DATA: avaliacoes[] = [
  { nomeCliente: 'Cliente 1', dieta: 'Exemplo plano 1', data: '10/10/2022', detalhes: '' },
  { nomeCliente: 'Cliente 2', dieta: 'Exemplo plano 1', data: '10/10/2022', detalhes: '' },
  { nomeCliente: 'Cliente 3', dieta: 'Exemplo plano 1', data: '10/10/2022', detalhes: '' },
  { nomeCliente: 'Cliente 4', dieta: 'Exemplo plano 1', data: '10/10/2022', detalhes: '' },
  
];


@Component({
  selector: 'app-avaliacao',
  templateUrl: './avaliacao.component.html',
  styleUrls: ['./avaliacao.component.css']
})
export class AvaliacaoComponent {
  displayedColumns: string[] = ['nomeCliente', 'dieta', 'data', 'detalhes'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
