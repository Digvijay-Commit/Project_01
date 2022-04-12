import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templet-form',
  templateUrl: './templet-form.component.html',
  styleUrls: ['./templet-form.component.css']
})
export class TempletFormComponent implements OnInit {
  v: any[];
  constructor() { }

  ngOnInit(): void {
  }
  
  save(v: any){
    debugger;
    console.log("inside save method");
  }
}
