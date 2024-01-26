import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ForgotPasswordDialogComponent } from '../dialogs/forgot-password-dialog/forgot-password-dialog.component';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent {

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder , private router: Router,public dialog: MatDialog) {}

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  // Add a function to handle form submission
  onSubmit() {
    if (this.loginForm.valid) {
      // Perform actions when the form is submitted
      console.log('Form submitted!', this.loginForm.value);
    } else {
      // Mark fields as touched to trigger error messages
      this.loginForm.markAllAsTouched();
    }
  }

 
  /**
   * Method to navigate to create account page
   */
  navigateToCreateAccount(): void {
    this.router.navigate(['/create-account']); // Navigate to create account page
  }

  openForgotPasswordDialog(): void {
    const dialogRef = this.dialog.open(ForgotPasswordDialogComponent, {
      width: '600px',
      height: '260px'
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed', result); // Handle dialog close event
    });
  }

  navigateToHome(): void {
    this.router.navigate(['/home']); // Navigate to create account page
  }

}
