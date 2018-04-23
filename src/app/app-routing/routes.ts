import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { ProductsComponent } from '../products/products.component';

export const routes: Routes = [
  { path: 'clothingFactoryFront/home', component: HomeComponent },
  { path: 'clothingFactoryFront/products', component: ProductsComponent },
  { path: '/', redirectTo: 'clothingFactoryFront/home', pathMatch: 'full'}
];
