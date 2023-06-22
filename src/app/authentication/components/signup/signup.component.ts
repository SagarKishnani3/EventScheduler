import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  validUser: any;

  constructor(private authservice:AuthenticationService) { }

  ngOnInit(): void {
    this.createForm()
  }
  signupForm !: FormGroup
  createForm():void{
    this.signupForm=new FormGroup({
      name: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required]),
      confirmpassword: new FormControl('',[Validators.required])
    })
  }
  get name(){
    return this.signupForm.get('name');
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
    this.validateUSer();
  }
  validateUSer():void{
    const user=this.signupForm.get('name')?.value
    this.authservice.validateUser(user).subscribe((value:any)=>{
      console.warn(value)
      this.validUser=value.validUser
      console.warn(this.validUser)
      if(this.validUser){
        if(this.signupForm.controls["password"].value==this.signupForm.controls["confirmpassword"].value){
          const body=this.generateBody()
        this.authservice.addUser(body).subscribe(()=>console.warn("done"));
        }
        else{
          alert("pasword not match")
        }
      }
      else{
        alert("already exist")
      }
    })
  }
  generateBody(){
    const body={
      ...this.signupForm.value,
      userid:1,
    }
    console.warn(body)
    return body;
  }

}
