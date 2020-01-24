import * as $ from 'jquery';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './auth-page/login-page/login-page.component';
import { SignupPageComponent } from './auth-page/signup-page/signup-page.component';
import { FormPageComponent } from './form-page/form-page.component';
import { ChartPageComponent } from './chart-page/chart-page.component';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component:  SignupPageComponent},
    { path: 'chart', component:  ChartPageComponent},
  { path: 'form', component:  FormPageComponent},
];

@NgModule({
  declarations: [AppComponent, LoginPageComponent, SignupPageComponent, FormPageComponent, ChartPageComponent, HomePageComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}


