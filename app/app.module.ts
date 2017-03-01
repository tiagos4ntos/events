import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './user/auth.service';
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'

import { HttpModule } from '@angular/http'

import {
    EventsListComponent,
    EventThumbnailComponent,
    CreateEventComponent,
    EventDetailsComponent,
    EventService,
    EventResolver,
    EventListResolver,
    CreateSessionComponent,
    SessionListComponent,
    DurationPipe,
    UpvoteComponent,
    VoterService,
    LocationValidator
} from './events/index'

import { NotFoundComponent } from './errors/404.component';
import { appRoutes } from './route';

import { 
    TOASTR_TOKEN,
    Toastr,
    JQ_TOKEN,
    CollapsibleWellComponent,
    SimpleModalComponent,
    ModalTriggerDirective
} from './commom/index'

import { MenuComponent } from './menu/menu.component';
import { EventsAppComponent } from './events-app.component';

declare let toastr : Toastr
declare let jQuery : Object

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        MenuComponent,
        EventDetailsComponent,
        CreateEventComponent,
        NotFoundComponent,
        CreateSessionComponent,
        SessionListComponent,
        CollapsibleWellComponent,
        DurationPipe,
        SimpleModalComponent,
        ModalTriggerDirective,
        UpvoteComponent,
        LocationValidator
        ],
    providers: [ 
        EventService, 
        {
            provide: TOASTR_TOKEN,
            useValue: toastr
        }, 
        {
            provide: JQ_TOKEN,
            useValue: jQuery
        }, 
        EventResolver, 
        EventListResolver,
        VoterService,
        AuthService,
        { 
            provide: 'canDeactivateCreateEvent', 
            useValue: checkDirtyState 
        }
    ],
    bootstrap: [ EventsAppComponent ]
})
export class AppModule{

}

function checkDirtyState(component: CreateEventComponent){
    if(component.isDirty)
        return window.confirm('You have not save this event. Do you really want to cancel?')
    return true
}