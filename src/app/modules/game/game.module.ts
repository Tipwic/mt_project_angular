import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleComponent, CropImageComponent } from '../../_shared/_components/index';

import {
  AboutGameComponent, RulesComponent,
  LoreComponent,
} from './components/index';

import {
  AboutLayoutComponent, LoreLayoutComponent,
  RuleLayoutComponent
} from './layout/index';

import { GameRoutingModule } from './game-routing.module';
import { NavigationObs } from '../../_shared/_services/navigationObs.service';

@NgModule({
  declarations: [
    RulesComponent,
    LoreComponent,
    AboutGameComponent,
    ArticleComponent, CropImageComponent,

    AboutLayoutComponent,
    LoreLayoutComponent,
    RuleLayoutComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule
  ]
})

export class GameModule {
  private moduleMenu = {
    module: 'game',
    menu: [
      { routerLink: 'accueil', lib: 'accueil', ico: '' },
      { routerLink: 'lore', lib: 'lore', ico: '' },
      { routerLink: 'rules', lib: 'rules', ico: '' }
    ]
  };

  constructor(
    private navigationObs: NavigationObs
  ) {
    this.navigationObs.editMenu(this.moduleMenu)
  }
}
