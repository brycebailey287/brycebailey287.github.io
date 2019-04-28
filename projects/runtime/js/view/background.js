var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    var pyramidsOne;
    var pyramids = [];
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        if(!app) {
            throw new Error("Invaid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }

        // container which will be returned
        var background;
        
        // ANIMATION VARIABLES HERE:
        
        
        // add objects for display inb ackground
        // called at the start of game and whenever the page is resized
        function render() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;

            background.removeAllChildren();

            // this fills the background with a obnoxious yellow
            // you should modify this to suit your game
            var backgroundFill = draw.rect(canvasWidth, canvasHeight, 'Tan');
            var backgroundFillTwo = draw.rect(canvasWidth, 350, 'LightSkyBlue');
            background.addChild(backgroundFill);
            background.addChild(backgroundFillTwo);
            
            // TODO: 3 - Add a moon and starfield
            var sun = draw.bitmap('img/Sun.png');
            sun.x = 1200;
            sun.y = 0;
            sun.scaleX = 0.8;
            sun.scaleY = 0.8;
            background.addChild(sun);
            
               var camelTracks = draw.bitmap('img/camelTracks.jpg');
            camelTracks.x = 705;
            camelTracks.y = 790;
            camelTracks.scaleX = 0.3;
            camelTracks.scaleY = 0.3;
            background.addChild(camelTracks);
        
            // TODO: 5 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            var pyramid;
            for(var i = 0; i < 15; i++) {
                pyramid = draw.bitmap('img/PyramidTwo.jpg');
                pyramid.x = 400*i;
                pyramid.y = 215;
                pyramid.x = canvasWidth*Math.random();
                background.addChild(pyramid);
                pyramids.push(pyramid);
            }
            
            
            // TODO 4: Part 1 - Add a tree
            pyramidsOne = draw.bitmap('img/Pyramid.png');
            pyramidsOne.x = 0;
            pyramidsOne.y = 550;
            background.addChild(pyramidsOne);
            pyramidsOne.scaleY = 0.2;
            pyramidsOne.scaleX = 0.2;
            
            var camel = draw.bitmap('img/camel.png');
            camel.x = 565;
            camel.y = 665;
            camel.scaleX = 0.7;
            camel.scaleY = 0.7;
            background.addChild(camel);
        }
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 4: Part 2 - Move the tree!
            pyramidsOne.x = pyramidsOne.x - 3;
            if(pyramidsOne.x < -500) {
                pyramidsOne.x = canvasWidth;
            }
            
            // TODO 5: Part 2 - Parallax
           for( var i = 0; i < pyramids.length; i++) {
               pyramids[i].x = pyramids[i].x - 1;
            if(pyramids[i].x < -600) {
                pyramids[i].x = canvasWidth;
            }
           }
        }
        

        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        app.addResizeable(background);
        app.addUpdateable(background);
        
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
