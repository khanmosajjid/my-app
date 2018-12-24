import {Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {WebsiteComponent} from './website/website.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {EMailComponent} from './e-mail/e-mail.component';
import {VideosComponent} from './videos/videos.component';
import {HeaderComponent} from './header/header.component';
import {DashboardComponent} from './dashboard/dashboard.component';

export const routes: Routes = [

  {path: '', redirectTo: '/login' , pathMatch: 'full'},

  {
    path: 'login', component: LoginComponent },
  {path: 'sign-up', component: SignUpComponent},

  {path: '' , component: DashboardComponent, children: [
      {path: 'videos' , component: VideosComponent},
    {path: 'e-mail' , component: EMailComponent},

      ]
  },



];
