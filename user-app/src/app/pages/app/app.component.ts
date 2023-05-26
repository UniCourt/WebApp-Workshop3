import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name:string="Riya";

  show:boolean = true;

  names = ['Arun', 'Mark', 'Smith', 'Jack'];

  isError : boolean = false;

  username: string = "";

  constructor() {
    console.log('Constructor called');
  }

  changeName(){
    this.name = "Steve";
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
