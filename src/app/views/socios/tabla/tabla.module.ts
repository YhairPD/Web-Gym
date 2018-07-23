import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";

import { TablaSocioComponent } from "./tabla.component";

@NgModule({
  declarations: [
    TablaSocioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
  ],
  exports: [
    TablaSocioComponent
  ],
})

export class TablaSocioModule {
}
