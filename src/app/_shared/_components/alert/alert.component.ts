import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { AlertService } from './alert.service';

@Component({
    selector: 'alert',
    templateUrl: 'alert.component.html',
    styleUrls: ['./alert.component.css']
})

export class AlertComponent implements OnInit, OnDestroy {
    private subscription: Subscription;
    message: any;
    cssClass

    constructor(private alertService: AlertService) { }

    ngOnInit() {
        this.subscription = this.alertService.getAlert()
            .subscribe(message => {
                if (message && message.type && message.text) {

                    switch (message && message.type) {
                        case 'success':
                            this.cssClass = 'alert alert-success';
                            break;
                        case 'error':
                            this.cssClass = 'alert alert-danger';
                            break;
                    }

                    this.message = message.text;
                }else{
                    this.message = null
                }
            });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}