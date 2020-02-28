import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ProfilComponent,
  MembersComponent, GamesComponent
} from './components/index';

import { GuildRoutingModule } from './guild-routing.module'
import { NavigationObs } from '../../_shared/_services/navigationObs.service';

import {
  ProfilLayoutComponent, MembersLayoutComponent,
  GamesLayoutComponent, ScheduleLayoutComponent
} from './layout/index';

@NgModule({
  declarations: [
    ProfilComponent,
    MembersComponent,
    GamesComponent,
    ProfilLayoutComponent,
    MembersLayoutComponent,
    GamesLayoutComponent,
    ScheduleLayoutComponent
  ],
  imports: [
    CommonModule,
    GuildRoutingModule
  ]
})

export class GuildModule {
  private moduleMenu = {
    module: 'guild',
    menu: [
      { routerLink: 'accueil', lib: 'accueil', ico: '' },
      { routerLink: 'schedule', lib: 'schedule', ico: '' },
      { routerLink: 'members', lib: 'members', ico: '' },
      { routerLink: 'games', lib: 'games', ico: '' }
    ]
  };

  constructor(
    private navigationObs: NavigationObs
  ) {
    this.navigationObs.editMenu(this.moduleMenu)
  }
}
