import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector:'demo-comp',
    templateUrl:'./demo.html'
})
export class DemoComponent{

@Input()    
msg:any;

@Output()
info = new EventEmitter();

getData(data:any){
 this.info.emit(data);   
}

}