import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '../auth/components/_models';
import { UserService, AuthenticationService } from '../auth/components/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: User[] = [];
  constructor(private userService: UserService) { }
  ngOnInit(): void {
  }
   // this.userService.getAll().pipe(first()).subscribe(users => {
        //     this.users = users;
        // });
}





  


