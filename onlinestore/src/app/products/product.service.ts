import { Injectable } from '@angular/core';
import { IProduct } from './product.model';
import { Subject, Observable } from 'rxjs';

@Injectable()

export class ProductService {
    getProducts() {
        return[
         {
           "productid": 1,
           "imgsrc": "../../assets/w1.jpg",
           "productName": "Varanga",
           "description": "Women Yellow & Green Printed Straight Kurta",
           "details": "Yellow and green printed straight kurta has a notched round neck three-quarter sleeves straight hem side slits",
           "price": 20,
           "category": "women",
           "quantity":1
         },
         {
           "productid": 2,
           "imgsrc": "../../assets/w2.jpg",
           "productName": "GERUA",
           "description": "Women Red & White Striped Maxi Dress",
           "details": "Red and white striped woven A-line dress, has a round neck, three-quarter sleeves, flared hem",
           "price": 40,
           "category": "women",
           "quantity":1
         },
         {
           "productid": 3,
           "imgsrc": "../../assets/w3.jpg",
           "productName": "Ishin",
           "description": "Yellow & Pink Polycotton solid saree",
           "details": "The model is wearing a blouse from our stylists collection,see the image for a mock-up of what the actual blouse would look like",
           "price": 60,
           "category": "women",
           "quantity":1
         },
         {
           "productid": 4,
           "imgsrc": "../../assets/k1.jpg",
           "productName": "U.s polo",
           "description": "Boys Blue & Green Regular Fit Striped Casual Shirt",
           "details": "Blue and Green striped casual shirt, has a spread collar, long sleeves, button placket, and curved hem",
           "price": 20.99,
           "category": "kids",
           "quantity":1
         },
         {
           "productid": 5,
           "imgsrc": "../../assets/k2.jpg",
           "productName": "UFO",
           "description": "Boys Khaki Regular Fit Solid Chinos",
           "details": "Khaki solid mid-rise chinos, has a button closure, five pockets",
           "price": 20,
           "category": "kids",
           "quantity":1
         },
         {
           "productid": 6,
           "imgsrc": "../../assets/m1.jpg",
           "productName": "H&M",
           "description": "Men Beige & Black Zip-Up Cardigan",
           "details": "Cardigan in soft, patterned jersey with a small stand-up collar, zip down the front, side pockets and ribbing at the cuffs and hem.",
           "price": 30.99,
           "category": "men",
           "quantity":1
         },
         {
           "productid": 7,
           "imgsrc": "../../assets/m2.jpg",
           "productName": "INVICTUS",
           "description": "Men Coral Red & Navy Blue Slim Fit Shirt",
           "details": "Coral red and navy blue printed semiformal shirt,has a spread collar, button placket, long sleeves, curved hem",
           "price": 60,
           "category": "men",
           "quantity":1
         },
         {
           "productid": 8,
           "imgsrc": "../../assets/m3.jpg",
           "productName": "DILLINGER",
           "description": "Men Navy Blue Round Neck T-shirt",
           "details": "Navy Blue and green colourblocked T-shirt, has a round neck, short sleeves",
           "price": 20,
           "category": "men",
           "quantity":1
         },
         {
           "productid": 9,
           "imgsrc": "../../assets/one1.jpg",
           "productName": "Hancock",
           "description": "Navy Slim Fit Formal Shirt",
           "details": "Navy blue formal shirt, has a spread collar, long sleeves, a full button placket, a patch pocket, a curved hem",
           "price": 30,
           "category": "men",
           "quantity":1
         },
         {
           "productid": 10,
           "imgsrc": "../../assets/two2.jpg",
           "productName": "HRX",
           "description": "Men Yellow Printed Round Neck T-Shirt",
           "details": "Keep this hip this season with the HRX Men's Athleisure T-shirt",
           "price": 43,
           "category": "men",
           "quantity":1
         },
         {
           "productid": 11,
           "imgsrc": "../../assets/three1.jpg",
           "productName": "Indo Era",
           "description": "Women Beige & Pink Yoke Design Kurta",
           "details": "Beige and pink yoke design straight calf length kurta",
           "price": 28.99,
           "category": "women",
           "quantity":1
         },
         {
           "productid": 12,
           "imgsrc": "../../assets/four4.jpg",
           "productName": "Rigo",
           "description": "RIGO Women Black Flared Mini Skirt",
           "details": "Black flared mini skirt, has an elasticated waistband, suspenders with button closure, and a flared hem",
           "price": 49.99,
           "category": "women",
           "quantity":1
         },
         {
           "productid": 13,
           "imgsrc": "../../assets/five5.jpg",
           "productName": "LilPicks",
           "description": "Boys Green Printed T-shirt with Shorts",
           "details": "This clothing set consists of t-shirt and shorts Green printed t-shirt, has a round neck",
           "price": 20,
           "category": "kids",
           "quantity":1

         },
         {
           "productid": 14,
           "imgsrc": "../../assets/six.jpg",
           "productName": "LilPicks",
           "description": "Girls Green & Pink Printed Top with Shorts",
           "details": "This clothing set consists of top and shorts Green and black printed top with layered detail",
           "price": 35,
           "category": "kids",
           "quantity":1
         },
         {
           "productid": 15,
           "imgsrc": "../../assets/seven.jpg",
           "productName": "Roadster",
           "description": "Men Green & Beige Checked Casual Shirt",
           "details": "Green and beige checked casual shirt, has a spread collar",
           "price": 60,
           "category": "men",
           "quantity":1
         },
         {
            "productid": 16,
            "imgsrc": "../../assets/eight.jpg",
            "productName": "Tokyo Talkies",
            "description": "Black Floral Print Flared Maxi Dress with a Belt",
            "details": "Black printed woven maxi dress, has a round neck, long sleeves",
            "price": 45,
            "category": "women",
            "quantity":1
          }
       ];
    }

    getMensProducts() : IProduct[]
    {
     return this.getProducts().filter(a=>a.category==="men");
    }

 
   
    getWomensProducts() : IProduct[]
    {
     return this.getProducts().filter(a=>a.category==="women");
    } 
    
    getKidsProducts() : IProduct[]
    {
     return this.getProducts().filter(a=>a.category==="kids");
    }

    getPriceProducts(): IProduct[]{
      return this.getProducts().filter(a=>a.price <= 40 && a.price >= 20 );
    }

    //cart number in nav
    private subject = new Subject<any>();

  sendNumber(number:number){
    this.subject.next({text:number});
  }

  getNumber():Observable<any>{
    return this.subject.asObservable();
  }
    

}
