import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MatSlideToggleModule } from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule, MatCardModule, MatSelectModule } from '@angular/material';

import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';
import {DragDropModule} from '@angular/cdk/drag-drop';


import { EpicListComponent } from './epic-list.component';
import { EpicsComponent } from '../epics/epics.component';
import { RecommendedEpicsComponent } from '../../recommended-epics/recommended-epics.component';
import { UserStoryComponent } from '../user-story/user-story.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductServiceStub } from '../../service/backlog-service-stub';
import { BacklogService } from '../../service/backlog.service';

fdescribe('EpicListComponent', () => {
  let component: EpicListComponent;
  let fixture: ComponentFixture<EpicListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatExpansionModule, FormsModule, ReactiveFormsModule,
        DragDropModule, MatFormFieldModule, MatIconModule, MatSlideToggleModule, MatCardModule, HttpClientModule],
      declarations: [ EpicListComponent, EpicsComponent, RecommendedEpicsComponent, UserStoryComponent],
      providers: [{provide: BacklogService, useClass: ProductServiceStub}]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should add epic', () => {
    const expectedEpic = {
      epicID: '111',
      epicName: 'Epic One',
      prioritizedUserStories: [{}]
    };
    const serviceStub: ProductServiceStub = new ProductServiceStub();
    expect(serviceStub.addEpic(expectedEpic).subscribe((data) => {
      data.forEach((element) => {
        element === expectedEpic;
      });
    }));
  });
  it('should load productBacklog data', () => {
    const serviceStub: ProductServiceStub = new ProductServiceStub();
    expect(serviceStub.fetchDataAsBehaviour().subscribe((data) => {
            data === {id: '1',
                      productName: 'ABC',
                      epics: []}
    }));
  });
});
