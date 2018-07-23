import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";

import { ClubComponent } from "./club.component";

import {PeityModule } from '../../components/charts/peity';
import {SparklineModule } from '../../components/charts/sparkline';

@NgModule({
  declarations: [
    ClubComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    PeityModule,
    SparklineModule
  ],
  exports: [
    ClubComponent
  ],
})

export class ClubModule {
}
