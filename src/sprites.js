/**
    examples:
    'sprites_name' : {
         'file' : 'path/to/file',
         'tile' : width,
         'tileh' : height,
         'elements': {
             'sprite_name' : [0, 0]
         }
    },
*/

Sprites = Backbone.Model.extend({
    defaults: {
        images:{
			gameSprite : {
				file: 'res/images/sprite.png',
				tile: 16,
				tileh: 16,
				elements: {
					// flower: [0,1],
					bush1: [0,2],
					bush2: [1,2],
					player: [0,3]
				}
			},
            UI: {
                file: 'res/images/UI.png',
                tile: 1,
                tileh: 1,
                elements: {
                    buttonNormal: [0, 65, 95, 30],
                    buttonClick: [0, 95, 95, 30]
                }
            },

            // CHARACTERS
			charMale: {
			    file: 'res/images/charMale.png',
			    tile: 64,
			    tileh: 64,
			    elements: {
			        malePlayer: [0, 0]
			    }
			},
			charMaleNaked: {
			    file: 'res/images/BODY_male.png',
			    tile: 64,
			    tileh: 64,
			    elements: {
			        maleNaked: [0, 0]
			    }
			},

            // MONSTERS
			skeleton: {
			    file: 'res/images/BODY_skeleton.png',
			    tile: 64,
			    tileh: 64,
			    elements: {
			        skeleton: [0, 0]
			    }
			},
			slime: {
			    file: 'res/images/slime.png',
			    tile: 32,
			    tileh: 32,
			    elements: {
			        slime: [0, 0]
			    }
			},
	        ghost: {
		        file: 'res/images/ghost.png',
		        tile: 40,
		        tileh: 46,
		        elements: {
			        ghost: [0, 0]
		        }
	        },
	        skeletonArcher: {
		        file: 'res/images/SkeletonArcher.png',
		        tile: 64,
		        tileh: 64,
		        elements: {
			        skeletonArcher: [0, 0]
		        }
	        },
	        armorWhite: {
		        file: 'res/images/Armor2Walk.png',
		        tile: 64,
		        tileh: 64,
		        elements: {
			        armorWhite: [0, 0]
		        }
	        },
            swordsman: {
                file: 'res/images/Swordsman.png',
                tile: 64,
                tileh: 64,
                elements: {
                    swordsman: [0, 0]
                }
            },
	        mage: {
		        file: 'res/images/Mage.png',
		        tile: 64,
		        tileh: 64,
		        elements: {
			        mage: [0, 0]
		        }
	        },
	        dragoon: {
		        file: 'res/images/dragoon.png',
		        tile: 192,
		        tileh: 192,
		        elements: {
			        dragoon: [0, 0]
		        }
	        },
            manEaterFlower: {
                file: 'res/images/manEaterFlower.png',
                tile: 60,
                tileh: 76,
                elements: {
                    manEaterFlower: [0, 0]
                }
            },
            pumpkin: {
                file: 'res/images/pumpkin.png',
                tile: 46,
                tileh: 46,
                elements: {
                    pumpkin: [0, 0]
                }
            },
            dummy: {
                file: 'res/images/dummy.png',
                tile: 128,
                tileh: 128,
                elements: {
                    dummy: [0, 0]
                }
            },
	        lich: {
		        file: 'res/images/lich.png',
		        tile: 128,
		        tileh: 128,
		        elements: {
			        lich: [0, 0]
		        }
	        },
	        // OBJECTS
            lionStatue:
            {
                file: 'res/images/lionStatue.png',
                tile: 64,
                tileh: 96,
                elements:
                {
                    lionStatue: [0, 0]
                }
            },
	        statues:
	        {
		        file: 'res/images/statues.png',
		        tile: 32,
		        tileh: 52,
		        elements:
		        {
			        statue_highlander: [0, 0],
			        statue_highlander_summon: [1, 0],
			        statue_platinumWarrior: [2, 0],
			        statue_platinumWarrior_summon: [3, 0],
			        statue_player : [4, 0],
			        statue_player_summon : [5, 0],
			        statue_dragoon : [6, 0],
			        statue_dragoon_summon : [7, 0]
		        }
	        },
	        torii:
			{
				file: 'res/images/torii2.png',
				tile: 234,
				tileh: 128,
				elements:
				{
				    torii1: [0, 0]
				}
			},
	        toro:
	        {
		        file: 'res/images/toro.png',
		        tile: 32,
		        tileh: 64,
		        elements:
		        {
			        toro: [0, 0]
		        }
	        },
	        platform:
	        {
		        file: 'res/images/platform.png',
		        tile: 256,
		        tileh: 256,
		        elements:
		        {
			        platform: [0, 0]
		        }
	        },
	        platform2:
	        {
		        file: 'res/images/platform2.png',
		        tile: 288,
		        tileh: 256,
		        elements:
		        {
			        platform2: [0, 0]
		        }
	        },
            grave:
            {
                file: 'res/images/grave.png',
                tile: 28,
                tileh: 27,
                elements:
                {
                    grave0: [0, 0]
                }
            },
	        gravestones:
	        {
		        file: 'res/images/gravestones.png',
		        tile: 32,
		        tileh: 32,
		        elements:
		        {
                    grave1: [0, 0, 1, 2],
                    grave2: [1, 0, 2, 2],
                    grave3: [0, 1],
                    grave4: [1, 1],
                    grave5: [2, 1],
			        graveBig: [3, 0, 2, 3]
		        }
	        },
            rock: {
                file: 'res/images/rock.png',
                tile: 32,
                tileh: 32,
                elements: {
                    rock1: [0, 0],
                    rock2: [1, 0]
                }
            },
            flower: {
                file: 'res/images/flowers.png',
                tile: 32,
                tileh: 32,
                elements: {
                    flower0: [0, 0],
                    flower1: [1, 0],
                    flower2: [2, 0],
                    flower3: [3, 0],
                    flower4: [4, 0],
                    flower5: [5, 0],
                    flower6: [6, 0],
                    flower7: [0, 1],
                    flower8: [1, 1],
                    flower9: [2, 1]
                }
            },
            treetop: {
                file: 'res/images/treetop.png',
                tile: 96,
                tileh: 96,
                elements: {
                    treetop0: [0, 0],
                    treetop1: [1, 0],
                    treetop2: [0, 1],
                    treetop3: [1, 1]
                }
            },
            treetrunk: {
                file: 'res/images/treetrunk.png',
                tile: 96,
                tileh: 96,
                elements: {
                    treetrunk0: [0, 0],
                    treetrunk1: [1, 0]
                }
            },
            treeStump: {
                file: 'res/images/treeStump.png',
                tile: 32,
                tileh: 32,
                elements: {
                    treeStump: [0, 0]
                }
            },            
            cherryTree: {
                file: 'res/images/cherryTree.png',
                tile: 32,
                tileh: 128,
                elements: {
                    cherryTree0: [0, 0, 4, 1],
                    cherryTree1: [4, 0, 3, 1]
                }
            },
            deadCherryTree: {
                file: 'res/images/deadCherryTree.png',
                tile: 32,
                tileh: 128,
                elements: {
                    deadCherryTree0: [0, 0, 4, 1],
                    deadCherryTree1: [4, 0, 3, 1]
                }
            },
            deadTree: {
                file: 'res/images/deadTree.png',
                tile: 76,
                tileh: 92,
                elements: {
                    deadTree: [0, 0]
                }
            },
            plant: {
                file: 'res/images/plants.png',
                tile: 32,
                tileh: 64,
                elements: {
                    plantHole0: [1, 4],
                    plantHole1: [2, 4]
                }
            },
	        coins: {
		        file: 'res/images/coins.png',
		        tile: 32,
		        tileh: 32,
		        elements: {
			        coin_dark: [0, 0],
			        coin_fire: [0, 1],
			        coin_light: [0, 2],
			        coin_icon_dark: [2, 0],
			        coin_icon_fire: [2, 1],
			        coin_icon_light: [2, 2]
		        }
	        },
	        pickupicons: {
		        file: 'res/images/pickupicons.png',
		        tile: 32,
		        tileh: 32,
		        elements: {
			        coin_icon_dark: [3, 0],
			        coin_icon_fire: [2, 0],
			        coin_icon_light: [1, 0],
			        coin_icon_soul: [0, 0]
		        }
	        },

            // TOWER TILES
            cup: {
                file: 'res/images/cup.png',
                tile: 32,
                tileh: 64,
                elements: {
                    cup: [0, 0]
                }
            },

            // TERRAIN TILES
            sand: {
                file: 'res/images/sand.png',
                tile: 32,
                tileh: 32,
                elements: {
                    // Edge
                    sandEdge1: [1, 4], // TOP
                    sandEdge2: [1, 2], // BOTTOM
                    sandEdge4: [0, 3], // RIGHT
                    sandEdge8: [2, 3], // LEFT
                    // Convex Corner
                    sandEdge12: [1, 0], // TOP-LEFT
                    sandEdge15: [2, 0], // TOP-RIGHT
                    sandEdge18: [1, 1], // BOTTOM-LEFT
                    sandEdge21: [2, 1], // BOTTOM-RIGHT
                    // Valley Corner
                    sandEdge9: [2, 4], // TOP-LEFT
                    sandEdge5: [0, 4], // TOP-RIGHT
                    sandEdge10: [2, 2], // BOTTOM-LEFT
                    sandEdge6: [0, 2], // BOTTOM-RIGHT
                    // Hole
                    sandHole0: [0, 0],
                    sandHole1: [0, 1],
                    // Center
                    sand0: [1, 3],
                    sand1: [0, 5],
                    sand2: [1, 5],
                    sand3: [2, 5]
                }
            },
            dirt: {
                file: 'res/images/dirt.png',
                tile: 32,
                tileh: 32,
                elements: {
                    // Edge
                    dirtEdge1: [1, 4], // TOP
                    dirtEdge2: [1, 2], // BOTTOM
                    dirtEdge4: [0, 3], // RIGHT
                    dirtEdge8: [2, 3], // LEFT
                    // Convex Corner
                    dirtEdge12: [1, 0], // TOP-LEFT
                    dirtEdge15: [2, 0], // TOP-RIGHT
                    dirtEdge18: [1, 1], // BOTTOM-LEFT
                    dirtEdge21: [2, 1], // BOTTOM-RIGHT
                    // Valley Corner
                    dirtEdge9: [2, 4], // TOP-LEFT
                    dirtEdge5: [0, 4], // TOP-RIGHT
                    dirtEdge10: [2, 2], // BOTTOM-LEFT
                    dirtEdge6: [0, 2], // BOTTOM-RIGHT
                    // Hole
                    dirtHole0: [0, 0],
                    dirtHole1: [0, 1],
                    // Center
                    dirt0: [1, 3],
                    dirt1: [0, 5],
                    dirt2: [1, 5],
                    dirt3: [2, 5]
                }
            },
            water: {
                file: 'res/images/water.png',
                tile: 32,
                tileh: 32,
                elements: {
                    // Edge
                    waterEdge1: [1, 4], // TOP
                    waterEdge2: [1, 2], // BOTTOM
                    waterEdge4: [0, 3], // RIGHT
                    waterEdge8: [2, 3], // LEFT
                    // Convex Corner
                    waterEdge12: [1, 0], // TOP-LEFT
                    waterEdge15: [2, 0], // TOP-RIGHT
                    waterEdge18: [1, 1], // BOTTOM-LEFT
                    waterEdge21: [2, 1], // BOTTOM-RIGHT
                    // Valley Corner
                    waterEdge9: [2, 4], // TOP-LEFT
                    waterEdge5: [0, 4], // TOP-RIGHT
                    waterEdge10: [2, 2], // BOTTOM-LEFT
                    waterEdge6: [0, 2], // BOTTOM-RIGHT
                    // Hole
                    waterHole0: [0, 0],
                    waterHole1: [0, 1],
                    // Center
                    water0: [1, 3],
                    water1: [0, 5],
                    water2: [1, 5],
                    water3: [2, 5]
                }
            },
            grass: {
                file: 'res/images/grass.png',
                tile: 32,
                tileh: 32,
                elements: {
                    // Edge
                    grassEdge1: [1, 4], // TOP
                    grassEdge2: [1, 2], // BOTTOM
                    grassEdge4: [0, 3], // RIGHT
                    grassEdge8: [2, 3], // LEFT
                    // Convex Corner
                    grassEdge12: [1, 0], // TOP-LEFT
                    grassEdge15: [2, 0], // TOP-RIGHT
                    grassEdge18: [1, 1], // BOTTOM-LEFT
                    grassEdge21: [2, 1], // BOTTOM-RIGHT
                    // Valley Corner
                    grassEdge9: [2, 4], // TOP-LEFT
                    grassEdge5: [0, 4], // TOP-RIGHT
                    grassEdge10: [2, 2], // BOTTOM-LEFT
                    grassEdge6: [0, 2], // BOTTOM-RIGHT
                    // Hole
                    grassHole0: [0, 0],
                    grassHole1: [0, 1],
                    // Center
                    grass0: [1, 3],
                    grass1: [0, 5],
                    grass2: [1, 5],
                    grass3: [2, 5]
                }
            },
            field: {
                file: 'res/images/fieldSoil.png',
                tile: 32,
                tileh: 32,
                elements: {
                    // Edge
                    fieldEdge1: [1, 4], // TOP
                    fieldEdge2: [1, 2], // BOTTOM
                    fieldEdge4: [0, 3], // RIGHT
                    fieldEdge8: [2, 3], // LEFT
                    // Convex Corner
                    fieldEdge12: [0, 2], // TOP-LEFT
                    fieldEdge15: [2, 2], // TOP-RIGHT
                    fieldEdge18: [0, 4], // BOTTOM-LEFT
                    fieldEdge21: [2, 4], // BOTTOM-RIGHT
                    // Valley Corner
                    fieldEdge9: [1, 0], // TOP-LEFT
                    fieldEdge5: [2, 0], // TOP-RIGHT
                    fieldEdge10: [1, 1], // BOTTOM-LEFT
                    fieldEdge6: [2, 1], // BOTTOM-RIGHT
                    // Hole
                    fieldHole0: [0, 0],
                    fieldHole1: [0, 1],
                    // Center
                    field0: [1, 3],
                    field1: [0, 5],
                    field2: [1, 5],
                    field3: [2, 5]
                }
            },
            fence: {
                file: 'res/images/fence.png',
                tile: 32,
                tileh: 32,
                elements: {
                    // Edge
                    fenceEdge1: [1, 0], // TOP
                    fenceEdge2: [1, 0], // BOTTOM
                    fenceEdge4: [1, 1], // RIGHT
                    fenceEdge8: [1, 1], // LEFT
                    // Convex Corner
                    fenceEdge12: [0, 2], // TOP-LEFT
                    fenceEdge15: [2, 2], // TOP-RIGHT
                    fenceEdge18: [0, 4], // BOTTOM-LEFT
                    fenceEdge21: [2, 4], // BOTTOM-RIGHT
                    // Valley Corner
                    fenceEdge9: [2, 4], // TOP-LEFT
                    fenceEdge5: [0, 4], // TOP-RIGHT
                    fenceEdge10: [2, 2], // BOTTOM-LEFT
                    fenceEdge6: [0, 2], // BOTTOM-RIGHT
                    // Hole
                    fenceHole0: [0, 0],
                    fenceHole1: [0, 1],
                    // Center
                    fence0: [1, 3],
                    fence1: [0, 5],
                    fence2: [1, 5],
                    fence3: [2, 5]
                }
            },

            // VFXs
	        muzzleShots: {
		        file: 'res/images/Muzzleflashes-Shots.png',
		        tile: 32,
		        tileh: 32,
		        elements: {
			        blueBeam: [3, 3],
			        yellowBeam: [3, 4]
		        }
	        },
	        laser: {
		        file: 'res/images/laser.png',
		        tile: 32,
		        tileh: 32,
		        elements: {
			        laser: [0, 0]
		        }
	        },
	        effects: {
		        file: 'res/images/effects01.png',
		        tile: 16,
		        tileh: 16,
		        elements: {
			        RedBullet: [1, 0],
			        yellowBullet : [0, 1]
		        }
	        },
	        fireball: {
		        file: 'res/images/fireball.png',
		        tile: 100,
		        tileh: 150,
		        elements: {
			        fireball: [0, 0]
		        }
	        },
	        icebolt: {
		        file: 'res/images/icebolt.png',
		        tile: 100,
		        tileh: 100,
		        elements: {
			        icebolt: [0, 0]
		        }
	        },
	        arrow: {
		        file: 'res/images/arrow.png',
		        tile: 72,
		        tileh: 72,
		        elements: {
			        arrow: [0, 0]
		        }
	        },
	        magicMissle: {
		        file: 'res/images/magic_missle.png',
		        tile: 100,
		        tileh: 100,
		        elements: {
			        magicMissle: [0, 0]
		        }
	        },
	        flamingHound: {
		        file: 'res/images/flaminghound.png',
		        tile: 128,
		        tileh: 128,
		        elements: {
			        flamingHound: [0, 0]
		        }
	        },
	        lightning: {
		        file: 'res/images/lightning.png',
		        tile: 128,
		        tileh: 128,
		        elements: {
			        lightning: [0, 0]
		        }
	        },
	        spellIcons: {
		        file: 'res/images/spells.png',
		        tile: 48,
		        tileh: 48,
		        elements: {
			        flamingHoundIcon: [0, 0],
			        lightningStrikeIcon: [1, 0]
		        }
	        }
        }
    },
    initialize: function(){

    },
    create: function(key){
        if(key != undefined){
            element = this.get('static_images')[key];
            if(element['tileh'] == undefined)
                Crafty.sprite(element['tile'], element['file'], element['elements']);
            else
                Crafty.sprite(element['tile'], element['tileh'], element['file'], element['elements']);

            element = this.get('images')[key];
            if(element['tileh'] == undefined)
                Crafty.sprite(element['tile'], element['file'], element['elements']);
            else
                Crafty.sprite(element['tile'], element['tileh'], element['file'], element['elements']);

            return true;
        };

        _.each(this.get('images'), function(element, k){
            if(element['tileh'] == undefined)
                Crafty.sprite(element['tile'], element['file'], element['elements']);
            else
                Crafty.sprite(element['tile'], element['tileh'], element['file'], element['elements']);
        });

    },
    getPaths: function(){
        var array = [], i=0;
        _.each(this.get('images'), function(element, key){
            array[i] = element['file']
            i++;
        });

        return array;
    }
});