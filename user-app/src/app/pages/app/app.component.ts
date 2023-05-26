import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name: string="NISHA";
  isError :boolean=true;
  show: boolean=true;
  userName :string="";
  names = ['Nisha', 'Mark', 'hello', 'Jack'];
  constructor() {
    console.log('Constructor called');
  }
  changeName(){
    this.name="raksha";
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
