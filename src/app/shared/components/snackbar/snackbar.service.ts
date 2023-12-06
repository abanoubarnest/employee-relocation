import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from './snackbar.component';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  duration = 5;
  constructor(public snackBar: MatSnackBar) {}

  openSnackBar(message: string, panelClass: string) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      data: message,
      panelClass: panelClass,
      duration: this.duration * 1000,
      verticalPosition: 'top',
    });
  }
  openSnackBarSuccess(message: string, panelClass?: string) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      data: { message, icon: 'check_circle' },
      panelClass: panelClass ? panelClass : 'mat-snack-bar--success',
      duration: this.duration * 1000,
      verticalPosition: 'top',
    });
  }
  openSnackBarFailure(message: string, panelClass?: string) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      data: { message, icon: 'error' },
      panelClass: 'mat-snack-bar--failure',
      duration: this.duration * 400000000,
      verticalPosition: 'top',
    });
  }
}
