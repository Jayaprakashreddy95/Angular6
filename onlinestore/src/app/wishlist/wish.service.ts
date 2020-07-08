import { Injectable } from '@angular/core';
import { IProduct } from '../products/product.model';
declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class WishService {
   products = new Array();
   

   addToWish(product: IProduct) 
    {
      this.products.push(product);
      //this.saveWish();
    
      }
      getItems() {
        return this.products;
      } 
/*
      saveWish() {
      sessionStorage.setItem('product', JSON.stringify(this.products));
      }

      // Load cart
      loadWish() {
      this.products = JSON.parse(sessionStorage.getItem('product'));
      }
*/
    constructor() {
      /*
    if(sessionStorage.getItem("product") != null) {
      this.loadWish(); 
    } 
    */
  }
}