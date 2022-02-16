import { of, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';


import { User } from './state/user.interface';
import { CrudHttpService } from '../shared/crud-http.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.css']
})
export class UsersPage implements OnInit {

  users$: Observable<User[]> | null = of([])
  constructor(private svc:CrudHttpService<User>) {
    this.users$ = svc.list("users")
  }
  ngOnInit(): void {
  }

}
