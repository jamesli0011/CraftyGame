World = Class.create(
{
	//////////////////////////////////////////////////////////////////////////////////////////
	// Member Variables
	//////////////////////////////////////////////////////////////////////////////////////////

	TileSize : gameContainer.conf.get("TILE_SIZE"),
	MapWidth : gameContainer.conf.get("MAP_WIDTH"),
	MapHeight : gameContainer.conf.get("MAP_HEIGHT"),
	PhysicalWidth : gameContainer.conf.get("MAP_WIDTH") * gameContainer.conf.get("TILE_SIZE"),
	PhysicalHeight : gameContainer.conf.get("MAP_HEIGHT") * gameContainer.conf.get("TILE_SIZE"),

	_staticEntities : [],
	_terrainMap : [],

	//////////////////////////////////////////////////////////////////////////////////////////
	// Functions
	//////////////////////////////////////////////////////////////////////////////////////////
	initialize : function()
	{
		NavigationManager.SetWorld(this);

		this.InitMapData();

		this.TileMap = Crafty.e("2D, Canvas, TileMap, Mouse")
			.attr({x: 0, y: 0, z: 0, w:this.PhysicalWidth, h:this.PhysicalHeight, World : this})
			.randomGenerate(this.MapWidth, this.MapHeight, this.TileSize)
			.bind("MouseDown", function(e){ Crafty.trigger('MapClick', e); });

		return this;
	},

	InitMapData : function()
	{
		for (var i = 0; i < this.MapWidth; i++)
			this._terrainMap[i] = [];
	},

	AddStaticEntity : function(entity)
	{
		var staticEntityInfo =
		{
			Id : this._staticEntities.length,
			Entity : entity,
			Bounds : entity.GetBounds()
		}
		this._staticEntities.push(staticEntityInfo);

		for (var i = 0; i < staticEntityInfo.Bounds.length; i++)
		{
			var pos = staticEntityInfo.Bounds[i];
			this._terrainMap[pos.X][pos.Y] = entity;
		}
	}
});