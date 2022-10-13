import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup | any;
  title = 'material-login';
  

  constructor(private router:Router) {

    

    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email,Validators.pattern(
        'anu@gmail.com',
      ),]),
      password: new FormControl('', [Validators.required,Validators.pattern(
        'abc'
      )])
    });
   }

  ngOnInit(): void {
  
  }
onSubmit(){
  if(!this.loginForm.valid){
    alert("Enter valid details!")
    if(this.loginForm.valid){
      alert("Logging in!")
    }
    return;
}
localStorage.setItem('user',this.loginForm.value)
    this.router.navigate(['/upload'])
}
}
