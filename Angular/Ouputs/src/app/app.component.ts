import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
item:any;

childdata:any;

getData(arg:any){
this.item = arg;
}

setData(args:any){
    this.childdata = args;
}

}
