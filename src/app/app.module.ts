import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import {AppRouterModule} from "./app.routes";
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {
  BASE_URL_CARS, BASE_URL_CUSTOMERS, BASE_URL_RENTEDCARS, BASE_URL_OAUTH2_TOKEN_REQUEST,
  CLIENT_APP_NAME, CLIENT_APP_SECRET
} from './app.tokens';

import { HomeComponent } from './home/home.component';
import {CarSearchModule} from "./car-search/car-search.module";
import {MyCarsModule} from "./my-cars/my-cars.module";
import {HomeModule} from "./home/home.module";
import {OAuthModule} from 'angular-oauth2-oidc';


const BASE_URL_CARS_PRODUCTION = "https://localhost:8080/cars";
const BASE_URL_CUSTOMERS_PRODUCTION = "https://localhost:8080/customers";
const BASE_URL_RENTEDCARS_PRODUCTION = "https://localhost:8080/rentedCars";
const BASE_URL_OAUTH2_TOKEN_REQUEST_PRODUCTION = "https://localhost:8080/oauth/token";
const CLIENT_APP_NAME_PRODUCTION = "my-trusted-client-app";
const CLIENT_APP_SECRET_PRODUCTION = "Pa$$w0rd";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouterModule,
    CarSearchModule,
    MyCarsModule,
    HomeModule
  ],
  providers: [
    {provide:BASE_URL_CARS, useValue: BASE_URL_CARS_PRODUCTION},
    {provide:BASE_URL_CUSTOMERS, useValue: BASE_URL_CUSTOMERS_PRODUCTION},
    {provide:BASE_URL_RENTEDCARS, useValue: BASE_URL_RENTEDCARS_PRODUCTION},
    {provide:BASE_URL_OAUTH2_TOKEN_REQUEST, useValue: BASE_URL_OAUTH2_TOKEN_REQUEST_PRODUCTION},
    {provide:CLIENT_APP_NAME, useValue: CLIENT_APP_NAME_PRODUCTION},
    {provide:CLIENT_APP_SECRET, useValue: CLIENT_APP_SECRET_PRODUCTION}


  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
