import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../authentication.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validLogin: any;

  constructor(private authenticationserviec:AuthenticationService,private cookieservice:CookieService,private router:Router) { }

  ngOnInit(): void {
    this.createForm()
  }
  
  loginForm !: FormGroup
  createForm():void{
    this.loginForm=new FormGroup({
      name: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
    })
  }
  get name(){
    return this.loginForm.get('name');
  }
  get password(){
    return this.loginForm.get('password');
  }
  onSubmit(){
    console.warn(this.loginForm.value)
    this.validateLogin()
  }
  validateLogin():any{
    const user=this.generateBody()
    this.authenticationserviec.validateLogin(user).subscribe((value:any)=>{
      console.warn(value)
      console.warn(value.validLogin)
      this.validLogin=value.valid
      console.warn(this.validLogin)
      if(this.validLogin!=0){
        alert("succesfully login")
        this.cookieservice.set("name",value.userName),
              this.cookieservice.set("userid",value.userID),
              this.cookieservice.set("token",value.token),
              this.router.navigate(['home'])

      }
      else{
        alert("false")
      }
    })
  }
  generateBody(){
    const body={
      ...this.loginForm.value
    }
    console.warn(body)
    return body
  }

}
