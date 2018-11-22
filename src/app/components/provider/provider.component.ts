import {Component, Input, OnInit} from '@angular/core';
import {Provider} from '../../model/provider';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})
export class ProviderComponent implements OnInit {

  @Input() provider: Provider;

  @Input() rowFirst: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
