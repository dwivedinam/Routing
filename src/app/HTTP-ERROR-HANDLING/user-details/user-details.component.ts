import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
userDetails = [];
errormsg: string;
wrongUrl = 'https://jsonplaceholder.typicode.com/userss';
  constructor(private userService: UserService) { }

  ngOnInit(): void {
     this.userService.getAllUsers().subscribe((data: any) => {
      this.userDetails = data;
     },
      (error: any) => {
        this.errormsg = error;

     }
     );
  }

}
