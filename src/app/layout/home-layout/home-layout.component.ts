import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../../components/user/user.interface';
import { UserService } from '../../components/user/user.service';

@Component({
    selector: 'app-home-layout',
    templateUrl: './home-layout.component.html',
    styleUrls: ['./home-layout.component.css'],

  })
  
export class HomeLayoutComponent implements OnInit {
    currentUser: User;
    users = [];

    constructor(
        private userService: UserService
    ) {
        this.currentUser = this.userService.currentUserValue;
    }

    ngOnInit() {}

}