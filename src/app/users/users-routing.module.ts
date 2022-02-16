import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// users
import { UsersPage } from './users.page';

const routes: Routes = [{ path: '', component: UsersPage }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
