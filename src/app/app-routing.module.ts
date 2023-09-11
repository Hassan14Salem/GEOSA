import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FilesComponent } from './files/files.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateTransActionComponent } from './create-trans-action/create-trans-action.component';
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

const routes: Routes = [
  {path:"",component:HomeComponent,pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"files",component:FilesComponent},
  {path:"navbar",component:NavbarComponent},
  {path:"createTransAction",component:CreateTransActionComponent},
  {path:"transaction",component:TransActionComponent},
  {path:"secondTranaction",component:SecondTransActionComponent},
  {path:"info",component:InformationComponent},
  {path:"technical",component:TechPage1Component},
  {path:"tech-process-action",component:TechProcessActionComponent},
  {path:"tech-page3",component:TechPage3Component},
  {path:"managerOfTech",component:MangerOfTechComponent},
  {path:"ManagerP02",component:MangerOfTechP02Component},
  {path:"GISP01",component:GISP01Component},
  {path:"GISP02",component:GISP02Component},
  {path:"GISP03",component:GISP03Component},
  {path:"GISP04",component:GISP04Component},

  {path:"managerGISP01",component:ManagerOfGISP01Component},
  {path:"managerGISP01",component:ManagerOfGISP02Component},
  {path:"managerGISP01",component:ManagerOfGISP03Component},





  {path:"**",component:NotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
