import { 
    EventResolver,
    CreateSessionComponent,
    EventListResolver,
    CreateEventComponent,
    EventDetailsComponent,
    EventsListComponent
 } from './events/index'

import { UserModule } from './user/user.module';
import { NotFoundComponent } from './errors/404.component';
import { Routes } from '@angular/router'

export const appRoutes:Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ["canDeactivateCreateEvent"] },
    { path: 'events', component: EventsListComponent, resolve: { events: EventListResolver } },
    { path: 'events/:id', component: EventDetailsComponent, resolve: {event: EventResolver} },
    { path: 'events/session/new', component: CreateSessionComponent },
    { path: '404', component: NotFoundComponent },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    {path: 'user', loadChildren: 'app/user/user.module#UserModule'}
]