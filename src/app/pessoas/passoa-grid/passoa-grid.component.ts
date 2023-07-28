import { Component, AfterViewInit, ViewChild, Input } from '@angular/core';

import {MatPaginator} from '@angular/material/paginator';
@Component({
  selector: 'app-passoa-grid',
  templateUrl: './passoa-grid.component.html',
  styleUrls: ['./passoa-grid.component.css']
})
export class PassoaGridComponent implements AfterViewInit{
  displayedColumns: string[] = ['pessoa', 'cidade', 'estado', 'status', 'acao'];
  @Input() dataSource: any;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;


  ngAfterViewInit(): void {
    this.dataSource!.paginator = this.paginator;
  }

}
