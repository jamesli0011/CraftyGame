Creature = MapEntity.extend(
{
	Speed : 0.1,
	WalkAnimationFrames : 9,
	WalkAnimationRows : [0, 1, 2, 3],
	WalkAnimationSpeed : 20,
	ActionAnimations : {},
	PlayShootAnim : false,

	initialize: function()
	{
		this._createEntity();
		this._setupAnimations();
	},

	_createEntity : function()
	{
		var entity = Crafty.e("2D, DOM, Mouse, Body, Damageable, BodyAnimations, AbilityUser, NavigationHandle, AvoidanceHandle, AI, " + this._getRandomSprite())
			.attr(
			{
				TileWidth:this.Width,
				TileHeight:this.Height,
				IsStatic:false,
				MovementSpeed : this.Speed,
				Faction : Factions.Ghost
			})
			.AddAbility("Primary", new Ability_Shoot(this.PlayShootAnim));

		this.set({'entity' : entity });
	},

	_setupAnimations : function()
	{
		var entity = this.getEntity();

		if (this.WalkAnimationFrames > 0)
			entity.WalkAnimation(this.WalkAnimationFrames, this.WalkAnimationRows, this.WalkAnimationSpeed);

		for (var name in this.ActionAnimations)
		{
			var data = this.ActionAnimations[name];
			entity.ActionAnimation(name, data[0], data[1]);
		}
	}
});
