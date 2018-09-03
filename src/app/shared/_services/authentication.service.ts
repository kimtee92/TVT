import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Globals } from '../globals';
@Injectable()
export class AuthenticationService {
    private api: string;
    constructor(private http: HttpClient,
                private globals: Globals) {
                    this.api = globals.api;
  }

    login(username: string, password: string) {
        console.log(this.api + `/drivers/authenticate`, { username: username, password: password });
        return this.http.post<any>(this.api + `/drivers/authenticate`, { username: username, password: password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    console.log(JSON.stringify(user));
                    sessionStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        sessionStorage.removeItem('currentUser');
    }

}