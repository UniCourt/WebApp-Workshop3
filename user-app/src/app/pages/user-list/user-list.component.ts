import { Component } from '@angular/core';
import { User, UserDetail } from 'src/app/model/common.dto';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  users: User[] = [
    {
      id: 1,
      name: 'Leanne Graham',
      emailId: 'abcd@gmail.com',
      city: 'Gwenborough',
    },
    {
      id: 2,
      name: 'Leanne Graham',
      emailId: 'abcd@gmail.com',
      city: 'Gwenborough',
    }
  ];

  constructor(public userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers();
  }
}
