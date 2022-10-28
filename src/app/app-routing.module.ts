import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BodyComponent } from './body/body.component';
import { LoginComponent } from './login/login.component';
import { InfoComponent } from './info/info.component';
import { LecturesPlanComponent } from './info/lectures-plan/lectures-plan.component';
import { authorizationGuard } from './login/Auth-guard';
import { NavigationComponent } from './navigation/navigation.component';
import { EventsComponent } from './events/events.component';
import { NachrichtenComponent } from './nachrichten/nachrichten.component';


const routes: Routes = [{path: 'login', component: LoginComponent},{ path: 'info', component: InfoComponent, canActivate: [authorizationGuard]},
{ path: '', component: BodyComponent}, { path: 'navig', component: NavigationComponent, canActivate: [authorizationGuard]}, {path: 'event', component: EventsComponent},{path: 'nachricht', component: NachrichtenComponent}];
//{ path: 'lecture', component: LecturesPlanComponent},
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
