import { Component,OnInit } from '@angular/core';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']})
export class ReactiveFormComponent implements OnInit {
  color: string;
  valNum:number;
  nameString: string;
   ArrImport:any=[{ fname:"digvijay",lname:"patil",age:26,Qualification:"Engineer"},
   { fname:"kunal",lname:"patil",age:25,Qualification:"Engineer"},
   { fname:"dhaniya",lname:"karale",age:24,Qualification:"Engineer"},
   { fname:"yz dhaniya",lname:"jadhav",age:29,Qualification:"Engineer"}];
  btnPos: boolean = false;
  btnClick(){return this.btnPos=!this.btnPos;}
   ALPHAS=["A","B","C","D","E","F","G","H"];
  constructor() { }
  ngOnInit(): void {}
}
