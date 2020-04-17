import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

import { AuthData } from './auth-data.model';
import { Token } from '../token/token.model';
import { UserService } from '../user/user.service';

const API_URL = environment.apiUsersUrl

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { }

  login(authData: AuthData) {
    return this.http.post(
      API_URL + '/signin', {
        username: authData.username,
        password: authData.password
      },
      {observe: 'response'}
    ).pipe(tap( res => {
      const resToken = res.body as Token;
      this.userService.setToken(resToken.access_token);
      console.log(resToken);
    }));
  }

}
