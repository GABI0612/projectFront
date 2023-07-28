import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LancamentoPesquisaComponent } from './lancamentos/lancamento-pesquisa/lancamento-pesquisa.component';
import { LancamentoCadastroComponent } from './lancamentos/lancamento-cadastro/lancamento-cadastro.component';
import { PessoaPesquisaComponent } from './pessoas/pessoa-pesquisa/pessoa-pesquisa.component';
import { PessoaCadastroComponent } from './pessoas/pessoa-cadastro/pessoa-cadastro.component';

const routes: Routes = [
  {path: "", component: LancamentoPesquisaComponent},
  {path: "lancamento/novo", component: LancamentoCadastroComponent},
  {path: "pessoa", component: PessoaPesquisaComponent},
  {path: "pessoa/novo", component: PessoaCadastroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
