/**
 * @author Amit Singh
 */

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject, from, Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private auth: AngularFireAuth) {}

  login(params: LogIn) {
    return this.auth.signInWithEmailAndPassword(params.email, params.password);
  }

  logout(): Observable<void> {
    return from(this.auth.signOut());
  }

  getLoggedIn(): Observable<boolean> {
    return this.isLoggedIn$.asObservable();
  }

  setLoggedIn(value: boolean) {
    this.isLoggedIn$.next(value);
  }
}

type LogIn = {
  email: string;
  password: string;
};
