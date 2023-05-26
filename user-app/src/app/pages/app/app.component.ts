import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name:string="Alreya";
  show:boolean=true;
  names = ['Arun', 'Mark', 'Smith', 'Jack'];
  isError:boolean=false;
  userName:string="";
  constructor() {
    console.log('Constructor called');
  }
  changeName(){
    this.name="Steve";
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
