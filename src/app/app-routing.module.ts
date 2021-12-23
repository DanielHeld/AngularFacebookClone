import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FriendsComponent} from './components/friends/friends.component';
import {PostsComponent} from './components/posts/posts.component';

const routes: Routes = [
  {path: 'friends', component: FriendsComponent},
  {path: 'posts', component: PostsComponent},
  {path: '**', component: PostsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
