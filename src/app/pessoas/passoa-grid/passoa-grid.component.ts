import { Component, AfterViewInit, ViewChild, Input } from '@angular/core';

import { ResponsePageable } from 'src/app/shared/model/responsePageable.model';
import { SharedService } from 'src/app/shared/shared.service';
import { MensagemDialogoComponent } from 'src/app/shared/components/mensagem-dialogo/mensagem-dialogo.component';

import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import {MatPaginator, PageEvent} from '@angular/material/paginator';

import { PessoaService } from '../pessoa.service';
import { Pessoa } from 'src/app/shared/model/pessoa.model';
import { PessoaFiltro } from 'src/app/shared/model/pessoaFiltro.model';

@Component({
  selector: 'app-passoa-grid',
  templateUrl: './passoa-grid.component.html',
  styleUrls: ['./passoa-grid.component.css']
})
export class PassoaGridComponent implements AfterViewInit{
  displayedColumns: string[] = ['nome', 'cidade', 'estado', 'status', 'acao'];
  @Input() dataSource: any;
  @Input() responsePageable!: ResponsePageable;
  @Input() filtro!: PessoaFiltro;

  constructor(
    private pessoaService: PessoaService,
    private sharedService: SharedService,
    public dialog: MatDialog
  ){}

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit(): void {
    this.dataSource!.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  public confirmarExclusao(pessoa: Pessoa, codigo: number): void {
    const dialogRef =this.dialog.open(MensagemDialogoComponent, {
      width: '600px',
      data: {
        mensagem: `Tem certeza que deseja excluír está pessoa de ${pessoa.nome}`
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result==="confirmado"){
        this.excluir(codigo);
      }
    });
   }


  excluir(codigo: number) {
    console.log(codigo)
    this.pessoaService.excluir(codigo).subscribe({
      next: (res)  => {
        this.sharedService.mensagemSucesso("Pessoa excluída com sucesso!");
        this.pesquisa();
      },
      error: (error) => {
        this.sharedService.mensagemErro("Erro ao excluir pessoa!");
        console.log(error);
      }
    });
  }



  private pesquisa(){
    this.pessoaService.pesquisar(this.filtro).subscribe({
      next: (res)  => {
        this.dataSource.data = res.content;
        this.responsePageable = res;
        console.log(res);
      },
      error: (error) => {
        console.log(error);
      }
  });
  }

  handlePageEvent(event: PageEvent) {
    this.filtro.pagina=event.pageIndex;
    this.filtro.itensPorPagina=event.pageSize;
    this.pesquisa();
  }

}
