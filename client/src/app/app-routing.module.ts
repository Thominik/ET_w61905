import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home/home.component";
import {AnnouncementComponent} from "./announcement/announcement.component";
import {LoginComponent} from "./account/login/login.component";
import {RegisterComponent} from "./account/register/register.component";
import {AnnouncementDetailsComponent} from "./announcement/announcement-details/announcement-details.component";
import {AddAnnouncementComponent} from "./announcement/add-announcement/add-announcement.component";
import {ContactComponent} from "./contact/contact/contact.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'announcement', component: AnnouncementComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'announcement/details', component: AnnouncementDetailsComponent},
  {path: 'announcement/add', component: AddAnnouncementComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
