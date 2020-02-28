import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import {
  ProfilLayoutComponent, CharSheetLayoutComponent,
  ScheduleLayoutComponent, InventoryLayoutComponent
} from './layout/index'



const routes: Routes = [

  { path: 'profil', component: ProfilLayoutComponent, data: { state: 'lazy1' } },
  { path: 'charSheet', component: CharSheetLayoutComponent, data: { state: 'lazy2' } },
  { path: 'inventory', component: InventoryLayoutComponent, data: { state: 'lazy3' } },
  { path: 'schedule', component: ScheduleLayoutComponent, data: { state: 'lazy4' } },
  { path: '**', redirectTo: 'profil' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvatarRoutingModule { }