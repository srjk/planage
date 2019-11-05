import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HolidayInterface } from '../model/holiday';
import { tap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class HolidayService {
  database: any = [];
  response: any = [];
  holiday: any = [];
  date: [];
  baseUrl: string;
  holidayData: Array<HolidayInterface> = [];
  // tslint:disable-next-line: max-line-length
  url = 'https://calendarific.com/api/v2/holidays?&api_key=a9c2107220bcc884891759d6f9ec6f6c808b9e8260e272f089f12dde74fa3aa9& country=IN& year=2019';

  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl + '/api/v1';
  }

  responseFromAPI(responseData): Array<HolidayInterface> {
    console.log('ResponseFromAPIThe First', responseData);
    const holidayResponse = responseData.response.holidays;
    this.holidayData = holidayResponse.map(data => {
      const date = new Date(data.date.iso);

      return {
        text: data.name,
        startDate: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0),
        endDate: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59, 0),
        color: '#FF0000',
        id: 1,
        type: 'holiday',
      };
    });
    return this.holidayData;
  }

  getHolidayData() {
    return this.http.get(this.url)
      .pipe(
        map(this.responseFromAPI),
        tap((data) => {
          console.log('in tap', data);
          this.holiday = data;
          return data;
        }),
        catchError(err => {
          return of([]);
        })
      );
  }
}
