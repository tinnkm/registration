import {Component, Input, OnInit} from '@angular/core';
import {Strip} from '../../model/strip';

@Component({
  selector: 'app-strip',
  templateUrl: './strip.component.html',
  styleUrls: ['./strip.component.css']
})
export class StripComponent implements OnInit {
  @Input() strip: Strip;
  show: number;
  constructor() { }

  ngOnInit() {
  }

}
