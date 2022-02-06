import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thank-you-page',
  template: `
  <div class="container">
  <h1 class="title">Thank you!</h1>
  <p class="content">Your order is on the way!</p>
  <span>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
    Ea consequatur et, delectus quaerat consequuntur vel unde dolores 
    quibusdam fugit voluptate dolorem inventore enim. Nulla officiis odio 
    qui labore facere necessitatibus!
  </span>
  </div>`,
  styleUrls: ['./thank-you-page.component.scss']
})
export class ThankYouPageComponent {
}
