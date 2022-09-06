import { IRememberUser } from "src/app/core/auth/i-remember-user";

export class RememberUser implements IRememberUser {
  public userName: string = '';
  public password: string = '';
  public rememberMe: boolean = true;
}