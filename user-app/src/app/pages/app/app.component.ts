import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name: string='prerana';

  show:boolean = true;
  names=['arun','mark','smith','jack'];
  isError:boolean=false;
userName:string="pram";
constructor() {
  console.log('Constructor called');
}

changeName() {
  this.name="peruuuuu";
  console.log(this.userName);
}


ngOnInit() {
  console.log('on init called');
}

ngOnDestroy() {
  console.log('on destroy called');
}}
