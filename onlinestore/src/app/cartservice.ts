import { Injectable } from '@angular/core';
import { IProduct } from './products/product.model';
import { Item } from './item.entity';
declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class CartService {
  addToWish(product: IProduct) {
    throw new Error("Method not implemented.");
  }
   products = new Array();
   

   addToCart(product: IProduct) 
    {
      this.products.push(product);
      this.saveCart();
    
      }
      getItems() {
        return this.products;
      } 

      saveCart() {
      sessionStorage.setItem('product', JSON.stringify(this.products));
      }

      // Load cart
      loadCart() {
      this.products = JSON.parse(sessionStorage.getItem('product'));
      }

/*
      // Count cart 
    totalCount(){
    var totalCount = 0;
    for(var item in this.products) {
      totalCount += this.products[item].count;
    }
    return totalCount;
    }
      
       // Total cart
      totalCart() {
      var totalCart = 0;
      for(var item in this.products) {
      totalCart += this.products[item].price * this.products[item].count;
      }
       return Number(totalCart.toFixed(2));
      }

      displayCart(){
        $('.total-cart').html(this.totalCart());
        $('.total-count').html(this.totalCount());
      }
*/
    constructor() {
    if(sessionStorage.getItem("product") != null) {
      this.loadCart();
    } 
  }

 

  
   

}