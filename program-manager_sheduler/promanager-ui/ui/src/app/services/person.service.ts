import { Injectable } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import CustomStore from 'devextreme/data/custom_store';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HolidayService } from './holiday.service';
import { forkJoin, combineLatest, zip } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { HolidayInterface } from '../model/holiday';
import {Session} from '../model/product';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class PersonService {
    schedulerDataSource: any = {};
    baseUrl: string;

    constructor(private httpClient: HttpClient, private holidayService: HolidayService) {
        this.baseUrl = environment.baseUrl + '/api/v1';
    }

    getTasks(programId: string): any {
        function isNotEmpty(value) {
            return value !== undefined && value !== null && value !== '';
        }
        this.schedulerDataSource = new DataSource({
            store: new CustomStore({
                load: () => {
                    const dataFromAPI$ = this.holidayService.getHolidayData();
                    const programData$ = this.httpClient.get(this.baseUrl + '/sessions/' + programId).toPromise();
                    const values$ = forkJoin(
                        dataFromAPI$,
                        programData$
                        // getMultiValueObservable(), forkJoin on works for observables that complete
                    );

                    const newArray = [];
                    return values$.pipe(
                        map((data) => {
                            data.map((innerData: Array<HolidayInterface>) => {
                                newArray.push(...innerData);
                            });
                            return newArray;
                        })
                    ).toPromise().then(data => {
                        return data;
                    }).catch( error => {
                        throw new Error(error);
                    });
                },



            }),
            paginate: false,
        });
        return this.schedulerDataSource;

    }
    getSession(programId: string) {
      return this.httpClient.get<Session[]>(this.baseUrl + '/sessions/' + programId);
    }

}
