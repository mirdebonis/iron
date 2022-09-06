import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MemoryCacheService {

  appName = 'groups';

  authenticationKey = this.appName + '-' + environment.version + '-authentication';
  rememberUserKey = this.appName + '-' + environment.version + '-remember-user';

  constructor(private router: Router) { }

  save(obj: any, key: string = null) {

    if (!key) {
      localStorage.setItem(this.router.url, obj);
    } else {
      localStorage.setItem(key, obj);
    }
  }

  delete(key: string) {
    return localStorage.removeItem(key);
  }

  saveObject(key: any = null, obj: any) {

    if (!key) {
      localStorage.setItem(this.router.url, JSON.stringify(obj));
    } else {
      localStorage.setItem(key, JSON.stringify(obj));
    }
  }

  get(key: string) {
    return localStorage.getItem(key);
  }

  getObject(key: string): any {
    var item = localStorage.getItem(key);
    if (item) {
      return JSON.parse(item);
    }
    return null;
  }

  clearAll() {
    // recupero solo le chiavi di dell'App Catalog
    let keys = Object.keys(localStorage).filter(f => f.startsWith(this.appName));

    keys.forEach(k => {
      if (!k.includes(environment.version) && k !== this.authenticationKey && k !== this.rememberUserKey) {
        localStorage.removeItem(k);
      }
    });
    keys = Object.keys(localStorage);
  }
}
