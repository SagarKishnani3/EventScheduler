import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthenticationService } from '../../authentication.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  validLogin: any;

  constructor(private cookieservice:CookieService,private router:Router,private authenticationserviec:AuthenticationService) { }

  ngOnInit(): void {
    this.createForm()
  }
  
  loginForm !: FormGroup
  createForm():void{
    this.loginForm=new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required]),
    })
  }
  get email(){
    return this.loginForm.get('email');
  }
  get password(){
    return this.loginForm.get('password');
  }
  onSubmit(){
    console.warn(this.loginForm.value)
    this.validateadmin()
  }
  validateadmin(){
    const user=this.generateBody()
    this.authenticationserviec.validamin(user).subscribe((value:any)=>{
     // console.warn(value)
     // console.warn(value.validLogin)
      this.validLogin=value.valid
      console.warn(this.validLogin)
      if(this.validLogin!=0){
        alert("succesfully login")
        this.cookieservice.set("name",value.userName),
              this.cookieservice.set("adminid",value.userID),
              this.cookieservice.set("token",value.token),
              this.router.navigate(['approval'])

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
   // console.warn(body)
    return body
  }

}
