import {Routes} from "@angular/router";

import { Dashboard1Component } from "./views/dashboards/dashboard1.component";
import { Dashboard2Component } from "./views/dashboards/dashboard2.component";
import { Dashboard3Component } from "./views/dashboards/dashboard3.component";
import { Dashboard4Component } from "./views/dashboards/dashboard4.component";
import { Dashboard41Component} from "./views/dashboards/dashboard41.component";
import { Dashboard5Component } from "./views/dashboards/dashboard5.component";

import { StarterViewComponent } from "./views/appviews/starterview.component";
import { LoginComponent } from "./views/appviews/login.component";

import { BlankLayoutComponent } from "./components/common/layouts/blankLayout.component";
import { BasicLayoutComponent } from "./components/common/layouts/basicLayout.component";
import { TopNavigationLayoutComponent } from "./components/common/layouts/topNavigationlayout.component";

//Club
import { ClubComponent } from "./views/club/club.component";
//Sucursales
import { DetallesComponent } from "./views/sucursales/detalles/detalles.component";
import { TablaSucursalComponent } from "./views/sucursales/tabla/tabla.component";
import { AgregarSucursalComponent } from "./views/sucursales/agregar/agregar.component";
//Asistencias
import { TablaAsistenciaComponent } from "./views/asistencias/tabla/tabla.component";
//Socios
import { TablaSocioComponent } from "./views/socios/tabla/tabla.component";
import { AgregarSocioComponent } from "./views/socios/agregar/agregar.component";


export const ROUTES:Routes = [
  // Main redirect
  {path: '', redirectTo: 'starterview', pathMatch: 'full'},

  // App views
  {
    path: 'dashboards', component: BasicLayoutComponent,
    children: [
      {path: 'dashboard1', component: Dashboard1Component},
      {path: 'dashboard2', component: Dashboard2Component},
      {path: 'dashboard3', component: Dashboard3Component},
      {path: 'dashboard4', component: Dashboard4Component},
      {path: 'dashboard5', component: Dashboard5Component}
    ]
  },
  {
    path: 'dashboards', component: TopNavigationLayoutComponent,
    children: [
      {path: 'dashboard41', component: Dashboard41Component}
    ]
  },
  {
    path: '', component: BasicLayoutComponent,
    children: [
      {path: 'starterview', component: StarterViewComponent}
    ]
  },
  {
    path: '', component: BlankLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
    ]
  },
  {
    path: '', component: BasicLayoutComponent,
    children: [
      { path: 'club', component: ClubComponent },
    ]
  },
  {
    path: '', component: BasicLayoutComponent,
    children: [
      { path: 'detalles_sucursal', component: DetallesComponent },
    ]
  },
  {
    path: '', component: BasicLayoutComponent,
    children: [
      { path: 'tabla_sucursal', component: TablaSucursalComponent },
    ]
  },
  {
    path: '', component: BasicLayoutComponent,
    children: [
      { path: 'tabla_asistencia', component: TablaAsistenciaComponent },
    ]
  },
  {
    path: '', component: BasicLayoutComponent,
    children: [
      { path: 'tabla_socio', component: TablaSocioComponent },
    ]
  },
  {
    path: '', component: BasicLayoutComponent,
    children: [
      { path: 'agregar_socio', component: AgregarSocioComponent },
    ]
  },
  {
    path: '', component: BasicLayoutComponent,
    children: [
      { path: 'agregar_sucursal', component: AgregarSucursalComponent },
    ]
  },

  // Handle all other routes
  {path: '**',  redirectTo: 'starterview'}
];
