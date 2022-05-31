import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home/home.component";
import {AnnouncementComponent} from "./announcement/announcement.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'announcement', component: AnnouncementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
