import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  domainConfig = {
    "status": 200,
    "message": "Success",
    "data": {
      "_id": "653b6476bc6b362b471541a9",
      "subscriberID": "63d0f3a7159be98472c1d4d8",
      "b2c": true,
      "b2b": false,
      "createdAt": "2023-10-27T07:19:18.362Z",
      "updatedAt": "2023-10-27T07:19:18.363Z",
      "__v": 0
    }
  }

  constructor(private http: HttpClient) { }

  getDomainConfig(): Observable<any>  {
    return of(this.domainConfig)
    // return this.http.post(environment.baseUrl + 'getDomainConfig', {})
  }

  getLogo(): Observable<any>{
    return this.http.post(environment.baseUrl + 'getLogo', {})
  }

}
