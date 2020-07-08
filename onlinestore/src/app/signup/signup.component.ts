import { Component, OnInit } from '@angular/core';
import { CustomerModal } from '../signup/signup.model';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  type: string;
  constructor(private route: ActivatedRoute,
    private router: Router) {}
  languages: any[] = ['Angular','React', 'Node','Python'];
  mymodel = new CustomerModal('Jhon', 'Eva', 'a@a.com', '12345', true, 'male', 'Angular');
  
  hasCodeLangError: boolean = false;
  firstToUpper(value: string): void {
      if (value.length > 0) {
          this.mymodel.firstname = value.charAt(0).toUpperCase() + value.slice(1);
      } else {
          this.mymodel.firstname = value;
      }
  }
      
      validateCodeLang(event): void {
          if (this.mymodel.codelang ==='default') {
              this.hasCodeLangError = true;
          } else {
              this.hasCodeLangError = false;
          }
      }
      
      onSubmit(){
        alert ("Thank You!! Welcome !!");
        this.router.navigate(['/home']); // Redirecting to other page.
      }
/*
      showPassword() {
        var x = document.getElementById("password");
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
      }
      */
      
      //submitForm(form: NgForm): void {
          //console.log(form.value);
          //this.formPosterService.postCustomer(form.value);
      }
      


