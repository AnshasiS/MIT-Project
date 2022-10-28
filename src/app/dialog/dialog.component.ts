import { Component, OnInit, Inject, InjectionToken } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

/**
 * a component for showing dialog message to user, based on strings data stemming out from different sources
 */

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  
  /**
   * 
   * if the string matches one of the following a corrosponding message will pop up, check HTML
   * 
   * "authenticate"
   * 
   * "signup successful"
   * 
   * "signup failed"
   * 
   * "no room match"
   * 
   * "room match"
   * @param data a string that originates from autherization/ credential service as well as navigattion component.ts  (read Qr code/ Compare room methods)
   * 
   * 
   * 
   */
  constructor(@Inject(MAT_DIALOG_DATA) public data :any) {}
  /**
   * empty Initialization
   */
  ngOnInit(): void {}

}
