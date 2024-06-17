import { Component, ContentChild, ElementRef, OnInit } from '@angular/core';
import { DemoService } from './demo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  users:any = [];

  constructor(private service:DemoService){
  }

  

  displayUsers(){
    this.service.getUsers().subscribe(data=>{
      this.users = data
    console.log('Data Retrieved');
    });
  }
  

}
