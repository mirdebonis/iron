import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, RouterStateSnapshot } from "@angular/router";

@Injectable()
export abstract class IAuthGuard implements CanActivate, CanActivateChild, CanLoad {

  abstract canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean;

  abstract canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean;

  abstract canLoad(route: Route): boolean;
}
