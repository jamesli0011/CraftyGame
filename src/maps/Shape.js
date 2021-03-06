// ========================================================================================== //
// MISC
// TOP - DOWN - RIGHT - LEFT
// TOP_LEFT, TOP_RIGHT, BOTTOM_LEFT, BOTTOM_RIGHT
var DIRECTION = [{x: 0, y: -1}, {x: 0, y: 1}, {x: 1, y: 0}, {x: -1, y: 0},
				 {x: -1, y: -1}, {x: 1, y: -1}, {x: -1, y: 1}, {x: 1, y: 1}];

function random(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}
// ========================================================================================== //
// PIXELATED RENDERER
var PixelRenderer = Class({
	// $statics: {
	// 	EMPTY_PIXEL: "",
	// 	COLOR_PIXEL: ""
	// },

	constructor: function(canvasID, width, height) {
		this.canvas = document.getElementById(canvasID);
		if (this.canvas)
			this.context = this.canvas.getContext('2d');
		this.cellsize = 1;
		this.color = 1;

		// Generate the grid and cells inside it
		this.setSize(width, height);
	},

	setColor: function(color) {
		if (color === undefined || color === this.color)
			return;

		this.color = color;
	},

	setLineWidth: function(lineWidth) {
		if (!lineWidth || lineWidth === this.lineWidth)
			return;

		this.lineWidth = lineWidth;
	},

	setSize: function(width, height) {
		if (this.width === width && this.height === height)
			return;
		this.width = width;
		this.height = height;

		this.cells = [];
		for (var i = 0; i < this.width; i++) {
			this.cells.push([]);
			for (var j = 0; j < this.height; j++) {
				this.cells[i].push(0);
			};
		};
	},

	clear: function() {
		for (var i = this.width - 1; i >= 0; i--) {
			for (var j = this.height - 1; j >= 0; j--) {
				this.cells[i][j] = 0;
			}
		};
	},

	clearCell: function(x0, y0)  {
		if (x0 < 0 || x0 >= this.width ||
			y0 < 0 || y0 >= this.height)
			return;

		this.cells[x0][y0] = 0;
	},

	plot: function(x0, y0) {
		if (x0 < 0 || x0 >= this.width ||
			y0 < 0 || y0 >= this.height)
			return;

		this.cells[x0][y0] = this.color;

		if (this.lineWidth > 1) {
			var d = this.lineWidth / 2;
			for (var x = 0; x < d; x++) {
				for (var y = 0; y < d; y++) {
					this.cells[x0 + x][y0 + y] = this.color;
					if (y0 >= y) {
						this.cells[x0 + x][y0 - y] = this.color;
						if (x0 >= x) {
							this.cells[x0 - x][y0 - y] = this.color;
							this.cells[x0 - x][y0 - y] = this.color;
						}
					}
				}
			}
		}
	},

	drawLine: function(p0, p1, color, lineWidth) {
		this.setColor(color);
		this.setLineWidth(lineWidth);

		var x0 = p0.x, y0 = p0.y, x1 = p1.x, y1 = p1.y;
		var dx = x1 - x0,
			dy = y1 - y0;

		var sx = (dx > 0 ? 1 : -1);
		var sy = (dy > 0 ? 1 : -1);

		dx = Math.abs(dx);
		dy = Math.abs(dy);
		var err = dx - dy;
		this.plot(x0, y0);
		// this.drawCircle(x0, y0, this.lineWidth / 2);

		while (x0 !== x1 || y0 !== y1) {
			var e2 = err * 2;
			if (e2 > -dy) {
				err -= dy;
				x0 += sx;
			}
			if (e2 < dx) {
				err += dx;
				y0 += sy;
			}
			this.plot(x0, y0);
			// this.drawCircle(x0, y0, this.lineWidth / 2);
		}
	},

	drawPath: function(points, bClose, color, lineWidth) {
		if (points.length < 2)
			return;
			
		this.setColor(color);
		this.setLineWidth(lineWidth);

		var pointCount = points.length - 1;
		for (var i = 0; i < pointCount; i++){
			this.drawLine(points[i], points[i + 1]);
		}
		if (bClose){
			this.drawLine(points[pointCount], points[0]);
		}		
	},

	drawRectangle: function(x0, y0, width, height, color, lineWidth) {
		this.setColor(color);
		this.setLineWidth(lineWidth);

		for (var x = x0; x < x0 + width; x++) {
			for (var y = y0; y < y0 + height; y++) {
				this.plot(x, y);
			}
		}
	},

	drawCircle: function(x0, y0, r) {
		if (r <= 0)
			return;

		var x = r,
			y = 0,
			err = -r;

		while (x > y) {
			this.plot(x0 + x, y0 + y);
			this.plot(x0 - x, y0 + y);
			this.plot(x0 + x, y0 - y);
			this.plot(x0 - x, y0 - y);
			this.plot(x0 + y, y0 + x);
			this.plot(x0 - y, y0 + x);
			this.plot(x0 + y, y0 - x);
			this.plot(x0 - y, y0 - x);

			// Fill in
			this.drawLine({x: x0 + x, y: y0 - y}, {x: x0 + x, y: y0 + y});
			this.drawLine({x: x0 - x, y: y0 - y}, {x: x0 - x, y: y0 + y});
			this.drawLine({x: x0 + y, y: y0 - x}, {x: x0 + y, y: y0 + x});
			this.drawLine({x: x0 - y, y: y0 - x}, {x: x0 - y, y: y0 + x});

			y++;
			err += 2 * y - 1;
			if (err >= 0) {
				x--;
				err -= 2 * x + 1;
			}
		}
	}
});

// ========================================================================================== //
// SHAPES GENERATOR
var ShapeGenerator = Class(PixelRenderer, {
	constructor: function(width, height) {
		ShapeGenerator.$super.call(this, "", width, height);

		this.fillColor = 2;
		this.borderColor = 1;
	},

    generate: function(col, row){
        // tht062812: generate random points in the 4 border parts and connect them
        // http://roguebasin.roguelikedevelopment.org/index.php/Irregular_Shaped_Rooms
        var maxPointPerBorder = 4;
        // var maxPointPerBorder = 3;
        // Get the patch as 10% of the boundary
        var patch = Math.floor(0.2 * Math.min(col, row));
        var points = [];
        var maxCol = col - 1,
            maxRow = row - 1;

        this.clear();
        var cells = this.cells;

        // Generate top border
        var c = patch,
            r = 0,
            t = 0;
        while (c < maxCol && t < maxPointPerBorder)
        {
            // select a random column between the last column and the max column
            c = random(c + 1, maxCol);
            // select a random row in the patch
            r = random(0, patch - 1);
            points.push({x: c, y: r});
            t++;
        }
        // Generate right border
        r = patch;
        t = 0;
        while (r < maxRow && t < maxPointPerBorder)
        {
            // select a random row between the last row and the max row
            r = random(r + 1, maxRow);
            // select a random row in the patch
            c = random(1, patch) + col - patch - 1;
            points.push({x: c, y: r});
            t++;
        }
        // Generate bottom border
        c = maxCol;
        t = 0;
        while (c > patch && t < maxPointPerBorder)
        {
            // select a random column between the last column and the min column
            c = random(patch, c - 1);
            // select a random row in the patch
            r = random(1, patch) + row - patch - 1;
            points.push({x: c, y: r});
            t++;
        }
        // Generate left border
        r = maxRow;
        t = 0;
        while (r > patch && t < maxPointPerBorder)
        {
            // select a random row between the last row and the min row
            r = random(patch, r - 1);
            // select a random row in the patch
            c = random(0, patch - 1);
            points.push({x: c, y: r});
            t++;
        }

        this.setColor(this.borderColor);
        // Generate border lines
        this.drawPath(points, true);

        this.setColor(this.fillColor);
        this.fillShape();
    },

    fillShape: function() {
        var cells = this.cells;
        var col = cells.length;
        var row = cells[0].length;

        // Start from the center of the region
        var x0 = col / 2;
        var y0 = row / 2;

        var stack = [];
        stack.push({x: x0, y: y0});
        this.plot(x0, y0);
        // Depth first search
        while (stack.length > 0)
        {
            var cell = stack.pop();

            for (var i = 0; i < 4; i++)
            {
                var x1 = cell.x + DIRECTION[i].x;
                var y1 = cell.y + DIRECTION[i].y;
                if (x1 >= 0 && x1 < row && y1 >= 0 && y1 < col)
                {
                    if (cells[x1][y1] === 0)
                    {
                        this.plot(x1, y1);
                        stack.push({x:x1, y:y1});
                    }
                }
            }
        }
    },

    draw: function(renderer, x0, y0, width, height) {
    	height = (height === undefined ? width : height);
    	this.setSize(width, height);
    	this.generate(width, height);
    	// this.cleanNoiseCells();

    	renderer.setLineWidth(1);

    	for (var x = 0; x < this.width; x++) {
    		for (var y = 0; y < this.height; y++) {
    			if (this.cells[x][y] !== 0) {
    				renderer.setColor(this.cells[x][y]);
    				renderer.plot(x0 + x, y0 + y);
    			}
    		}
    	}
    }
});

// ========================================================================================== //
// SHAPES PROCESSOR
var ShapeProcessor = Class(PixelRenderer, {
	constructor: function(width, height) {
		ShapeProcessor.$super.call(this, "", width, height);
		this.fillColor = 2;
		// this.borderColor = 1;
	},

	processShape: function(shapeCells) {
		// this.shapeCells = shapeCells;
		// this.cells.clear();
		this.cells = shapeCells;

		this.cleanNoiseCells();
		// this.generateBorders();

		return this.cells;
	},

    countCellNeighbor: function(x, y) {
    	var neighborCount = 0;
    	for (var i = 0; i < 4; i++) {
    		var x1 = x + DIRECTION[i].x;
    		var y1 = y + DIRECTION[i].y;

    		if (x1 < 0 || x1 >= this.width || y1 < 0 || y1 >= this.height)
    			continue;

    		if (this.cells[x1][y1] !== 0)
    			neighborCount++;
    	}

    	return neighborCount;
    },

    checkCell: function(x, y) {
		if (this.cells[x][y] !== this.borderColor && this.cells[x][y] !== 0)
			return false;

		var t = this.countCellNeighbor(x, y);

		var bNeedFix = false;
		// Fill those cell that have 3 neighbors or more
		if (this.cells[x][y] === 0) {
			if (t >= 3) {
				// debug.log("Add cell with >= 3 neighbors: x = " + x + " y = " + y + " this.fillColor = " + this.fillColor);
				this.cells[x][y] = this.fillColor;
				bNeedFix = true;
			}
		}
		// Remove those cells that have none or just 1 edge neighbor
		else if (t <= 1) {
			// debug.log("Remove cell with <= 1 neighbor: x = " + x + " y = " + y);
			this.cells[x][y] = 0;
			bNeedFix = true;
		}

		if (bNeedFix) {
			// debug.log("Fixing cells: x = " + x + " y = " + y);
	    	for (var i = 0; i < 4; i++) {
	    		var x1 = x + DIRECTION[i].x;
	    		var y1 = y + DIRECTION[i].y;

	    		if (x1 < 0 || x1 >= this.width || y1 < 0 || y1 >= this.height)
	    			continue;

	    		this.checkCell(x1, y1);
	    	}
	    }
		return bNeedFix;
    },

    cleanNoiseCells: function() {
    	for (var x = 0; x < this.width; x++) {
    		for (var y = 0; y < this.height; y++) {
    			this.checkCell(x, y);
    		}
    	}
    },

	generateBorders: function() {
        // Generate real border
        // Check direct neighbor
        for (var i = 0; i < this.width; i++) {
        	for (var j = 0; j < this.height; j++) {
        		if (this.cells[i][j] > 0) {
        			for (var d = 0; d < 4; d++) {
        				var x = i + DIRECTION[d].x;
        				var y = j + DIRECTION[d].y;

        				if (x < 0 || x >= this.width || y < 0 || y >= this.height ||
        					this.cells[x][y] > 0)
        					continue;

        				this.cells[x][y] -= (1 << d);
        			}
        		}
        	}
        }

        // Check corner neighbor
        for (var i = 0; i < this.width; i++) {
        	for (var j = 0; j < this.height; j++) {
        		if (this.cells[i][j] > 0) {
        			for (var d = 4; d < 8; d++) {
        				var x = i + DIRECTION[d].x;
        				var y = j + DIRECTION[d].y;

        				if (x < 0 || x >= this.width || y < 0 || y >= this.height ||
        					this.cells[x][y] !== 0)
        					continue;
        				this.cells[x][y] = -(d * 3);
        			}
        		}
        	}
        }
	}
});
