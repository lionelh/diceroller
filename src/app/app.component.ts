import { Component } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  border: string = 'lightblue';
  dice: string = 'black';
  buttons: string = '#DDBDF1';
  d6Value: string = '' + 1;
  d10Value: string =  '' + 1;
  d100Value: string =  '' + 1;

  rollDice(inType: number) {
    if (inType == 1 || inType == 4 || inType == 5 || inType == 7) {
      // Roll D6
      this.d6Value = '' + Math.floor(6 * Math.random()+1);
    }
    if (inType == 2 || inType == 4 || inType == 6 || inType == 7) {
      // Rol D10
      this.d10Value = '' + Math.floor(10 * Math.random()+1);
    }
    if (inType == 3 || inType == 5 || inType == 6 || inType == 7) {
      // Rol D100
      this.d100Value = '' + Math.floor(100 * Math.random()+1);
    }
  }
}
