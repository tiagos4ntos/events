import { Component } from '@angular/core';


@Component({
    selector: 'events-list',
    template: `<div>
                    <h1>Próximos Eventos</h1>
                    <hr />
                    <event-thumbnail [event]=event1 (eventClick)="handleEventClicked($event)"></event-thumbnail>
                </div>`    
})
export class EventsListComponent {
    event1 = {
        id: 1,
        name: 'Angular Meetup',
        date: '2/27/2018',
        time: '19:00 pm',
        price: 19.9,
        imgUrl: '/app/assets/images/angularconnect-shield.png',
        location: {
            address: 'Av. Paulista, 1089',
            city: 'São Paulo',
            country: 'Brasil',
            zipCode: '05252-123'
        }
    }

    handleEventClicked(data){
        console.log('received: ' + data);
    }
}