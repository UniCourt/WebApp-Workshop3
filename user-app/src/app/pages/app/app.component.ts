import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  user_name : string = "'Test name'";
  userName : string = "";
  show : boolean = true;

  names = ['Arun', 'Mark', 'Smith', 'Jack'];

  isError : boolean = false;

  constructor() {
    console.log('Constructor called');
  }

  changeName(){
    console.log(this.userName);

    this.user_name = this.userName;
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
}
