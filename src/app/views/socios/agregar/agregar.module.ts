import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";

import { AgregarSocioComponent } from "./agregar.component";

@NgModule({
  declarations: [
    AgregarSocioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
  ],
  exports: [
    AgregarSocioComponent
  ],
})

export class AgregarSocioModule {
}
