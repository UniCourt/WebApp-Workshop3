import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name : string ="Navyashree";  
   names = ['Arun', 'Mark', 'Smith', 'Jack'];
   show :boolean = true;
   isError : boolean = true;
   userName :string ="";


   constructor() {
    console.log('Constructor called');
  }  
  changeName(){
    this.name="Steve";
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

