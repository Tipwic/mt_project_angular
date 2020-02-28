import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlertService } from '../_components/alert/alert.service';
import { LoadingServiceObs } from '../_services/loadingObsService';
import { UserService } from '../../components/user/user.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(
        private userService: UserService,
        private alertService: AlertService,
        private loadingServiceObs: LoadingServiceObs) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        this.loadingServiceObs.loadAction(true)
        this.alertService.clear();
        let token = this.userService.currentTokenValue;
        let user = this.userService.currentUserValue;
        let id = user && user.id ? user.id : null ;

        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`,
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                },
                body: {...request.body, user_id: id }
            });
        }else{
            request = request.clone({
                setHeaders: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                }
            });
        }

        return next.handle(request);
    }
}