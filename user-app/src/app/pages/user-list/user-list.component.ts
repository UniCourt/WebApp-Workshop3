import { Component } from '@angular/core';
import { User } from 'src/app/model/common.dto';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  // users : User[] =[
  //   {
  //     name : 'Fahad',
  //     city : 'Mangalore',
  //     emailId : 'fahad838@gmail.com',
  //     id: 1,
  //   },
  //   {
  //     name : 'Deonne',
  //     city : 'Mangalore',
  //     emailId : 'marylynMiranda@gmail.com',
  //     id: 2,
  //   }
  // ]

  constructor(public UserService:UserService){}

  ngOnInit(){
    this.UserService.getUsers();
  }
}
