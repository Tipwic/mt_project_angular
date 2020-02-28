import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LoadingServiceObs } from '../_services/loadingObsService';
import { UserService } from '../../components/user/user.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(
        private userService: UserService,
        private loadingServiceObs: LoadingServiceObs
        ) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loadingServiceObs.loadAction(false);
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.userService.logout();
                console.log('unauth')
                //location.reload(true);
            }
            
            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
    }
}