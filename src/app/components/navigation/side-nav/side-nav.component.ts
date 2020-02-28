import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AvatarProfilObs } from '../../../_shared/_services/avatarProfilObs.service'

@Component({
  selector: 'app-sidenav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SidenavComponent implements OnInit {

  @Output() btnCreateAvatarClicked = new EventEmitter();
  @Output() sidenavClose = new EventEmitter();


  public currentAvatar: any;

  constructor(
    private avatarProfilObs: AvatarProfilObs
  ) {
    this.avatarProfilObs.onGet.subscribe(x => {
      if (x) {
        this.currentAvatar = this.avatarProfilObs.getCurrentAvatarProfil();
      }
    });
    this.avatarProfilObs.onUnload.subscribe(x => {
      if (x) {
        this.currentAvatar = this.avatarProfilObs.getCurrentAvatarProfil();
      }
    });
  }

  ngOnInit() {
  }

  public createAvatar() {
    this.avatarProfilObs.createAvatarForm(true)
    this.sidenavClose.emit()
  }

  public onSidenavClose(){
    this.sidenavClose.emit()
  }

}