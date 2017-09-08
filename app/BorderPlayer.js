import _ from 'lodash';
import getRandomItem from 'random-weighted-item';

const getProbability = i => Math.log(5 + Math.pow(Math.abs(i - 9.5), 1.3));

class BorderPlayer {
  constructor(board, color) {
    this.board = board;
    this.color = color;
  }

  play() {
    const range = _.range(19);
    const x = getRandomItem(range, getProbability);
    const y = getRandomItem(range, getProbability);

    const result = this.board.play(this.color, { x, y });
    if (!result) {
      this.play();
    }
  }
}

export default BorderPlayer;
