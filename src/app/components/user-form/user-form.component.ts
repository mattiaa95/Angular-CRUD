import { Component, OnInit } from '@angular/core';
import { User } from '../../clases/User';
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  username: String;
  name: String;
  email: String;
  document: String;
  date: String;
  constructor(public UserSrv:UserService) {}
  
  ngOnInit() {
  }

  newUser() {
    this.UserSrv.addUser(new User(this.username, this.name, this.email, this.document, this.date)).subscribe(data =>{
      console.log(data);
    });
  }

  
}

