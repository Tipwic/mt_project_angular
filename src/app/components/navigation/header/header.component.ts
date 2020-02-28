import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { ModalService } from '../../../_shared/_components/my-modal/my-modal.service';
import { NavigationObs } from '../../../_shared/_services/navigationObs.service';
import { UserService } from '../../user/user.service';
import { first } from 'rxjs/operators';
import { AlertService } from '../../../_shared/_components/alert/alert.service'

import { flyInOverAnimation } from'../../../_shared/animation'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [ flyInOverAnimation ]
})
export class HeaderComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();
  @Input() public currentUser: any;

  private currMenu: Array<any>;
  private currModule: string;
  private itemMenuWidth: string;
  private currSubMenu: string

  constructor(
    private navigationObs: NavigationObs,
    private router: Router,
    private modalService: ModalService,
    private userService: UserService,
    private location: Location,
    private alertService: AlertService
  ) {
    this.navigationObs.currentMenu.subscribe(moduleMenu => {
      if (moduleMenu) {
        this.itemMenuWidth = `calc(100% / ${moduleMenu.menu.length || 0}`;
        this.currMenu = [];

        let self = this;
        let activateMenu = function (index) {
          setTimeout(() => {
            self.currMenu[index].appear = true;
          }, 100 * index);
        }

        let i = 0
        for (let menu of moduleMenu.menu) {
          menu.appear = false
          this.currMenu.push(menu)
          activateMenu(i)
          i++
        }
        
        this.currModule = moduleMenu.module;
        
      }
    })

    router.events
      .subscribe((event: NavigationEnd) => {
        if (event instanceof NavigationEnd) {
          let arrPath = this.location.path().split('/');
          if (arrPath.length > 1) {
            this.currSubMenu = arrPath[2]
          }
        }

      })
  }

  ngOnInit() {
  }

  openModal(section) {
    let data;
    if (section == 'login') {
      data = { formData: { email: '', password: '' }, section: 'login' }
    }

    this.modalService.openModal(data)
  }

  logout() {
    this.userService.logout().pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['/home']);
        },
        error => {
          this.alertService.error(error);
        });
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

}