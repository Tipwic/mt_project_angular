import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AvatarProfilObs } from '../../../../_shared/_services/avatarProfilObs.service'
import { AvatarProfil } from './avatarProfil.interface'
import { AvatarProfilService } from './avatarProfil.service'
import { Router } from '@angular/router';
import { AlertService } from '../../../../_shared/_components/alert/alert.service'

import { flyInOutAnimation } from '.././../../../_shared/animation';

import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-avatarProfil',
  templateUrl: './avatarProfil.component.html',
  styleUrls: ['./avatarProfil.component.css'],

  animations: [flyInOutAnimation]
})
export class AvatarProfilComponent implements OnInit {

  @Input()loadingProcess : boolean
  @Input()currentAvatar: any

  @Output()onUpdate = new EventEmitter();

  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };
  public radarChartLabels: Label[] = ['Magie', 'Constitution', 'Défense Phisique',
    'Défense Magique', 'Force', 'Intelligence', 'Agilité'];

  public radarChartData: ChartDataSets[] = [
    { data: [10, 3, 5, 12, 4, 9, 6], label: 'Avatar Skill Analysis' }
  ];
  public radarChartType: ChartType = 'horizontalBar';
  barChartLegend = true;
  public chartColors: any[] = [
    { 
      backgroundColor:["#FF7360", "#6FC8CE", "#FAFFF2", "#FFFCC4", "#B9E8E0","#FF7360", "#6FC8CE" ]
    }];

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
