import { Injectable } from '@angular/core';
import { User, UserDetail } from '../model/common.dto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl: string = 'https://jsonplaceholder.typicode.com/users';
  userId: number;
  users: User[] = [];

  constructor(private http:HttpClient) {}

  userAleadyAdded(): boolean {
    return true;
  }

  getUsers() {
     this.http.get(this.baseUrl).subscribe((user:User[])=>{
    console.log(user);
    this.users=user;
  })
  }

  getUserDetail(id: number) {}

  addUser(user: UserDetail): void {}

  deleteUser(id: number): void {}
}
