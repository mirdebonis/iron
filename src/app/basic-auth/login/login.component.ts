import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { User } from '../contracts/user';
import { MessagesService } from 'src/app/messages/services/messages.service';

@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  public user = new User();

  public userName: string;
  public password: string;


  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private messageService: MessagesService,
    private router: Router,
    private authService: AuthService
  ) {
    // redirect to home if already logged in
    if (this.authService.userValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.userName = this.password = '';
  }

  // Login function
  login() {
    if (this.user) {
      const obs = this.authService.login(this.userName, this.password);
      obs.subscribe(
        {
          next: () => {
            this.messageService.success('Welcome ' + this.userName, 'Success!');
            this.router.navigate(['/']);
          },
          // in case of http errors
          error: (error) => {
            console.log(error)
            this.error = error.error.message;
          }
        }
      );
    }
  }
}
