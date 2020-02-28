import { Component, OnInit } from '@angular/core';
import { NavigationObs } from '../../../../_shared/_services/navigationObs.service';

@Component({
  selector: 'app-profil-layout',
  templateUrl: './profil-layout.component.html',
  styleUrls: ['./profil-layout.component.css']
})
export class ProfilLayoutComponent implements OnInit {

  constructor(private navigationObs: NavigationObs
  ) {
    this.navigationObs.editMenu({ module: 'guild' })
  }

  ngOnInit() {
  }

}
