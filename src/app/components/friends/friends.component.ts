import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  friends: User[];

  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.userService.getFriends().subscribe(friends => {
      this.friends = friends;
      console.log(friends);
    });
}


}
