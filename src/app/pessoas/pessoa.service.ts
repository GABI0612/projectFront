


import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponsePageable } from '../shared/model/responsePageable.model';
import { PessoaFiltro } from '../shared/model/pessoaFiltro.model';

import { Pessoa, PessoaCompleta } from '../shared/model/pessoa.model';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  private pessoaUrl = "http://localhost:8080/pessoas"


  constructor(private http: HttpClient) { }

  public listaTodas(ativo?: boolean): Observable<ResponsePageable> {
    let auth_token = "YWRtaW5AdWVhLmVkdS5icjphZG1pbg==";
    const headers = new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${auth_token}`
      });

    let params = new HttpParams();
    if(ativo===true) {
      params = params.set('ativo', true);
    }
    if(ativo===false) {
      params = params.set('ativo', false);
    }

    return this.http.get<ResponsePageable>(`${this.pessoaUrl}`, {headers, params}).pipe(
      res => res,
      error => error
    );
  }


  public salvar(pessoa: PessoaCompleta): Observable<PessoaCompleta> {
    let auth_token = "YWRtaW5AdWVhLmVkdS5icjphZG1pbg==";
    const headers = new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${auth_token}`
      });

    return this.http.post<PessoaCompleta>(`${this.pessoaUrl}`, pessoa,{headers}).pipe(
      res => res,
      error => error
    );
  }

  public atualziar(pessoa: PessoaCompleta): Observable<PessoaCompleta> {
    let auth_token = "YWRtaW5AdWVhLmVkdS5icjphZG1pbg==";
    const headers = new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${auth_token}`
      });

    return this.http.put<PessoaCompleta>(`${this.pessoaUrl}/${pessoa.codigo}`, pessoa,{headers}).pipe(
      res => res,
      error => error
    );
  }



  public pesquisarPorCodigo(codigo: number): Observable<PessoaCompleta> {
    let auth_token = "YWRtaW5AdWVhLmVkdS5icjphZG1pbg==";
    const headers = new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${auth_token}`
      });

    return this.http.get<PessoaCompleta>(`${this.pessoaUrl}/${codigo}`, {headers}).pipe(
      res => res,
      error => error
    );
  }


  public excluir(codigo: number): Observable<Pessoa> {
    let auth_token = "YWRtaW5AdWVhLmVkdS5icjphZG1pbg==";
    const headers = new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${auth_token}`
      });

    return this.http.delete<Pessoa>(`${this.pessoaUrl}/${codigo}`, {headers}).pipe(
      res => res,
      error => error
    );
  }


  public pesquisar(filtro: PessoaFiltro): Observable<ResponsePageable> {
    let auth_token = "YWRtaW5AdWVhLmVkdS5icjphZG1pbg==";
    const headers = new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${auth_token}`
      }
    );
    let params = new HttpParams();

    params = params.set('page', filtro.pagina);
    params = params.set('size', filtro.itensPorPagina);

    if(filtro.nome) {
      params = params.set('nome', filtro.nome);
    }


    return this.http.get<ResponsePageable>(`${this.pessoaUrl}`,{headers: headers, params: params})
    .pipe(
      res => res,
      error=> error
    );
  }



}

