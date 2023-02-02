import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { Compo1Component } from './components/compo1/compo1.component';
import { LogoutComponent } from './components/logout/logout.component';
import { EventListComponent } from './components/event-list/event-list.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'/login', // pagina que aparecera por defecto.
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'compo1',
    component:Compo1Component
  },
  {
    path:'logout',
    component:LogoutComponent
  },
  {
    path:'events',
    component:EventListComponent
  },
  {
    path:'**',  //cuando la persona se equivoque con la ruta // este path tiene que estar al final
    component:PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
