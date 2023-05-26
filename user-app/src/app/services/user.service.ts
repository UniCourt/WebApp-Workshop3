import { Injectable } from '@angular/core';
import { User, UserDetail } from '../model/common.dto';
import{ HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl: string = 'https://jsonplaceholder.typicode.com/users';
  userId: number;
  users;

  constructor(private http:HttpClient) {}

  userAleadyAdded(): boolean {
    return true;
  }

  getUsers() {
    this.http.get(this.baseUrl).subscribe((res)=>{
      console.log(res);
      this.users=res;
  })
  }

  getUserDetail(id: number): {

    return this.http.get(this.baseUrl + '/' + id);
  }

    addUser(user: UserDetail): void {
      this.http.post(this.baseUrl, {
          user: user,
        })
        .subscribe({
          next: (response) => {
            this.users = JSON.parse(localStorage.getItem('users')) || [];
            this.users.push(user);
            localStorage.setItem('users', JSON.stringify(this.users));
            alert('User added successfully');
            this.router.navigateByUrl('/');
          },
          error: (error) => {
            console.log('add user error', error);
          },
        });
    }

    deleteUser(id: number): void{
      this.http.delete(this.baseUrl + '/' + id).subscribe({
        next: (response) => {
          this.users = JSON.parse(localStorage.getItem('users')) || [];
          this.users = this.users.filter((user) => user['id'] != id);
          localStorage.setItem('users', JSON.stringify(this.users));
          this.users = JSON.parse(localStorage.getItem('users')) || [];
          alert('User delete successfully');
        },
        error: (error) => {
          console.log('delete user error', error);
        },
      });
   }
}
