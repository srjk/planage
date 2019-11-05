import { Injectable, Inject } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import CustomStore from 'devextreme/data/custom_store';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HolidayService } from './holiday.service';
import { forkJoin, combineLatest, zip, Observable, observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { HolidayInterface } from '../model/holiday';
import { Employee } from '../model/product';
import { ProductService } from './product.service';
import { promise } from 'protractor';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from '../../environments/environment';
import { error } from 'util';

@Injectable(
)
export class Service {

    baseUrl: string;
    schedulerDataSource: any = {};
    productId: string;

    constructor(
        private httpClient: HttpClient,
        private holidayService: HolidayService,
        private productService: ProductService,
        private spinner: NgxSpinnerService
    ) {
        this.baseUrl = environment.baseUrl + '/api/v1';
    }

    setId(id: string): void {
        this.productId = id;
    }
    getAssignee(): Observable<Employee[]> {
        return this.httpClient.get<Employee[]>(this.baseUrl + '/assignee');
    }

    getProgram(): any {

        this.schedulerDataSource = new DataSource({

            store: new CustomStore({
                load: () => {
                    this.spinner.show();
                    const dataFromAPI$ = this.holidayService.getHolidayData();
                    console.log('******holiday data+++++++', dataFromAPI$);
                    // tslint:disable-next-line: max-line-length
                    const programData$ = this.httpClient.get(this.baseUrl + '/product/' + this.productId).toPromise().then(data => {
                        // tslint:disable-next-line: no-string-literal
                        return data['programs'];
                    });
                    const newArray = [];
                    const values$ = forkJoin(
                        dataFromAPI$,
                        programData$
                        // getMultiValueObservable(), forkJoin on works for observables that complete
                    );

                    return values$.pipe(
                        map((data) => {
                            console.log('Complete Data', data);
                            data.map((innerData: Array<HolidayInterface>) => {
                                newArray.push(...innerData);
                            });
                            console.log('New Array', newArray);

                            return newArray;

                        })

                    ).toPromise().then(data => {
                        return data;
                    }).catch( err => {
                        throw new Error(err);
                    }
                    );
                },
                insert: (values) => {
                    console.log(values);
                    return this.httpClient.put(this.baseUrl + '/products/' +
                        this.productId +
                        '/programs',
                        values).toPromise().then(data => {
                            return data;
                        }).catch( error => {
                            throw new Error(error);
                        });
                },
                remove: (key) => {
                    return this.httpClient.delete(this.baseUrl + '/products/' +
                        this.productId +
                        '/programs/' +
                        key.id)
                        .toPromise();
                },
                update: (key, values) => {
                    delete values.settings;
                    return this.httpClient.put(this.baseUrl + '/products/' +
                        this.productId +
                        '/programs/' +
                        key.id,
                        values
                    )
                        .toPromise().then(data => {
                            return data;
                        }).catch( error => {
                            throw new Error(error);
                        });
                },
            }),
            paginate: true,
            pageSize: 2
        });

        return this.schedulerDataSource;
    }

}
