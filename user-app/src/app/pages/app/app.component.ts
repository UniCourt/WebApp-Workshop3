import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name: string="Bhavish";

  show: boolean=false;

  names = ['Arun', 'Mark', 'Smith', 'Jack'];

  isError: boolean=true;

  userName: string="";

  constructor() {
    console.log('Constructor called');
  }

  changename(){
    this.name="Bhavish";
    console.log(this.name=this.userName);
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
