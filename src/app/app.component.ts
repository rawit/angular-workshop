import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Chat app';

  items: any[] = [
    {
      name : 'Karl',
      message : 'Hello world!'
    },
    {
      name : 'Tone',
      message : 'Hello Karl!'
    },
    {
      name : 'Karl',
      message : 'Hi Tone!'
    },
  ];

}
