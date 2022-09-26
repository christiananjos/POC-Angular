import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pocAppAngular';
  opened = false;

  displayCliente = false;
  displayAvaliacoes = false;
  displayDietas = false;
  displayAgendamentos = false;
  displayRodape = false;

  AbrirClientes() {
   this.displayCliente = true;

    this.displayAvaliacoes = false;
    this.displayDietas = false;
    this.displayAgendamentos = false;
    this.displayRodape =false;

    this.fecharMenu();
  }

  AbrirAvaliacoes() {
    this.displayAvaliacoes = true;

    this.displayCliente = false;
    this.displayDietas = false;
    this.displayAgendamentos = false;
    this.displayRodape =false;

    this.fecharMenu();
  }

  AbrirDietas() {
    this.displayDietas = true;

    this.displayCliente = false;
    this.displayAvaliacoes = false;
    this.displayAgendamentos = false;
    this.displayRodape =false;

    this.fecharMenu();
  }
  AbrirAgendamentos(){
    this.displayAgendamentos = true;

    this.displayDietas = false;
    this.displayCliente = false;
    this.displayAvaliacoes = false;
    this.displayRodape =false;

    this.fecharMenu();

  }

  fecharMenu() {
    this.opened = !this.opened
  }
}
