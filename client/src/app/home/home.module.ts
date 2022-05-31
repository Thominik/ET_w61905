import {HomeComponent} from "./home/home.component";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})

export class HomeModule { }
