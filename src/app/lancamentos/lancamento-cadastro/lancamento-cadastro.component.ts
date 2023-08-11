import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Categoria } from 'src/app/shared/model/categoria.model';
import { LancamentoCompleto } from 'src/app/shared/model/lancamento.model';
import { LancamentoService } from '../lancamento.service';
import { SharedService } from 'src/app/shared/shared.service';
import { PessoaService } from 'src/app/pessoas/pessoa.service';
import { ActivatedRoute } from '@angular/router';


export interface Pessoa {
  codigo: number;
  nome: string;
}

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent implements OnInit {
  public tipos = [
    {label: 'Receita', value: "RECEITA"},
    {label: 'Despesa', value: "DESPESA"}
  ];

  public categorias: Categoria[] = [];
  public pessoas: Pessoa[] = [];

  lancamento: LancamentoCompleto = {
    descricao: "",
    dataVencimento: new Date(),
    dataPagamento: null,
    valor: 0,
    observacao: "",
    tipo: 'RECEITA',
    categoria: {nome: ""},
    pessoa: {nome: ""}
  };

  constructor(
    private lancamentoService: LancamentoService,
    private sharedService: SharedService,
    private pessoaService: PessoaService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    const codigoLancamento = this.route.snapshot.params['codigo'];
    if (codigoLancamento) {
      this.carregarLancamento(codigoLancamento);
    }
    this.listarCategorias();
    this.listarPessoas();
  }

  carregarLancamento(codigo: number) {
    this.lancamentoService.pesquisarPorCodigo(codigo).subscribe({
      next: (res)  => {
        this.lancamento = res;
        console.log(res);
        console.log(this.lancamento);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  atualizarLancamento(form: NgForm) {
    this.lancamentoService.atualziar(this.lancamento).subscribe({
      next: (res)  => {
        this.lancamento = res;
        this.sharedService.mensagemSucesso("Lançamento atualzado com sucesso!");
        console.log(res);
      },
      error: (error) => {
        this.sharedService.mensagemErro(`Erro: ${error.error.erros[0]}`);
        console.log(error);
      }
    });
  }



  salvarLancamento(form: NgForm) {
    this.lancamentoService.salvar(this.lancamento).subscribe({
      next: (res)  => {
        this.lancamento = res;
        this.sharedService.mensagemSucesso("Lançamento salvo com sucesso!");
        console.log(res);
      },
      error: (error) => {
        this.sharedService.mensagemErro(`Erro: ${error.error.erros[0]}`);
        console.log(error);
      }
    });
  }

  listarCategorias(){
    this.lancamentoService.listarCategorias().subscribe({
      next: (res)  => {
        this.categorias = res;
        this.categorias.sort((a, b) => a.nome.localeCompare(b.nome));
        console.log(res);
      },
      error: (error) => {
        console.log(error);
      }
  });
  }

  listarPessoas(){
    this.pessoaService.listaTodas(true).subscribe({
      next: (res)  => {
        this.pessoas = res.content;
        this.pessoas.sort((a, b) => a.nome.localeCompare(b.nome));
        console.log(res);
      },
      error: (error) => {
        console.log(error);
      }
  });
  }

  salvar(form: NgForm) {
    if (this.lancamento.codigo) {
      this.atualizarLancamento(form);
    } else {
      this.salvarLancamento(form);
    }
    this.resetForm(form);
  }

  private resetLancamento(){
    this.lancamento = {
      descricao: "",
      dataVencimento: new Date(),
      dataPagamento: null,
      valor: 0,
      observacao: "",
      tipo: 'RECEITA',
      categoria: {nome: ""},
      pessoa: {nome: ""}
    };
  }


  resetForm(form: NgForm){
    this.resetLancamento();
    form.resetForm();
  }

}
