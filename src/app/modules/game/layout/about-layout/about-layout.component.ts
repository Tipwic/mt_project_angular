import { Component, OnInit } from '@angular/core';
import { NavigationObs } from '../../../../_shared/_services/navigationObs.service';

@Component({
  selector: 'app-about-layout',
  templateUrl: './about-layout.component.html',
  styleUrls: ['./about-layout.component.css']
})
export class AboutLayoutComponent implements OnInit {

  constructor(
    private navigationObs: NavigationObs
  ) {
    this.navigationObs.editMenu({ module: 'game' })

  }

  ngOnInit() {
  }

}
