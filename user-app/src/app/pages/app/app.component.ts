import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  name:string='Elham';

  show:boolean=false;//to show screen give true else false

  isError: boolean=false;

  username:string="";

 



  constructor() {
    console.log('Constructor called');
  }

  changeName(){
    this.name=this.username;
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

  names = ['Arun', 'Mark', 'Smith', 'Jack'];


}
