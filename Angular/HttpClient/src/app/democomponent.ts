import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChange, SimpleChanges } from "@angular/core";
import { DemoService } from "./demo.service";

@Component({
    selector:'demo-comp',
    templateUrl:'./demo.html'
})
export class DemoComponent  {
   
    constructor(private service:DemoService){

    }
}