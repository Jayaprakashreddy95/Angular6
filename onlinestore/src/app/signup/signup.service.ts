import { Injectable } from '@angular/core';
import { CustomerModal } from '../signup/signup.model';

@Injectable()

export class FormPosterService {
    postCustomer( customer: CustomerModal) {
        console.log('getting in service>>>', customer);
    }
}