import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppModal } from '../app.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  mymodel = new AppModal('a@a.com', 'password');
  email: string;
  pwd: string;
  hasError: boolean;
  coupon: string;

  constructor(private route: ActivatedRoute,
    private router: Router,) { }

  ngOnInit(): void {
  }
  showModal: boolean;
        show()
        {
          this.showModal = true; // Show-Hide Modal Check
          
        }
        //Bootstrap Modal Close event
        hide()
        {
          this.showModal = false;
        }

        

        //Login validation goes here
        
        attempt=2; // admin has 2 attempts
        validate(){
          this.email = this.mymodel.email;
          this.pwd= this.mymodel.pwd;
          if ( this.email == "a@a.com" && this.pwd == "password") {
          alert ("Login Successfull!! Welcome back Admin!!");
          this.showModal = false; //modal exits
          this.router.navigate(['/products']); // Redirecting to other page.
          }
          else
          {
           this.attempt --;// Decrementing by one.
           alert(
             "Incorrect password\nYou have left "+this.attempt+" attempt");
           // Disabling fields after 2 attempts.
           if( this.attempt == 0){
            this.hasError  = true; //disables login button
            this.showModal = true; //modal stays
            this.router.navigate(['/notFound']); //redirects to page not found
           
            }
        
          }
          }
/*
          showPassword() {
            var x = document.getElementById("pwd");
            if (x.type === "password") {
              x.type = "text";
            } else {
              x.type = "password";
            }
          }

          
*/



}
