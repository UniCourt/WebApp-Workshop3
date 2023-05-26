import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})


export class AppComponent {
  name: string = 'Ralweena Lobo';

  show: boolean = true;
  names = ['Arun', 'Mark', 'Smith', 'Jack'];
  isError: boolean = false;
  username : string = "";

  constructor() {
    console.log('Constructor called');
  }

  changeName() {
    this.name=this.username;
  }
}
