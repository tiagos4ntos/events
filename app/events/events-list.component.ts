import { ToastrService } from './../commom/toastr.service';
import { EventService } from './shared/eventServices';
import { Component, OnInit } from '@angular/core';


@Component({    
    template: `<div>
                    <h1>Próximos Eventos</h1>
                    <hr />
                    <div class="row">
                        <div class="col-md-5" *ngFor="let event of events">
                            <event-thumbnail (click)="handleThumbnailClick(event.name)"  [event]="event"></event-thumbnail>    
                        </div>
                    </div>                    
                </div>` 
})
export class EventsListComponent implements OnInit {
    events: any[]
    constructor(private eventService : EventService,
                private toastr: ToastrService){        
    }

    ngOnInit(){
        this.events = this.eventService.getEvents();        
    }

    handleThumbnailClick(name){
        this.toastr.sucess(name);
    }
}