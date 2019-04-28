var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;
    var levelData;
    var bossIntegrity;
    var setIntegrity;
    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 2, 
            speed: -3,
            gameItems: [
                {type: 'Sai',x:400,y:450},
                {type: 'Sai',x:2000,y:groundY},
                {type: 'Sai',x:4000,y:370},
                {type: 'Sai',x:1500,y:450},
                {type: 'Sai',x:5000,y:450}
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // BEGIN EDITING YOUR CODE HERE
        
  

function createSai(x, y) {
    var hitZoneSize = 25;
var damageFromObstacle = 10;
var myObstacle = game.createObstacle(hitZoneSize, damageFromObstacle);
myObstacle.x = x;
myObstacle.y = y;
game.addGameItem(myObstacle);
var obstacleImage = draw.bitmap('img/obstacle2.png');
myObstacle.addChild(obstacleImage);
obstacleImage.x = -65;
obstacleImage.y = -115;
}


function createStar(x, y) {
     var hitZoneSize2 = 25;
var damageFromObstacle2 = 15;
var myObstacle2 = game.createObstacle(hitZoneSize2, damageFromObstacle2);
myObstacle2.x = x;
myObstacle2.y = y;
game.addGameItem(myObstacle2);
var obstacleImage2 = draw.bitmap('img/obstacle5.jpg.png');
myObstacle2.addChild(obstacleImage2);
obstacleImage2.x = -32;
obstacleImage2.y = -32;
obstacleImage2.scaleX = 0.1;
obstacleImage2.scaleY = 0.1;
myObstacle2.rotationalVelocity = -8;
}

createStar(600, 360);
createStar(1200, groundY);
createStar(2400, 355);
createStar(2750, 460);
createStar(3400, 355);

for (var i = 0; i < levelData.gameItems.length; i ++) {
    var gameItem = levelData.gameItems[i];
    createSai(gameItem.x, gameItem.y);
}
function createEnemy(x, y) {
    var enemy = game.createGameItem('enemy', 25);
var mummy = draw.bitmap('img/enemy.png');
mummy.x = -85;
mummy.y = -90;
mummy.scaleY = 0.3;
mummy.scaleX = 0.3;
enemy.addChild(mummy);
enemy.x = x;
enemy.y = y;
game.addGameItem(enemy);
enemy.velocityX = -2;
enemy.onPlayerCollision = function() {
    game.changeIntegrity(-20);
};
enemy.onProjectileCollision = function() {
    game.increaseScore(100);
    enemy.fadeOut();
};
}

function createEnemyTwo(x, y) {
    var enemy = game.createGameItem('enemy', 25);
var snake = draw.bitmap('img/snake.png');
snake.x = -85;
snake.y = -60;
snake.scaleY = 0.3;
snake.scaleX = 0.3;
enemy.addChild(snake);
enemy.x = x;
enemy.y = y;
game.addGameItem(enemy);
enemy.velocityX = -2;
enemy.onPlayerCollision = function() {
    game.changeIntegrity(-20);
};
enemy.onProjectileCollision = function() {
    game.increaseScore(150);
    enemy.shrink();
};
}

function createHeal(x, y) {
    var health = game.createGameItem('health', 25);
var potion = draw.bitmap('img/health.png');
potion.x = -30;
potion.y = -37;
potion.scaleY = 0.1;
potion.scaleX = 0.1;
health.addChild(potion);
health.x = x;
health.y = y;
game.addGameItem(health);
health.velocityX = -2;
health.onPlayerCollision = function() {
    game.changeIntegrity(20);
    health.shrink();
};
}

function createAnubis(x, y) {
    var boss = game.createGameItem('enemy', 25);
var anubis = draw.bitmap('img/anubis.png');
anubis.x = -85;
anubis.y = -300;
anubis.scaleY = 0.3;
anubis.scaleX = 0.3;
boss.addChild(anubis);
boss.x = x;
boss.y = y;
game.addGameItem(boss);
boss.velocityX = -2;
bossIntegrity = 2*setIntegrity;
boss.onPlayerCollision = function() {
    game.changeIntegrity(-35);
};
boss.onProjectileCollision = function() {
    game.increaseScore(500);
    boss.shrink();
};
}

function createReward(x, y) {
    var reward = game.createGameItem('health', 25);
var ankh = draw.bitmap('img/reward.png');
ankh.x = -25;
ankh.y = -35;
ankh.scaleY = 0.01;
ankh.scaleX = 0.01;
reward.addChild(ankh);
reward.x = x;
reward.y = y;
game.addGameItem(reward);
reward.velocityX = -2;
reward.onPlayerCollision = function() {
    reward.shrink();
    game.increaseScore(1000);
};
}

createEnemy(1800, 410);
createEnemy(5600, 410);

createEnemyTwo(3000, 410); 
createEnemyTwo(4400, 410);

createHeal(2250, 365);
createHeal(5750, 365);

createAnubis(6500, 410);

createReward(6800, 345);

    };
};
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}