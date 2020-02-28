import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService } from '../../_shared/_components/alert/alert.service';
import { UserService } from '../user/user.service';
import { ModalService } from '../../_shared/_components/my-modal/my-modal.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    submitted = false;
    returnUrl: string;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private userService: UserService,
        private alertService: AlertService,
        private modalService: ModalService
    ) {
        // redirect to home if already logged in
        if (this.userService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['emocquet@gmail.com', [Validators.required, Validators.email]],
            password: ['Johannes12', Validators.required]
        });
    }

    get f() { return this.loginForm.controls; }

    public errorHandling = (control: string, error: string) => {
        return this.loginForm.controls[control].hasError(error);
      }

    onSubmit() {
        this.submitted = true;

        if (this.loginForm.invalid) {
            return;
        }

        this.userService.login(this.f.email.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.modalService.closeModal()
                    this.router.navigate(['avatar']);
                },
                error => {
                    this.alertService.error(error);
                });
    }

    goToRegister(){
        this.modalService.closeModal()
        this.router.navigate(['home/register']);
    }
}
