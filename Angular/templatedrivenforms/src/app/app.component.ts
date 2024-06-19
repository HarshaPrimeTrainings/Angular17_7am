import { Component, ContentChild, DoCheck, ElementRef, OnInit } from '@angular/core';
import { DemoService } from './demo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  msg:any;

  submitForm(data:any){
      console.log(data);
  }

}
