import { Component } from '@angular/core';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-app',
  template:`
  <div>
  <h1>{{title}}</h1>
  </div>
  <nav>
  <a routerLink='/dashboard'>Dashboard</a>
  <a routerLink="/heroes">Heroes</a>
   <router-outlet></router-outlet>
   </nav>
  `,
  providers: [HeroService],
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
    title = "Tour of Heroes";
}
