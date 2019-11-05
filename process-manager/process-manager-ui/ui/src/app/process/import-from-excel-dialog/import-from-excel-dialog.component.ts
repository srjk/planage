import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-import-from-excel-dialog',
  templateUrl: './import-from-excel-dialog.component.html',
  styleUrls: ['./import-from-excel-dialog.component.sass']
})
export class ImportFromExcelDialogComponent implements OnInit {
    excelText: string;
  constructor() { }

  ngOnInit() {
  }

}
