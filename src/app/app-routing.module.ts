import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './basic-auth/login/login.component';
import { IAuthGuard } from './core/auth/i-auth-guard';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  // home page
  { path: 'home', component: HomeComponent, canActivate: [IAuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'notFound', component: NotFoundComponent},
  // default path
  { path: '', component: HomeComponent, canActivate: [IAuthGuard]},
  // Otherwise, redirect to default
  { path: '**', redirectTo: 'notFound', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
