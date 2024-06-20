import { Component, ContentChild, DoCheck, ElementRef, OnInit } from '@angular/core';
import { DemoService } from './demo.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  isLoggedIn:any = 'false';

constructor(private route:Router,private service:DemoService){

}

  ngOnInit(){
   this.service.validateLogin();
  
  }
  logout(){
    window.localStorage.setItem('isLoggedIn','false');
    window.location.reload();
  }


}
