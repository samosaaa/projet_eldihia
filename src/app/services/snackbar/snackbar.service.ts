import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  private readonly durationInSeconds = 2;

  constructor(public snackBar: MatSnackBar) {}

  public openSnackBar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: this.durationInSeconds * 1000,
    });
  }

}
