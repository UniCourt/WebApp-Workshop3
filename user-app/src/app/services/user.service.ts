import { Injectable } from '@angular/core';
import { User, UserDetail } from '../model/common.dto';
import { H}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl: string = 'https://jsonplaceholder.typicode.com/users';
  userId: number;
  users: User[] = [];

  constructor() {}

  userAleadyAdded(): boolean {
    return true;
  }

  getUsers(){
    this.users = [
      {
        name : 'Arun',
        city: 'Mangalore',
        emailId : 'arunk@unicourt.com',
        id: 1
      },
      {
        name : 'Mark',
        city: 'New York',
        emailId : 'mark92@unicourt.com',
        id: 2
      }
    ]
    return this.users;
  }

  getUserDetail(id: number) {}

  addUser(user: UserDetail): void {}

  deleteUser(id: number): void {}
}
