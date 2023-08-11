import { Endereco } from "./endereco.model";

export interface Pessoa {
  codigo?: number;
  nome: string;
  cidade?: string;
  estado?: string;
  ativo?: boolean;
}


export interface PessoaCompleta {
  codigo?: number;
  nome: string;
  ativo: boolean;
  endereco: Endereco;
}
