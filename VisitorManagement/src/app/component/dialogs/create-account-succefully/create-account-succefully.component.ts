import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-account-succefully',
  templateUrl: './create-account-succefully.component.html',
  styleUrls: ['./create-account-succefully.component.css']
})
export class CreateAccountSuccefullyComponent {
  constructor(public dialogRef: MatDialogRef<CreateAccountSuccefullyComponent>) { }

  /**
   * Close the dialog
   */
  closeDialog(): void {
    this.dialogRef.close();
  }
}
