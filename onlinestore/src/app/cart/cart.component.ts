import { Component, OnInit } from '@angular/core';
import { CartService } from '../cartservice';
import { CartModal} from '../cart/cart.model';
import { Item } from '../item.entity';
import { empty } from 'rxjs';
import { IProduct } from '../products/product.model';
declare var $: any;



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  mymodel = new CartModal('YOURS10');
  items;
  coupon : string;
  totalprice : Number = 0;
  discount: Number = 0;
 /*
  onSubmit() {
    let discount = 0;
    this.coupon = this.mymodel.coupon;
    if(this.coupon == 'LUCKY100')
    {
      discount += this.getTotal() - 10;
     
          
    } else{
     alert('Enter valid coupon'); 
     return discount;
    } 
    
    }
   */ 
 
  
 
  clearCart() {
    this.items= [];
    this.cartService.saveCart();  
    $("#cart").hide();
    $("#empty").show(); 
    sessionStorage.clear();
  }

  getTotal(){
    let total = 0;
    for (var i = 0; i < this.items.length; i++) {
        if (this.items[i].price) {
            total += this.items[i].price * this.items[i].quantity;
            this.totalprice = total;
        }
    }
    return total;
   
}

onsubmit(){
 
  let discount = 0;  
  //this.coupon = this.mymodel.coupon;
  if ( this.coupon === "YOURS10" ){
    discount += this.getTotal() - 10;
    $( "#msg" ).text( "10$ discount applied." ).show();  
  return discount; 
    //discount += this.getTotal() + this.getTotal() * 0.13;
  } 
  else if (this.coupon === null && this.coupon != "YOURS10"){
    $( "#msg" ).text( " Enter a valid Coupon" ).hide(); 
 
  }
  else{
    $( "#msg" ).text( " Enter a valid Coupon" ).hide(); 

  } 
}

taxes(){
  let taxes = 0;
  taxes +=  this.getTotal() * 0.13;
  return taxes;
  }

grandTotal(){
  let grandTotal = 0;
  grandTotal += this.onsubmit() + this.taxes() + this.shipping() ;
  return grandTotal;
}

shipping(){
  let shipping = 15;
  if(this.getTotal() <= 60){
    $( ".shipping-info" ).hide();
    return shipping;
  }else{
    $( ".shipping-info" ).text( " Yay! Free delivery on this order. " ).show();
    return 0;
  }
}


//Quantity increment
increaseItemCount(item){
  item.quantity++;
}
//Quantity decrement
decreaseItemCount(item){
  item.quantity--;
  if (item.quantity <= 0) {
    item.quantity = 0;
    var itemIndex = this.items.indexOf(item);
    if (itemIndex > -1) {
        this.items.splice(itemIndex, 1);
        $("#cart").hide();
        $("#empty").show(); 
    }
  }
  sessionStorage.clear();
  
}



  // Remove all items from cart
 removeItemFromCartAll(item) {
    //for(var i = 0; i < this.items.length; i++) {
        //if(this.items.name === name){
        //this.items.splice(i, 1);
        //break;
    //}
    var itemIndex = this.items.indexOf(item)
    //if (itemIndex > -1) {
        this.items.splice(itemIndex, 1);
            
   // }
    this.cartService.saveCart(); 
   
  }

  constructor( private cartService: CartService) {
    
   }

  ngOnInit(): void {
  
    this.items = this.cartService.getItems();

    
  
    // for cart show and hide
    if (this.getTotal() === 0){
      $("#cart").hide();
      $("#empty").show(); 
  } else {
    $("#empty").hide();
  }

  }
}


  



