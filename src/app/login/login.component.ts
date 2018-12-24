import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { Validators as MyValidators} from '../validators';
import {LoginServices} from '../services/login.services';
import {BaseComponent} from './baseComponent';
import {InvidzServices} from '../services/invidz.services';
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends BaseComponent implements OnInit {



  signup: boolean;

  loginForm: FormGroup ;
  usernameControl: FormControl ;
  passwordControl: FormControl ;




  constructor(private loginServices: LoginServices , private router: Router,
                    private invidzServices: InvidzServices ,
              private snackbar: MatSnackBar) {
    super();
   }

  ngOnInit() {


    this.usernameControl =  new FormControl(null,[ Validators.required, Validators.email]);

    this.passwordControl = new FormControl(null, [Validators.required , Validators.minLength(5)]);

    this.loginForm = new FormGroup({
      email: this.usernameControl,
      password: this.passwordControl ,
    } );

     this.loginForm.valueChanges.subscribe(data => console.log(data));


  }
     login() {
              const username = this.usernameControl.value ;
              const password = this.passwordControl.value ;

               console.log(this.loginForm.value) ;

               this.invidzServices.login(username, password).subscribe(responseBody => {
                 console.log('login response is', responseBody);
                 localStorage.setItem('my_token', (responseBody as any).token);


                 this.router.navigate(['videos']);
               }
               , errorResponse => {
                  console.log('error response is', errorResponse);
                  const popup = this.snackbar.open(errorResponse.error.message, null, {
                  duration: 5000 ,
                    verticalPosition : 'top'
                 });
     });
               console.log('login function completed');


     }

}
