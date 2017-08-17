import { Component } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Chat-app';
  userName = 'Endre til ditt navn!';

  messages: FirebaseListObservable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.messages = db.list('/messages');
  }

  send(text : String) {
    if (text) {
      this.messages.push({ name : this.userName, text : text });
    }
  }

}
