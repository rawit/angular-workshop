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

  items: FirebaseListObservable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.items = db.list('/items');
  }

  send(message : String) {
    if (message) {
      this.items.push({ name : this.userName, message : message });
    }
  }

}
