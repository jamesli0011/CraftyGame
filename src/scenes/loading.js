//the loading screen that will display while our assets load
Crafty.scene("loading", function() {
	var version = gameContainer.gameVersion;
	console.log("START LOADING ...");
	
	var canvasWidth = gameContainer.conf.get("CANVAS_WIDTH");
	var canvasHeight = gameContainer.conf.get("CANVAS_HEIGHT");
	
	//black background with some loading text
	Crafty.background("#000");
	Crafty.e("2D, DOM, Text").attr({w: 100, h: 20, x: (canvasWidth - 100) / 2, y: (canvasHeight - 20) / 2})
		.text("Loading")
		.css({"text-align": "center"});
		
	// Create Sprites
	var sprites = new Sprites();
	sprites.create();

	// clear scene and interface
	sc = []; infc = [];
	
	// load takes an array of assets and a callback when complete
	Crafty.load(sprites.getPaths(), function() {
		// array with local components
		var elements = [
			"src/entities/World.js?v="+version,
			"src/components/Rendering.js?v="+version,
			"src/components/MouseHover.js?v="+version,
			"src/components/KeyMoveControls.js?v="+version,
			"src/components/Hero.js?v="+version,
			"src/maps/Graph.js?v="+version,
			"src/maps/Shape.js?v="+version,
			"src/components/TileMap.js?v="+version,
			"src/components/Body.js?v="+version,
			"src/components/Summoning.js?v="+version,
			"src/components/Faction.js?v="+version,
			"src/components/Building.js?v="+version,
			"src/components/Pawn.js?v="+version,
			"src/components/Spell.js?v="+version,
			"src/components/Abilities.js?v="+version,
			"src/components/Projectile.js?v="+version,
			"src/components/Pickup.js?v="+version,
			"src/components/BodyAnimations.js?v="+version,
			"src/components/Navigation.js?v="+version,
			"src/components/AI.js?v="+version,
			"src/components/Gameplay.js?v="+version,
			"src/components/Controls.js?v="+version,
			"src/entities/base/BaseEntity.js?v="+version,
			"src/entities/base/MapEntity.js?v="+version,
			"src/entities/base/Creature.js?v="+version,
			"src/entities/Factories.js?v="+version,
			"src/entities/Projectiles.js?v="+version,
			"src/entities/Monsters.js?v="+version,
			"src/entities/MapObjects.js?v="+version,
			"src/entities/Towers.js?v="+version,
			"src/entities/player.js?v="+version,
			"src/entities/Minions.js?v="+version,
			"src/entities/Region.js?v="+version,
			"src/entities/Terrains.js?v="+version,
			"src/UI/UI.js?v="+version,
			"src/UI/HUD.js?v="+version,
			"src/cheat.js?v="+version
		];

		//when everything is loaded, run the main scene
		require(elements, function() {
			if (gameContainer.scene != undefined) {
				Crafty.scene(gameContainer.scene);
			}
		});
	});
});