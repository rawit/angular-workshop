import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Chat-app';
  userName = 'Ragnar';

  items: any[] = [];

  send(message : String) {
    this.items.push({ name : this.userName, message : message });
  }

}
