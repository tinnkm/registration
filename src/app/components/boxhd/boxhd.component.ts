import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-boxhd',
  templateUrl: './boxhd.component.html',
  styleUrls: ['./boxhd.component.css']
})
export class BoxhdComponent implements OnInit {

  @Input() title:string;
  constructor() { }

  ngOnInit() {
  }

}
