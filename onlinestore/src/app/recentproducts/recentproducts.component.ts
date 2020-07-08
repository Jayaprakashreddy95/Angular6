import { Component, OnInit } from '@angular/core';
import { MessageService } from './message.service';

@Component({
  selector: 'app-recentproducts',
  templateUrl: './recentproducts.component.html',
  styleUrls: ['./recentproducts.component.css']
})
export class RecentproductsComponent implements OnInit {

  items;
 
  clearCart() {
    this.items= [];
    sessionStorage.clear();
  }


  // Remove all items from cart
 removeItemFromWish(item) {
    var itemIndex = this.items.indexOf(item)
        this.items.splice(itemIndex, 1);

  }
     

  constructor( private MessageService: MessageService) { }

  ngOnInit(): void {
    this.items = this.MessageService.getItems();
  
 
  }
  

}
