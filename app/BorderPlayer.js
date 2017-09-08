import _ from 'lodash';
import getRandomItem from 'random-weighted-item';


class BorderPlayer {
  constructor(board, color) {
    this.board = board;
    this.color = color;
  }

  getProbability(i) {
    return Math.log(5 + Math.pow(Math.abs(i - this.board.getSize() / 2), 1.3));
  }

  play() {
    const range = _.range(this.board.getSize());
    const x = getRandomItem(range, i => this.getProbability(i));
    const y = getRandomItem(range, i => this.getProbability(i));

    const result = this.board.play(this.color, { x, y });
    if (!result) {
      this.play();
    }
  }
}

export default BorderPlayer;
