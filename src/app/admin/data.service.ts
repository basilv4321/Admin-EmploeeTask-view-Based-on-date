import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  employeeList:any=[]
  employeeTasks:any=[]
  constructor() { }
  
  ngOnInit(): void {
    this.getEmployees()
  }
  getEmployees(){
    if(localStorage.getItem("employees")){
      let datalist:any=localStorage.getItem("employees")
      this.employeeList=JSON.parse(datalist)
    }
  }
  addTasksFn(taskArray:any){
    console.log(taskArray);
    taskArray.map((n:any)=>{
      this.employeeTasks.push(n)
    })
    localStorage.setItem("employeeTasks",JSON.stringify(this.employeeTasks))
    this.getEmployeeTasks()
  }
  getEmployeeTasks(){
    if(localStorage.getItem("employeeTasks")){
      let tasks:any=localStorage.getItem("employeeTasks")
      this.employeeTasks=JSON.parse(tasks)
    }
  }
  
}
