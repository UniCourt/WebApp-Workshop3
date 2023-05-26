import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})


export class AppComponent {
  name: string = 'Anish Shobith P S';
  show: boolean = true;
  names: Array<string> = ['Arun', 'Mark', 'Smith', 'Jack'];
  isError: boolean = false;
  username: string = "";

  constructor() {
    console.log('Constructor called');
  }
  ngOnChanges() {
    console.log('on changes called');
  }
  ngOnInit() {
    console.log('on init called');
  }
  ngOnDestroy() {
    console.log('on destroy called');
  }

  changeName() {
    this.name = this.username.length ? this.username : 'Anish Shobith P S';
  }
}
