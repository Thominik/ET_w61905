import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnouncementDetailsComponent } from './announcement-details/announcement-details.component';
import { AddAnnouncementComponent } from './add-announcement/add-announcement.component';



@NgModule({
  declarations: [
    AnnouncementDetailsComponent,
    AddAnnouncementComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AnnouncementModule { }
