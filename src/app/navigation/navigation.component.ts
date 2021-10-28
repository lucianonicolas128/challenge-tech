import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  public connect: boolean = false;
  public engage: boolean = false;
  public hunt: boolean = false;
  public grow: boolean = true;
  public title: string | null = 'TECH';

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {
    // if (!localStorage.getItem('title')) localStorage.setItem('title', 'TECH')
    // this.title = localStorage.getItem('title')
  }

}
