/* jquery.masterblaster v.0.2.1
 * A nice and tidy tag manager.
 * by aef
 */
( function( $, window, document, undefined ) {
  var pluginName = "masterblaster",
      name = "plugin_masterblaster",
      defaults = { 
        animate: true,
        tags: null,
        triggerKeys: [ 9, 13 ], //keycode when entered adds the tag
        showAddButton: true,
        helpText: "Hit Tab or Enter to add",
        validateOnChange: false,
        tagRules: {
          unique: false,
          minLength: 1,
          maxLength: null,
          regexp: null
        },
      },
      methods = [ "push", "pop", "remove", "destroy" ],
      methodsWithReturn = [ "getTags" ];

  function MasterBlaster( $element, options ) {
    this.options = $.extend( {}, defaults, options );
    this.$container = $( '<div class="mb-container"></div>' );
    this.$tagList = $( '<ul class="mb-taglist"></ul>' );
    this.$meta = $( '<div class="mb-meta"></div>' );
    this.$element = $element;
    this.$oldInput = $element;
    this.$input = $element.clone( );
    if( this.options.showAddButton )
      this.$addButton = $( "<button class='btn mb-add-button'><i class='icon-plus'></i>Add</button>" );
    this.tag = [ '<li style="opacity:1" data-tag="" class="mb-tag"><div class="mb-tag-content">',
                  '<span class="mb-tag-text"></span>',
                  '<a class="mb-tag-remove"></a>',
                 '</div></li>' ].join( "" );

    if( this.options.tags instanceof Array )
      this.tags = this.options.tags.slice( 0 );
    else
      this.tags = [ ];

    this.setup( );
  }

  MasterBlaster.prototype.addElem = function( $tag ) {
    if( this.options.animate ) {
      $tag.css( "opacity", 0 );
      $tag.insertBefore( this.$meta );
      var width = $tag.css( "width" );
      $tag.css( "width", 0 );
      $tag.animate( {
        width: width
      }, "fast", function( ) {
       $tag.css( "width", "" );
       $tag.animate( { opacity: 1 } ); 
      } );
    }
    else
      $tag.insertBefore( this.$meta );
  };

  MasterBlaster.prototype.buildTag = function( tagName ) {
    var $tag = $( this.tag );
    $tag.find( ".mb-tag-text" ).text( tagName );
    $tag.attr( "data-tag", tagName );

    return $tag;
  };

  MasterBlaster.prototype.removeEvents = function( ) {
    this.$input.off( "keydown" );
    this.$input.off( "keyup" );

    if( this.options.showAddButton )
      this.$addButton.off( "click" );
  };

  MasterBlaster.prototype.addEvents = function( ) {
    this.$input.on( "keydown", $.proxy( this.onKeyDown, this ) );
    this.$input.on( "keyup", $.proxy( this.onAdd, this ) );

    if( this.options.showAddButton )
      this.$addButton.on( "click", $.proxy( this.onAdd, this ) );
  };

  MasterBlaster.prototype.onKeyDown = function( e ) {
    //Prevents <tab> from escaping when used as a trigger key
    if( ~this.options.triggerKeys.indexOf( e.keyCode || e.which ) )
      e.preventDefault( );
  };

  MasterBlaster.prototype.onAdd = function( e ) {
    //Required so that options.validateOnChange can function without saving
    var isBeingSaved = false, 
        tagName = this.cleanTag( this.$input.val( ) );

    if( e.type === "click" || ~this.options.triggerKeys.indexOf( e.keyCode || e.which ) ) {
      e.preventDefault( );
      isBeingSaved = true;
    }

    if( isBeingSaved ) {
      this.push( tagName );
      this.$input.val( "" );
    } else if( this.options.validateOnChange ) {
      this.showError( tagName );
    }
  };

  MasterBlaster.prototype.showError = function( tagName ) {
    this.$container.addClass( "mb-error" );
    this.$element.trigger( "mb:error", tagName, this.error );
  };

  MasterBlaster.prototype.cleanTag = function( tagName ) {
    return tagName;
  };

  MasterBlaster.prototype.isValid = function( tagName ) {
    if( this.options.tagRules.unique && this.hasTag( tagName ) ) {
      this.error = tagName + " already exists.";
      return false;
    } else if( this.options.tagRules.minLength && tagName.length < this.options.tagRules.minLength ) {
      this.error = tagName + " must be greater than " + this.options.tagRules.minLength + " characters.";
      return false;
    } else if( this.options.tagRules.maxLength && tagName.length > this.options.tagRules.maxLength ) {
      this.error = tagName + " must have fewer than " + this.options.tagRules.maxLength + " characters.";
      return false;
    } else if( this.options.tagRules.regexp && !this.options.tagRules.regexp.test( tagName ) ) {
      this.error = tagName + " is not in the valid format.";
      return false;
    }
    return true;
  };

  MasterBlaster.prototype.refreshTagEvents = function( ) {
    this.$tagList.find( ".mb-tag-remove" ).off( "click" );
    this.$tagList.find( ".mb-tag-remove" ).on( "click", $.proxy( this.onRemove, this ) );
  };

  MasterBlaster.prototype.onRemove = function( e ) {
    e.preventDefault( );
    this.remove( $( e.target ).parents( ".mb-tag" ).attr( "data-tag" ) );
  };
 
  MasterBlaster.prototype.removeElem = function( tagName ) {
    var $tag = this.$tagList.find( "[data-tag='"+tagName+"']" );
    if( this.options.animate ) {
      $tag.animate( { opacity: 0.01 }, "fast", function( ) {
        $tag.animate( { width: 0, margin: 0 }, "fast", function( ) {
          $tag.remove( );
        } );
      } );
    }
    else
      $tag.remove( ); 
  };

  MasterBlaster.prototype.hasTag = function( tagName ) {
    return ~( this.tags.indexOf( tagName ) ); 
  };

  MasterBlaster.prototype.push = function( tagName ) {
    if( this.isValid( tagName ) ) {
      this.$container.removeClass( "mb-error" );
      this.tags.push( tagName );

      this.addElem( this.buildTag( tagName ) );
      this.refreshTagEvents( );

      this.$element.trigger( "mb:add", tagName );  
    }
    else
      this.showError( tagName );
  };

  MasterBlaster.prototype.pop = function( ) {
    var tagName = this.tags[ this.tags.length - 1 ];
    this.remove( tagName );
  };

  MasterBlaster.prototype.removeFromTagsArray = function( tagName ) {
    var index = this.tags.indexOf( tagName );
    if( !~index ) return false;
    this.tags.splice( index, 1 );
    return true;
  };

  MasterBlaster.prototype.remove = function( tagName ) {
    this.removeElem( tagName );
    while( this.removeFromTagsArray( tagName ) );
    this.$element.trigger( "mb:remove", tagName );
  };

  MasterBlaster.prototype.destroy = function( ) {
    this.$oldInput.show( );
    this.removeEvents( );
    this.$container.remove( );
    this.$element.removeData( name );
  };

  MasterBlaster.prototype.getTags = function( ) {
    return this.tags.slice( 0 );
  };

  MasterBlaster.prototype.setup = function( ) {
    this.$container.insertAfter( this.$oldInput );
    this.$oldInput.hide( );
    this.$input.attr( "id", "" ).addClass( "mb-input" );
    this.$container.append( this.$tagList.append( this.$meta ) );
    this.$meta.append( this.$input );

    if( this.options.showAddButton )
      this.$input.after( this.$addButton );

    if( this.options.helpText )
      this.$meta.append( "<span class='mb-help-text'><small>"+this.options.helpText+"</small></span>" );

    this.addEvents( );
  };

  $.fn[ pluginName ] = function( optionsOrMethod ) {
    var $this,
        _arguments = Array.prototype.slice.call( arguments ),
        optionsOrMethod = optionsOrMethod || { },
        results = [ ], returningData = false, selectors;

    selectors = this.each(function ( ) {
      $this = $( this );
      if( !$this.data( name ) && ( typeof optionsOrMethod ).toLowerCase( ) === "object" ) 
        $this.data( name, new MasterBlaster( $this, optionsOrMethod ) );
      else if( ( typeof optionsOrMethod ).toLowerCase( ) === "string" ) {
        if( ~$.inArray( optionsOrMethod, methods ) )
          $this.data( name )[ optionsOrMethod ].apply( $this.data( name ), _arguments.slice( 1, _arguments.length ) );
        else if( ~$.inArray( optionsOrMethod, methodsWithReturn ) ) {
          returningData = true;
          results.push( $this.data( name )[ optionsOrMethod ].apply( $this.data( name ), _arguments.slice( 1, _arguments.length ) ) );
        }
        else
          throw new Error( "Method " + optionsOrMethod + " does not exist. Did you instantiate masterblaster?" );
      }
    } );

    return returningData ? results : selectors;
  };
} )( jQuery, window, document );
