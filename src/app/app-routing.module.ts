import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pagesComponents/login/login.component';
import { RegisterComponent } from './pagesComponents/register/register.component';
import { NavbarComponent } from './sharedComponents/navbar/navbar.component';

const routes: Routes = [
  {path:'', component:NavbarComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
