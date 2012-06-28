Player = BaseEntity.extend({
    initialize: function(){
        var playerSpeed = gameContainer.conf.get("PLAYER_SPEED");
        var tileSize = gameContainer.conf.get("TILE_SIZE");
		
    	var model = this;
    	var entity = Crafty.e("2D, Canvas, player, KeyMoveControls, Mouse, Hero, Animate, Collision")
		.attr({x: 160, y: 144, z: 1, w:tileSize, h:tileSize})
		.keyControls(playerSpeed)
		.bind("EnterFrame", function() {
			if (this._x === undefined || this._y === undefined)
				return;
			var x0 = this._x - Crafty.viewport.width / 2,
				y0 = this._y - Crafty.viewport.height / 2;
			if (x0 < 0) x0 = 0;
			if (y0 < 0) y0 = 0;
//			if (x0 + Crafty.viewport.width > tileMap._width)
//				x0 = tileMap._width - Crafty.viewport.width;
//			if (y0 + Crafty.viewport.height > tileMap._height)
//				y0 = tileMap._height - Crafty.viewport.height;
			Crafty.viewport.x = -x0;
			Crafty.viewport.y = -y0;
		});            

    	model.set({'entity' : entity });
    }
});