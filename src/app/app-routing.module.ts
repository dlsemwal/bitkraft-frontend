import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LiveScoreComponent } from '../app/live-score/live-score.component'
import { HomeComponent } from '../app/home/home.component'
import{TeamsComponent } from '../app/teams/teams.component'
const routes: Routes = [
  {
    path: 'home',
    // pathMatch: 'full',
    component: HomeComponent,


  },
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,


  },
  {
    path: 'result',
    pathMatch: 'full',
    component: LiveScoreComponent,


  },
  {
    path: 'team',
    pathMatch: 'full',
    component: TeamsComponent,


  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
