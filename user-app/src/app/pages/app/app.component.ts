import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  name : String="JITHIN";
  show : boolean=true;
  names = ['Arun', 'Mark', 'Smith', 'Jack'];
  isError :boolean=false;
  username:String="";


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

  changeName()
  {
    this.name=this.username;
    console.log(this.username);
  }





}
