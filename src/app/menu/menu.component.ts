import { Component, OnInit } from '@angular/core';
import { AuthService } from '../basic-auth/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  loggedIn: boolean;
  currentUser: any;
  firstName: string;
  lastName: string;
  navigationSubscription: any;
  appName = 'Mappings';
  baseAppName = 'External Services - ';

  // private welcomeUrl = environment.welcomeAddress;
  constructor(private authService: AuthService) {
    this.currentUser = this.authService.userValue;
  }

  ngOnInit() { }

  logout() {
    this.authService.logout();
  }
}
