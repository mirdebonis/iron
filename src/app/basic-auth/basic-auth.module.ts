import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { HttpAuthService } from './services/http-auth.service';
import { MemoryCacheService } from '../core/services/memory-cache.service';
import { RouterModule } from '@angular/router';
import { LoaderModule } from '../loader/loader.module';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IAuthService } from '../core/auth/i-auth.service';
import { IAuthGuard } from '../core/auth/i-auth-guard';
import { AuthInterceptor } from './interceptors/auth-interceptor';
import { FakeBackendInterceptor } from './interceptors/fake-backend-interceptor';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ LoginComponent ],
  imports: [
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([{ path: 'login', component: LoginComponent }])
  ],
  providers: [
    HttpAuthService, AuthService, AuthGuard, MemoryCacheService,
    { provide: IAuthGuard, useClass: AuthGuard },
    { provide: IAuthService, useClass: AuthService },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: FakeBackendInterceptor, multi: true },


  ],
})
export class BasicAuthModule {
  /**
   *
   */
  constructor() {
    console.log("using basic auth module");
  }
 }
