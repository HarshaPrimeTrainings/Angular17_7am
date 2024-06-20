import { Component } from '@angular/core';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  users:any = [];
  constructor(private service:DemoService){

  }

  ngOnInit(){
    this.service.validateLogin();
    this.service.getUsers().subscribe(data=>this.users = data);
  }

}
