import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IAuthGuard } from "../core/auth/i-auth-guard";
import { DashboardComponent } from "./dashboard/dashboard.component";

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [IAuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
