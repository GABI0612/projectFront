import { Categoria } from "./categoria.model";
import { Pessoa } from "./pessoa.model";

export interface Lancamento {
  codigo?: number;
  descricao: string;
  dataVencimento: Date;
  dataPagamento: Date | null;
  valor: number;
  tipo: string;
  pessoa: string;
}

export interface LancamentoCompleto {
  codigo?: number;
  descricao: string;
  dataVencimento: Date;
  dataPagamento: Date | null;
  valor: number;
  observacao: string,
  tipo: string;
  pessoa: Pessoa;
  categoria: Categoria;
}


