import { Component } from '@angular/core';


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

}
