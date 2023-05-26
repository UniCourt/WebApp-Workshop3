import { Injectable } from '@angular/core';
import { User, UserDetail } from '../model/common.dto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl: string = 'https://jsonplaceholder.typicode.com/users';
  userId: number;
  users;

  constructor(private http: HttpClient) {

  }

  userAleadyAdded(): boolean {
    // this.users = this.http.get(this.baseUrl);
    return true;
  }

  getUsers(): void {
    this.http.get(this.baseUrl).subscribe((res) => {
      console.log(res, typeof(res[0]));
      this.users = res;
    });
    // console.log("called GetUsers!");
    // this.users = [
    //   {
    //     id: 1,
    //     name: "Jerome",
    //     emailId: "jerome@email.com",
    //     city: "Mangalore",
    //   },
    //   {
    //     id: 2,
    //     name: "RandomP",
    //     emailId: "Random@email.com",
    //     city: "Bangalore",
    //   }
    // ]

  }

  getUserDetail(id: number) {
      return this.http.get(this.baseUrl + '/' + id);
  }

  addUser(user: UserDetail): void {}

  deleteUser(id: number): void {}
}
