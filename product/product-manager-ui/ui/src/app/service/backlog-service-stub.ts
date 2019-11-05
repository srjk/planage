import {UserStoryInterface} from '../model/user-story-interface';
import {Observable, of} from 'rxjs';
import { EpicDataInterface } from '../model/epic-data.interface';
import { ProductDataInterface } from '../model/product-data-interface';



export class ProductServiceStub {
    epic: EpicDataInterface = {
        epicID: '111',
        epicName: 'Epic One',
        prioritizedUserStories: [{}]
    };
    userStory: UserStoryInterface = {
        userStoryName: 'Ravi',
        productId: '123',
        epicId: '111'
    };
    productData: ProductDataInterface = {
        id: '1',
        productName: 'ABC',
        epics: []
    };

    addUserStory(): Observable < UserStoryInterface > {
          return of(this.userStory);
      }

    addEpic(expectedEpic: EpicDataInterface): Observable< EpicDataInterface[] > {
          return of([expectedEpic]);
      }

      fetchDataAsBehaviour() {
          return of(this.productData);
      }
}
