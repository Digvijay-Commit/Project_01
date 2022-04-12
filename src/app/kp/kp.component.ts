import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NComponent } from '../n/n.component';

@Component({
  selector: 'app-kp',
  templateUrl: './kp.component.html',
  // template: `
  // Message : {{ message }}
  // <app-kp></app-kp>
  // `,
  styleUrls: ['./kp.component.css']
})
export class KpComponent implements AfterViewInit {

  @ViewChild(NComponent) n: { message: string; };
  constructor() { }

  message : string;
  ngAfterViewInit(): void {
    this.message = this.n.message;
  }

}
