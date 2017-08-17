import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Chat-app';
  userName = 'Endre til ditt navn!';
  messages: any[] = [];

  send(text : String) {
    if (text) {
      this.messages.push({ name : this.userName, text : text });
    }
  }

}
