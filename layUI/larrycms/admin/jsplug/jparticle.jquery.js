(function initJParticle( $ ){

	"use strict";

	var createParticlesSandbox, Utils;

	Utils = {};

	/*
	 * Create jParticle animation.
	 * @param {Object} options Few jParticle options.
	 * @return {Object} jQuery object for chaining.
	 */
	$.fn.jParticle = function jParticle( options ){
	
		this.each(function( _, el ){

			if ( typeof el.sandbox === 'object' ) {

				$( el ).removeJParticle();
			}

			el.sandbox = createParticlesSandbox( el, options );
		});
	
		return this;
	};

	/*
	 * Remove jParticle canvas.
	 * @return {Object} jQuery object for chaining.
	 */
	$.fn.removeJParticle = function removeJParticle(){

		this.each(function( _, el ){

			if ( el.sandbox ) {

				el.sandbox.remove();
				delete el.sandbox;
			}
		});

		return this;
	};

	/*
	 * Freeze jParticle animation.
	 * @return {Object} jQuery object for chaining.
	 */
	$.fn.freezeJParticle = function freezeJParticle(){

		this.each(function( _, el ){

			if ( el.sandbox ) {

				el.sandbox.freeze();
			}
		});

		return this;
	};

	/*
	 * Unfreeze jParticle animation.
	 * @return {Object} jQuery object for chaining.
	 */
	$.fn.unfreezeJParticle = function unfreezeJParticle(){

		this.each(function( _, el ){

			if ( el.sandbox ) {

				el.sandbox.unfreeze();
			}
		});

		return this;
	};

	/*
	 * Create a particles sandbox instance.
	 * @param {Object} element Element for the sandbox.
	 * @param {Object} params Few sandbox's params.
	 * @return {Object} Particles sandbox object.
	 */
	createParticlesSandbox = function createParticlesSandbox( element, params ){

		var ParticlesSandbox, createParticle;

		ParticlesSandbox = {};
        
		ParticlesSandbox.canvas = {};
		ParticlesSandbox.mouse = {};
		ParticlesSandbox.particles = [];

		ParticlesSandbox.isAnimated = false;

		/*
		 * Initialize the sandbox
		 * @param {Object} element Element for the sandbox.
		 * @param {Object} params Few sandbox's params.
		 */
		ParticlesSandbox.initialize = function initialize( element, params ){

			ParticlesSandbox.initParams( params );
			ParticlesSandbox.initHTML( element );
			ParticlesSandbox.initParticles();
			ParticlesSandbox.initEvents();
			ParticlesSandbox.initAnimation();
		};

		/*
		 * Initialize sandbox's params.
		 * @param {Object} params Few sandbox's params.
		 */
		ParticlesSandbox.initParams = function initParams( params ){

			if ( params && params.color && (!params.particle || ( params.particle && !params.particle.color ) ) ) {

				if ( !params.particle ) {

					params.particle = {};
				}

				params.particle.color = params.color;
			}

			ParticlesSandbox.params = $.extend({
				particlesNumber: 100,
				linkDist: 50,
				createLinkDist: 150,
				disableLinks: false,
				disableMouse: false,
				background: 'black',
				color: 'white',
				width: null,
				height: null,
				linksWidth: 1
			}, params );
		};

		/*
		 * Initialize the sandbox's html.
		 * @param {Object} element Element for the sandbox.
		 */
		ParticlesSandbox.initHTML = function initHTML( element ){

			var canvas;

			canvas = ParticlesSandbox.canvas;

			canvas.container = $( element );
			canvas.element = $('<canvas/>');

			canvas.context = canvas.element.get(0).getContext('2d');

			canvas.container.append( canvas.element );

			canvas.element.css( 'display', 'block' );

			canvas.element.get(0).width = ( ParticlesSandbox.params.width ) ? ParticlesSandbox.params.width : canvas.container.width();
			canvas.element.get(0).height = ( ParticlesSandbox.params.height ) ? ParticlesSandbox.params.height : canvas.container.height();

			canvas.element.css( 'background', ParticlesSandbox.params.background );
		};

		/*
		 * Resize canvas.
		 */
		ParticlesSandbox.resize = function resize( width, height ){

			if ( width ) {

				canvas.element.get(0).width = width;
			}

			if ( height ) {

				canvas.element.get(0).height = height;
			}
		};

		/*
		 * Create all particles in the sandbox.
		 */
		ParticlesSandbox.initParticles = function initParticles(){

			var i, count;

			i = 0;
			count = ParticlesSandbox.params.particlesNumber;

			for ( ; i < count; i += 1 ) {

				ParticlesSandbox.particles.push( createParticle(
					ParticlesSandbox.canvas.element.get(0),
					ParticlesSandbox.params.particle
				) );
			}
		};

		/*
		 * Initialize the sandbox's events.
		 */
		ParticlesSandbox.initEvents = function initEvents(){

			ParticlesSandbox.canvas.element.mouseenter(function mouseEnterCallback(){

				ParticlesSandbox.mouse.hoverCanvas = true;

				if ( !ParticlesSandbox.isAnimated ) {

					ParticlesSandbox.draw();
				}
			});

			ParticlesSandbox.canvas.element.mouseleave(function mouseLeaveCallback(){

				ParticlesSandbox.mouse.hoverCanvas = false;
			});

			ParticlesSandbox.canvas.element.mousemove(function mouseMoveCallback(e){

				ParticlesSandbox.mouse = $.extend( ParticlesSandbox.mouse, Utils.getMousePosition( e, ParticlesSandbox.canvas.element[0] ) );
			});
		};

		/*
		 * Initialize the sandbox's animation.
		 */
		ParticlesSandbox.initAnimation = function initAnimation(){

			window.requestAnimFrame = 
				window.requestAnimationFrame || 
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame || 
				window.ORequestAnimationFrame || 
				window.msRequestAnimationFrame ||

				function requestAnimFrame( callback ){

					setTimeOut( callback, 1000/60 );
				};

			ParticlesSandbox.isAnimated = true;

			ParticlesSandbox.draw();
		};

		/*
		 * Draw the sandbox canvas.
		 */
		ParticlesSandbox.draw = function draw(){

			var i, j, count, canvas, particle, particle2;

			i = 0;
			count = ParticlesSandbox.particles.length;
			canvas = ParticlesSandbox.canvas;

			canvas.context.clearRect( 0, 0, canvas.element.get(0).width, canvas.element.get(0).height );
		
			for ( ; i < count; i += 1 ) {

				particle = ParticlesSandbox.particles[i];

				if ( ParticlesSandbox.isAnimated ) {

					particle.update();
				}

				particle.draw();

				if ( !ParticlesSandbox.params.disableMouse && ParticlesSandbox.mouse.hoverCanvas ) {
					ParticlesSandbox.drawLink(
						particle.getPosition('x'),
						particle.getPosition('y'), 
						ParticlesSandbox.mouse.x,
						ParticlesSandbox.mouse.y
					);
				}

				if ( !ParticlesSandbox.params.disableLinks ) {

					for ( j = i+1; j < count; j += 1 ) {

						particle2 = ParticlesSandbox.particles[j];

						ParticlesSandbox.drawLink( 
							particle.getPosition('x'),
							particle.getPosition('y'), 
							particle2.getPosition('x'),
							particle2.getPosition('y') 
						);
					}
				}
			}

			ParticlesSandbox.requestID = window.requestAnimFrame( ParticlesSandbox.draw );
		};

		/*
		 * Draw a link between two particles.
		 * @param {int} x First object abscissa coords.
		 * @param {int} y First object ordered coords.
		 * @param {int} x2 Second object abscissa coords.
		 * @param {int} y2 Second object ordered coords.
		 */
		ParticlesSandbox.drawLink = function drawLink( x, y, x2, y2 ){

			var context;

			if ( Utils.getDistance( x, y, x2, y2 ) <= ParticlesSandbox.params.createLinkDist ) {

				context = ParticlesSandbox.canvas.context;

				context.save();

				context.beginPath();
				context.lineWidth = ParticlesSandbox.params.linksWidth; 
				context.moveTo( x, y );
				context.lineTo( x2, y2 );
				context.globalAlpha = ParticlesSandbox.getOpacityLink( x, y, x2, y2 );
				context.strokeStyle = ParticlesSandbox.params.color;
				context.lineCap = 'round';
				context.stroke();
				context.closePath();

				context.restore();
			}
		};

		/*
		 * Get opacity for link two particles.
		 * @param {int} x First object abscissa coords.
		 * @param {int} y First object ordered coords.
		 * @param {int} x2 Second object abscissa coords.
		 * @param {int} y2 Second object ordered coords.
		 * @return {int} 0 <= opacity <= 1
		 */
		ParticlesSandbox.getOpacityLink = function getOpacityLink( x, y, x2, y2 ){

			var dist, opacity, linkDist, createLinkDist;

			dist = Utils.getDistance( x, y, x2, y2 );
			linkDist = ParticlesSandbox.params.linkDist;
			createLinkDist = ParticlesSandbox.params.createLinkDist;

			if ( dist <= linkDist ) {

				opacity = 1;
			} else if ( dist >  createLinkDist ) {

				opacity = 0;
			} else {

				opacity = 1 - ( ( ( dist - linkDist ) * 100 ) / ( createLinkDist - linkDist ) ) / 100;
			}

			return opacity;
		};

		/*
		 * Freeze the animation.
		 */
		ParticlesSandbox.freeze = function freeze(){

			if ( ParticlesSandbox.isAnimated ) {

				ParticlesSandbox.isAnimated = false;
			}
		};

		/*
		 * Unfreeze the animation.
		 */
		ParticlesSandbox.unfreeze = function unfreeze(){

			if ( !ParticlesSandbox.isAnimated ) {

				ParticlesSandbox.isAnimated = true;
			}
		};

		/*
		 * Remove the animation's canvas.
		 */
		ParticlesSandbox.remove = function remove(){

			ParticlesSandbox.canvas.element.remove();
		};

		/*
		 * Create a particle instance.
		 * @param {Object} canvas DOM element.
		 * @param {Object} params Few particle's params.
		 * @return {Object} Particle object.
		 */
		createParticle = function createParticle( canvas, params ){

			var Particle;

			Particle = {};

			Particle.canvas = {};
			Particle.vector = {};

			/*
			 * Initialize the particle.
			 * @param {Object} canvas DOM element.
			 * @param {Object} params Few particle's params.
			 */
			Particle.initialize = function initialize( canvas, params ){

				Particle.params = $.extend({
					color: 'white',
					minSize: 2,
					maxSize: 4,
					speed: 60
				}, params );

				Particle.setCanvasContext( canvas );

				Particle.initSize();
				Particle.initPosition();
				Particle.initVectors();
			};

			/*
			 * Initialize particle's position.
			 */
			Particle.initPosition = function initPosition(){

				Particle.x = Utils.getRandNumber( 0 + Particle.radius, Particle.canvas.element.width - Particle.radius );
				Particle.y = Utils.getRandNumber( 0 + Particle.radius, Particle.canvas.element.height - Particle.radius );
			};

			/*
			 * Initialize particle's size.
			 */
			Particle.initSize = function initSize(){

				Particle.size = Utils.getRandNumber( Particle.params.minSize, Particle.params.maxSize );
				Particle.radius = Particle.size / 2;
			};

			/*
			 * Initialize particle's vectors for speed.
			 */
			Particle.initVectors = function initVectors(){

				do {
					Particle.vector.x = Utils.getRandNumber( -Particle.params.speed / 60, Particle.params.speed / 60, false );
					Particle.vector.y = Utils.getRandNumber( -Particle.params.speed / 60, Particle.params.speed / 60, false );

				} while ( Particle.vector.x == 0 || Particle.vector.y == 0 )
			};

			/*
			 * Set the context to draw particles.
			 * @param {Object} canvas Canvas.
			 */
			Particle.setCanvasContext = function setCanvasContext( canvas ){

				var context;

				Particle.canvas.element = canvas;
				context = canvas.getContext('2d');

				if ( typeof context === 'object' && typeof context.canvas === 'object' ) {

					Particle.canvas.context = context;
				} else {

					throw "Error: Can't set canvas context to Particle because context isn't a CanvasRenderingContext2D object.";
				}
			};

			/*
			 * Draw particle.
			 */
			Particle.draw = function draw(){

				var context = Particle.canvas.context;

				context.beginPath(); 
				context.arc( Particle.x, Particle.y, Particle.size /2, 0, Math.PI*2 ); 
				context.fillStyle = Particle.params.color;
				context.fill();
				context.closePath();
			};

			/*
			 * Update the particle's position.
			 */
			Particle.update = function update(){

				Particle.x += Particle.vector.x;
				Particle.y += Particle.vector.y;

				if ( 0 > ( Particle.x - Particle.radius ) || ( Particle.x + Particle.radius ) > Particle.canvas.element.width ) {

					Particle.vector.x = -Particle.vector.x;
				}

				if ( 0 > ( Particle.y - Particle.radius ) || ( Particle.y + Particle.radius ) > Particle.canvas.element.height ) {

					Particle.vector.y = -Particle.vector.y;
				}
			};

			/*
			 * Return position of particle.
			 * @param {string} axis Optionnal axis.
			 * @return {int|Object} Return object if axis is not defined, else return int.
			 */
			Particle.getPosition = function getPosition( axis ){

				if ( typeof axis === 'string' && ( axis != 'x' && axis != 'y' ) ) {

					axis = null;
				}

				return ( typeof( axis ) === 'string' ) ? Particle[ axis ] : { x: Particle.x, y: Particle.y };
			};

			Particle.initialize( canvas, params );

			return {
				getPosition: Particle.getPosition,
				update: Particle.update,
				draw: Particle.draw
			};
		};

		ParticlesSandbox.initialize( element, params );

		return {
			remove: ParticlesSandbox.remove,
			freeze: ParticlesSandbox.freeze,
			unfreeze: ParticlesSandbox.unfreeze,
			resize: ParticlesSandbox.resize
		};
	};

	/*
	 * Get rand number between x and y.
	 * @param {int} x Minimal number.
	 * @param {int} y Maximal number.
	 * @param {Boolean} round True is value shouldn't be round.
	 * @return {int} Rand number.
	 */
	Utils.getRandNumber = function getRandNumber( x, y, round ){

		var value;

		if( x == null ) {

			x = 0;
		}

		if( y == null ) {

			y = 10;
		}

		if( round == null ) {

			round = true;
		}

		value = Math.random() * ( y - x ) + x;

		return ( round ) ? Math.round( value ) : value;
	};

	/*
	 * Get distance between to cartesian points.
	 * @param {int} x First object abscissa coords.
	 * @param {int} y First object ordered coords.
	 * @param {int} x2 Second object abscissa coords.
	 * @param {int} y2 Second object ordered coords.
	 * @return {int} Distance.
	 */
	Utils.getDistance = function getDistance( x, y, x2, y2 ){

		return Math.sqrt( Math.pow( x2 - x, 2 ) + Math.pow( y2 - y, 2 ) );
	};

	/*
	 * Get mouse position.
	 * @param {Object} event The HTML DOM events.
	 * @param {Object} element The DOM element.
	 * @return {Object} x/y position.
	 */
	Utils.getMousePosition = function getMousePosition( event, element ){

		var rect;

		if ( typeof element === 'undefined' ) {

			element = $('body')[0];
		}

		rect = element.getBoundingClientRect();

		return {
			x: event.clientX - rect.left,
			y: event.clientY - rect.top
		};
	};

})( jQuery )
