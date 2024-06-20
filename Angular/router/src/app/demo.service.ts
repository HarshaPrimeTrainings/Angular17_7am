import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn:'root'
})
export class DemoService {
  isLoggedIn:any;
  constructor(private http:HttpClient,private route:Router){

  }

 getUsers(){
  return this.http.get('https://jsonplaceholder.typicode.com/users');
 }
validateLogin(){
  this.isLoggedIn = window.localStorage.getItem('isLoggedIn');
   console.log(this.isLoggedIn);
   if(this.isLoggedIn=='false' || this.isLoggedIn==null){
      this.route.navigate(['login']);
   }
}


}
