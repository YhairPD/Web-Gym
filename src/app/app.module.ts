import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from "@angular/router";
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import {ROUTES} from "./app.routes";
import { AppComponent } from './app.component';

// App views
import {DashboardsModule} from "./views/dashboards/dashboards.module";
import {AppviewsModule} from "./views/appviews/appviews.module";

// App modules/components
import {LayoutsModule} from "./components/common/layouts/layouts.module";

// Club Module
import { ClubModule } from './views/club/club.module';
// Sucursales Module
import { DetallesSucursalModule } from './views/sucursales/detalles/detalles.module';
import { TablaSucursalModule } from './views/sucursales/tabla/tabla.module';
import { AgregarSucursalModule } from './views/sucursales/agregar/agregar.module';
//Asistencia Module
import { TablaAsistenciaModule } from './views/asistencias/tabla/tabla.module';
//Socio Module
import { TablaSocioModule } from './views/socios/tabla/tabla.module';
import { AgregarSocioModule } from './views/socios/agregar/agregar.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DashboardsModule,
    LayoutsModule,
    AppviewsModule,
    ClubModule,
    DetallesSucursalModule,
    TablaSucursalModule,
    TablaAsistenciaModule,
    TablaSocioModule,
    AgregarSocioModule,
    AgregarSucursalModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
