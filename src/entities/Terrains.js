var TerrainDefinitions =
{
	flower:
	{
		Sprites: ["flower0", "flower1", "flower2", "flower3", "flower4", "flower5", 
				  "flower6", "flower7", "flower8", "flower9"]
	},
	cherryTree:
	{
		Sprites: ['cherryTree0', 'cherryTree1']
	},
	deadTree:
	{
		Sprites: ['deadTree']
	},
	treeTop:
	{
		Sprites: ['treetop0', 'treetop1', 'treetop2', 'treetop3']
	},
	treeTrunk:
	{
		Sprites: ['treetrunk0', 'treetrunk1']
	},
	bush:
	{
		Sprites: ["bush1", "bush2"]
	},
	rock:
	{
		Sprites: ["rock1", "rock2"]
	},
	sand:
	{
		Sprites: ["sand0", "sand1", "sand2", "sand3",
				  "sandEdge1", "sandEdge2", "sandEdge4", "sandEdge8",
				  "sandEdge12", "sandEdge15", "sandEdge18", "sandEdge21",
				  "sandEdge9", "sandEdge5", "sandEdge10", "sandEdge6",
				  "sandHole0", "sandHole1"
				  ]
	},
	dirt:
	{
		Sprites: ["dirt0", "dirt1", "dirt2", "dirt3",
				  "dirtEdge1", "dirtEdge2", "dirtEdge4", "dirtEdge8",
				  "dirtEdge12", "dirtEdge15", "dirtEdge18", "dirtEdge21",
				  "dirtEdge9", "dirtEdge5", "dirtEdge10", "dirtEdge6",
				  "dirtHole0", "dirtHole1"
				  ]
	},
	water:
	{
		Sprites: ["water0", "water1", "water2", "water3",
				  "waterEdge1", "waterEdge2", "waterEdge4", "waterEdge8",
				  "waterEdge12", "waterEdge15", "waterEdge18", "waterEdge21",
				  "waterEdge9", "waterEdge5", "waterEdge10", "waterEdge6",
				  "waterHole0", "waterHole1"
				  ]
	},
	fence:
	{
		Sprites: ["fence0", "fence1", "fence2", "fence3",
				  "fenceEdge1", "fenceEdge2", "fenceEdge4", "fenceEdge8",
				  "fenceEdge12", "fenceEdge15", "fenceEdge18", "fenceEdge21",
				  "fenceEdge9", "fenceEdge5", "fenceEdge10", "fenceEdge6",
				  "fenceHole0", "fenceHole1"
				  ]
	},
	grass:
	{
		Sprites: ["grass0", "grass1", "grass2", "grass3",
				  "grassEdge1", "grassEdge2", "grassEdge4", "grassEdge8",
				  "grassEdge12", "grassEdge15", "grassEdge18", "grassEdge21",
				  "grassEdge9", "grassEdge5", "grassEdge10", "grassEdge6",
				  "grassHole0", "grassHole1"
				  ]
	},
	field:
	{
		Sprites: ["field0", "field1", "field2", "field3",
				  "fieldEdge1", "fieldEdge2", "fieldEdge4", "fieldEdge8",
				  "fieldEdge12", "fieldEdge15", "fieldEdge18", "fieldEdge21",
				  "fieldEdge9", "fieldEdge5", "fieldEdge10", "fieldEdge6",
				  "fieldHole0", "fieldHole1"
				  ]
	}
};

var Terrain = Class(
{
	constructor : function(name)
	{
		this._entities = [];
		this._name = name || "";
	},

	GetRandomSprite : function()
	{
		return this._entities[Crafty.math.randomInt(0, this._entities.length - 1)];
	},

	GetSprite : function(index)
	{
		return this._entities[index];
	},

	GetSpriteByName : function(name)
	{
		for (var i = this._entities.length - 1; i >= 0; i--) {
			if (this._entities[i].name === name) {
				return this._entities[i];
			}
		};

		debug.log("CAN'T FIND SPRITE NAME: " + name);
		return this._entities[0];
	},

	GetEdgeSprite: function(id)
	{
		return this.GetSpriteByName(this._name + "Edge" + id);
	},

	GetGroundSprite: function()
	{
		// GroundTile have index from 0 -> 3
		var i = Crafty.math.clamp(Crafty.math.randomInt(0, 43) - 40, 0, 3);
		return this._entities[i];
	}
});

var TerrainManager = Class(
{
	constructor : function()
	{
		for (var terrainName in TerrainDefinitions)
		{
			var terrainDef = TerrainDefinitions[terrainName];
			var terrain = new Terrain(terrainName);

			var numSprites = terrainDef.Sprites.length;
			for (var i = 0; i < numSprites; i++)
			{
				terrain._entities[i] = Crafty.e("2D, " + terrainDef.Sprites[i]);
				terrain._entities[i].name = terrainDef.Sprites[i];
			}
			this[terrainName] = terrain;
		}
	}
});