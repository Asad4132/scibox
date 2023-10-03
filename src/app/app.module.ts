import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './comps/navbar/navbar.component';
import { FooterComponent } from './comps/footer/footer.component';
import { AboutComponent } from './comps/about/about.component';
import { HomeComponent } from './comps/home/home.component';
import { HwoperateComponent } from './comps/hwoperate/hwoperate.component';
import { ChooseusComponent } from './comps/chooseus/chooseus.component';
import { PricingComponent } from './comps/pricing/pricing.component';
import { CareerComponent } from './comps/career/career.component';
import { BlogsComponent } from './comps/blogs/blogs.component';
import { Footer2Component } from './comps/footer2/footer2.component';
import { FormsModule } from '@angular/forms';
import { Service1Component } from './comps/service1/service1.component';
import { Service2Component } from './comps/service2/service2.component';
import { Service3Component } from './comps/service3/service3.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy, PathLocationStrategy} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    HwoperateComponent,
    ChooseusComponent,
    PricingComponent,
    CareerComponent,
    BlogsComponent,
    Footer2Component,
    Service1Component,
    Service2Component,
    Service3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: LocationStrategy,useClass: PathLocationStrategy}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
