import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { MainComponent } from './components/main/main.component';
import { CompanyComponent } from './components/company/company.component';
import { PollutionComponent } from './components/pollution/pollution.component';
import { PollutantComponent } from './components/pollutant/pollutant.component';
import { RiskComponent } from './components/risk/risk.component';
import { NavHeaderComponent } from './components/nav-header/nav-header.component';
import {TaxComponent} from "./components/tax/tax.component";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CompanyComponent,
    PollutionComponent,
    PollutantComponent,
    RiskComponent,
    NavHeaderComponent,
    TaxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
