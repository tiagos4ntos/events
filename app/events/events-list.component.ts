import { IEvent } from './shared/event-model';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from './../commom/toastr.service';
import { EventService } from './shared/eventServices';
import { Component, OnInit } from '@angular/core';


@Component({    
    template: `<div>
                    <h1>Próximos Eventos</h1>
                    <hr />
                    <div class="row">
                        <div class="col-md-5" *ngFor="let event of events">
                            <event-thumbnail  [event]="event"></event-thumbnail>                            
                        </div>
                    </div>                    
                </div>`     
})
export class EventsListComponent implements OnInit {
    events: IEvent[]
    constructor(private eventService : EventService,
                private toastr: ToastrService,
                private route: ActivatedRoute){
    }

    ngOnInit(){
        this.events = this.route.snapshot.data['events']
    }

    handleThumbnailClick(name){
        this.toastr.sucess(name);
    }
}