import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class LoadingServiceObs {

    private onLoadingSubject: BehaviorSubject<boolean>;
    public onLoading: Observable<boolean>;
    private processAction: string;

    constructor() {
        this.onLoadingSubject = new BehaviorSubject<boolean>(false);
        this.onLoading = this.onLoadingSubject.asObservable();
     }

     public getProcess(){
         return this.processAction;
     }

     loadAction(onLoad:boolean, processAct:string = null) {
        this.onLoadingSubject.next(onLoad);
        this.processAction = processAct;
    }
}