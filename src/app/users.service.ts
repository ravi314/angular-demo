import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient:HttpClient) { }

  fetchAllUsers():Observable<User[]>{
    return this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  saveUser(user:User):Observable<User>{
    return this.httpClient.post<User>('https://jsonplaceholder.typicode.com/users',JSON.stringify(user));
  }

  updateUser(user:User):Observable<User>{
    return this.httpClient.put<User>('https://jsonplaceholder.typicode.com/users/'+user.id,JSON.stringify(user));
  }

  deleteUser(user:User):Observable<User>{
    return this.httpClient.delete<User>('https://jsonplaceholder.typicode.com/users/'+user.id);
  }


}
