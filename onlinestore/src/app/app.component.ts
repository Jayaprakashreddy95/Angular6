import { Component,OnInit, OnDestroy } from '@angular/core';
import { AppModal } from  './app.model';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CartService } from './cartservice';
import { IProduct } from './products/product.model';
import { ProductService } from './products/product.service';
import {Injectable} from '@angular/core';
import { Subscription } from 'rxjs';
declare var $: any;

@Injectable()

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'onlinestore';
  
  products: IProduct[];
  filterText: string;
  number: any;
  subscription: Subscription;
  

  constructor(
                private route: ActivatedRoute,
                private router: Router,
                private cartService: CartService,
                private productService: ProductService,
  ) { 
    this.subscription = this.productService.getNumber().subscribe(number => { this.number = number });
   
    }
    ngOnDestroy(){
      this.subscription.unsubscribe();
    }

    ngOnInit() {
    }
  

  
          //print button
          printPage() {
            window.print();
          }
        
          clickSearch(){

            if(this.filterText.length)
            {
              $( "#routeroutlet" ).hide();
              $( "#Productcomponent" ).show();
            }
          }

          ShowrouterLink()
          {
            $( "#routeroutlet" ).show();
            $( "#Productcomponent" ).hide();

          }


          

 
  
}
