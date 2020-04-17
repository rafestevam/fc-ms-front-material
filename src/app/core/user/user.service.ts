import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

import { TokenService } from '../token/token.service';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<User>(null);

  constructor(private tokenService: TokenService) { 
    this.tokenService.hasToken() && this.decodeAndNotify();
  }

  decodeAndNotify(){
    const token = this.tokenService.getToken();
    const user = jwt_decode(token).user_claims as User;
    this.userSubject.next(user);
  }

  getUser(){
    return this.userSubject.asObservable();
  }

  setToken(value: string){
    this.tokenService.setToken(value);
    this.decodeAndNotify();
  }

  isLogged(){
    return this.tokenService.hasToken();
  }

  logout(){
    this.tokenService.removeToken();
    this.userSubject.next(null);
  }

}
