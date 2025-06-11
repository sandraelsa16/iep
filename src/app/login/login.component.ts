import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';
import { KENDO_TEXTBOX } from '@progress/kendo-angular-inputs';
import { KENDO_LABEL } from '@progress/kendo-angular-label';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,KENDO_LABEL,KENDO_BUTTONS,KENDO_TEXTBOX],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  //  loginForm:FormGroup
 
  // constructor(private router:Router, private fb:FormBuilder){
  //   this.loginForm = this.fb.group({
  //     username:['',[Validators.required]],
  //     password:['',[Validators.required,Validators.pattern('^[A-Za-z0-9]*$')]]
  //   })
  // }

  // login(){
  //   console.log("Login clicked");
  //   if(this.loginForm.valid){
  //     const username = this.loginForm.value.username
  //     const password = this.loginForm.value.password
  //     this.loginForm.reset()
  //     sessionStorage.setItem('name',username)
  //     this.router.navigateByUrl('/dashboard')
     
      
  //   }else {
      
  //   }
  // }


  public form: FormGroup;

  public data = {
    username: "",
    password: "",
   
  };
  

  constructor(private router: Router) {
    this.form = new FormGroup({
      username: new FormControl(this.data.username, [Validators.required]),
      password: new FormControl(this.data.password, [
        Validators.required,
        Validators.pattern('^[A-Za-z0-9]*$'),
      ]),
    });
  }

  public submitForm(): void {
    console.log(this.form.value);
    this.router.navigate(["/dashboard"])
  }
}
