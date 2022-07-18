class Ground extends HTMLElement {
  constructor() {
    super();

    this.orc = this.querySelector('.orc');
    this.init();
  }

  init() {
    this.eventListener();
  }

  eventListener() {
    const _self = this;
    document.addEventListener('keydown', function(event) {
      if (event.code === 'ArrowRight') {
        _self.move('right');
      }
      if (event.code === 'ArrowLeft') {
        _self.move('left');
      }
      if (event.code === 'ArrowUp') {
        _self.jump();
      }
    });
  }

  move(direction) {
    const currentPosition = this.orc.offsetLeft;

    if (direction === 'left') {
      this.orc.style.left = (currentPosition - 30) + 'px';
    } else {
      this.orc.style.left = (currentPosition + 30) + 'px';
    }
  }

  jump() {
    this.orc.classList.add('jump');
  }
}

customElements.define('ground-field', Ground);
