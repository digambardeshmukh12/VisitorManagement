import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-forgot-password-dialog',
  templateUrl: './forgot-password-dialog.component.html',
  styleUrls: ['./forgot-password-dialog.component.css']
})
export class ForgotPasswordDialogComponent {
  constructor(public dialogRef: MatDialogRef<ForgotPasswordDialogComponent>) { }

  /**
   * Close the dialog
   */
  closeDialog(): void {
    this.dialogRef.close();
  }
}