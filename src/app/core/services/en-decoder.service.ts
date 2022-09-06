import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnDecoderService {

  constructor() { }

  encode(psw: string): string {
    return btoa(psw);
  }
  decode(psw: string): string {
    return atob(psw);
  }
}
