import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";

import { AgregarSucursalComponent } from "./agregar.component";

@NgModule({
  declarations: [
    AgregarSucursalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
  ],
  exports: [
    AgregarSucursalComponent
  ],
})

export class AgregarSucursalModule {
}
