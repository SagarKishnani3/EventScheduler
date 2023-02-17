import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.createForm()
  }
  signupForm !: FormGroup
  createForm():void{
    this.signupForm=new FormGroup({
      username: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required]),
      confirmpassword: new FormControl('',[Validators.required])
    })
  }
  get username(){
    return this.signupForm.get('username');
  }
  get confirmpassword(){
    return this.signupForm.get('confirmpassword');
  }
  get email(){
    return this.signupForm.get('email');
  }
  get password(){
    return this.signupForm.get('password');
  }
  onSubmit(){
    console.warn(this.signupForm.value)
  }

}
