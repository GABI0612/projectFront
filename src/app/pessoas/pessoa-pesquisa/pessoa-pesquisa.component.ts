import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';



import { PessoaFiltro } from 'src/app/shared/model/pessoaFiltro.model';
import { ResponsePageable } from 'src/app/shared/model/responsePageable.model';
import { PessoaService } from '../pessoa.service';
import { Pessoa } from 'src/app/shared/model/pessoa.model';


@Component({
  selector: 'app-pessoa-pesquisa',
  templateUrl: './pessoa-pesquisa.component.html',
  styleUrls: ['./pessoa-pesquisa.component.css']
})
export class PessoaPesquisaComponent implements OnInit {
  PessoaDataSource = new MatTableDataSource<Pessoa>();
  responsePageable!: ResponsePageable;
  date = new Date();
  filtro: PessoaFiltro = {
    nome: "",
    pagina: 0,
    itensPorPagina: 5
  };

  constructor(private pessoaService: PessoaService) { }
  ngOnInit(): void {
    this.pesquisarPessoas();
  }

  public pesquisarPessoas() {
    console.log(this.filtro);
    this.pessoaService.pesquisar(this.filtro).subscribe(
      {
      next: (res) => {
        this.PessoaDataSource.data = res.content;
        this.responsePageable = res;
        console.log(res.content);
      },
      error: (error) => console.log(error)
  });
  }

}
