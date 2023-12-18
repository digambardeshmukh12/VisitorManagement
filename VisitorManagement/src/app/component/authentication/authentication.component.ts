import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent {

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

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
}
