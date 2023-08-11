import { LancamentoService } from './../lancamento.service';
import { Component, OnInit } from '@angular/core';

import {MatTableDataSource} from '@angular/material/table';
import { Lancamento } from 'src/app/shared/model/lancamento.model';
import { LancamentoFiltro } from 'src/app/shared/model/lancamentoFiltro.model';
import { ResponsePageable } from 'src/app/shared/model/responsePageable.model';

@Component({
  selector: 'app-lancamento-pesquisa',
  templateUrl: './lancamento-pesquisa.component.html',
  styleUrls: ['./lancamento-pesquisa.component.css']
})
export class LancamentoPesquisaComponent implements OnInit {
  lancamentoDataSource = new MatTableDataSource<Lancamento>();
  responsePageable!: ResponsePageable;
  date = new Date();
  filtro: LancamentoFiltro = {
    descricao: "",
    dataVencimentoInicio: new Date(this.date.getFullYear(),
    0,1),
    dataVencimentoFim: new Date(this.date.getFullYear(),
    12,0),
    pagina: 0,
    itensPorPagina: 5
  };

  constructor(private lancamentoService: LancamentoService) { }
  ngOnInit(): void {
    this.pesquisarLancamentos();
  }

  public pesquisarLancamentos() {
    console.log(this.filtro);
    this.lancamentoService.pesquisar(this.filtro).subscribe(
      {
      next: (res) => {
        this.lancamentoDataSource.data = res.content;
        this.responsePageable = res;
        console.log(res.content);
      },
      error: (error) => console.log(error)
  });
  }

}
