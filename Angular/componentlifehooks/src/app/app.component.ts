import { Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  display=true;
  data:any

  
  setMessage(msg:any){
    this.data = msg;
}

  setDisplay(){

    this.display = !this.display;
  }
  

}
