import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Post} from '../model/post';
import {HttpClient} from '@angular/common/http';


const url = 'https://jsonplaceholder.typicode.com/posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {


  constructor(private http: HttpClient) { }

  getPosts(): Observable<Array<Post>> {
    return this.http.get<Post[]>(url);
  }

  addPost(newPost: Post): Observable<Post> {
    return this.http.post<Post>(url, newPost);
  }
}
