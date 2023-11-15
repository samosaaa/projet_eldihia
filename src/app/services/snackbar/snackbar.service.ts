import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  private readonly defaultDurationInSeconds = 5;

  constructor(public snackBar: MatSnackBar) {}

  public  openSnackBar(message: string, durationInSeconds?: number): void {
    const duration = (durationInSeconds || this.defaultDurationInSeconds) * 1000;
    this.snackBar.open(message, 'Close', { duration });
  }
}
