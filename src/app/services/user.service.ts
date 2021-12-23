import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../model/post';
import {User} from '../model/user';

const url = 'https://jsonplaceholder.typicode.com/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getFriends(): Observable<Array<User>> {
    return this.http.get<User[]>(url);
  }
}
