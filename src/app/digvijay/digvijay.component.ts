import { Component } from '@angular/core';

// //interface 
interface DemoInterface{
  fname: string;
  sal: number;
  city: string;
}

@Component({
  selector: 'app-digvijay',
  templateUrl: './digvijay.component.html',
  styleUrls: ['./digvijay.component.css']
})
export class DigvijayComponent{

  constructor() { }
  message : string;
  receiveMessage($event: string){
    this.message = $event;
  }
  demoInterface: DemoInterface[] = [
    {fname: "digvijay", sal: 100, city: "Nashik"},
    {fname: "1000", sal: 12000, city: "pune"},
  ]
}
