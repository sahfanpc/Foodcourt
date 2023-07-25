import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainDashboardRoutingModule } from './main-dashboard-routing.module';
import { IntroductionComponent } from './introduction/introduction.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
  declarations: [
    IntroductionComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MainDashboardRoutingModule,
    MatSidenavModule
  ]
})
export class MainDashboardModule { }
