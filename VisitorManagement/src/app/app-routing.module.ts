import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './component/authentication/authentication.component';
import { CreateAccountComponent } from './component/create-account/create-account.component';

const routes: Routes = [
  {path: "",component : AuthenticationComponent},
  { path: 'create-account', component: CreateAccountComponent }, // Define the route for create account page


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
