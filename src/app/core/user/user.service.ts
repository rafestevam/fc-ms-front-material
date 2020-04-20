import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

import { TokenService } from '../token/token.service';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

const API_URL = environment.apiUsersUrl;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  private userListSubject: BehaviorSubject<User[]> = new BehaviorSubject<User[]>(null);
  private user: User;

  constructor(
    private tokenService: TokenService,
    private http: HttpClient
  ) { 
    this.tokenService.hasToken() && this.decodeAndNotify();
  }

  decodeAndNotify(){
    //const token = this.tokenService.getToken();
    //const user = jwt_decode(token).user_claims as User;
    //this.userSubject.next(user);
  }

  getUser(){
   this.http.get(API_URL + '/').subscribe({
      next: data => {
        const user = data as User;
        this.userSubject.next(user);
      },
      error: err => console.log(err)
    });
    return this.userSubject.asObservable();
  }

  getUsers(){
   this.http.post(API_URL + '/', {}, {observe: 'response'}).subscribe({
      next: data => {
        const user: User[] = data.body as User[];
        this.userListSubject.next(user);
      },
      error: err => console.log(err)
    });
    return this.userListSubject.asObservable();
  }

  setToken(value: string){
    this.tokenService.setToken(value);
    //this.decodeAndNotify();
  }

  isLogged(){
    return this.tokenService.hasToken();
  }

  logout(){
    this.tokenService.removeToken();
    this.userSubject.next(null);
  }

}
