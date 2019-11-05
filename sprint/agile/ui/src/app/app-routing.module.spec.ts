import { Location } from '@angular/common';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
// import { routes } from './app-routing.module';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';
import { UserStoryComponent } from './user-story/user-story.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';

describe('Router:App', () => {
    let location: Location;
    let router: Router;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            // imports: [RouterTestingModule.withRoutes(routes)],
            declarations: [

                AppComponent,
                UserStoryComponent,
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        });


        router = TestBed.get(Router);
        location = TestBed.get(Location);
        fixture = TestBed.createComponent(AppComponent);
        router.initialNavigation();
    });
    //  it('navigate to 'freezesprint' takes you to /freezesprint', fakeAsync(() => {
    //     router.navigate(['freezesprint']);
    //     tick();
    //     expect(location.path()).toBe('/freezesprint');
    //  }));
    //  it('navigate to 'userstory' takes you to /userstory', fakeAsync(() => {
    //     router.navigate(['userstory']);
    //     tick();
    //     expect(location.path()).toBe('/userstory');
    //  }));
});

