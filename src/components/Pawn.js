Crafty.c('Pawn',
{
	init: function()
	{
		this.requires("Movable, Faction");
		this.bind("Appeared", this._addPawn);
		this.bind("Remove", this._removePawn);
		return this;
	},

	_addPawn : function()
	{
		this._world.AddPawn(this);
	},

	_removePawn : function()
	{
		// TODO: 1/3 drop hardcoded for now
		if (Crafty.math.randomInt(1, 3) <= 1)
		{
			var tile = this.GetTile();
			Pickups.Spawn(this._world, tile.x, tile.y);
		}

		this._world.RemovePawn(this);
	}
});

Crafty.c('Soul',
{
	SoulPoints : 0,

	init : function()
	{
		this.requires("Pawn");
		this.bind("Remove", this._banishTheSoul);
	},

	_banishTheSoul : function()
	{
		if (this.SoulPoints > 0 && this.Faction === Factions.Ghost)
		{
			this._world.Player.IncreasePickup('soul', this.SoulPoints);
		}
	}
});
