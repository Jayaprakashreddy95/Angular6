import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-mensproducts',
  templateUrl: './kidsproducts.component.html',
  styleUrls: ['./kidsproducts.component.css']
})
export class KidsproductsComponent implements OnInit {
  products: IProduct[];
  kidsProducts: IProduct[];

  startIndex = 0;
  endIndex = 8;

  private _userInput: string;
  public get userInput(): string {
      return this._userInput;
  }
  public set userInput(value: string) {
      this._userInput = value;
  }

  constructor(private productService: ProductService) { }

  ngOnInit(): void{
    this.products = this.productService.getProducts();
    this.kidsProducts = this.productService.getKidsProducts();
}

getArrayFromNumber(length: number){
   return Array(length/8);
}

updateIndex(pageIndex: number){
   this.startIndex = pageIndex * 8;
   this.endIndex = this.startIndex + 8;
}



}
