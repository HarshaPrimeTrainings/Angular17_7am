import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
 msg = 'Good Morning';
 username = '';

  display(temp:any){
   this.username = temp;
  }
}
