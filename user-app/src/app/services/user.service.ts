import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User, UserDetail } from '../model/common.dto';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl: string = 'https://jsonplaceholder.typicode.com/users';
  userId: number;
  users : any= [];

  constructor(private http:HttpClient) {}

  userAleadyAdded(): boolean {
    return true;
  }

  getUsers(): void {
   this.http.get(this.baseUrl).subscribe((res)=> {
   console.log(res);
   this.users = res;
 })
}





getUserDetail(id: number){
  return this.http.get(this.baseUrl + '/' + id);
}

  addUser(user: UserDetail) : void {}

  deleteUser(id: number): void {}
}


