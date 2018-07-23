import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";

import { TablaAsistenciaComponent } from "./tabla.component";

@NgModule({
  declarations: [
    TablaAsistenciaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
  ],
  exports: [
    TablaAsistenciaComponent
  ],
})

export class TablaAsistenciaModule {
}
