import { Component, SkipSelf, ChangeDetectorRef } from '@angular/core';
import { Coordinate } from '../chess-board';
import { KnightPuzzleService } from './knightPuzzleLogic/knight-puzzle.service';

@Component({
  selector: 'app-searching-algorithms',
  templateUrl: './searching-algorithms.component.html',
  styleUrls: ['./searching-algorithms.component.css'],
})
export class SearchingAlgorithmsComponent {
  horseTile: string = '../assets/knight.png';
  horseTileIndices: Coordinate[] = [{ x: -1, y: -1 }];
  targetTileCoordinate: Coordinate = { x: -1, y: -1 };

  buttonImages: string[] = [
    '../assets/king_white.png',
    '../assets/queen_white.png',
    '../assets/bishop_white.png',
    '../assets/knight_white.png',
    '../assets/rook_white.png',
    '../assets/pawn_white.png',
  ];

  gameStarted: boolean = false;
  targetReached: boolean = false;

  chessBoard: number[][] = [];
  knightStepsX: number[] = [-2, -2, -1, -1, 1, 1, 2, 2];
  knightStepsY: number[] = [1, -1, 2, -2, 2, -2, 1, -1];

  constructor(@SkipSelf() private knightPuzzleService: KnightPuzzleService, private changeDector: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.chessBoard = this.knightPuzzleService.getChessBoard();
  }

  startGame() {
    if (this.horseTileIndices[0].x == -1 || this.targetTileCoordinate.x == -1)
      return; //Implement error handling
    this.gameStarted = true;
    this.chessBoard[this.horseTileIndices[0].y][this.horseTileIndices[0].x] = 1;
    this.breathFirstSearch();
    return;
  }

  resetGame() {
    this.gameStarted = false;
    this.horseTileIndices[0].x = -1;
    this.horseTileIndices[0].y = -1;
    this.targetTileCoordinate.x = -1;
    this.targetTileCoordinate.y = -1;
    this.chessBoard = [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ];
  }

  pressedOnTile(i: number, j: number) {
    if (this.gameStarted) return;

    if (this.horseTileIndices[0].x == -1) {
      this.chessBoard = [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
      ];
      this.chessBoard[i][j] = 1;
      this.horseTileIndices[0].x = j;
      this.horseTileIndices[0].y = i;
    } else if (this.targetTileCoordinate.x == -1) {
      this.targetTileCoordinate.x = j;
      this.targetTileCoordinate.y = i;
      this.chessBoard[i][j] = 2;
    }
  }

  async breathFirstSearch() {
    loop1: while (this.horseTileIndices.length != 0) {
      let iterationSize: number = this.horseTileIndices.length;
      for (let i = 0; i < iterationSize; i++) {
        let currentKnight: Coordinate = this.horseTileIndices.shift()!;
        await this.addKnights(currentKnight);
        if (this.targetReached) {
          break loop1;
        }
      }
    }
    this.gameStarted = false;
    this.targetReached = false;
    return;
  }

  async addKnights(knight: Coordinate) {
    for (let i = 0; i < this.knightStepsX.length; i++) {
      if (this.isValidStep(knight, this.knightStepsX[i], this.knightStepsY[i])) {
        if (this.checkTargetReached(knight,this.knightStepsX[i],this.knightStepsY[i])) {
          this.targetReached = true;
          this.chessBoard[knight.y + this.knightStepsY[i]][knight.x + this.knightStepsX[i]] = 3;
        } else if (this.chessBoard[knight.y + this.knightStepsY[i]][knight.x + this.knightStepsX[i]] == 0) {
            this.chessBoard[knight.y + this.knightStepsY[i]][knight.x + this.knightStepsX[i]] = 1;
            await this.timeout(1000);
            this.horseTileIndices.push({
              x: knight.x + this.knightStepsX[i],
              y: knight.y + this.knightStepsY[i],
            });
          }
        }
      }
  }

  isValidStep(knight: Coordinate, x: number, y: number) {
    return (
      knight.x + x < this.chessBoard.length &&
      knight.x + x >= 0 &&
      knight.y + y < this.chessBoard.length &&
      knight.y + y >= 0
    );
  }

  checkTargetReached(knight: Coordinate, x: number, y: number) {
    return (
      knight.x + x == this.targetTileCoordinate.x &&
      knight.y + y == this.targetTileCoordinate.y
    );
  }

  async timeout(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
