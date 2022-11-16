import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  
  @Output() date=new EventEmitter<any>();
  constructor() {
   }

  ngOnInit(): void {
  }

  dateChange(event:any){
    this.date.emit(event.target.value);
  }
  
}
