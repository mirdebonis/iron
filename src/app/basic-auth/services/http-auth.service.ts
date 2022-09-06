import { Injectable } from '@angular/core';
import { HttpClientBase } from '../../core/services/http-client-base';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../contracts/user';
import { MessagesService } from 'src/app/messages/services/messages.service';

@Injectable({
  providedIn: 'root'
})
export class HttpAuthService extends HttpClientBase {
  constructor(http: HttpClient, messagesService: MessagesService) {
    super(http, environment.identitiesAddress, messagesService, true);
  }

  /**
   * execute login
   * @param user
   * @param pwd
   */
  logIn(user: string, pwd: string): Observable<User> {
    const request = {
      userName: user,
      password: pwd
    };

    const req = this.invoke<User>('POST', '/users', request);
    return req;
  }
}
