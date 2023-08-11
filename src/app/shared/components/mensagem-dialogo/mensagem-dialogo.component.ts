import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-mensagem-dialogo',
  templateUrl: './mensagem-dialogo.component.html',
  styleUrls: ['./mensagem-dialogo.component.css']
})
export class MensagemDialogoComponent {

  constructor(
    public dialogRef: MatDialogRef<MensagemDialogoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {mensagem: string}) {}

    public confirmar(): void {
      this.dialogRef.close("confirmado");
    }

    public cancelar(): void {
      this.dialogRef.close("cancelado");
    }

}
