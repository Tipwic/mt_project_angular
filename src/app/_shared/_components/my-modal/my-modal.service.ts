import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ModalService {

    public modalDataSubject: BehaviorSubject<any>;
    public modalData: Observable<any>;

    constructor(private http: HttpClient) { 
        this.modalDataSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('modalData')));
        this.modalData = this.modalDataSubject.asObservable();
    }


    openModal(data) {
        this.modalDataSubject.next(data);
    }

    closeModal() {
        this.modalDataSubject.next(null);
    }
}