import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UsersPage } from './users.page';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserListFilterComponent } from './components/user-list-filter/user-list-filter.component';
import { UserAddComponent } from './components/user-add/user-add.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserItemComponent } from './components/user-item/user-item.component';


@NgModule({
  declarations: [
    UsersComponent,
    UsersPage,
    UserListComponent,
    UserListFilterComponent,
    UserAddComponent,
    UserFormComponent,
    UserItemComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
