import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicAuthModule } from './basic-auth/basic-auth.module';
import { AuthInterceptor } from './basic-auth/interceptors/auth-interceptor';
import { ErrorInterceptor } from './basic-auth/interceptors/error-interceptor';
import { FakeBackendInterceptor } from './basic-auth/interceptors/fake-backend-interceptor';
import { AuthGuard } from './basic-auth/services/auth-guard.service';
import { AuthService } from './basic-auth/services/auth.service';
import { HttpAuthService } from './basic-auth/services/http-auth.service';
import { IAuthGuard } from './core/auth/i-auth-guard';
import { IAuthService } from './core/auth/i-auth.service';
import { CoreModule } from './core/core.module';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { MemoryCacheService } from './core/services/memory-cache.service';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { MessagesModule } from './messages/messages.module';
import { SharedModule } from './shared/shared.module';
import { UsersModule } from './users/users.module';
import { HomeComponent } from './home/home.component';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    NotFoundComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    UsersModule,
    DashboardModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CoreModule,
    MessagesModule,
    BasicAuthModule,
    AppRoutingModule
  ],
  providers: [
    HttpAuthService, AuthService, AuthGuard, MemoryCacheService,
    { provide: IAuthGuard, useClass: AuthGuard },
    { provide: IAuthService, useClass: AuthService },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: FakeBackendInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
