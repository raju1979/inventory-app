import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { InventoryAppRootComponent } from './components/inventory-app-root/inventory-app-root.component';
import { ProductRowComponent } from './components/product-row/product-row.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProductListComponent,
    InventoryAppRootComponent,
    ProductRowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
