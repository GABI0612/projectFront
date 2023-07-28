import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';


export interface Pessoa {
  nome: string;
  cidade: string;
  estado: string;
  status: boolean;
}

const ELEMENT_DATA: Pessoa[] = [
  { nome: 'Henrique Medeiros', cidade: "Manaus", estado: 'AM', status: true },
  { nome: 'Ana Silva', cidade: "São Paulo", estado: 'SP', status: false },
  { nome: 'Carlos Ferreira', cidade: "Rio de Janeiro", estado: 'RJ', status: true },
  { nome: 'Maria Oliveira', cidade: "Belo Horizonte", estado: 'MG', status: true },
  { nome: 'Ricardo Santos', cidade: "Porto Alegre", estado: 'RS', status: true },
  { nome: 'Beatriz Souza', cidade: "Salvador", estado: 'BA', status: false },
  { nome: 'Fernanda Lima', cidade: "Curitiba", estado: 'PR', status: true },
  { nome: 'Pedro Alves', cidade: "Fortaleza", estado: 'CE', status: true },
  { nome: 'Mariana Costa', cidade: "Recife", estado: 'PE', status: true },
  { nome: 'Lucas Carvalho', cidade: "Brasília", estado: 'DF', status: true }
];

@Component({
  selector: 'app-pessoa-pesquisa',
  templateUrl: './pessoa-pesquisa.component.html',
  styleUrls: ['./pessoa-pesquisa.component.css']
})
export class PessoaPesquisaComponent {
  dataSourcePessoa = new MatTableDataSource<Pessoa>(ELEMENT_DATA);
  


}
