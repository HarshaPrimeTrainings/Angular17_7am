import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

constructor(private route:Router){

}

  getCredentials(data:any){
    console.log(data);
    if(data.username=='admin'&&data.password=='1234'){
      console.log('LOGIN SUCCCES');
      window.localStorage.setItem('isLoggedIn','true');
      this.route.navigate(['users']);
    }else{
      window.localStorage.setItem('isLoggedIn','false');
    }
    }
}
