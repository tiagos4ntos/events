import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
    selector: 'event-thumbnail',
    template: `<div class="well hoverwell thumbnail">
                    <h2>{{event.name}}</h2>
                    <div>Data: {{event.date}}</div>
                    <div>Hora: {{event.time}}</div>
                    <div>Preço: R\${{event.price}}</div>
                    <div>
                        <span>Endereço: {{event.location.address}}</span>
                        <span>&nbsp;</span>
                        <span>{{event.location.city}}, {{event.location.country}}, {{event.location.zipCode}}</span>                        
                    </div>
                    <button class="btn btn-primary" (click)="handleCLickMe()">Click Me!</button>
                </div>`
})

export class EventThumbnailComponent {
    @Input() event:any
    @Output() eventClick = new EventEmitter()
    handleCLickMe(){
        this.eventClick.emit(this.event.name)
    }
}