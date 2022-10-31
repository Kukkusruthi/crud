import {NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './crud/crud.component';
import { UpdateComponent } from './update/update.component';
import { CreateComponent } from './create/create.component';
import {AdminloginComponent} from'./adminlogin/adminlogin.component';
import { InventoryviewComponent } from './inventoryview/inventoryview.component';
import { FrontpageComponent } from './frontpage/frontpage.component';

import { LoginComponent } from './login/login.component';
import {BeveragesComponent} from './beverages/beverages.component';
import { CheckoutpageComponent } from './checkoutpage/checkoutpage.component';
import { VegetableComponent } from './vegetable/vegetable.component';
import { ChocolateComponent } from './chocolate/chocolate.component';
import {FruitComponent} from './fruit/fruit.component';
import {InstantfoodComponent} from './instantfood/instantfood.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CartComponent } from './cart/cart.component';
import { LastpgComponent } from './lastpg/lastpg.component';

const routes: Routes = [
  {path:'adminlogin',component:AdminloginComponent},
  {path:'crud',component:CrudComponent},
  {path:'update',component:UpdateComponent}, 
  {path:'create',component:CreateComponent},
  {path:'inventoryview',component:InventoryviewComponent},
  {path:'',component:FrontpageComponent},
  
  {path:'Login',component:LoginComponent},
  {path :'Homepage',component:HomepageComponent},
  {path:'Beverages',component:BeveragesComponent},
  {path:'Checkoutpage',component:CheckoutpageComponent},
  {path:'Vegetable',component:VegetableComponent},
  {path:'Chocolate',component:ChocolateComponent},
  {path:'Fruit',component:FruitComponent},
  {path:'Instantfood',component:InstantfoodComponent},
  {path:'Cart',component:CartComponent},
  {path: 'Frontpage',component:FrontpageComponent},
  {path:'Lastpg',component:LastpgComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
