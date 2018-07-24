import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../clases/User';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users:any;
  constructor(public UserSrv:UserService) { }

  ngOnInit() {
    this.UserSrv.getUsers().subscribe(data =>{
      this.users = JSON.parse(JSON.stringify(data));
    });
  }

  delete(row){
    this.UserSrv.deleteUser(row).subscribe(data =>{
      console.log(data);
      this.ngOnInit();
    });
  }

  editRow(row) {
    this.users.filter(row => row.isEditable).map(r => { r.isEditable = false; return r })
    row.isEditable = true;
  }

  save(row){
    this.UserSrv.updateUser(row).subscribe(data =>{
      console.log(data);
      row.isEditable = false;
    });
  }

}
