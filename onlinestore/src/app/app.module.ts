import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from  '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './products/product.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/notFound.component';
import { SignupComponent } from './signup/signup.component';
import { ProductSearchPipe } from './products/product-search.pipe';
import { ProductDetailComponent } from './products/product-detail.component';
import { ProductService } from './products/product.service';
import { RouterGuards } from './products/Router.guard';
import { MyCasePipe } from './products/myCasePipe.pipe';
import { MyDiscountPipe } from './products/discount.pipe';
import { MyCurrencyPipe } from './products/myCurrencyPipe.pipe';
import { CartComponent } from './cart/cart.component';
import { MensproductsComponent } from './products/mensproducts/mensproducts.component';
import { WomensproductsComponent } from './products/womensproducts/womensproducts.component';
import { KidsproductsComponent } from './products/kidsproducts/kidsproducts.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginComponent } from './login/login.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CartService } from './cartservice';
import { WishService } from './wishlist/wish.service';
import { RecentproductsComponent } from './recentproducts/recentproducts.component';
import { MessageService } from './recentproducts/message.service';
import { CheckoutComponent } from './checkout/checkout.component';




@NgModule({
  // all module you will declare here
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'products', component: ProductComponent},
      {path: 'products/:id', canActivate:[RouterGuards],
     component: ProductDetailComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'cart', component: CartComponent},
      {path: 'login', component: LoginComponent},
      {path: 'signup', component: SignupComponent},
      {path: 'mensproducts', component: MensproductsComponent},
      {path: 'womensproducts', component: WomensproductsComponent},
      {path: 'kidsproducts', component: KidsproductsComponent},
      {path: 'home', component: HomeComponent},
      {path: 'aboutus', component: AboutusComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'notFound', component: NotFoundComponent},
      {path: 'wishlist', component: WishlistComponent},
      {path: 'recentproducts', component: RecentproductsComponent},
      {path: 'checkout', component: CheckoutComponent},

    ])
  ],
  //only first component
  bootstrap: [AppComponent],

  // all components and pipes
  declarations: [
    AppComponent,
    ProductComponent,
    AboutusComponent,
    ProfileComponent,
    HomeComponent,
    NotFoundComponent,
    SignupComponent,
    ProductSearchPipe,
    ProductDetailComponent,
    MyCasePipe,
    MyDiscountPipe,  
    MyCurrencyPipe,
    CartComponent,
    MensproductsComponent,
    WomensproductsComponent,
    KidsproductsComponent,
    NavigationComponent,
    LoginComponent,
    WishlistComponent,
    RecentproductsComponent,
    CheckoutComponent,
  
  ],
 
  //all services declare here
  providers: [
    ProductService,
    CartService,
    WishService,
    MessageService,
    RouterGuards
  ]

})

export class AppModule { 

}

