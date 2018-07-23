import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";

import { TablaSucursalComponent } from "./tabla.component";

@NgModule({
  declarations: [
    TablaSucursalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
  ],
  exports: [
    TablaSucursalComponent
  ],
})

export class TablaSucursalModule {
}
