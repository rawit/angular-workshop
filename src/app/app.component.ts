import { Component } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Chat-app';
  userName = 'Endre til ditt navn!';
  messages: FirebaseListObservable<any[]>;

  messageForm: FormGroup;

  constructor(public fb: FormBuilder, db: AngularFireDatabase) {

    this.messageForm = this.fb.group({
      text: [ '' , Validators.required ],
    });

    this.messages = db.list('/messages');
  }

  send() {
    if (this.messageForm.valid) {
      this.messages.push({ name : this.userName, text : this.messageForm.value.text });
      this.messageForm.reset();
    }
  }

}
