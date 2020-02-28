import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArticleService } from './article.service';
import { AlertService } from '../../../_shared/_components/alert/alert.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-angular';
import { fadeInAnimation, slideInOutAnimation } from '../../animation';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  animations: [fadeInAnimation, slideInOutAnimation]
})
export class ArticleComponent implements OnInit {

  @Input() currentArticle;
  @Input() editAction;
  @Input() actionForm: string;

  @Output() onCancel: EventEmitter<any> = new EventEmitter();
  @Output() onSubmitForm: EventEmitter<any> = new EventEmitter();

  articleForm: FormGroup;

  public Editor = ClassicEditor;

  constructor(
    private formBuilder: FormBuilder,
    private articleService: ArticleService,
    private alertService: AlertService
  ) {

  }

  ngOnInit() {

    if (this.actionForm == "edit-article") {
      this.updateArticle();
    } else if (this.actionForm == "create-article") {
      this.articleForm = this.formBuilder.group({
        title: ['', Validators.required],
        content: ['', Validators.required]
      });
    }
  }

  get f() { return this.articleForm.controls; }

  public errorHandling = (control: string, error: string) => {
    return this.articleForm.controls[control].hasError(error);
  }

  updateArticle() {
    this.actionForm = "edit-article";
    this.editAction = "Modifier article"
    this.articleForm = this.formBuilder.group({
      title: [this.currentArticle.title, Validators.required],
      content: [this.currentArticle.content, Validators.required]
    });
  }

  public CancelForm() {
    this.onCancel.emit(true)
  }

  onSubmit() {

    if (this.articleForm.invalid) {
      return;
    }

    let form = {
      owner_id: this.currentArticle.owner_id,
      type: this.currentArticle.type,
      category: this.currentArticle.category,
      title: this.f.title.value,
      content: this.f.content.value
    }

    switch (this.actionForm) {

      case 'create-article': {
        this.articleService.createArticle(form)
          .subscribe(
            data => {
              this.onSubmitForm.emit(data)
            },
            error => {
              this.alertService.error(error);
            });
        break;
      }

      case 'edit-article': {
        this.articleService.updateArticle(form, this.currentArticle.id)
          .subscribe(
            data => {
              this.onSubmitForm.emit(data)
            },
            error => {
              this.alertService.error(error);
            });
        break;
      }
    }
  }

}

