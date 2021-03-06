import { Injectable } from '@angular/core';
import { IProduct } from './product.model';
import { Subject, Observable } from 'rxjs';

@Injectable()

export class ProductService {
    getProducts() {
        return[
         {
           "productid": 1,
           "imgsrc": ["../../assets/w1.jpg",
                      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/8529019/2019/1/23/e1cc30d4-7f23-486c-a3a6-95fae9f206c51548242338295-Varanga-mustard-printed-straight-kurta-6361548242336928-2.jpg",
                      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/8529019/2019/1/23/bd99524b-03a9-4b28-b244-ca2520385e6a1548250280476-Varanga-Women-Yellow--Green-Printed-Straight-Kurta-735154825-4.jpg"],
           "productName": "Varanga",
           "description": "Women Yellow & Green Printed Straight Kurta",
           "details": "Yellow and green printed straight kurta has a notched round neck three-quarter sleeves straight hem side slits",
           "price": 20,
           "category": "women",
           "quantity":1,
           "sizes":["S", "M", "L", "XL", "XXL"]
         },
         {
           "productid": 2,
           "imgsrc": ["../../assets/w2.jpg",
                      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/9595993/2019/5/17/81c03c5c-4e6b-4f1c-b692-d26b45282aae1558085586355-GERUA-Women-Red-Striped-A-Line-Dress-4841558085584673-2.jpg",
                      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/9595993/2019/5/17/064087e9-7ef9-4ab5-851d-27cdec4b4e341558085586297-GERUA-Women-Red-Striped-A-Line-Dress-4841558085584673-5.jpg"],
           "productName": "GERUA",
           "description": "Women Red & White Striped Maxi Dress",
           "details": "Red and white striped woven A-line dress, has a round neck, three-quarter sleeves, flared hem",
           "price": 40,
           "category": "women",
           "quantity":1,
           "sizes":["S", "M", "L", "XL", "XXL"]
         },
         {
           "productid": 3,
           "imgsrc": ["../../assets/w3.jpg",
                      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11530112/2020/3/4/60496117-7a73-4241-b40f-1fa43a93824b1583324729653-Kalini-Cotton-Silk-Woven-Womens-Saree-With-Tassels-977158332-3.jpg",
                      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11530112/2020/3/4/0fc8f2d9-c28d-43ae-9d8d-faadd19887681583325623490-Kalini-Cotton-Silk-Woven-Womens-Saree-With-Tassels-163158332-4.jpg"],
           "productName": "Ishin",
           "description": "Yellow & Pink Polycotton solid saree",
           "details": "The model is wearing a blouse from our stylists collection,see the image for a mock-up of what the actual blouse would look like",
           "price": 60,
           "category": "women",
           "quantity":1,
           "sizes":["S", "M", "L", "XL", "XXL"]
         },
         {
           "productid": 4,
          "imgsrc": ["../../assets/k1.jpg",
                      "../../assets/k1.jpg",
                      "../../assets/k1.jpg"],
           "productName": "U.s polo",
           "description": "Boys Blue & Green Regular Fit Striped Casual Shirt",
           "details": "Blue and Green striped casual shirt, has a spread collar, long sleeves, button placket, and curved hem",
           "price": 20.99,
           "category": "kids",
           "quantity":1,
           "sizes":["S", "M", "L", "XL", "XXL"]
         },
         {
           "productid": 5,
           "imgsrc": ["../../assets/k2.jpg",
           "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10341735/2019/8/27/117f2f6f-0659-4294-b7c9-d0b345c52f9e1566909752423-612-league-Boys-Khaki-Regular-Fit-Solid-Chinos-2171566909751-3.jpg",
           "../../assets/k2.jpg"],
           "productName": "UFO",
           "description": "Boys Khaki Regular Fit Solid Chinos",
           "details": "Khaki solid mid-rise chinos, has a button closure, five pockets",
           "price": 20,
           "category": "kids",
           "quantity":1,
           "sizes":["S", "M", "L", "XL", "XXL"]
         },
         {
           "productid": 6,
           "imgsrc": ["../../assets/m1.jpg",
           "../../assets/m1.jpg",
           "../../assets/m1.jpg"],
           "productName": "H&M",
           "description": "Men Beige & Black Zip-Up Cardigan",
           "details": "Cardigan in soft, patterned jersey with a small stand-up collar, zip down the front, side pockets and ribbing at the cuffs and hem.",
           "price": 30.99,
           "category": "men",
           "quantity":1,
           "sizes":["S", "M", "L", "XL", "XXL"]
         },
         {
           "productid": 7,
           "imgsrc": ["../../assets/m2.jpg",
           "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2313998/2018/3/13/11520934291315-INVICTUS-Men-Coral-Red--Navy-Blue-Slim-Fit-Printed-Casual-Shirt-6011520934291093-4.jpg",
           "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2313998/2018/3/13/11520934291266-INVICTUS-Men-Coral-Red--Navy-Blue-Slim-Fit-Printed-Casual-Shirt-6011520934291093-6.jpg"],
           "productName": "INVICTUS",
           "description": "Men Coral Red & Navy Blue Slim Fit Shirt",
           "details": "Coral red and navy blue printed semiformal shirt,has a spread collar, button placket, long sleeves, curved hem",
           "price": 60,
           "category": "men",
           "quantity":1,
           "sizes":["S", "M", "L", "XL", "XXL"]
         },
         {
           "productid": 8,
           "imgsrc": ["../../assets/m3.jpg",
           "../../assets/m3.jpg",
           "../../assets/m3.jpg"],
           "productName": "DILLINGER",
           "description": "Men Navy Blue Round Neck T-shirt",
           "details": "Navy Blue and green colourblocked T-shirt, has a round neck, short sleeves",
           "price": 20,
           "category": "men",
           "quantity":1,
           "sizes":["S", "M", "L", "XL", "XXL"]
         },
         {
           "productid": 9,
           "imgsrc": ["../../assets/one1.jpg",
                      "../../assets/one1.jpg",
                      "../../assets/one1.jpg"],
           "productName": "Hancock",
           "description": "Navy Slim Fit Formal Shirt",
           "details": "Navy blue formal shirt, has a spread collar, long sleeves, a full button placket, a patch pocket, a curved hem",
           "price": 30,
           "category": "men",
           "quantity":1,
           "sizes":["S", "M", "L", "XL", "XXL"]
         },
         {
           "productid": 10,
           "imgsrc": ["../../assets/two2.jpg",
                      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1700944/2019/6/8/20153ade-f325-4613-a851-f79f8dc00c571559989322759-HRX-by-Hrithik-Roshan-Men-Yellow-Printed-Round-Neck-T-Shirt--3.jpg",
                      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1700944/2019/6/8/67f8fc06-3131-4ae9-a869-2b485f0aca3c1559989322742-HRX-by-Hrithik-Roshan-Men-Yellow-Printed-Round-Neck-T-Shirt--4.jpg"],
           "productName": "HRX",
           "description": "Men Yellow Printed Round Neck T-Shirt",
           "details": "Keep this hip this season with the HRX Men's Athleisure T-shirt",
           "price": 43,
           "category": "men",
           "quantity":1,
           "sizes":["S", "M", "L", "XL", "XXL"]
         },
         {
           "productid": 11,
           "imgsrc": ["../../assets/three1.jpg",
           "../../assets/three1.jpg",
           "../../assets/three1.jpg"],
           "productName": "Indo Era",
           "description": "Women Beige & Pink Yoke Design Kurta",
           "details": "Beige and pink yoke design straight calf length kurta",
           "price": 28.99,
           "category": "women",
           "quantity":1,
           "sizes":["S", "M", "L", "XL", "XXL"]
         },
         {
           "productid": 12,
           "imgsrc": ["../../assets/four4.jpg",
                      "../../assets/four4.jpg",
                      "../../assets/four4.jpg"],
           "productName": "Rigo",
           "description": "RIGO Women Black Flared Mini Skirt",
           "details": "Black flared mini skirt, has an elasticated waistband, suspenders with button closure, and a flared hem",
           "price": 49.99,
           "category": "women",
           "quantity":1,
           "sizes":["S", "M", "L", "XL", "XXL"]
         },
         {
           "productid": 13,
           "imgsrc": ["../../assets/five5.jpg",
           "../../assets/five5.jpg",
           "../../assets/five5.jpg"],
           "productName": "LilPicks",
           "description": "Boys Green Printed T-shirt with Shorts",
           "details": "This clothing set consists of t-shirt and shorts Green printed t-shirt, has a round neck",
           "price": 20,
           "category": "kids",
           "quantity":1,
           "sizes":["S", "M", "L", "XL", "XXL"]

         },
         {
           "productid": 14,
           "imgsrc": ["../../assets/six.jpg",
           "../../assets/six.jpg",
           "../../assets/six.jpg"],
           "productName": "LilPicks",
           "description": "Girls Green & Pink Printed Top with Shorts",
           "details": "This clothing set consists of top and shorts Green and black printed top with layered detail",
           "price": 35,
           "category": "kids",
           "quantity":1,
           "sizes":["S", "M", "L", "XL", "XXL"]
         },
         {
           "productid": 15,
           "imgsrc": ["../../assets/seven.jpg",
           "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1667040/2020/1/22/0c222883-c8f7-4f1d-8f01-3fe3c61d7bbf1579688068035-Roadster-Men-Green--Beige-Checked-Casual-Shirt-9451579688066-4.jpg",
           "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1667040/2020/1/22/1a8013ef-e4a8-45e6-9710-39a6d77d44871579688067987-Roadster-Men-Green--Beige-Checked-Casual-Shirt-9451579688066-5.jpg"],
           "productName": "Roadster",
           "description": "Men Green & Beige Checked Casual Shirt",
           "details": "Green and beige checked casual shirt, has a spread collar",
           "price": 60,
           "category": "men",
           "quantity":1,
           "sizes":["S", "M", "L", "XL", "XXL"]
  
         },
         {
            "productid": 16,
            "imgsrc": ["../../assets/eight.jpg",
                      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2299060/2018/7/30/7b9cd323-82d4-41cd-b239-5063e7de14651532944603830-Tokyo-Talkies-Women-Black-Printed-Maxi-Dress-4791532944603727-2.jpg",
                      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2299060/2018/7/30/a51c9cef-69c3-4528-b16c-0107e2a0b7751532944603877-Tokyo-Talkies-Women-Black-Printed-Maxi-Dress-4791532944603727-5.jpg"],
            "productName": "Tokyo Talkies",
            "description": "Black Floral Print Flared Maxi Dress with a Belt",
            "details": "Black printed woven maxi dress, has a round neck, long sleeves",
            "price": 45,
            "category": "women",
            "quantity":1,
            "sizes":["S", "M", "L", "XL", "XXL"]
          }
       ];
    }
/*
    getSizes(){
      return[
        {
          "size": "S"
        },
        {
          "size": "M"
        },
        {
          "size": "L"
        },
        {
          "size": "XL"
        },
        {
          "size": "XXL"
        },


        
      ];


    }
*/
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
