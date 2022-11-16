import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  selectedEmployee:any=''
  employeeList:any=[]
  taskForm!:FormGroup;
  invalidBoolean:boolean=false
  employeeTasks:any=[]
  taskObject:any={}
  selectedDate:any
  employeeTasksInSelectedDate:any=[]
  constructor(private service:DataService,private _fb:FormBuilder) { }

  ngOnInit(): void {
    this.service.getEmployees()
    this.employeeList=this.service.employeeList
    console.log(this.employeeList);
    this.taskForm=this._fb.group({
      task:["",Validators.required],
      date:["",Validators.required]
    })
  }
  selectedEmployeefn(event:any){
    this.employeeTasks=[]
    this.employeeTasksInSelectedDate=[]
    if(event.target.value!="Select an Employee Name from Drop Down"){
      this.selectedEmployee=event.target.value
    }
  }
  taskSubmit(){
    if(this.taskForm.valid){
      this.taskObject=this.taskForm.value
      this.taskObject.username=this.selectedEmployee
      this.employeeTasks.push(this.taskObject)
      this.taskForm.reset()
      this.invalidBoolean=false
    }
    else{
      this.invalidBoolean=true
    }
  }

  saveTask(){
    if(this.employeeTasks){
      this.service.addTasksFn(this.employeeTasks)
      alert("task added")
      // this.listSelectedEmployeeTasks()

      this.employeeTasks=[]
    }
    else if(this.employeeTasks.length==0){
      alert("empty list")
    }
  }
  getDate(event:any){
    this.selectedDate=event
    console.log(this.selectedDate);
  }

  listSelectedEmployeeTasks(){
    if(this.selectedDate && this.selectedEmployee){
      this.service.getEmployeeTasks()
      this.employeeTasksInSelectedDate=this.service.employeeTasks.filter((n:any)=>
        n.username==this.selectedEmployee && n.date==this.selectedDate
      )
      // console.log(this.employeeTasksInSelectedDate);
      
    }
    else{
      alert("select a date and employee")
    }
  }
}
