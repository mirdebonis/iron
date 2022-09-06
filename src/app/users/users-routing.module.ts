import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IAuthGuard } from "../core/auth/i-auth-guard";
import { UsersComponent } from "./users/users.component";

const routes: Routes = [
  { path: 'users', component: UsersComponent, canActivate: [IAuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
