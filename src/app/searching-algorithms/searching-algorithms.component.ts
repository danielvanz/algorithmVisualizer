import { Component } from '@angular/core';
import { Coordinate } from '../chess-board';

@Component({
  selector: 'app-searching-algorithms',
  templateUrl: './searching-algorithms.component.html',
  styleUrls: ['./searching-algorithms.component.css']
})
export class SearchingAlgorithmsComponent {

    horseTile: string = "../assets/knight.png";
    horseTileIndex: Coordinate = {
      x: -1,
      y: -1
    }

    buttonImages : string[] = [
      "../assets/king_white.png", 
      "../assets/queen_white.png", 
      "../assets/bishop_white.png", 
      "../assets/knight_white.png", 
      "../assets/rook_white.png", 
      "../assets/pawn_white.png", 
    ]

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
  }

}
