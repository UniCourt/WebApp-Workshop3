import { Component } from '@angular/core';
import { User } from 'src/app/model/common.dto';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  /*users:User[]=[
    {
    name:'Alreya',
    city:'sdsd',
    emailId:'alreyap@gmail.com',
    id:1,

},
{
  name:'Deonne',
  city:'sjka',
  emailId:'deon@gmail.com',
  id:2,

},
{
  name:'Himani',
  city:'Mna',
  emailId:'himanip@gmail.com',
  id:3,

}
  ]*/
  constructor(public userService:UserService){}
  ngOnInit(){
    this.userService.getUsers();
  }
}
