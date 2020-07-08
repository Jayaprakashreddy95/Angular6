import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product.model';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import { CartService } from '../cartservice';
import { ProductService } from './product.service';
import { WishService} from '../wishlist/wish.service';
import { MessageService } from '../recentproducts/message.service'


@Component({
  selector:'productDetailComponent',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css']

})

export class ProductDetailComponent implements OnInit{
  private _success = new Subject<string>();

    successMessage = ''; //added to cart
   
    product: IProduct;
    
    id: number;
    name: string;
    description: string;
    imgsrc: string;
    price: number;
    details: string;
    quantity: number;
 

    constructor(private route: ActivatedRoute,
                private router: Router,
                private cartService: CartService,
                private wishService: WishService,
                private ProductService: ProductService,
                private MessageService: MessageService,
                 ) {}

    setProduct()
    {
     let product1 = new IProduct();
        
      product1.productName=this.name;
      product1.description=this.description;
      product1.imgsrc=this.imgsrc;
      product1.price=this.price;
      product1.details=this.details;
      product1.quantity=this.quantity;

      this.product=product1;
    };


  public count: number = 0;
  sendNumber() {
    this.ProductService.sendNumber(this.increment());
  }

  increment() {
    this.count += 1;
    console.log("done");
    
    return this.count;
  }
  decrement(){
    this.count += -1;
    return this.count;
  }
    ngOnInit(): void
    {
    
      //params and query params
        this.id = this.route.snapshot.params['id'];
        this.route.queryParams
        .subscribe((data) => {
            this.name = data['name'];
            this.description = data['desc'];
            this.price = data['price'];
            this.imgsrc = data['imgsrc'];
            this.details = data['details'];
            this.quantity = data['quantity'];
        
        });
        
        // msg for add to card
        this._success.subscribe(message => this.successMessage = message);
        this._success.pipe(debounceTime(3000))
        .subscribe(() => this.successMessage = '');


    }
    
    //button for previous page
        onBack(){
            this.router.navigate(['/products']);
        }
 
        //window alert
        addToCart() {
          this.setProduct();
          this.cartService.addToCart(this.product);
          this._success.next('Success! Your product has been added to the cart!');
        }

        addToWish(){
          this.setProduct();
          this.wishService.addToWish(this.product);
          //this.router.navigate(['/login']);
        }

        addToRecent(){
          this.setProduct();
          this.MessageService.addToRecent(this.product);
        }


    

        showModal: boolean;
        show()
        {
          this.showModal = true; // Show-Hide Modal Check
          
        }
        //Bootstrap Modal Close event
        hide()
        {
          this.showModal = false;
        }
        
        //added to cart event
      
        changeSuccessMessage() {
          this._success.next('Success! Your product has been added to the cart!');
        }
  

        changeWishlistMessage() {
          this._success.next('Added to Wishlist!');
        }

       

    }
