import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_shared/_guards/authGuard.service'

import { HomeLayoutComponent } from './layout/index';

import { RegisterComponent, LoginComponent, CarouselComponent
} from './components/index';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', data: { title: 'login Component' },
    pathMatch: 'full'
  },
  {
    path: 'home', component: HomeLayoutComponent,
    children: [
      { path: '', component: CarouselComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]
  },
  {
    path: 'avatar',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import(`./modules/avatar/avatar.module`).then(m => m.AvatarModule)
  },
  {
    path: 'guild',
    canActivate: [AuthGuard],
     loadChildren: () =>
      import(`./modules/guild/guild.module`).then(m => m.GuildModule)
  },
  {
    path: 'game',
    canActivate: [AuthGuard],
     loadChildren: () =>
      import(`./modules/game/game.module`).then(m => m.GameModule)
  },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
