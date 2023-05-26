import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
 name: string = "sanjana"
user: string = ""
pageTitle : string = "title"
 changeName()
 {
  this.name = this.user;
 }
}
