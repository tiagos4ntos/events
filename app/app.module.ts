import { appRoutes } from './route';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { ToastrService } from './commom/toastr.service';
import { EventService } from './events/shared/eventServices';
import { MenuComponent } from './menu/menu.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventsListComponent } from './events/events-list.component';
import { EventsAppComponent } from './events-app.component';
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        MenuComponent,
        EventDetailsComponent
        ],
    providers: [ EventService, ToastrService ],
    bootstrap: [ EventsAppComponent ]
})
export class AppModule{

}