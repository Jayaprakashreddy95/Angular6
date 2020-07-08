import { Component, OnInit } from '@angular/core';
import { WishService } from './wish.service';
declare var $: any;

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  items;
 
  clearCart() {
    this.items= [];
   // this.wishService.saveWish();
    /*  
    $("#cart").hide();
    $("#empty").show(); 
    */
    sessionStorage.clear();
  }


  // Remove all items from cart
 removeItemFromWish(item) {
    //for(var i = 0; i < this.items.length; i++) {
        //if(this.items.name === name){
        //this.items.splice(i, 1);
        //break;
    //}
    var itemIndex = this.items.indexOf(item)
    //if (itemIndex > -1) {
        this.items.splice(itemIndex, 1);
            
   // }
   // this.wishService.saveWish(); 
   
  }
     

  constructor( private wishService: WishService) { }

  ngOnInit(): void {
    this.items = this.wishService.getItems();
  
 
  }
  

}
