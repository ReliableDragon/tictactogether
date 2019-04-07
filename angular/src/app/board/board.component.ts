import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  height: number;
  width: number;
  board: string[][];
  coords: number[][];
  nextChar: string;

  constructor() { }

  ngOnInit() {
    this.height = 3;
    this.width = 4;
    this.board = [];
    this.coords = [];
    this.nextChar = "X";
    for (let i = 0; i < this.height; i++) {
      let col = [];
      let coord_col = [];
      for (let j = 0; j < this.width; j++) {
        col.push('');
        coord_col.push([i, j]);
      }
      this.board.push(col);
      this.coords.push(coord_col);
    }
  }

  onClick(squareClicked: number[]): void {
    console.log("Ran!");
    this.board[squareClicked[0]][squareClicked[1]] = "X";
  }

}
