import { Pipe, PipeTransform } from '@angular/core';
import { formatCurrency, getCurrencySymbol } from '@angular/common';
@Pipe ({
    name: 'mycurrency'
})
export class MyCurrencyPipe implements PipeTransform {
    transform(value: any, currencyCode:	string = 'CAD', display: | 'code' | 'symbol',  locale: string = 'en',){
        return formatCurrency(value,   locale,   getCurrencySymbol(currencyCode, 'wide'), currencyCode,);


    }
}
