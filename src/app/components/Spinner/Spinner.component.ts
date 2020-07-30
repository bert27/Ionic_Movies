import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-Spinner',
  templateUrl: './Spinner.component.html',
  styleUrls: ['./Spinner.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;

  constructor() { }

  ngOnInit() {



  }

}
