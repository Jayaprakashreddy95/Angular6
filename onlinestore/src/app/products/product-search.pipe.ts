import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './product.model';
@Pipe({
    name: 'searchFilter'
})

export class ProductSearchPipe implements PipeTransform {
    transform(value:IProduct[], userInput: string) {
        userInput = userInput ? userInput.toLowerCase() : null;
        return userInput ? value.filter((product: { productName: string; description: string; }) =>
        ((product.productName.toLowerCase().indexOf(userInput) !== -1)||
        (product.description.toLowerCase().indexOf(userInput) !== -1)
        )
        ): value;
    }
}