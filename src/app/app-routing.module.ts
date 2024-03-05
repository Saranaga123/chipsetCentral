import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { ViewItemComponent } from './pages/view-item/view-item.component';
import { BuyComponent } from './pages/buy/buy.component';

const routes: Routes = [
  {path: '', redirectTo: 'Landing', pathMatch: 'full'},
  { path: 'Landing', component: LandingComponent },
  { path: 'Product/:model', component: ViewItemComponent },
  { path: 'Buy/:model', component:BuyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
