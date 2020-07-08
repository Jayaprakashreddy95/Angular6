import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-mensproducts',
  templateUrl: './mensproducts.component.html',
  styleUrls: ['./mensproducts.component.css']
})
export class MensproductsComponent implements OnInit {
  products: IProduct[];
  mensProducts: IProduct[];

  startIndex = 0;
  endIndex = 8;
  
  title: String = 'PRODUCTS';
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
    this.mensProducts = this.productService.getMensProducts();
}

getArrayFromNumber(length: number){
   return Array(length/8);
}

updateIndex(pageIndex: number){
   this.startIndex = pageIndex * 8;
   this.endIndex = this.startIndex + 8;
}



}
