import { Injectable } from '@angular/core';
import { User, UserDetail } from '../model/common.dto';
import { H}
@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl: string = 'https://jsonplaceholder.typicode.com/users';
  userId: number;
  user: User[] = [];

  constructor() {}

  userAleadyAdded(): boolean {
    return true;
  }

  getUsers(): void {
    this.user = [
      {
        name : 'Arun',
        city : 'Mangalore',
        emailId : 'arunkga@unicourt.com',
        id : 1
      },
      {
        name : 'Riya',
        city : 'Coorg',
        emailId : 'riyajd@unicourt.com',
        id : 2
      }
    ]
    return this.user;
  }

  getUserDetail(id: number) {}

  addUser(user: UserDetail): void {}

  deleteUser(id: number): void {}
}
