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
    this.service.getUsers().subscribe({
      next:(res)=>this.users = res,
      error:(err)=>{
        if(err.status == 404){
          alert('Url/api not valid');
        }
        },
      complete:()=>console.log('Completed')
    });
  }
  

}
