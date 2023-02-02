import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';//per ngModel
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NomProhibidoDirective } from './directives/nom-prohibido.directive';
import { CookieService } from 'ngx-cookie-service';
import { MayusculasDirective } from './directives/mayusculas.directive';
import { NotNumerosDirective } from './directives/not-numeros.directive';
import { RepitePassDirective } from './directives/repite-pass.directive';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { Compo1Component } from './components/compo1/compo1.component';
import { LogoutComponent } from './components/logout/logout.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NomProhibidoDirective,
    MayusculasDirective,
    NotNumerosDirective,
    RepitePassDirective,
    PagenotfoundComponent,
    Compo1Component,
    LogoutComponent,
    EventListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //per ngModel
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
