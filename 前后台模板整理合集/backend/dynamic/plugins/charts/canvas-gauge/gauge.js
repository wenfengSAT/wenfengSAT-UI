/*
 *    Canvas Gauge v0.1
 *    https://github.com/FabledWeb/canvas-gauge
 *    An HTML5 Canvas gauge with glow and animation.
 *    
 *    Copyright (C) 2012, Eddie Canales
 *
 *    Licensed under GPL Version 3.
 *
 *    This program is free software: you can redistribute it and/or modify
 *    it under the terms of the GNU General Public License as published by
 *    the Free Software Foundation, either version 3 of the License, or
 *    (at your option) any later version.
 *
 *    This program is distributed in the hope that it will be useful,
 *    but WITHOUT ANY WARRANTY; without even the implied warranty of
 *    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *    GNU General Public License for more details.
 *
 *    You should have received a copy of the GNU General Public License
 *    along with this program.  If not, see http://www.gnu.org/licenses/.
 */

(function(window) {
	function Gauge(options) {
		//set defaults
		var properties= {
			tick_length: 80,
			large_tick_length: 110,
			tick_thickness: 6,
			num_sub_ticks: 9,
			total_degrees: 140,
			tick_color: "#555962",
			tick_on_color: "#527d98",
			tick_on_glow: 35,
			bg_image: null, 
			gauge_scale: 1,
			animation_duration: 550
		};
		//naive Object.keys shim, but I know what the object looks like (it's right above here)
		var objectKeys= Object.keys || function(o) {var result = [];for (var name in o) {result.push(name);}return result;};
		this._property_list= objectKeys(properties);
		//set object properties based on options and defaults
		for(var k in properties) {
			this[k]= options[k] || properties[k];
		}
		this.canvas= options.canvas;
		
		// handle IE <9 (needs excanvas)
		if (typeof(G_vmlCanvasManager) != 'undefined' && G_vmlCanvasManager != null) {
			G_vmlCanvasManager.initElement(this.canvas);
		}


		this.context= this.canvas.getContext("2d");
		this._percent= options.percent || 0;
		this._target_percent= this._percent;

		return this;
	}

	Gauge.prototype._requestAnimFrame= function(f){
		var anim= window.requestAnimationFrame
			|| window.webkitRequestAnimationFrame
			|| window.mozRequestAnimationFrame
			|| window.oRequestAnimationFrame
			|| window.msRequestAnimationFrame
			|| function(callback, element) {
				window.setTimeout(function() {
					callback(+new Date);
				}, 1000 / 60);
			};
		anim(f);
	};

	Gauge.prototype.getCurrentState= function() {
		var state= {};
		for(var i in this._property_list) {
			var prop= this._property_list[i];
			state[prop]= this[prop];
		}
		state.percent= this._target_percent;
		return state;
	};
	Gauge.prototype._applyBG= function() {
		var canvas= this.canvas;
		var context= this.context;

		if(this.bg_color) {
			context.save();
			context.fillStyle= this.bg_color;
			context.fillRect(0,0,canvas.width,canvas.height);
			context.restore();
		}

		if(this.bg_image) {
			if(!this.bg_image_obj) { //only load the image once
				this.bg_image_obj= new Image();
				var _this= this;
				this.bg_image_obj.onload = function() {
					_this.bg_image_loaded= true;
					context.drawImage(_this.bg_image_obj, canvas.width/2-_this.bg_image.width/2+_this.bg_image.xoffset, canvas.height-_this.bg_image.height-_this.bg_image.yoffset,_this.bg_image.width,_this.bg_image.height);
				};
				this.bg_image_obj.src= this.bg_image.url;
			}
			else {
				if(this.bg_image_loaded) {
					context.drawImage(this.bg_image_obj, canvas.width/2-this.bg_image.width/2+this.bg_image.xoffset, canvas.height-this.bg_image.height-this.bg_image.yoffset);
				}
			}
		}

	};
	Gauge.prototype._prepareStage= function() {
		var canvas= this.canvas;
		var context= this.context;

		//clear canvas
		context.clearRect(0, 0, canvas.width, canvas.height);

		//set background
		this._applyBG();
		
		//set the center of rotation to the bottom/center of the canvas
		context.translate(canvas.width / 2, canvas.height-this.tick_thickness/2);

		//set the scale of the gauge (will naturally fill the width of the canvas
		context.scale(this.gauge_scale,this.gauge_scale);
	};

	Gauge.prototype.render= function() {
		var canvas= this.canvas;
		var context= this.context;
		context.save(); //save original state of context to that it can be restore after rendering

		this._prepareStage();
		
		//figure out how many degrees between each tick
		var num_ticks= 5 + this.num_sub_ticks*4;
		var rotation_deg= this.total_degrees/(num_ticks-1);

		//adjust for smaller than 180 degree gauges
		var starting_deg= (180-this.total_degrees)/2;
		context.rotate(starting_deg*Math.PI/180);

		//draw all of the ticks
		for(var i=1; i<=num_ticks; i++) {
			//should this tick be on or off?
			var is_on= ((i/num_ticks)*100 <= this._percent);

			//scale the ticks at 1/4 the way around gauge
			var rect_scale= (i+this.num_sub_ticks)%((num_ticks-1)/4)===0 ? this.large_tick_scale : 1;
			var tick_length= (i+this.num_sub_ticks)%((num_ticks-1)/4)===0 ? this.large_tick_length : this.tick_length;

			//draw tick
			var color= is_on ? this.tick_on_color : this.tick_color;
			context.fillStyle= color;
			context.shadowBlur= is_on ? this.tick_on_glow : 0;
			context.shadowColor= color;
			context.fillRect(-1*(canvas.width/2), -this.tick_thickness/2, tick_length, this.tick_thickness);

			//rotate for next tick to be placed
			context.rotate(rotation_deg*Math.PI/180);
		}

		context.restore(); //set back to original state

		return true;
	};
	Gauge.prototype.updatePercent= function(percent, options) {
		var _this= this;
		this._target_percent= percent;
		options= options || {};

		var duration= ('animation_duration' in options) ? options.animation_duration : _this.animation_duration;
		if(duration) {
			var lastUpdate= new Date().getTime();
			var start= this._percent;
			var end= this._target_percent;
			var change_per_ms= (end - start)/duration;
			var increasing= change_per_ms > 0 ? 1 : 0;
			var update= function() {
				var now= new Date().getTime();
				var elapsed= now - lastUpdate;
				_this._percent+= elapsed*change_per_ms;
				lastUpdate= now;
				//check if we've made it to our stopping point
				if((increasing && _this._percent < _this._target_percent) 
				  || (!increasing && _this._percent > _this._target_percent)) {
					_this.render();
					_this._requestAnimFrame(update);
				}
				else {
					_this._percent= _this._target_percent;
					_this.render();
				}
			};
			_this._requestAnimFrame(update);
		}
		else {
			_this._percent= percent;
			_this.render();
		}
	};

	window.fabledweb= window.fabledweb || {}; //init namespace
	window.fabledweb.Gauge= Gauge; //export object
}
)(window);
