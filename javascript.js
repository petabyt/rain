var canvas = document.getElementById('canvas');
var c = canvas.getContext('2d');
var raindrops = [];

// Create raindrop every .5 seconds
setInterval(function() {
	raindrops.push([Math.floor(Math.random() * canvas.width) + 2,0]);
},50);

// Main Loop
setInterval(function() {
	c.clearRect(0,0,canvas.width,canvas.height);
	c.fillStyle = "blue";
	for (var i = 0; i < raindrops.length; i++) {
		// Draw the raindrop and make it fall
		c.fillRect(raindrops[i][0],raindrops[i][1],2,5);
		raindrops[i][1] += 1;
	}
},1);
