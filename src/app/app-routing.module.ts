import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './components/events/events.component';
import { ResourcesComponent } from './components/resources/resources.component';

const routes: Routes = [
  { path: 'resources', component: ResourcesComponent},
  { path: 'events', component: EventsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
