import { IEvent, ISession } from './../shared/event-model';
import { EventService } from './../shared/eventServices';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'

@Component({
    templateUrl: 'app/events/event-details/event-details.component.html',
    styles: [`
        .container { padding-right: 20px; padding-left: 20px; }
        .event-image { height: 100px; }
        a { cursor: pointer }
    `]

})
export class EventDetailsComponent implements OnInit {
    event: IEvent
    addMode: boolean
    filterBy: string = 'all';

    constructor(private eventService: EventService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.data.forEach((data) => {
            this.event = data['event']
            this.addMode = false;        
    });
}

addSession(){
    this.addMode = true
}

saveSession(session:ISession){ 
    const lastSessionId = Math.max.apply(null, this.event.sessions.map(s => s.id))
    session.id = lastSessionId + 1
    this.event.sessions.push(session)
    this.eventService.saveEvent(this.event).subscribe();
    this.addMode = false
}

cancel(flagToCancel){
    this.addMode = flagToCancel
}
}