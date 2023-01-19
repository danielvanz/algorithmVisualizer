import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KnightPuzzleService {


  chessBoard: number[][] = [
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0]]


  constructor() { }

  getChessBoard() {
    return this.chessBoard;
  }
}
