import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UsersRoutingModule } from './users-routing.module';
import { EditUserComponent } from './edit-user/edit-user.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    UsersComponent, EditUserComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    BrowserModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
