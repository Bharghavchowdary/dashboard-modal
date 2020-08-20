import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

  apiUrl: string = 'enter-your-api-url';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

   // Read
   getData() {
    return [
      { Time: '01', Temperature: 50 },
      { Time: '02', Temperature: 55 },
      { Time: '03', Temperature: 60 },
      { Time: '04', Temperature: 65 },
      { Time: '05', Temperature: 50 },
      { Time: '06', Temperature: 55 },
      { Time: '07', Temperature: 40 },
    ];
    //this.http.get(`${this.apiUrl}`);
  }
}
