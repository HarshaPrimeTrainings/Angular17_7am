import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InboxComponent } from './inbox/inbox.component';
import { SentComponent } from './sent/sent.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'inbox',component:InboxComponent},
  {path:'sent',component:SentComponent},
  {path:'users',component:UsersComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
