import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { ChartsModule } from 'ng2-charts';
import { ToastrModule } from "ngx-toastr";
import { MatCarouselModule } from '@ngmodule/material-carousel'
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { AngularMaterialModule } from './app-material.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { JwtInterceptor, ErrorInterceptor } from './_shared/_helpers';

import { HomeLayoutComponent } from './layout/index';
import {
  LoginComponent, RegisterComponent, HeaderComponent, SidenavComponent,
  CarouselComponent, AvatarListComponent
} from './components/index';

import {
  AlertComponent, MyModalComponent, ScheduleComponent
} from './_shared/_components/index';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    HomeLayoutComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent,
    CarouselComponent,
    MyModalComponent,
    AvatarListComponent,
    ScheduleComponent
    ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CKEditorModule,
    HttpClientModule,
    LayoutModule,
    ChartsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatCarouselModule.forRoot(),
    AppRoutingModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  entryComponents: [MyModalComponent]
})
export class AppModule { }
