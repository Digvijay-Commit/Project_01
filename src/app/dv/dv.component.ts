import { Component, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-dv',
  templateUrl: './dv.component.html',
  styleUrls: ['./dv.component.css']
  
})
export class DvComponent  {

  message : string = "msg from dv Component";
  @Output() messageEvent = new EventEmitter<string>();
  constructor() {}
  sendMessage(){
    this.messageEvent.emit(this.message);
  }
}
