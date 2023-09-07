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



  {path:"**",component:NotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
