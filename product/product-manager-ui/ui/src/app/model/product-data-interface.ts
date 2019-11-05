import { EpicDataInterface } from './epic-data.interface';

export interface ProductDataInterface {
    id: string;
    productName: string;
    epics: EpicDataInterface[];
}
