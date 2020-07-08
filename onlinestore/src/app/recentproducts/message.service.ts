import { Injectable } from '@angular/core';
import { IProduct } from '../products/product.model';
declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class MessageService {
   products = new Array();
   

   addToRecent(product: IProduct) 
    {
      this.products.push(product);
      }
      
      getItems() {
        return this.products;
      } 

    constructor() {
  
  }
}