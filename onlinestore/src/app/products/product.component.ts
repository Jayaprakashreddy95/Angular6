import { Component, OnInit,OnChanges, Input } from '@angular/core';
import { IProduct } from './product.model';
import { ProductService } from './product.service';
import { ProductDetailComponent } from './product-detail.component'
import{ MessageService } from '../recentproducts/message.service';
import {Injectable} from '@angular/core';
declare var $: any;

@Injectable()


@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
    products: IProduct[];
    mensProducts: IProduct[];
    womensProducts: IProduct[];
    kidsProducts: IProduct[];

    product: IProduct;
    id: number;
    name: string;
    description: string;
    imgsrc: string;
    price: number;
    details: string;
    quantity: number;
    //mensProducts: IProduct[];

    startIndex = 0;
    endIndex = 8;
    
    title: String = 'PRODUCTS';
    @Input() filterText: any; 
    private _userInput: string;
    public get userInput(): string {
        return this._userInput;
    }
    public set userInput(value: string) {
        this._userInput = value;

    }
    constructor(private productService: ProductService,
                private MessageService: MessageService){
        
    }


    ngOnInit(): void{
        this.products = this.productService.getProducts();
        
    }
    
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

    addToRecent(){
        this.setProduct();
        this.MessageService.addToRecent(this.product);
      }
      
    getPriceProducts(){
        
        this.products = this.productService.getPriceProducts(); 
        
        }

    getMensProducts(){
        this.products = this.productService.getMensProducts();
    }
 

/*
    getProducts(){
        
        if(this.products = this.productService.getProducts()){
             //button to display womens
    
              $("#allproducts").show();
              $("#womenproducts").show();
             $("#kidsproducts").hide();
             $("#mensproducts").hide();
 
              }  
           
     }

    getMensProducts(){
        
        if(this.mensProducts = this.productService.getMensProducts()){
             //button to display womens
            
              $("#mensproducts").show();
              $("#allproducts").hide();
              $("#womenproducts").hide();
              $("#kidsproducts").hide();
             
 
              }  
           
     }

     getWomensProducts(){
        
        if(this.womensProducts = this.productService.getWomensProducts()){
             //button to display womens
             $("#womenproducts").show();
             $("#kidsproducts").hide();
             $("#mensproducts").hide();
             $("#allproducts").hide();
           
         
 
              }  
           
     }
    getKidsProducts(){
        
        if(this.kidsProducts = this.productService.getKidsProducts()){
             //button to display womens
             $("#kidsproducts").show();
             $("#mensproducts").hide();
             $("#allproducts").hide();
             $("#womenproducts").hide();
         
 
              }  
           
     }
 */

   getArrayFromNumber(length: number){
       return Array(length/8);
   }

   updateIndex(pageIndex: number){
       this.startIndex = pageIndex * 8;
       this.endIndex = this.startIndex + 8;
   }



}