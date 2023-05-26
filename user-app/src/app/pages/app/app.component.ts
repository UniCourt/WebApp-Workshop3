import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  name:string='Ashin';
  show : boolean=true;
  userName : string ="";
  names = ['Arun', 'Mark', 'Smith', 'Jack'];
  isError : boolean=false;

changeName(){
  this.name = this.userName;
  console.log(this.userName)
  
}
}