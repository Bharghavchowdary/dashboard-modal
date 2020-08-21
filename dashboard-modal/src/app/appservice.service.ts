import { Injectable } from '@angular/core';
import { Observable, throwError, observable } from 'rxjs';
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
    return [[
      { Time: '01', Temperature: 50 },
      { Time: '02', Temperature: 55 },
      { Time: '03', Temperature: 60 },
      { Time: '04', Temperature: 65 },
      { Time: '05', Temperature: 50 },
      { Time: '06', Temperature: 55 },
      { Time: '07', Temperature: 40 },
    ],
    [
      { Time: '01', Temperature: 59 },
      { Time: '02', Temperature: 50 },
      { Time: '03', Temperature: 90 },
      { Time: '04', Temperature: 95 },
      { Time: '05', Temperature: 60 },
      { Time: '06', Temperature: 75 },
      { Time: '07', Temperature: 29 },
    ]];
    //this.http.get(`${this.apiUrl}`);
  }

  getChartDataSets() {
    return {
      chartType: 'bar/line',
      cardId: 'id1',
      chartOptions: [],
      chartDataSets: [{
        prodName: 'rice',
        prodData: [
          { Time: '10', Temperature: 50 },
          { Time: '20', Temperature: 55 },
          { Time: '30', Temperature: 60 },
          { Time: '40', Temperature: 65 },
          { Time: '50', Temperature: 50 },
          { Time: '60', Temperature: 55 },
          { Time: '70', Temperature: 40 },
        ]
      },
      {
        prodName: 'wheat',
        prodData: [
          { Time: '10', Temperature: 59 },
          { Time: '20', Temperature: 50 },
          { Time: '30', Temperature: 90 },
          { Time: '40', Temperature: 95 },
          { Time: '50', Temperature: 60 },
          { Time: '60', Temperature: 75 },
          { Time: '70', Temperature: 29 },
          { Time: '80', Temperature: 29 },
        ]
      }
      ]
    };
  }

  getChartData(): Observable<any> {
    return new Observable(() => {
      [[
        { Time: '01', Temperature: 50 },
        { Time: '02', Temperature: 55 },
        { Time: '03', Temperature: 60 },
        { Time: '04', Temperature: 65 },
        { Time: '05', Temperature: 50 },
        { Time: '06', Temperature: 55 },
        { Time: '07', Temperature: 40 },
      ],
      [
        { Time: '01', Temperature: 59 },
        { Time: '02', Temperature: 50 },
        { Time: '03', Temperature: 90 },
        { Time: '04', Temperature: 95 },
        { Time: '05', Temperature: 60 },
        { Time: '06', Temperature: 75 },
        { Time: '07', Temperature: 29 },
      ]];
    });
  };

}
