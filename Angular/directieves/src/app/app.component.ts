import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  userage:number=0;

  choice='tiger';

  items=['Electronics','Garments','Books','Accesoroes','Home Utills'];
validateAge(age:any){
    this.userage = age;
}

}
