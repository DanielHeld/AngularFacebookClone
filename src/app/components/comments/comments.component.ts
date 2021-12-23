import {Component, Input, OnInit} from '@angular/core';
import {CommentService} from '../../services/comment.service';
import {Comments} from '../../model/comments';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input() postId: number;
  comments: Comments[];
  newComment: Comments = {
    id: 0,
    postId: 0,
    body: ''
  };

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.commentService.getComments(this.postId).subscribe(comments => {
      this.comments = comments;
    });
  }

  addComment(comment: string): void{

    if (comment !== '') {
      this.newComment.body = comment;
      this.newComment.postId = this.postId;
      // this.commentService.addComment(this.newComment); api gibt es noch nicht
      this.comments.unshift(this.newComment);
      this.newComment = {
        id: 0,
        postId: 0,
        body: ''
      };
    }
  }



}
