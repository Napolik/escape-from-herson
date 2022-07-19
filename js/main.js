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
      switch (event.code) {
        case 'ArrowRight' : _self.move('right'); break;
        case 'ArrowLeft'  : _self.move('left'); break;
        case 'ArrowUp'    : _self.jump(); break;
      }
    });
  }

  move(direction) {
    const currentPosition = this.orc.offsetLeft;

    switch (direction) {
      case 'left' : this.orc.style.left = (currentPosition - 30) + 'px'; break;
      case 'right' : this.orc.style.left = (currentPosition + 30) + 'px'; break;
    }
  }

  jump() {
    this.orc.classList.add('jump');

    setTimeout(() => {
      cancelJump();
    }, 500);

    function cancelJump() {
      document.querySelector('.orc').classList.remove('jump');
    }
  }
}

customElements.define('ground-field', Ground);
