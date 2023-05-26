import { Component, Input } from '@angular/core';
import { UserDetail } from 'src/app/model/common.dto';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})

export class UserDetailComponent {
  userDetail: UserDetail = {
    id: this.userService.userId,
    name: '',
    city: '',
    companyName: '',
    emailId: '',
    phoneNumber: '',
    street: '',
    zipCode: '',
  };

  hasError: boolean = false;

  constructor(public userService: UserService) {}


}
