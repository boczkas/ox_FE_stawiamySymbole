import { Component } from '@angular/core';

interface Position {
  x: number;
  y: number;
}

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {

  board: string[] = [' ', ' ', ' ',
                     ' ', ' ', ' ',
                     ' ', ' ', ' '];

  constructor() {}

  buttonClicked(index: number) {
    this.calculatePosition(index);
  }

  calculatePosition(index: number) {
    let xPos = Math.floor(index/3);
    let yPos = index % 3;

    let position: Position = {x: xPos, y: yPos};
    console.log("position");
    console.log(position);
  }
}
