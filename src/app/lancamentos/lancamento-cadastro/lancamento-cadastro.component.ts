import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


export interface Pessoa {
  codigo: number;
  nome: string;
}

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent {
  public tipos = [
    {label:'Receita', value:"RECEITA"},
    {label:'Despesa', value: "DESPESA"}
  ];
  public categorias = [
    { label: 'Alimentação', value: 1 },
    { label: 'Transporte', value: 2 },
    { label: 'Outros', value: 3 }
  ];

  public pessoas: Pessoa[] = [
    { nome: 'João da Silva', codigo: 1 },
    { nome: 'Sebastião Souza', codigo: 2 },
    { nome: 'Maria Abadia', codigo: 3 }
  ]

  public salvar (form: NgForm){
    console.log(form.value);
  }
}
