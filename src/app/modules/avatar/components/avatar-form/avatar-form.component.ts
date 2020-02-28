import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AvatarProfilService } from '../avatarProfil/avatarProfil.service';
import { AlertService } from '../../../../_shared/_components/alert/alert.service';
import { AvatarProfilObs } from '../../../../_shared/_services/avatarProfilObs.service'
import { slideInOutAnimation } from '.././../../../_shared/animation';

@Component({
  selector: 'app-avatar-form',
  templateUrl: './avatar-form.component.html',
  styleUrls: ['./avatar-form.component.css'],

  animations: [slideInOutAnimation]
})
export class AvatarFormComponent implements OnInit {

  @Input() currentAvatar: any;
  @Input() newAvatarForm: boolean;
  @Output() onCancel = new EventEmitter();

  croppedImage: any = '';
  originalImage: any = "";
  avatarForm: FormGroup;
  actionForm: string;

  constructor(
    private formBuilder: FormBuilder,
    private avatarProfilService: AvatarProfilService,
    private alertService: AlertService,
    private avatarProfilObs: AvatarProfilObs
  ) {

  }

  ngOnInit() {

    if (this.currentAvatar && !this.newAvatarForm) {
      this.currentAvatar = this.avatarProfilObs.getCurrentAvatarProfil()
      this.actionForm = 'update';
      this.avatarForm = this.formBuilder.group({
        name: [this.currentAvatar.name, Validators.required],
        nick_name: [this.currentAvatar.nick_name, Validators.required]
      });
      this.originalImage = this.currentAvatar.portrait_url
    } else {
      this.avatarForm = this.formBuilder.group({
        name: ['', Validators.required],
        nick_name: ['', Validators.required]
      });
      this.actionForm = 'create';
    }
  }

  get f() { return this.avatarForm.controls; }

  public errorHandling = (control: string, error: string) => {
    return this.avatarForm.controls[control].hasError(error);
  }

  public changeImage(event) {
    this.croppedImage = event
  }

  onSubmit() {

    if (this.avatarForm.invalid) {
      return;
    }

    let form = {
      name: this.f.name.value,
      nick_name: this.f.nick_name.value,
      portraitImg: this.croppedImage,
      guild_id: 1,
      game_id: 1,
      grade_id: 3,
    }

    switch (this.actionForm) {

      case 'create': {
        this.avatarProfilService.createAvatar(form)
          .subscribe(
            data => {
              this.onCancel.emit(true);
            },
            error => {
              this.alertService.error(error);
            });
        break;
      }

      case 'update': {
        this.avatarProfilService.updateAvatar(form, this.currentAvatar.id)
          .subscribe(
            data => {
              this.onCancel.emit(true);
            },
            error => {
              this.alertService.error(error);
            });
        break;
      }
    }
  }

  CancelForm() {
    this.onCancel.emit(true);
  }

}
