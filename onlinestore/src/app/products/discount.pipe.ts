import { Pipe, PipeTransform } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
@Pipe({
    name: 'discount'
})
export class MyDiscountPipe implements PipeTransform {
    transform (value: number, amount: number) {
        value = value - amount;
        return value;
    }
}