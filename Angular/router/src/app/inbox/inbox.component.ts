import { Component } from '@angular/core';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrl: './inbox.component.css'
})
export class InboxComponent {

  constructor(private service:DemoService){

  }

  ngOnInit(){
    this.service.validateLogin();
  }
}
