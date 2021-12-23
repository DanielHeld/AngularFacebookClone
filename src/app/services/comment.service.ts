import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Comments} from '../model/comments';

const url = 'https://jsonplaceholder.typicode.com/posts/';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) {}

  getComments(postId: number): Observable<Array<Comments>> {
    return this.http.get<Comments[]>(url + postId + '/comments');
  }

  addComment(comment: Comments): Observable<Comments> {
    return this.http.post<Comments>(url + '/comments/' + comment.postId, comment);
  }
}
