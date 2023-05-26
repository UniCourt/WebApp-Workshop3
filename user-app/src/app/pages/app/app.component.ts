import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name : String = "Johnson";
  show : boolean =true;
  names = ['Arun', 'Mark', 'Smith', 'Jack'];
  isError : boolean = true;
  username : String ="";
  constructor() {
    console.log('Constructor called');
  }

  changeName()
{
  this.name="steve";
  console.log(this.username);
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

