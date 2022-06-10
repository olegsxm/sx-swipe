import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SwipeEvent } from '../../../ng-swipe/src/lib/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  onSwipeEnd(event: SwipeEvent) {
    console.log(event);
  }
}
