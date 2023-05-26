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

  constructor(private http: HttpClient) { }

  userAleadyAdded(): boolean {
    return true;
  }

  getUsers(): void {
    this.http.get(this.baseUrl).subscribe(
      (user: User[]) => {
        this.users = user;
        console.log('Users:', this.users); // You can handle the retrieved users here or pass them to another method
      },
    );
  }





  getUserDetail(id: number) {
    // const url = `${this.baseUrl}/${id}`;

  }

  addUser(user: UserDetail): void {}

  deleteUser(id: number): void {}

}

