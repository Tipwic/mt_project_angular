import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from "ngx-toastr";
import { map } from 'rxjs/operators';
import { environment } from './../../../../../environments/environment';
import { AvatarProfilObs } from '../../../../_shared/_services/avatarProfilObs.service';
import { AvatarProfil } from './avatarProfil.interface';

@Injectable()
export class AvatarProfilService {

  private url = `${environment.apiUrl}/avatar`;
  
  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private avatarProfilObs: AvatarProfilObs) {
   }

  getAvatarProfil(id) {

    return this.http.get<any>(`${this.url}/${id}`)
      .pipe(map(avatar => {
        return avatar.data;
      }));
  }

  createAvatar(data : any) {
console.log(data)
    return this.http.post<any>(`${this.url}`, data)
      .pipe(map(avatar => {
        this.avatarProfilObs.createAvatarAction(avatar.data);
        this.toastr.success('Votre avatar a été créer avec succès.', 'Success');
        return avatar.data;
      }));
  }

  updateAvatar(data:any, id) {
    console.log(data, id)
    return this.http.put<any>(`${this.url}/${id}`, data)
      .pipe(map(avatar => {
        this.avatarProfilObs.updateAvatarAction(avatar.data);
        this.toastr.success('Votre avatar a été modifié avec succès.', 'Success');
        return avatar.data;
      }));
  }

  deleteAvatar(id) {

    return this.http.delete<any>(`${this.url}/${id}`)
      .pipe(map(avatar => {
        this.avatarProfilObs.deleteAvatarAction(id);
        this.toastr.success('Votre avatar a été supprimé avec succès.', 'Success');
        return avatar;
      }));
  }

}