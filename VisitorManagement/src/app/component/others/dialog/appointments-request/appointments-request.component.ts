import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-appointments-request',
  templateUrl: './appointments-request.component.html',
  styleUrls: ['./appointments-request.component.css']
})
export class AppointmentsRequestComponent {
  constructor(
    public dialogRef: MatDialogRef<AppointmentsRequestComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onClose(): void {
    // You can perform additional actions before closing the dialog if needed
    console.log('Closing dialog with data:', this.data);

    this.dialogRef.close();
  }
}
