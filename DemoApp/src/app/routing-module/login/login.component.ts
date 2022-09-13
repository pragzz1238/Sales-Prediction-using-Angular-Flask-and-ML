import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  forms=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    pass:new FormControl('',[Validators.required])
  })

  get func(){
    return this.forms.controls;
  }
  submit(){
    console.log(this.forms.value);
  }
  
  constructor(private router:Router) {}
  goToPage(){
    this.router.navigate(['home']);
  }

}
