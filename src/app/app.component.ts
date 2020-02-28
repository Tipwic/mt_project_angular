import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MyModalComponent } from './_shared/_components/index';
import { Router } from '@angular/router';
import { UserService } from './components/user/user.service';
import { ModalService } from './_shared/_components/my-modal/my-modal.service';
import { LoadingServiceObs } from './_shared/_services/loadingObsService';
import { routerTransition } from './_shared/animation';
import { User } from './components/user/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ routerTransition ]
})
export class AppComponent {
  
  currentUser: User;
  loading: boolean;

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private userService: UserService,
    private modalService: ModalService,
    private loadingServiceObs: LoadingServiceObs
) {
  this.userService.currentUser.subscribe(x => {
    this.currentUser = x
    if(!x){
      this.router.navigate(['/home']);
      let data = { formData: { email: '', password: '' }, section: 'login' }
      this.openDialog(data)
    }
  });

  this.loadingServiceObs.onLoading.subscribe(x => {
    this.loading = x
  });

  this.modalService.modalData.subscribe(data => {
    if(data){
      this.openDialog(data)
    }else{
      this.dialog.closeAll()
    }
  });
   
}

getState(outlet) {
  return outlet.activatedRouteData.state;
}

openDialog(data): void {
    const dialogRef = this.dialog.open(MyModalComponent, {
     
      data: {  formData: data.formData, action:data.action, section: data.section }
    });

    dialogRef.afterClosed().subscribe(res => {
      if (res == "login") {
        this.router.navigateByUrl('/avatar');
      }
    });
  }

}
