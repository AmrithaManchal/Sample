import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  login(username: string, password: string) {
    if (username === 'Amit' && password === '1234') {
      return 200;
    }
    else {
      return 403;
    }
  }
  logout() {

    this.router.navigate(['login'])
  }
}
