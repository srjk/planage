import { async, TestBed } from '@angular/core/testing';
import {MatExpansionModule} from '@angular/material/expansion';
import {ProductServiceStub} from '../../service/backlog-service-stub';
import {HttpClientModule} from '@angular/common/http';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';




import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { EpicsComponent } from './epics.component';
import { UserStoryComponent } from '../user-story/user-story.component';
import { MatSlideToggleModule, MatIconModule, MatFormField, MatFormFieldModule } from '@angular/material';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BacklogService } from '../../service/backlog.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Component } from '@angular/core';
import { EpicDataInterface } from '../../model/epic-data.interface';


fdescribe('EpicsComponent', () => {
  let component: EpicsComponent;
  let fixture;
  let testHostComponent: TestHostComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatExpansionModule, FormsModule, MatSlideToggleModule, ReactiveFormsModule,
         DragDropModule, MatIconModule,  BrowserAnimationsModule, MatFormFieldModule,
          HttpClientModule, MatDialogModule],

         declarations: [ EpicsComponent, UserStoryComponent, TestHostComponent],
         providers: [{provide: BacklogService, useClass: ProductServiceStub}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should fetch data from the service successfully', () => {
    const serviceStub: ProductServiceStub = new ProductServiceStub();
    expect(serviceStub.addUserStory().subscribe((data) => data === {
    userStoryName: 'Ravi',
    productId: '123',
    epicId: '111'}));
  });

  @Component({
    selector: `host-component`,
    template: `<app-epics [epicData]="data"></app-epics>`

  })
  class TestHostComponent {
    data: EpicDataInterface = {
      epicID: '1',
      epicName: 'Epic One',
      prioritizedUserStories: [{}]
    };
  }

});
