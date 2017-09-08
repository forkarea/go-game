import _ from 'lodash';

class RandomPlayer {
  constructor(board, color) {
    this.board = board;
    this.color = color;
  }

  play() {
    const x = _.random(this.board.getSize());
    const y = _.random(this.board.getSize());

    const result = this.board.play(this.color, { x, y });
    if (!result) {
      this.play();
    }
  }
}

export default RandomPlayer;
