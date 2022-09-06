import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './basic-auth/contracts/user';
import { AuthService } from './basic-auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'iron-ui';
  user: User;

  constructor(private authenticationService: AuthService) {
    this.authenticationService.user.subscribe(x => this.user = x);
  }
}
