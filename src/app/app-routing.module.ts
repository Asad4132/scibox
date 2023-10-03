import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './comps/about/about.component';
import { BlogsComponent } from './comps/blogs/blogs.component';
import { CareerComponent } from './comps/career/career.component';
import { ChooseusComponent } from './comps/chooseus/chooseus.component';
import { HomeComponent } from './comps/home/home.component';
import { HwoperateComponent } from './comps/hwoperate/hwoperate.component';
import { PricingComponent } from './comps/pricing/pricing.component';
import { Service1Component } from './comps/service1/service1.component';
import { Service2Component } from './comps/service2/service2.component';
import { Service3Component } from './comps/service3/service3.component';

const routes: Routes = [
  {path:'aboutus',component:AboutComponent},
  {path:'', component:HomeComponent},
  {path:'howweoperate', component:HwoperateComponent},
  {path:'chooseus',component:ChooseusComponent},
  {path:'pricing', component: PricingComponent},
  {path:'career', component: CareerComponent},
  {path:'blogs', component:BlogsComponent},
  {path:'medicalwriter', component:Service1Component},
  {path:'medicalscribe', component:Service2Component},
  {path:'callrepresentatives',component:Service3Component}
];

@NgModule({
  imports:[RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top',
    anchorScrolling: 'enabled'
  })
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
