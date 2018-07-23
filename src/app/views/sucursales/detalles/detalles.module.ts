import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";

import { DetallesComponent } from "./detalles.component";

@NgModule({
  declarations: [
    DetallesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
  ],
  exports: [
    DetallesComponent
  ],
})

export class DetallesSucursalModule {
}
