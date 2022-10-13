import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterfaceComponent } from './interface/interface.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  {path: '', component: InterfaceComponent},
  {path:'login', component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path: 'upload',component:UploadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
