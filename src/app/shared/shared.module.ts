import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensagemDialogoComponent } from './components/mensagem-dialogo/mensagem-dialogo.component';

import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';



@NgModule({
  declarations: [
    MensagemDialogoComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule
  ],
  exports:[
    MensagemDialogoComponent
  ]
})
export class SharedModule { }
