import { Component } from '@angular/core';
import { User } from 'src/app/model/common.dto';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
//   users:User[]=[
//   {
//     name:'Arun',
//     city:'asf',
//     emailId:'arun@gmail.com',
//     id:1,
//   },
//   {
//     name:'Varun',
//     city:'safg',
//     emailId:'varun@gmail.com',
//     id:1,
//   }
// ]
constructor(public userService:UserService){}


ngOnInit(){
  this.userService.getUsers();
}
}
