import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from "angularfire2";
import {AngularFireDatabase} from "angularfire2/database";

import { AppComponent } from './app.component';
import {ReactiveFormsModule} from "@angular/forms";

const config = {
  apiKey: "AIzaSyALB11UiMa3WmOb8eEy299JENLRxQ480wU",
  authDomain: "angular-workshop-d4384.firebaseapp.com",
  databaseURL: "https://angular-workshop-d4384.firebaseio.com",
  projectId: "angular-workshop-d4384",
  storageBucket: "",
  messagingSenderId: "908346051282"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(config),
  ],
  providers: [ AngularFireDatabase ],
  bootstrap: [AppComponent]
})
export class AppModule { }
