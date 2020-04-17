import { Injectable } from '@angular/core';

const KEY = 'fcToken';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  getToken(){
    return window.localStorage.getItem(KEY);
  }

  setToken(value: string){
    window.localStorage.setItem(KEY, value);
  }

  removeToken(){
    window.localStorage.removeItem(KEY);
  }

  hasToken(){
    return !!this.getToken();
  }

}
