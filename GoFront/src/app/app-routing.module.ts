import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SearchComponent } from './search/search.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { MainComponent } from './main/main.component';
import { AccountComponent } from './account/account.component';
import { LsignupComponent } from './lsignup/lsignup.component';
import { LsigninComponent } from './lsignin/lsignin.component';


const routes: Routes = [
  {path : "Main", component : MainComponent},
  {path : "Home", component : HomeComponent},
  {path : "Login", component : SigninComponent},
  {path : "Search", component : SearchComponent},
  {path : "Signup", component : SignupComponent},
  {path : "Profile", component : ProfileComponent},
  {path : "MyAccount", component : AccountComponent},
  {path:"lregister", component: LsignupComponent},
  {path:"lsignin", component: LsigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
