import { Component } from '@angular/core';

@Component({
  selector: 'events-list',
  template: `
    <div>
      <h1>Upcomming Angulars Events</h1>
      <hr />
      <event-thumbnail #thumbnail
        (eventClick)="handleEventClicked($event)"
        [event]="event1"
      >
      <h3>{{thumbnail.someProperty}}</h3>
      <button class="btn btn-primary" (click)="thumbnail.logFoo()">log me some foo</button>
    </event-thumbnail>
    </div>
  `,
})
export class EventsListComponent {
  event1 = {
    id: 1,
    name: 'Angular Connect',
    date: '07/25/2023',
    time: '10:00 am',
    price: '599.99',
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England',
    },
  };

  handleEventClicked(data: any) {
    console.log('received:', data);
  }

 
}
