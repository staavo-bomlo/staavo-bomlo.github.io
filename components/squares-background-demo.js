// Initialize the squares background
function initSquaresBackground(containerId) {
  const squares = new SquaresBackground({
    direction: 'diagonal',
    speed: 0.5,
    squareSize: 40,
    borderColor: '#333',
    hoverFillColor: '#222'
  });
  
  squares.init(containerId);
  return squares;
} 