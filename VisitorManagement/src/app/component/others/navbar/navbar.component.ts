import { Component } from '@angular/core';
import { AppointmentsRequestComponent } from '../dialog/appointments-request/appointments-request.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
 
  constructor(private dialog: MatDialog){

  }
  checkRequest(){
    const dialogRef = this.dialog.open(AppointmentsRequestComponent , {
      width: '700px',
      height: '500px',
      data: {
        title: 'Show Visiters',
        message: 'This is a sample message.',
      },
    });

    dialogRef.afterClosed().subscribe(result => {
       console.log('Dialog closed with result:', result);
    });
  }

}
