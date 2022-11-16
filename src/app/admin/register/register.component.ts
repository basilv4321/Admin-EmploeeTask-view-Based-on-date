import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  employeeList:any=[]
  employRegisterForm!:FormGroup;
  // dummyEmployees:any=[
  //   {username:"mathew",
  //     password:"mathew",
  //   email:"mathew@jhdfdj.com"
  // },
  // {username:"raja",
  //     password:"raja",
  //   email:"raja@jhdfdj.com"
  // }

  // ]
  constructor(private _fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.getEmployees()
    // this.pushDummyValues()
    this.employRegisterForm=this._fb.group({
      username:["",[Validators.required,Validators.maxLength(30),Validators.minLength(1)]],
      password:["",[Validators.required,Validators.maxLength(30),Validators.minLength(1)]],
      email:["",[Validators.required,Validators.email]]
    })
  }
  getEmployees(){
    if(localStorage.getItem("employees")){
      let datalist:any=localStorage.getItem("employees")
      this.employeeList=JSON.parse(datalist)
    }
  }
  // pushDummyValues(){
  //   this.dummyEmployees.map((n:any)=>{
  //     this.employeeList.push(n)
  //   })
  // }

  registerNewEmploy(){
    if(this.employRegisterForm.invalid){
      alert("invalid form")
    }
    else if(this.employRegisterForm.valid){
      if(this.employeeList.some((n:any)=>
      n.username==this.employRegisterForm.value.username)){
          alert("employee already exist")
      }
      else{
        this.employeeList.push(this.employRegisterForm.value)
        localStorage.setItem("employees",JSON.stringify(this.employeeList))
        this.getEmployees()
        alert("employ added")
        this.router.navigate(['home/task'])
      }
    }
  }

}
