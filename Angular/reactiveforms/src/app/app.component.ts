import { Component, ContentChild, DoCheck, ElementRef, OnInit } from '@angular/core';
import { DemoService } from './demo.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  signupForm!: FormGroup;

  ngOnInit(){
        this.signupForm = new FormGroup({
            'username':new FormControl(null,Validators.required),
            'email':new FormControl(null,[Validators.required,Validators.email]),
            'cnt':new FormControl(null)
        });
  }
  

submitData(){
  console.log(this.signupForm);
}

}
