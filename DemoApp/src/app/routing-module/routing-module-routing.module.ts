import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccuracyComponent } from './accuracy/accuracy.component';
import { GraphComponent } from './graph/graph.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  {path:'home',component: HomeComponent},
  {path:'login',component: LoginComponent},
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'result',component:ResultComponent},
  {path:'graph',component:GraphComponent},
  {path:'accuracy',component:AccuracyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModuleRoutingModule { }
