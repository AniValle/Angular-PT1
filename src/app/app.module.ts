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

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NomProhibidoDirective,
    MayusculasDirective,
    NotNumerosDirective,
    RepitePassDirective,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //per ngModel
    ReactiveFormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
