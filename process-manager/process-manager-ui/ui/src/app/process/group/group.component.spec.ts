import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupComponent } from './group.component';
import {MaterialModule} from '../../material/material.module';
import {MatExpansionModule} from '@angular/material/expansion';
import {FormsModule} from '@angular/forms';
import {ColorPickerModule} from '@syncfusion/ej2-angular-inputs';
import {NgReduxModule} from '@angular-redux/store';
import {AvatarModule} from 'ngx-avatar';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

describe('GroupComponent', () => {
  let component: GroupComponent;
  let fixture: ComponentFixture<GroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupComponent],
      imports: [MaterialModule, MatExpansionModule, FormsModule, ColorPickerModule, NgReduxModule, AvatarModule,
      HttpClientModule, RouterModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupComponent);
    component = fixture.componentInstance;
    component.groupId = '1';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
