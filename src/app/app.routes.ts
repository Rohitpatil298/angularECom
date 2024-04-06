import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginformComponent } from './loginform/loginform.component';

import { UserFormComponent } from './user-form/user-form.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginformComponent,
    title: 'login',
  },
  {
    path: 'products',
    component: AboutusComponent,
    title: 'products',
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'productdetail/:productid',
    component: ProductDetailsComponent,
    title: 'productdetail',
  },
  {
    path: 'adduser',
    component: UserFormComponent,
    title: 'Adduser',
  },
  {
    path: 'cart',
    component: CartComponent,
    title: 'cart',
  },
  {
    path: '**',
    component: PagenotfoundComponent,
    title: 'error404',
  },
];
