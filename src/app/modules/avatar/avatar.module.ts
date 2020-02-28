import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AvatarRoutingModule } from './avatar-routing.module';

import { NavigationObs } from '../../_shared/_services/navigationObs.service';

import { AvatarProfilService } from './components/avatarProfil/avatarProfil.service';
import { AngularMaterialModule } from '../../app-material.module';
import { ImageCropperModule } from 'ngx-image-cropper';

import { ArticleComponent, CropImageComponent } from '../../_shared/_components/index';

import { AvatarProfilComponent, CharSheetComponent,
  InventoryComponent, AvatarFormComponent} from './components/index'

import { InventoryLayoutComponent, ScheduleLayoutComponent, CharSheetLayoutComponent,
  ProfilLayoutComponent } from './layout/index'

@NgModule({
  declarations: [
    AvatarProfilComponent,
    CharSheetComponent,
    InventoryComponent,
    AvatarFormComponent,
    ArticleComponent,
    CropImageComponent,

    ProfilLayoutComponent,
    CharSheetLayoutComponent,
    ScheduleLayoutComponent,
    InventoryLayoutComponent
  ],
  imports: [
    CommonModule,
    AvatarRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ImageCropperModule
  ],
  providers: [
    AvatarProfilService
  ]
})

export class AvatarModule {
  
  private moduleMenu = {
    module: 'avatar',
    menu: [
      { routerLink: 'profil', lib: 'profil', ico: '' },
      { routerLink: 'charSheet', lib: 'charSheet', ico: '' },
      { routerLink: 'inventory', lib: 'inventory', ico: '' },
      { routerLink: 'schedule', lib: 'schedule', ico: '' }
    ]
  };

  constructor(
    private navigationObs: NavigationObs
  ) {
    
    console.log('construct avatar module')
    this.navigationObs.editMenu(this.moduleMenu)
  }

}
