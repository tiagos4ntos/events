import { AuthService } from './user/auth.service';

import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'events-app',
    template: `
    <menu></menu>
    <router-outlet></router-outlet>`
})
export class EventsAppComponent implements OnInit {
    constructor(private authService:AuthService){

    }

    ngOnInit(){
        this.authService.checkAuthenticationStatus();
    }
}