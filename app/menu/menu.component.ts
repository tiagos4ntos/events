import { EventService, ISession } from './../events/index';
import { AuthService } from './../user/auth.service';
import { Component } from '@angular/core';

@Component({
    selector: 'menu',
    templateUrl: 'app/menu/menu.component.html',
    styles: [`
        .na.navbar-nav { font-size: 15px; }
        #searchForm { margin-right: 100px; }
        @media (max-width: 1200px) { #searchForm { display: none; }}
        li > a.active { color: #F97924; }
    `]
})
export class MenuComponent {
    searchTerm:string = "";
    foundSessions: ISession[];

    constructor(private authService: AuthService, private eventService:EventService){
        
    }

    searchSessions(searchTerm){
        this.eventService.searchSessions(searchTerm).subscribe(sessions => {
            this.foundSessions = sessions;
        });
    }
}