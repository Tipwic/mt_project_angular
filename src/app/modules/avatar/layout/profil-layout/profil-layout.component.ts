import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AvatarProfilObs } from '../../../../_shared/_services/avatarProfilObs.service'
import { ArticleService } from '../../../../_shared/_components/article/article.service';
import { AlertService } from '../../../../_shared/_components/alert/alert.service';
import { LoadingServiceObs } from '../../../../_shared/_services/loadingObsService';

import { NavigationObs } from '../../../../_shared/_services/navigationObs.service';
import { AvatarProfil } from '../../components/avatarProfil/avatarProfil.interface';


@Component({
  selector: 'app-profil-layout',
  templateUrl: './profil-layout.component.html',
  styleUrls: ['./profil-layout.component.css']
})
export class ProfilLayoutComponent implements OnInit {

  currentAvatar: AvatarProfil;
  listArticles: Array<any>;
  article: any;
  loadingProcess: boolean;
  loadingAvatar: boolean;
  loadingArticle: boolean
  editAction: string;
  formAvatarOpen: boolean;
  newAvatarForm: boolean

  subAvatar: Subscription;
  subLoad: Subscription;
  subForm: Subscription;

  constructor(
    private avatarProfilObs: AvatarProfilObs,
    private articleService: ArticleService,
    private alertService: AlertService,
    private loadingServiceObs: LoadingServiceObs,
    private navigationObs: NavigationObs
  ) {


    this.navigationObs.editMenu({ module: 'avatar' })

    this.listArticles = [];
    this.subAvatar = this.avatarProfilObs.onGet.subscribe(x => {
      if (x > 0) {
        this.loadingArticle = true
        this.loadingAvatar = true;
        this.listArticles = [];
        this.currentAvatar = avatarProfilObs.getCurrentAvatarProfil();
        setTimeout(() => {
          this.loadingAvatar = false;
          if (this.currentAvatar && this.currentAvatar.id) {
            this.loadArticles(this.currentAvatar.id)
          }
        }, 20);

      } else {
        this.loadingArticle = false
        this.loadingAvatar = false;
        this.currentAvatar = null;
        this.newAvatarForm = true
        this.openFormAvatar();
      }
    });

    this.subForm = this.avatarProfilObs.onCreateForm.subscribe(y => {
      this.newAvatarForm = y;
      if(y){  
        this.openFormAvatar();
      } 
    });

    this.subLoad = this.loadingServiceObs.onLoading.subscribe(x => {
      this.loadingProcess = x;
    });
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.subAvatar.unsubscribe();
    this.subLoad.unsubscribe();
    this.subForm.unsubscribe();
  }

  openFormAvatar() {
    this.formAvatarOpen = true;
  }

  closeFormAvatar() {
    this.formAvatarOpen = false;
    this.avatarProfilObs.createAvatarForm(false)
  }

  loadArticles(id) {

    this.articleService.getArticles({ owner_id: id, category: 1 })
      .subscribe(
        data => {
          if (data) {
            let self = this;
            let activateArticle = function (article, index) {
              setTimeout(() => {
                self.listArticles[index].active = true;
                self.loadingArticle = false
              }, 100 * index);
            }

            this.listArticles = [];
            for (let article of data.articles) {
              for (let i = 0; i < 6; i++) {
                this.listArticles.push({ title: article.title, content: article.content, id: article.id })
                activateArticle(article, i)
              }
            }
            this.loadingArticle = false
          }
        },
        error => {
          this.loadingArticle = false
          this.alertService.error(error);
        });
  }

  createBio() {
    this.article = {
      owner_id: this.currentAvatar.id,
      type: 1,
      category: 1
    }
    this.editAction = "createBio"
  }

  public closeFormArticle(){
    this.editAction = null;
    this.loadingArticle = false;
  }

  onSubmitArticle(event, action) {

    switch (action) {

      case 'addBio': {
        event.active = true;
        this.listArticles.unshift(event);
        break;
      }

      case 'editBio': {
        let index = this.listArticles.findIndex(article => article.id === event.id)
        this.listArticles.splice(index, 1, event);
        break;
      }

      case 'deleteBio': {
        this.listArticles = this.listArticles.filter((article) => article.id != event.id);
        break;
      }
    }
    this.closeFormArticle()
  }

}
