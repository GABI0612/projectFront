import { Component, AfterViewInit, ViewChild, Input } from '@angular/core';

import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-lancamento-grid',
  templateUrl: './lancamento-grid.component.html',
  styleUrls: ['./lancamento-grid.component.css']
})
export class LancamentoGridComponent implements AfterViewInit{
  displayedColumns: string[] = ['pessoa', 'descricao', 'vencimento', 'pagamento', 'valor', 'acao'];
  @Input() dataSource: any;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;


  ngAfterViewInit(): void {
    this.dataSource!.paginator = this.paginator;
  }

}
