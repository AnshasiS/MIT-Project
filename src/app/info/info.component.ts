import { Component, OnInit } from '@angular/core';


/**
 * a component that allow us to navigate between child components through tabs
 * 
 * a parent component for "freeRoom", "exams", "mensa", "lectures-plan" components
 */

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  /**
   * empty constructor
   */
  constructor() { }
  /**
   * empty Initialization
   */
  ngOnInit(): void {}
 
}
