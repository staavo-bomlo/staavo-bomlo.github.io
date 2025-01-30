class SquaresBackground {
  constructor(options = {}) {
    this.direction = options.direction || 'right';
    this.speed = options.speed || 1;
    this.borderColor = options.borderColor || '#333';
    this.squareSize = options.squareSize || 40;
    this.hoverFillColor = options.hoverFillColor || '#222';
    
    this.canvas = null;
    this.ctx = null;
    this.animationFrame = null;
    this.numSquaresX = 0;
    this.numSquaresY = 0;
    this.gridOffset = { x: 0, y: 0 };
    this.hoveredSquare = null;
  }

  init(containerId) {
    // Create and setup canvas
    this.canvas = document.createElement('canvas');
    this.canvas.style.width = '100%';
    this.canvas.style.height = '100%';
    this.canvas.style.background = '#060606';
    this.canvas.style.display = 'block';
    this.canvas.style.border = 'none';

    const container = document.getElementById(containerId);
    if (!container) return;
    container.appendChild(this.canvas);

    this.ctx = this.canvas.getContext('2d');
    
    // Event listeners
    window.addEventListener('resize', () => this.resizeCanvas());
    this.canvas.addEventListener('mousemove', (e) => this.handleMouseMove(e));
    this.canvas.addEventListener('mouseleave', () => this.handleMouseLeave());

    // Initial setup
    this.resizeCanvas();
    this.animate();
  }

  resizeCanvas() {
    const rect = this.canvas.getBoundingClientRect();
    this.canvas.width = rect.width;
    this.canvas.height = rect.height;
    this.numSquaresX = Math.ceil(this.canvas.width / this.squareSize) + 1;
    this.numSquaresY = Math.ceil(this.canvas.height / this.squareSize) + 1;
  }

  drawGrid() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    const startX = Math.floor(this.gridOffset.x / this.squareSize) * this.squareSize;
    const startY = Math.floor(this.gridOffset.y / this.squareSize) * this.squareSize;

    this.ctx.lineWidth = 0.5;

    for (let x = startX; x < this.canvas.width + this.squareSize; x += this.squareSize) {
      for (let y = startY; y < this.canvas.height + this.squareSize; y += this.squareSize) {
        const squareX = x - (this.gridOffset.x % this.squareSize);
        const squareY = y - (this.gridOffset.y % this.squareSize);

        if (
          this.hoveredSquare &&
          Math.floor((x - startX) / this.squareSize) === this.hoveredSquare.x &&
          Math.floor((y - startY) / this.squareSize) === this.hoveredSquare.y
        ) {
          this.ctx.fillStyle = this.hoverFillColor;
          this.ctx.fillRect(squareX, squareY, this.squareSize, this.squareSize);
        }

        this.ctx.strokeStyle = this.borderColor;
        this.ctx.strokeRect(squareX, squareY, this.squareSize, this.squareSize);
      }
    }

    // Add radial gradient
    const gradient = this.ctx.createRadialGradient(
      this.canvas.width / 2,
      this.canvas.height / 2,
      0,
      this.canvas.width / 2,
      this.canvas.height / 2,
      Math.sqrt(Math.pow(this.canvas.width, 2) + Math.pow(this.canvas.height, 2)) / 2
    );
    gradient.addColorStop(0, 'rgba(6, 6, 6, 0)');
    gradient.addColorStop(1, '#060606');

    this.ctx.fillStyle = gradient;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  updateAnimation() {
    const effectiveSpeed = Math.max(this.speed, 0.1);

    switch (this.direction) {
      case 'right':
        this.gridOffset.x = (this.gridOffset.x - effectiveSpeed + this.squareSize) % this.squareSize;
        break;
      case 'left':
        this.gridOffset.x = (this.gridOffset.x + effectiveSpeed + this.squareSize) % this.squareSize;
        break;
      case 'up':
        this.gridOffset.y = (this.gridOffset.y + effectiveSpeed + this.squareSize) % this.squareSize;
        break;
      case 'down':
        this.gridOffset.y = (this.gridOffset.y - effectiveSpeed + this.squareSize) % this.squareSize;
        break;
      case 'diagonal':
        this.gridOffset.x = (this.gridOffset.x - effectiveSpeed + this.squareSize) % this.squareSize;
        this.gridOffset.y = (this.gridOffset.y - effectiveSpeed + this.squareSize) % this.squareSize;
        break;
    }
  }

  handleMouseMove(event) {
    const rect = this.canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const startX = Math.floor(this.gridOffset.x / this.squareSize) * this.squareSize;
    const startY = Math.floor(this.gridOffset.y / this.squareSize) * this.squareSize;

    const hoveredSquareX = Math.floor(
      (mouseX + this.gridOffset.x - startX) / this.squareSize
    );
    const hoveredSquareY = Math.floor(
      (mouseY + this.gridOffset.y - startY) / this.squareSize
    );

    this.hoveredSquare = { x: hoveredSquareX, y: hoveredSquareY };
  }

  handleMouseLeave() {
    this.hoveredSquare = null;
  }

  animate() {
    this.updateAnimation();
    this.drawGrid();
    this.animationFrame = requestAnimationFrame(() => this.animate());
  }

  destroy() {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }
    window.removeEventListener('resize', () => this.resizeCanvas());
    if (this.canvas) {
      this.canvas.removeEventListener('mousemove', (e) => this.handleMouseMove(e));
      this.canvas.removeEventListener('mouseleave', () => this.handleMouseLeave());
      this.canvas.remove();
    }
  }
} 