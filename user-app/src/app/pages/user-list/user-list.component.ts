import { Component } from '@angular/core';
import { User } from 'src/app/model/common.dto';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  // users : User[]=[
  //   {
  //     name:'Deonne',
  //     city:'gfyg',
  //     emailId:'marylyn@gmail.com',
  //     id:1,
  //   },
  //   {
  //     name:'Fahad',
  //     city:'idk',
  //     emailId:'mrAhmed838@gmail.com',
  //     id:2,
  //   }
  // ]
  constructor(public userService:UserService){}
  ngOnInit(){
    console.log("random");
    this.userService.getUsers();
  }
}

