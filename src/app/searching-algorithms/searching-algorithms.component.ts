import { Component } from '@angular/core';
import { Coordinate } from '../chess-board';

@Component({
  selector: 'app-searching-algorithms',
  templateUrl: './searching-algorithms.component.html',
  styleUrls: ['./searching-algorithms.component.css']
})
export class SearchingAlgorithmsComponent {

    horseTile: string = "../assets/horse.png";
    horseTileIndex: Coordinate = {
      x: -1,
      y: -1
    }

    chessBoard: number[][] = [
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0]]

  pressedOnTile(i :number, j :number) {
      this.horseTileIndex.x = j
      this.horseTileIndex.y = i
      this.putPieceOnBoard()    
  }

  putPieceOnBoard() {

  }


}
