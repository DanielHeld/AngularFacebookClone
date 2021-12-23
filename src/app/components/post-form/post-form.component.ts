import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Post} from '../../model/post';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  @Output() postAdded = new EventEmitter<Post>();

  newPost: Post = {
    id: 0,
    title: '',
    body: ''
  };
  creating = false;
  submitted = false;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.submitted = true;
  }

  submitPost(): void {
    this.postAdded.emit(this.newPost);
    this.creating = false;
  }
}
