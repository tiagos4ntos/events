import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'event-thumbnail',
    templateUrl: 'app/events/event-thumbnail.component.html',
    styles: [`
        .thumbnail { min-height: 210px; }
        .pad-left { margin-left: 10px; }
        .well div { color: #bbb; }
        .green {color: #003300 !important; }
        .bold { font-weight: bold; }
    `]
})

export class EventThumbnailComponent {
    @Input() event:any

    getStartedClassForTime(){
        if (this.event && this.event.time === '8:00 am')
        return " green bold"
    }
    
}