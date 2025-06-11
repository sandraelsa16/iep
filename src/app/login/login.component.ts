import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
   loginForm:FormGroup
 
  constructor(private router:Router, private fb:FormBuilder){
    this.loginForm = this.fb.group({
      username:['',[Validators.required]],
      password:['',[Validators.required,Validators.pattern('[a-zA_Z0-9]*')]]
    })
  }

  login(){
   
    if(this.loginForm.valid){
      const username = this.loginForm.value.username
      const password = this.loginForm.value.password
      this.loginForm.reset()
      sessionStorage.setItem('name',username)
      this.router.navigateByUrl('/dashboard')
    }else {
      
    }
  }
}
