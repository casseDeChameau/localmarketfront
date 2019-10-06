import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeContentComponent } from './components/Home/home-content/home-content.component';
import { SellerComponent } from './components/Seller/seller/seller.component';
import { CustomerComponent } from './components/Customer/customer/customer.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutResolver } from './resolvers/logout.resolver';


const routes: Routes = [
  { path: 'home', component: HomeContentComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: HomeContentComponent, resolve: [LogoutResolver] },
  { path: 'customer', component: CustomerComponent },
  { path: 'seller', component: SellerComponent },
  { path: 'seller/refresh', component: SellerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
