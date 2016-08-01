import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class FirebaseService {
  constructor(private http: Http) {}

  setUser(firstName: string, lastName: string) {
    const body = JSON.stringify({firstName: firstName, lastName: lastName});
    return this.http.put('https://ng2-dtve.firebaseio.com/user.json', body)
              .map(response => response.json());
  }

  getUser() {
    return this.http.get('https://ng2-dtve.firebaseio.com/user.json')
                  .map(response => response.json());
  }
}