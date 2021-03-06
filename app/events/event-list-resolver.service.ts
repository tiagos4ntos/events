import { EventService } from './shared/eventServices';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router'

@Injectable()
export class EventListResolver implements Resolve<any>{
    constructor(private eventService:EventService){        
    }

    resolve(){
        return this.eventService.getEvents()
    }
}