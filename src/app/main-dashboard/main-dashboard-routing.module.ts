import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  // {path:'indroduction',component:IntroductionComponent},
  {path:'',component:NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainDashboardRoutingModule { }
