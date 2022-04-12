import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-n',
  templateUrl: './n.component.html',
  styleUrls: ['./n.component.css']
})
export class NComponent implements OnInit {

  message = 'msg from NComponent'
  constructor() { }

  ngOnInit(): void {
  }

}
