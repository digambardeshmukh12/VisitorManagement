import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './component/authentication/authentication.component';
import { MatButtonModule } from '@Angular/material/button';
import { MatBottomSheetModule } from '@Angular/material/bottom-sheet';
import { MatCardModule }  from '@Angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog'; // Import MatDialogModule
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateAccountComponent } from './component/create-account/create-account.component';
import { CreateAccountSuccefullyComponent } from './component/dialogs/create-account-succefully/create-account-succefully.component';
import { ForgotPasswordDialogComponent } from './component/dialogs/forgot-password-dialog/forgot-password-dialog.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { NavbarComponent } from './component/others/navbar/navbar.component';
import { ViewVisiterListComponent } from './component/others/dialog/view-visiter-list/view-visiter-list.component';
import { AppointmentsRequestComponent } from './component/others/dialog/appointments-request/appointments-request.component';
@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    CreateAccountComponent,
    CreateAccountSuccefullyComponent,
    ForgotPasswordDialogComponent,
    HomepageComponent,
    NavbarComponent,
    ViewVisiterListComponent,
    AppointmentsRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatBottomSheetModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatMenuModule
     

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
