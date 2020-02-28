import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { AvatarProfilObs } from '../../_shared/_services/avatarProfilObs.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-avatar-list',
  templateUrl: './avatar-list.component.html',
  styleUrls: ['./avatar-list.component.css']
})
export class AvatarListComponent implements OnInit {

  @Output() sidenavCloseList = new EventEmitter();

  private avatarList: any;

  constructor(
    private avatarProfilObs: AvatarProfilObs,
    private router: Router
  ) {
    this.avatarList = [];

    this.avatarProfilObs.onLoad.subscribe(x => {
      if (x) {
        let list = this.avatarProfilObs.getCurrentAvatarList();
        if (list && list.length>0) {
          this.avatarList = list;
          this.getAvatar(this.avatarList[0])
        }else{
          this.avatarList = []
        }
      }
    });

    this.avatarProfilObs.onCreate.subscribe(x => {
      if (x) {
        this.avatarList.unshift(this.avatarProfilObs.getCurrentAvatarProfil());
        this.getAvatar(this.avatarList[0])
      }
    });

    this.avatarProfilObs.onUpdate.subscribe(x => {
      if (x) {
        let avatar = this.avatarProfilObs.getCurrentAvatarProfil();
        this.avatarList = this.avatarProfilObs.getCurrentAvatarList()
        this.getAvatar(avatar)
      }
    });

    this.avatarProfilObs.onDelete.subscribe(x => {
      if (x > 0) {
        this.avatarList = this.avatarProfilObs.getCurrentAvatarList()
        if (this.avatarList[0]) {
          this.getAvatar(this.avatarList[0])
        } else {
          this.getAvatar(null)
        }
      }
    });
  }

  ngOnInit() {
  }

  getAvatar(avatar) {
    this.avatarProfilObs.getAvatarAction(avatar)
    this.router.navigateByUrl("avatar")
  }
}
