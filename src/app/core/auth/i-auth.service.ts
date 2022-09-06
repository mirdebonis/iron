import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IRememberUser } from "./i-remember-user";
import { IUser } from "./i-user";

@Injectable()
export abstract class IAuthService {

  loggedIn: boolean;

  /**
   *
   */
  abstract isLoggedIn(): boolean;

  /**
   *
   */
  abstract getUser(): IUser;

  /**
   *
   */
  abstract hasPermission(permission: string): boolean;

  /**
   *
   */
  abstract getUserAuth(): IUser;

  /**
   *
   */
  abstract getRememberUser(): IRememberUser;

  /**
   *
   * @param userName
   * @param password
   * @param rememberMe
   */
  abstract logIn(userName: string, password: string, rememberMe: boolean): Observable<IUser>;

  /**
   *
   */
  abstract login(): void;
  /**
  *
  */
  abstract logout(): void;

  /**
   *
   */
  abstract tryToRestore(): void;

  /**
   *
   * @param url
   */
  abstract setRedirectUrl(url: string);

  /**
   *
   */
  abstract getRedirectUrl(): string;
}
