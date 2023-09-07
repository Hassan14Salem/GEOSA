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
    TechPage3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
