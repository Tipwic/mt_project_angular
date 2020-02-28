import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from "ngx-toastr";
import { map } from 'rxjs/operators';
import { environment } from './../../../../environments/environment';

@Injectable({ providedIn: 'root' })

export class ArticleService {

    private url = `${environment.apiUrl}/article`;
    
    constructor(
      private http: HttpClient,
      private toastr: ToastrService) {
     }
  
    getArticle(id) {
  
      return this.http.get<any>(`${this.url}/${id}`)
        .pipe(map(article => {
          return article.data;
        }));
    }

    getArticles(req) {
  
      return this.http.post<any>(`${this.url}/getArticles`, req)
        .pipe(map(articles => {
          return articles;
        }));
    }
  
  
    createArticle(data : any) {
  
      return this.http.post<any>(`${this.url}`, data)
        .pipe(map(article => {
          this.toastr.success('Votre article a été créer avec succès.', 'Success');
          return article.data;
        }));
    }
  
    updateArticle(data:any, id) {
      return this.http.put<any>(`${this.url}/${id}`, data)
        .pipe(map(article => {
          this.toastr.success('Votre article a été modifié avec succès.', 'Success');
          return article.data;
        }));
    }
  
    deleteArticle(id) {
  
      return this.http.delete<any>(`${this.url}/${id}`)
        .pipe(map(article => {
          this.toastr.success('Votre article a été supprimé avec succès.', 'Success');
          return article;
        }));
    }
  
  }