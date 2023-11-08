import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./components/main/main.component";
import {AppComponent} from "./app.component";
import {RiskComponent} from "./components/risk/risk.component";
import {TaxComponent} from "./components/tax/tax.component";

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'main', component: MainComponent},
  {path: 'risk', component: RiskComponent},
  {path: 'tax', component: TaxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
