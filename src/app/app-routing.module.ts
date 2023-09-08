import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { PlayListComponent } from './play-list/play-list.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path : '' , component : HomeComponent},
  {path : 'search' , component : SearchComponent},
  {path : 'playList' , component : PlayListComponent},
  {path : 'login' , component : LoginComponent},
  {path : 'signUp' , component : SignUpComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
