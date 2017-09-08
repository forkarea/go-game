class Board {
  constructor(weiqi, weiqiBoard, wgoBoard, wgoBlack, wgoWhite) {
    this.weiqi = weiqi;
    this.weiqiBoard = weiqiBoard;
    this.wgoBoard = wgoBoard;
    this.wgoBlack = wgoBlack;
    this.wgoWhite = wgoWhite;
  }

  getWgoColor(color) {
    const map = {
      white: this.wgoWhite,
      black: this.wgoBlack,
    };

    return map[color];
  }

  play(color, { x, y }) {
    try {
      this.weiqiBoard = this.weiqi.play(this.weiqiBoard, color, [x, y]);
      this.wgoBoard.addObject({ x, y, c: this.getWgoColor(color) });

      return true;
    } catch(error) {
      return false;
    }
  }
}

export default Board;
