import { Component } from '@angular/core';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html',
  styleUrl: './sent.component.css'
})
export class SentComponent {
  constructor(private service:DemoService){

  }

  ngOnInit(){
    this.service.validateLogin();
  }

}
