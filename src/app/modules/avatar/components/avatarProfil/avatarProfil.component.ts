import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AvatarProfilObs } from '../../../../_shared/_services/avatarProfilObs.service'
import { AvatarProfil } from './avatarProfil.interface'
import { AvatarProfilService } from './avatarProfil.service'
import { Router } from '@angular/router';
import { AlertService } from '../../../../_shared/_components/alert/alert.service'

import { flyInOutAnimation } from '.././../../../_shared/animation';

@Component({
  selector: 'app-avatarProfil',
  templateUrl: './avatarProfil.component.html',
  styleUrls: ['./avatarProfil.component.sass'],

  animations: [flyInOutAnimation]
})
export class AvatarProfilComponent implements OnInit {

  @Input()loadingProcess : boolean
  @Input()currentAvatar: any

  @Output()onUpdate = new EventEmitter();

  constructor(
    private avatarProfilObs: AvatarProfilObs,
    private avatarProfilService: AvatarProfilService,
    private router: Router,
    private alertService: AlertService
  ) { 
  }

  ngOnInit() {
  }

  updateAvatar() {
    this.onUpdate.emit(true)
  }

  deleteAvatar() {

    this.avatarProfilService.deleteAvatar(this.currentAvatar.id)
      .subscribe(
        data => { },
        error => {
          this.alertService.error(error);
        });
  }


}
