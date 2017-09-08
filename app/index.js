'use strict';
import './style.scss';
import './wgo/wgo';
import Weiqi from 'weiqi';
import Board from './Board';
import Player from './Player';

const wgoBoard = new WGo.Board(document.getElementById("board"), {
  width: 600,
});

let game = Weiqi.createGame(19);

const board = new Board(Weiqi, game, wgoBoard, WGo.B, WGo.W);
let white = new Player(board, 'white');
let black = new Player(board, 'black');

let i = 0;
const max = 19 * 19 * 2;

const interval = 0;

function playBlack() {
  i++;
  if (i > max) {
    return;
  }
  black.play();
  setTimeout(playWhite, interval);
}

function playWhite() {
  i++;
  if (i > max) {
    return;
  }
  white.play();
  setTimeout(playBlack, interval);
}

playBlack();
