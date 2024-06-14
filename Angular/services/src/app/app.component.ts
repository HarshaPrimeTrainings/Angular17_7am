import { Component, ContentChild, ElementRef, OnInit } from '@angular/core';
import { DemoService } from './demo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  msg:any;
  constructor(private service:DemoService){

  }

  getDisplay(){
    this.msg = this.service.display();
  }
  

}
