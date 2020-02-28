import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class NavigationObs {

    public currentModuleMenu: Array<any>;
    private currentIndex: Number;
    private currentModuleMenuSubject: BehaviorSubject<any>;
    public currentMenu: Observable<any>;

    constructor() {
        this.currentModuleMenuSubject = new BehaviorSubject<any>(null);
        this.currentMenu = this.currentModuleMenuSubject.asObservable();
        this.currentModuleMenu = [];
    }

    public getCurrentMenu() {
        return this.currentModuleMenu;
    }

    editMenu(menuMod: any) {
        var index = this.currentModuleMenu.findIndex(menu => menu.module === menuMod.module)
        if (index < 0) {
            index = this.currentModuleMenu.length
            this.currentModuleMenu.push(menuMod);
        }
        if(this.currentIndex != index){
            this.currentIndex = index
            this.setMenu(index)
        }
        
    }

    setMenu(index) {
        this.currentModuleMenuSubject.next(this.currentModuleMenu[index])
    }
}