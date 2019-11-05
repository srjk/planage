import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatToolbarModule, MatCardModule, MatFormFieldModule, MatRadioModule, MatInputModule, MatListModule } from '@angular/material';
import { UserStoryComponent } from './user-story.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

describe('UserStoryComponent', () => {
  let component: UserStoryComponent;
  let fixture: ComponentFixture<UserStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserStoryComponent],
      imports:
        [MatToolbarModule,
          MatCardModule,
          MatFormFieldModule,
          MatRadioModule,
          MatInputModule,
          MatListModule,
          MatExpansionModule,
          MatIconModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
