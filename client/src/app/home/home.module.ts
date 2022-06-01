import {HomeComponent} from "./home/home.component";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    HomeComponent
  ],
    imports: [
        CommonModule,
        RouterModule
    ],
  exports: [
    HomeComponent
  ]
})

export class HomeModule { }
