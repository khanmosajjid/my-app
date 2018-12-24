import {HttpClient} from '@angular/common/http';
import {Inject, Injectable, InjectionToken} from '@angular/core';
import {error} from 'util';

export const API_URL = new InjectionToken('API_URL');
export const XYZ_SOMETHING = new InjectionToken('some unique string');


@Injectable()
export class LoginServices {

  constructor(private http: HttpClient , @Inject(API_URL) private apiURl: string, @Inject(XYZ_SOMETHING) sm: string) {

    console.log(this.http, this.apiURl, sm);
  }

  public login(username: string, password: string){

    console.log('LoginServices', username, password);

    const obs = this.http.get('http://ip-api.com/json/43.230.36.129');

    console.log('bill mil gya');

    obs.subscribe(result => {

        console.log('khana mil gya');
        console.log(result);
    }, error => {
      console.log(error);
      }, () => {
        console.log('order complete');

    }
    );

    console.log('phone call to freind');


  }

}

