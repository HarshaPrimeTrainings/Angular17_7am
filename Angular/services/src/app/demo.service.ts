import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})
export class DemoService {

  display(){
   return "Hello Iam from Service";
  }

}
