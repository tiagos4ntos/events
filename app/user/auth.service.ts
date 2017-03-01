import { Observable } from 'rxjs/Rx';
import { IUser } from './user.model';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http'

@Injectable()
export class AuthService {
    currentUser: IUser

    constructor(private http: Http) { }

    loginUser(userName: string, password: string) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        let loginInfo = { username: userName, password: password };

        return this.http.post('/api/login', JSON.stringify(loginInfo), options)
            .do((response: Response) => {
                if(response){
                    this.currentUser = <IUser>response.json().user;
                }
            })
            ._catch(error => {
                return Observable.of(false);
            });
    }

    isAuthenticated() {
        return !!this.currentUser;
    }

    updateCurrentUser(firstName: string, lastName: string) {
        this.currentUser.firstName = firstName
        this.currentUser.lastName = lastName

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        
        return this.http.put(`/api/users/${this.currentUser.id}`, JSON.stringify(this.currentUser), options);
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText)
    }

    checkAuthenticationStatus(){
        return this.http.get('/api/currentIdentity')
        .map((response:any) => {
            if(response._body){
                return response.json();
            } else {
                return {};
            }
        })
        .do(currentUser => {
            if(!!currentUser.userName){
                this.currentUser = currentUser;
            } 
        })
        .subscribe();
    }

    logout(){
        this.currentUser = undefined;
        
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        
        return this.http.post(`/api/logout`, JSON.stringify({}), options);
    }
}