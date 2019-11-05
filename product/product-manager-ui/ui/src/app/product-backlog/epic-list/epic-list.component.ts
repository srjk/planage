import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BacklogService } from '../../service/backlog.service';
import { FormBuilder, Validators } from '@angular/forms';
import { EventEmitter } from 'protractor';
import { ActivatedRoute, Router } from '@angular/router';
import { EpicDataInterface } from 'src/app/model/epic-data.interface';



@Component({
  selector: 'app-epic-list',
  templateUrl: './epic-list.component.html',
  styleUrls: ['./epic-list.component.sass']
})
export class EpicListComponent implements OnInit {

  @ViewChild('epicName', { static: false }) epicElement: ElementRef;

  epicData;
  productId;
  productName;
  p = 1;
  epicInformation = this.formBuilder.group({
    epicName: ['', [Validators.required, Validators.minLength(10), Validators.pattern('^[a-zA-Z0-9 ]*')]],
  });
  showinput = false;
  constructor(private backlogService: BacklogService, private formBuilder: FormBuilder,
              private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.backlogService.fetchDataAsBehaviour()
      .subscribe((data) => {
        this.productId = data.id;
        this.productName = data.productName;
        this.epicData = data.epics;
      });
  }

  toggleInput() {
    this.showinput = !this.showinput;
    if (this.epicElement !== undefined) { }
    setTimeout(() => {
      this.epicElement.nativeElement.focus();
    }, 0);
  }
  addEpic() {
    if (this.epicInformation.value !== '') {
      this.epicInformation.value.prioritizedUserStories = [];
      this.backlogService.addEpics(this.epicInformation.value).subscribe((data) => {
        this.epicData = data.epics;
      });
      this.toggleInput();
      this.epicInformation.setValue({ epicName: '' });
    }
  }
  showEventDetail(selectedEpic: EpicDataInterface) {
    this.backlogService.setSelectedEpic(selectedEpic);
    this.router.navigate(['../user-story'], { relativeTo: this.route });
  }
}
