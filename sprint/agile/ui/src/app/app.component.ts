// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent {
//   title = 'sprint';
//   count: number; // <- New

//   increment() {} // <- New
//   decrement() {} // <- New
// }

import { Component, OnInit, enableProdMode } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { RouterModule, RouteReuseStrategy, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) { }
  title = 'sprint';
  count: number; // <- New

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  increment() { } // <- New
  decrement() { } // <- New

  ngOnInit() {
  }

}


