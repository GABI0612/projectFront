import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private snackBar: MatSnackBar) { }

  public mensagemSucesso(mensagem: string) {
    this.snackBar.open(mensagem, "X", {
      horizontalPosition: 'right',
      verticalPosition: 'top',
      duration: 5 * 1000,
      panelClass: ['success-snackbar']
    });
  }

  public mensagemErro(mensagem: string) {
    this.snackBar.open(mensagem, "X", {
      horizontalPosition: 'right',
      verticalPosition: 'top',
      duration: 5 * 1000,
      panelClass: ['error-snackbar'],
    });
  }
}
