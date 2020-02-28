import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { FormBuilder } from '@angular/forms';
import { ModalService } from './my-modal.service'

@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.component.html',
  styleUrls: ['./my-modal.component.css']
})
export class MyModalComponent implements OnInit {

  private action: string;
  private section: string;
  private formData: any;

  constructor(
    public dialogRef: MatDialogRef<MyModalComponent>,
    private fb: FormBuilder,
    private modalService: ModalService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.section = data.section;
    this.action = data.action;
    this.formData = data.formData;
  }

  ngOnInit() {

  }


}
