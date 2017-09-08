'use strict';
import './style.scss';
import './wgo/wgo';
import Weiqi from 'weiqi';
import Board from './Board';
import RandomPlayer from './RandomPlayer';
import BorderPlayer from './BorderPlayer';
import config from './config';

const wgoBoard = new WGo.Board(document.getElementById("board"), {
  width: 600,
  size: config.size,
});

let game = Weiqi.createGame(config.size);

const board = new Board(config.size, Weiqi, game, wgoBoard, WGo.B, WGo.W);
let white = new RandomPlayer(board, 'white');
let black = new BorderPlayer(board, 'black');

let i = 0;
const max = Math.pow(config.size, 2) * 1.2;

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
