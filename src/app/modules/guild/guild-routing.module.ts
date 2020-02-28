import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { ProfilLayoutComponent, MembersLayoutComponent, 
  GamesLayoutComponent, ScheduleLayoutComponent } from './layout/index';

const routes: Routes = [
  { path: 'accueil', component: ProfilLayoutComponent  , data: { state: 'lazy1'} },
  { path: 'schedule', component: ScheduleLayoutComponent  , data: { state: 'lazy2'} },
  { path: 'members', component: MembersLayoutComponent  , data: { state: 'lazy3'} },
  { path: 'games', component: GamesLayoutComponent  , data: { state: 'lazy4'} },
  { path: '**', redirectTo: 'accueil' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuildRoutingModule { }