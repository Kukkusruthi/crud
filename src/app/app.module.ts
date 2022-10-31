import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudComponent } from './crud/crud.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { InventoryviewComponent } from './inventoryview/inventoryview.component';
import { BeveragesComponent } from './beverages/beverages.component';
import { CheckoutpageComponent } from './checkoutpage/checkoutpage.component';
import { ChocolateComponent } from './chocolate/chocolate.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { FruitComponent } from './fruit/fruit.component';
import { HomepageComponent } from './homepage/homepage.component';
import { InstantfoodComponent } from './instantfood/instantfood.component';
import { LoginComponent } from './login/login.component';
import { VegetableComponent } from './vegetable/vegetable.component';
import { CartComponent } from './cart/cart.component';
import { LastpgComponent } from './lastpg/lastpg.component';

@NgModule({
  declarations: [
    AppComponent,
    CrudComponent,
    CreateComponent,
    UpdateComponent,
 
    AdminloginComponent,
    InventoryviewComponent,
    BeveragesComponent,
    CartComponent,
    CheckoutpageComponent,
    ChocolateComponent,
    FrontpageComponent,
    FruitComponent,
    HomepageComponent,
    InstantfoodComponent,
    LoginComponent,
    VegetableComponent,
    CartComponent,
    LastpgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
