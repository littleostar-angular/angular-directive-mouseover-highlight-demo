import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.css']
})
export class TestPageComponent implements OnInit {

  color_choose: string;

  color_list: string[];

  constructor() {
    this.color_list = ['red', 'yellow', 'green', 'blue', 'darkorange', 'mediumslateblue'];
  }

  ngOnInit() {
  }

}
