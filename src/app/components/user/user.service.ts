import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from './../../../environments/environment';
import { User } from './user.interface';
import { AvatarProfilObs } from '../../_shared/_services/avatarProfilObs.service'

@Injectable({ providedIn: 'root' })
export class UserService {

    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    private url = `${environment.apiUrl}/user`;
    private token: string;

    constructor(
        private http: HttpClient,
        private avatarProfilObs: AvatarProfilObs
    ) {
        let user = JSON.parse(localStorage.getItem('currentUser'))
        let identity = user && user.identity ? user.identity : null;
        this.token = user && user.access_token ? user.access_token : null;
        this.currentUserSubject = new BehaviorSubject<User>(identity);
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue() {
        return this.currentUserSubject.value;
    }

    public get currentTokenValue() {
        return this.token;
    }

    login(email, password) {
        return this.http.post<any>(`${this.url}/login`, { email, password })
            .pipe(map(user => {
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.token = user && user.access_token ? user.access_token : null;
                this.currentUserSubject.next(user.identity);
                this.avatarProfilObs.loadAvatarAction()
                return user;
            }));
    }

    logout() {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        this.avatarProfilObs.logout();
        return this.http.post<any>(`${this.url}/logout`, {})
            .pipe(map(user => {
                return user;
            }));
    }

    getAll() {
        return this.http.get<User[]>(this.url);
    }

    register(user: User) {
        return this.http.post(`${this.url}/register`, user);
    }

    delete(id: number) {}
}