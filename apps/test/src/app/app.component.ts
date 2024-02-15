import { Component } from '@angular/core';
import { SwipeDirective, SwipeEvent } from '@sx-swipe/angular';

@Component({
  standalone: true,
  imports: [
    SwipeDirective
  ],
  selector: 'sx-swipe-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  onSwipeEnd(event: SwipeEvent) {
    console.log(`SwipeEnd direction: ${event.direction} and distance: ${event.distance}`);
  }
}
