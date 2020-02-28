import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import {
  AboutLayoutComponent, LoreLayoutComponent,
  RuleLayoutComponent
} from './layout/index';

const routes: Routes = [
  { path: 'accueil', component: AboutLayoutComponent, data: { state: 'lazy1' } },
  { path: 'lore', component: LoreLayoutComponent, data: { state: 'lazy2' } },
  { path: 'rules', component: RuleLayoutComponent, data: { state: 'lazy3' } },
  { path: '**', redirectTo: 'accueil' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }