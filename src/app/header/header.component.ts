import { Component, OnInit } from '@angular/core';
/**
 * a component for showing header elements for all pages
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  /**
   * Empty constructor
   */
  constructor() { }
  /**
   * empty Initialization
   */
  ngOnInit(): void {}

}
