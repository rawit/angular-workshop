import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Chat app';
  userName = 'Endre til ditt navn!';
  messages: any[] = [
    {
      name : 'Karl',
      text : 'Hello world!'
    },
    {
      name : 'Tone',
      text : 'Hello Karl!'
    },
    {
      name : 'Karl',
      text : 'Hi Tone!'
    },
  ];

}
