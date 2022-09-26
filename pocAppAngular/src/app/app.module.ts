import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { AvaliacaoComponent } from './avaliacao/avaliacao.component';
import { DietaComponent } from './dieta/dieta.component';
import { RodapeComponent } from './rodape/rodape.component';
import { LoginComponent } from './login/login.component';
import { AgendamentoComponent } from './agendamento/agendamento.component';

const appRoutes: Routes = [
  { path: 'clientes', component: ClientesComponent },
  { path: 'avaliacoes', component: AvaliacaoComponent },
  { path: 'dietas', component: DietaComponent },
  { path: 'rodape', component: RodapeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'agendamento', component: AgendamentoComponent },
  // { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    AvaliacaoComponent,
    DietaComponent,
    RodapeComponent,
    LoginComponent,
    AgendamentoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    MatSidenavModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
