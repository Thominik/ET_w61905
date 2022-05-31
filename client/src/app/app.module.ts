import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import {NgxSpinnerModule} from "ngx-spinner";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {HomeModule} from "./home/home.module";
import {AnnouncementComponent} from "./announcement/announcement.component";
import {LoadingInterceptors} from "./core/interceptors/loading.interceptors";


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AnnouncementComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        HomeModule,
        NgxSpinnerModule
    ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptors, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
