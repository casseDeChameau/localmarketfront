import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http' ;
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/Home/nav-bar/nav-bar.component';
import { ProductListComponent } from './components/Seller/product-list/product-list.component';
import { ProductAddComponent } from './components/Seller/product-add/product-add.component';
import { SellerComponent } from './components/Seller/seller/seller.component';
import { HomeContentComponent } from './components/Home/home-content/home-content.component';
import { CustomerComponent } from './components/Customer/customer/customer.component';
import { FooterComponent } from './components/Home/footer/footer.component';
import { ProductResearchComponent } from './components/Customer/product-research/product-research.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductFilterPipe } from './pipes/product-filter.pipe';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    ProductListComponent,
    ProductAddComponent,
    HomeContentComponent,
    CustomerComponent,
    SellerComponent,
    ProductResearchComponent,
    ProductFilterPipe,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({ // @agm/core
      apiKey: 'AIzaSyDFTKbcSXEN22pUx3zfaabEOGyy7oOZtmI',
    }),
    AgmDirectionModule,     // agm-direction
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class YourAppModule {}
