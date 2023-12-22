import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateAccountSuccefullyComponent } from '../dialogs/create-account-succefully/create-account-succefully.component';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {
constructor(public dialog: MatDialog){

}
openDialog(): void {
  const dialogRef = this.dialog.open(CreateAccountSuccefullyComponent, {
    width: '600px',
    height: '180px'
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('Dialog closed', result); // Handle dialog close event
  });
}
}
