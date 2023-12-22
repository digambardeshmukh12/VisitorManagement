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
import {MatIconModule} from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog'; // Import MatDialogModule

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateAccountComponent } from './component/create-account/create-account.component';
import { CreateAccountSuccefullyComponent } from './component/dialogs/create-account-succefully/create-account-succefully.component';
@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    CreateAccountComponent,
    CreateAccountSuccefullyComponent
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
    MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
