import { Component } from '@angular/core';

import {MatTableDataSource} from '@angular/material/table';


export interface Lancamento {
  pessoa: string;
  descricao: string;
  tipo: string;
  vencimento: Date;
  pagamento: Date | null;
  valor: number;
}

const ELEMENT_DATA: Lancamento[] = [
  { pessoa: 'Henrique Medeiros', descricao: "Viagem a Bahamas", tipo: 'RECEITA', vencimento: new Date(2023, 9, 6), pagamento: new Date(2023, 9, 10), valor: 500.00 },
  { pessoa: 'Ana Silva', descricao: "Curso de fotografia", tipo: 'RECEITA',vencimento: new Date(2023, 8, 18), pagamento: null, valor: 250.00 },
  { pessoa: 'Carlos Ferreira', descricao: "Aluguel do apartamento", tipo: 'DESPESA', vencimento: new Date(2023, 7, 28), pagamento: null, valor: 1200.00 },
  { pessoa: 'Maria Oliveira', descricao: "Parcela do carro", tipo: 'RECEITA', vencimento: new Date(2023, 8, 10), pagamento: null, valor: 350.00 },
  { pessoa: 'Ricardo Santos', descricao: "Compra de eletrônicos", tipo: 'DESPESA',vencimento: new Date(2023, 7, 21), pagamento: null, valor: 800.00 },
  { pessoa: 'Beatriz Souza', descricao: "Mensalidade da academia", tipo: 'DESPESA',vencimento: new Date(2023, 8, 3), pagamento: null, valor: 120.00 },
  { pessoa: 'Fernanda Lima', descricao: "Roupas e acessórios", tipo: 'DESPESA',vencimento: new Date(2023, 7, 25), pagamento: null, valor: 180.00 },
  { pessoa: 'Pedro Alves', descricao: "Conta de luz", tipo: 'DESPESA',vencimento: new Date(2023, 8, 8), pagamento: null, valor: 90.00 },
  { pessoa: 'Mariana Costa', descricao: "Venda de livros", tipo: 'RECEITA',vencimento: new Date(2023, 8, 14), pagamento: null, valor: 60.00 },
  { pessoa: 'Lucas Carvalho', descricao: "Jantar em restaurante", tipo: 'DESPESA',vencimento: new Date(2023, 7, 30), pagamento: null, valor: 150.00 }
];

@Component({
  selector: 'app-lancamento-pesquisa',
  templateUrl: './lancamento-pesquisa.component.html',
  styleUrls: ['./lancamento-pesquisa.component.css']
})
export class LancamentoPesquisaComponent {
  listaLancamento = new MatTableDataSource<Lancamento>(ELEMENT_DATA);

}
