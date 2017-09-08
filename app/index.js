'use strict';
import './style.scss';
import './wgo/wgo';

const board = new WGo.Board(document.getElementById("board"), {
    width: 600,
});
board.addObject({ x:2,y:3,c:WGo.W })
board.addObject({ x:1,y:3,c:WGo.B })
