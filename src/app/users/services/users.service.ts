import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/basic-auth/contracts/user';
import { HttpClientBase } from 'src/app/core/services/http-client-base';
import { MessagesService } from 'src/app/messages/services/messages.service';
import { environment } from 'src/environments/environment';
import { UserContract } from '../contracts/user-contract';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends HttpClientBase{
  constructor(private http: HttpClient, messagesService: MessagesService) {
    super(http, environment.mockAddress, messagesService);
  }

  getAll() {
    return this.http.get<User[]>(`${environment.identitiesAddress}/users`);
  }

  fetchUsers(): Observable<UserContract[]> {
    return this.invoke<UserContract[]>('GET', '/users', null);
  }

  deleteUser(id: string): Observable<UserContract> {
    return this.invoke<UserContract>('DELETE', '/users/' + id, null);
  }
}
