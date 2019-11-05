import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardComponent } from './board.component';
import {MaterialModule} from '../../material/material.module';
import {Component, Input} from '@angular/core';
import {MockNgRedux, NgReduxTestingModule} from '@angular-redux/store/testing';
import {Router} from '@angular/router';
// import {Action} from '../../shared/model/app.actions';
import {DashboardComponent} from '../dashboard/dashboard.component';

@Component({selector: 'app-group', template: ''})
class GroupComponent {
  @Input() groupId: string;
}

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;
  const routerSpy = {navigate: jasmine.createSpy('dashboard')};
  const routerS = {navigate: jasmine.createSpy('pageNotFound')};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardComponent, GroupComponent, DashboardComponent],
      imports: [MaterialModule],
      providers: [NgReduxTestingModule,
        {
          provide: Router, userValue: [routerSpy, routerS]
        }]
    })
    .compileComponents();
    MockNgRedux.reset();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
