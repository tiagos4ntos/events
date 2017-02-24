import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './user/auth.service';
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'

import {
    EventsListComponent,
    EventThumbnailComponent,
    CreateEventComponent,
    EventDetailsComponent,
    EventService,
    EventRouteActivator,
    EventListResolver
} from './events/index'

import { NotFoundComponent } from './errors/404.component';
import { appRoutes } from './route';
import { ToastrService } from './commom/toastr.service';
import { MenuComponent } from './menu/menu.component';
import { EventsAppComponent } from './events-app.component';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
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
        NotFoundComponent
        ],
    providers: [ 
        EventService, 
        ToastrService, 
        EventRouteActivator, 
        EventListResolver,
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