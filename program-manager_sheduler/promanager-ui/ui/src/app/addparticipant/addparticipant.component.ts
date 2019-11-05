import { Component, OnInit, ViewChild } from '@angular/core';
import { CSVRecord } from '../model/participant';

@Component({
  selector: 'app-addparticipant',
  templateUrl: './addparticipant.component.html',
  styleUrls: ['./addparticipant.component.sass']
})
export class AddparticipantComponent {
toggleInputBox = false;
  public records: CSVRecord[] = [];
  @ViewChild('csvReader', null) csvReader: any;
  private regexp: RegExp;
  notValidEntry = [];

  uploadListener($event: any): void {
  this.toggleInputBox = false;
  const text = [];
  const files = $event.srcElement.files;

  if (this.isValidCSVFile(files[0])) {

      const input = $event.target;
      const reader = new FileReader();
      reader.readAsText(input.files[0]);

      reader.onload = () => {
        const csvData = reader.result;
        const csvRecordsArray = ( csvData as string).split(/\r\n|\n/);

        const headersRow = this.getHeaderArray(csvRecordsArray);
        const header = ['name', 'email'];
        // tslint:disable-next-line: triple-equals
        if (header[0] == headersRow[0] && header[1] == headersRow[1]) {
          this.records = this.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length);
          console.log('this is record********', this.records);
        } else {
         this.toggleInputBox = true;
         this.fileReset();
        }
      };

      // tslint:disable-next-line: only-arrow-functions
      reader.onerror = function() {
        console.log('error is occured while reading file!');
      };

    } else {
      alert('Please import valid .csv file.');
      this.fileReset();
    }
  }

  getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: number) {
    const csvArr = [];

    for (let i = 1; i < csvRecordsArray.length; i++) {
      const curruntRecord = ( csvRecordsArray[i] as string).split(',');
      // tslint:disable-next-line: triple-equals
      if (curruntRecord.length == headerLength) {
        const csvRecord: CSVRecord = new CSVRecord();

        csvRecord.name = curruntRecord[0].trim();
        csvRecord.email = curruntRecord[1].trim();
        let  serchfind: boolean;
        this.regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        serchfind = this.regexp.test(csvRecord.email);
        if (serchfind === true) {
          csvArr.push(csvRecord);
        } else {
          this.notValidEntry.push(csvRecord);
        }
        console.log(this.notValidEntry);
      }
    }
    console.log(csvArr);
    return csvArr;
  }

  isValidCSVFile(file: any) {
    return file.name.endsWith('.csv');
  }

  getHeaderArray(csvRecordsArr: any) {
    const headers = ( csvRecordsArr[0] as string).split(',');
    const headerArray = [];
    // tslint:disable-next-line: prefer-for-of
    for (let j = 0; j < headers.length; j++) {
      headerArray.push(headers[j]);
    }
    return headerArray;
  }

  fileReset() {
    this.csvReader.nativeElement.value = '';
    this.records = [];
  }
  upload(records) {
    console.log(records);
  }

}
