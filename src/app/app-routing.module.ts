import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeContentComponent } from './components/Home/home-content/home-content.component';
import { SellerComponent } from './components/Seller/seller/seller.component';
import { CustomerComponent } from './components/Customer/customer/customer.component';


const routes: Routes = [
  { path: 'home', component: HomeContentComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'seller', component: SellerComponent },
  { path: 'seller/refresh', component: SellerComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
