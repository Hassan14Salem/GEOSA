import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FilesComponent } from './files/files.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateTransActionComponent } from './create-trans-action/create-trans-action.component';
import { RightNavBarComponent } from './right-nav-bar/right-nav-bar.component';
import { TransActionComponent } from './trans-action/trans-action.component';
import { SecondTransActionComponent } from './second-trans-action/second-trans-action.component';
import { InformationComponent } from './information/information.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TechPage1Component } from './tech-page1/tech-page1.component';
import { TechProcessActionComponent } from './tech-process-action/tech-process-action.component';
import { TechPage3Component } from './tech-page3/tech-page3.component';
import { MangerOfTechComponent } from './manger-of-tech/manger-of-tech.component';
import { MangerOfTechP02Component } from './manger-of-tech-p02/manger-of-tech-p02.component';
import { GISP01Component } from './gisp01/gisp01.component';
import { GISP02Component } from './gisp02/gisp02.component';
import { GISP03Component } from './gisp03/gisp03.component';
import { GISP04Component } from './gisp04/gisp04.component';
import { ManagerOfGISP01Component } from './manager-of-gisp01/manager-of-gisp01.component';
import { ManagerOfGISP02Component } from './manager-of-gisp02/manager-of-gisp02.component';
import { ManagerOfGISP03Component } from './manager-of-gisp03/manager-of-gisp03.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    FilesComponent,
    NavbarComponent,
    CreateTransActionComponent,
    RightNavBarComponent,
    TransActionComponent,
    SecondTransActionComponent,
    InformationComponent,
    NotFoundComponent,
    TechPage1Component,
    TechProcessActionComponent,
    TechPage3Component,
    MangerOfTechComponent,
    MangerOfTechP02Component,
    GISP01Component,
    GISP02Component,
    GISP03Component,
    GISP04Component,
    ManagerOfGISP01Component,
    ManagerOfGISP02Component,
    ManagerOfGISP03Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
