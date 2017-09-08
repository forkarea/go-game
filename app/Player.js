import _ from 'lodash';

class Player {
  constructor(board, color) {
    this.board = board;
    this.color = color;
  }

  play() {
    const x = _.random(19);
    const y = _.random(19);

    const result = this.board.play(this.color, { x, y });
    if (!result) {
      this.play();
    }
  }
}

export default Player;
