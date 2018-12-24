import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
  MatButtonModule, MatCardModule, MatInputModule, MatMenuModule,
  MatChipsModule, MatToolbarModule, MatIconModule, MatSnackBarModule
} from '@angular/material';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {WebsiteComponent} from './website/website.component';

import {RouterModule, Routes} from '@angular/router';
import {routes} from './routes';
import {API_URL, LoginServices, XYZ_SOMETHING} from './services/login.services';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VideosComponent } from './videos/videos.component';
import { EMailComponent } from './e-mail/e-mail.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import {StoreModule} from '@ngrx/store';
import {InvidzServices} from './services/invidz.services';
import {reducers} from './reducers';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WebsiteComponent,
    HeaderComponent,
    DashboardComponent,
    VideosComponent,
    EMailComponent,
    SignUpComponent,



  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    MatChipsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument()



  ],
  providers: [
    LoginServices,
    InvidzServices,
    {provide: API_URL, useValue: 'http://hello.com'},
    {provide: XYZ_SOMETHING, useValue: 'some random value'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
