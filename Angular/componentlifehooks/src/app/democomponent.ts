import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChange, SimpleChanges } from "@angular/core";

@Component({
    selector:'demo-comp',
    templateUrl:'./demo.html'
})
export class DemoComponent  {
   
@Input()    
msg:any;

ngOnInit() {
    console.log('----- ngOnInit -------');
}

ngOnDestroy(){
    console.log('----- ngOnDestroy -------');
}

ngOnChanges(change:SimpleChanges){
    console.log('----- ngOnChanges -------');
    console.log(change)
}

ngDoCheck(){
    console.log('----- ngDoCheck -------');
}

ngAfterContentInit(){
    console.log('----- ngAfterContentInit -------');
}

ngAfterContentChecked(){
    console.log('----- ngAfterContentChecked -------');
}

ngAfterViewInit(){
    console.log('----- ngAfterViewInit -------');
}

ngAfterViewChecked(){
    console.log('----- ngAfterViewChecked -------');
}
}