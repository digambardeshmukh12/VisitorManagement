import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-visiter-list',
  templateUrl: './view-visiter-list.component.html',
  styleUrls: ['./view-visiter-list.component.css']
})
export class ViewVisiterListComponent {
  constructor(
    public dialogRef: MatDialogRef<ViewVisiterListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onClose(): void {
    // You can perform additional actions before closing the dialog if needed
    console.log('Closing dialog with data:', this.data);

    this.dialogRef.close();
  }
}
