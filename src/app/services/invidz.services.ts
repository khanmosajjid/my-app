
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class InvidzServices {
  constructor(private http: HttpClient){
  }
  login(email: string , password: string): Observable<Object>{

    return this.http.get('https://api.invidz.com/api/authenticate', {
      params: {email: email, password: password}
    });
  }
  getVideos(): Observable<Object> {
    return this.http.get('https://api.invidz.com/api/videos', {
      headers: { Authorization: 'bearer ' + localStorage.getItem('my_token') }
    });
  }
}


//Redux

// state- Big object which stores all the data .
// store - Object which manages the state.All read or write operations of state will go through store.
//Action and dispatch- whenever we eill want to do ay write operation on








// store.select(state => state.user)
