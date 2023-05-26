import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name : string = "Natasha"
  userName:string="";
  show : boolean = false

  names = ['Arun', 'Mark', 'Smith', 'Jack']

  isError : boolean = true

  constructor() {
    console.log('Constructor called');
  }
  changeName(){
    this.name= this.userName;
    console.log(this.userName);
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
