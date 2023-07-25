import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  template: ` <div class="well beloved thumbnail">
    <h2>{{ event.name }}</h2>
    <div>Date: {{ event.date }}</div>
    <div>Time: {{ event.time }}</div>
    <div>Price: \${{ event.price }}</div>
    <div>
      <span>Location: {{ event.location.address }}</span>
      <span>&nbsp;</span>
      <span>{{ event.location.city }}, {{ event.location.country }}</span>
    </div>
    <!-- <button type="button" class="btn btn-primary" (click)="handleClickMe()" )>
      Click Me!
    </button> -->
  </div>`,
})
export class EventsThumbnailComponent {
  @Input() event: any;
  // @Output() eventClick = new EventEmitter();

  // handleClickMe() {
  //   console.log('clicked me');
  //   this.eventClick.emit(this.event.name);
  // }

  logFoo() {
    console.log('foo');
  }

  someProperty = 'get value';
}
