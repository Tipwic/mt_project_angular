import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { AvatarProfil } from '../../modules/avatar/components/avatarProfil/avatarProfil.interface'

@Injectable({ providedIn: 'root' })

export class AvatarProfilObs {

    private currentAvatarProfil: AvatarProfil;

    private onLoadSubject: BehaviorSubject<boolean>;
    public onLoad: Observable<boolean>;

    private onUnloadSubject: BehaviorSubject<boolean>;
    public onUnload: Observable<boolean>;

    private onGetSubject: BehaviorSubject<Number>;
    public onGet: Observable<Number>;

    private onCreateSubject: BehaviorSubject<boolean>;
    public onCreate: Observable<boolean>;

    private onUpdateSubject: BehaviorSubject<boolean>;
    public onUpdate: Observable<boolean>;

    private onDeleteSubject: BehaviorSubject<number>;
    public onDelete: Observable<number>;

    private onCreateFormSubject: BehaviorSubject<boolean>;
    public onCreateForm: Observable<boolean>;

    constructor() {
        this.onLoadSubject = new BehaviorSubject<boolean>(true);
        this.onLoad = this.onLoadSubject.asObservable();
        this.onUnloadSubject = new BehaviorSubject<boolean>(false);
        this.onUnload = this.onLoadSubject.asObservable();
        this.onGetSubject = new BehaviorSubject<Number>(0);
        this.onGet = this.onGetSubject.asObservable();
        this.onCreateSubject = new BehaviorSubject<boolean>(false);
        this.onCreate = this.onCreateSubject.asObservable();
        this.onCreateFormSubject = new BehaviorSubject<boolean>(false);
        this.onCreateForm = this.onCreateFormSubject.asObservable();
        this.onUpdateSubject = new BehaviorSubject<boolean>(false);
        this.onUpdate = this.onUpdateSubject.asObservable();
        this.onDeleteSubject = new BehaviorSubject<number>(0);
        this.onDelete = this.onDeleteSubject.asObservable();

     }

     public logout(){
         this.currentAvatarProfil = null;
         this.onUnloadSubject.next(true);
     }

    public getCurrentAvatarProfil() {
        return this.currentAvatarProfil;
    }

    public getCurrentAvatarList() {
        let user = JSON.parse(localStorage.getItem('currentUser'));
        if(user && user.avatar_list){
            return user.avatar_list;
        }
        return [];
    }

    public editAvatarList(list){
        let user = JSON.parse(localStorage.getItem('currentUser'));
        user.avatar_list = list;
        localStorage.setItem('currentUser', JSON.stringify(user));
    }

    getAvatarAction(avatarProfil: AvatarProfil) {
        this.currentAvatarProfil = avatarProfil;
        this.onGetSubject.next(avatarProfil && avatarProfil.id ? avatarProfil.id : 0);
    }

    loadAvatarAction() {
        this.onLoadSubject.next(true);
    }

    createAvatarAction(avatarProfil: AvatarProfil) {
        this.currentAvatarProfil = avatarProfil;
        let list = this.getCurrentAvatarList();
        list.unshift(avatarProfil);
        this.editAvatarList(list);
        this.onCreateSubject.next(true);
    }

    createAvatarForm(act: boolean = true) {
        console.log('change', act)
        this.onCreateFormSubject.next(act);
    }

    updateAvatarAction(avatarProfil: AvatarProfil, emit = true) {
        this.currentAvatarProfil = avatarProfil;
        let list = this.getCurrentAvatarList();
        let index = list.findIndex(avatar => avatar.id === avatarProfil.id)
        list.splice(index, 1, avatarProfil);
        this.editAvatarList(list);
        this.onUpdateSubject.next(emit);
    }

    deleteAvatarAction(id: number) {
        let list = this.getCurrentAvatarList();
        list = list.filter((avatar) => avatar.id != id);
        this.editAvatarList(list);
        this.currentAvatarProfil = list.length>0 ? list[0] : null;
        this.onDeleteSubject.next(id);
    }
}