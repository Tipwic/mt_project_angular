import { Injectable } from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot, RouterStateSnapshot
} from '@angular/router';
import { NavigationObs } from '../_services/navigationObs.service'

@Injectable({
  providedIn: 'root'
})

export class loadMenuModule implements CanActivate {

  constructor(
    private router: Router,
    private navigationObs: NavigationObs) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    var index = this.navigationObs.currentModuleMenu
      .findIndex(menu => menu.module === state.url.split('/')[1])
    if (!(index < 0)) {
      this.navigationObs.setMenu(index)
      return true
    }
    return false
  }

}
