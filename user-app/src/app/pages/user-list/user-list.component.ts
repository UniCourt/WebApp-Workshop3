import { Component } from '@angular/core';
import { User } from 'src/app/model/common.dto';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  /*users :User[] = [
    {
      name : 'Johnson',
      city : 'Mangalore',
      emailId: 'johnson@gmail.com',
      id:1,
    },
    {
      name : 'shaaa',
      city : 'kutthi',
      emailId: 'shaaa@gmail.com',
      id:1,
    },
    {
      name : 'Jithin',
      city : 'baindoor',
      emailId: 'jithin@gmail.com',
      id:1,
    },
  ]*/                    
  constructor (public userService:UserService){}
  ngOnInit()
  {
    this.userService.getUsers();
  }
}


