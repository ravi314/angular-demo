import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users:User[];
  newUser:User;

  constructor(private userService:UsersService) { }

  ngOnInit() {
    this.userService.fetchAllUsers()
      .subscribe(response => this.users = response);
  }

  saveUser(form:User){
    let newUser = new User(form.id, form.name, form.username, form.email);
    this.userService.saveUser(newUser).subscribe(response => this.newUser = response);
  }

  
  
}
