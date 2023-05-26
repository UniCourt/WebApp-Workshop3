import { Component } from '@angular/core';
import { User } from 'src/app/model/common.dto';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent  {
  constructor(public userService:UserService){}
  users:User[]=[];
  ngOnInit(){
    //console.log("here")
     this.userService.getUsers();
    // this.users = this.userService.users;
  }




}

