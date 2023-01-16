import { Component } from '@angular/core';
import { Coordinate } from '../chess-board';

@Component({
  selector: 'app-searching-algorithms',
  templateUrl: './searching-algorithms.component.html',
  styleUrls: ['./searching-algorithms.component.css']
})
export class SearchingAlgorithmsComponent {

    horseTile: string = "../assets/knight.png";
    horseTileIndex: Coordinate = {x: -1, y: -1};
    targetTileCoordinate: Coordinate = {x: -1, y: -1};

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


  gameStarted: boolean = false;

  startGame() {
    if (this.horseTileIndex.x == -1 || this.targetTileCoordinate.x == -1) return; //Implement error handling
    this.gameStarted = true;
    this.chessBoard[this.horseTileIndex.y][this.horseTileIndex.x] = 1;
    this.breathFirstSearch();
  }
  
  resetGame() {
    this.gameStarted = false;
    this.horseTileIndex.x = -1;
    this.horseTileIndex.y = -1;
    this.targetTileCoordinate.x = -1;
    this.targetTileCoordinate.y = -1;
    this.chessBoard = [
      [0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0]]
  }

  pressedOnTile(i :number, j :number) {
    if (this.gameStarted) return;

    if (this.horseTileIndex.x == -1) {
      this.chessBoard = [
      [0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0]]
      this.chessBoard[i][j] = 1  
      this.horseTileIndex.x = j;
      this.horseTileIndex.y = i;
    } else if (this.targetTileCoordinate.x == -1) {
      this.targetTileCoordinate.x = j;
      this.targetTileCoordinate.y = i;
      this.chessBoard[i][j] = 2;
    }
    }

    breathFirstSearch() {
    }
}

