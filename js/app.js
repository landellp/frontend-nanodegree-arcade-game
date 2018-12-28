// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
  this.x += this.speed * dt;
  // Checks for collision and resets player back to starting position @ collision
  if (player.x < this.x + 70 && player.x + 60 > this.x && player.y < this.y + 50 && 70 + player.y > this.y) {
    player.x = 200;
    player.y = 380;
  // Places enemy back at starting point after running length of the board
} else if (this.x > 390) {
    this.x = -150;
  }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
let Player = function(x, y, speed) {
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.sprite = 'images/char-boy.png';
};

// Spawns the player in starting position and keeps player in confines of board (update method)
Player.prototype.update = function() {
  if (this.y > 380) {
    this.y = 380;
  }
  if (this.x > 400) {
    this.x = 400;
  }
  if (this.x < 0) {
    this.x = 0;
  }
  // Spawns player at the starting position
  if (this.y < 0) {
    this.x = 200;
    this.y = 380;
  }
};

// Draw the player on the screen, required method for game (render method)
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Moves the player on the scree (handleInput method), ensures movement/arrow is equal to 1 block
Player.prototype.handleInput = function(arrow) {
  switch (arrow) {
    case 'left':
      this.x -= this.speed + 50;
      break;
    case 'up':
      this.y -= this.speed + 30;
      break;
    case 'right':
      this.x += this.speed + 50;
      break;
    case 'down':
      this.y += this.speed + 30;
  }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
let allEnemies = [
  // Enemy starting position and speed
  new Enemy(1, 60, 125),
  new Enemy(1, 225, 200),
  new Enemy(1, 140, 300),
];

let player = new Player(200, 380, 50);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
