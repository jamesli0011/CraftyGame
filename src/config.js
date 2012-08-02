Config = Backbone.Model.extend({
    defaults: {
        renderType : 'Canvas',
		CANVAS_WIDTH: 1024,
		CANVAS_HEIGHT: 768,
		MAP_WIDTH:  1000,
		MAP_HEIGHT: 1000,
		// MINI MAP INFO
		MINI_MAP_WIDTH: 200,
		MINI_MAP_HEIGHT: 150,
		MINI_MAP_X: 800,
		MINI_MAP_Y: 10,
		// HUD INFO
		INFO_BAR_X: 0,
		INFO_BAR_Y: 0,
		INFO_BAR_HEIGHT: 56,
		INFO_BAR_ANCHOR: "bottom",
		PICKUP_ICON_SIZE: 80,
		SPELL_BAR_X: 512,
		SPELL_BAR_Y: 4,
		SPELL_ICON_SIZE: 64,
		TILE_SIZE: 32,
		PLAYER_SIZE: 64,
		PLAYER_SPEED: 6.5,
		SHOW_TREES: true,
	    ENABLE_DEBUG: false
    },
    initialize: function() {
    },
});