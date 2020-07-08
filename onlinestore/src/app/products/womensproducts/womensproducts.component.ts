import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-mensproducts',
  templateUrl: './womensproducts.component.html',
  styleUrls: ['./womensproducts.component.css']
})
export class WomensproductsComponent implements OnInit {
  products: IProduct[];
  womensProducts: IProduct[];

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
    this.womensProducts = this.productService.getWomensProducts();
}

getArrayFromNumber(length: number){
   return Array(length/8);
}

updateIndex(pageIndex: number){
   this.startIndex = pageIndex * 8;
   this.endIndex = this.startIndex + 8;
}



}
