
/* -------------------- Mansonry --------------------- */

      $(function(){

        var $container = $('#container');
      
        $container.imagesLoaded( function(){
          $container.masonry({
            itemSelector : '.box'
          });
        });
      
      });    

/* -------------------- form validate --------------------- */

$( '#sign-form' ).parsley( { listeners: {
    onFormSubmit: function ( isFormValid, event ) {
        if ( isFormValid && !$( '#good-to-go').length ) {
            $( '#sign-form-valid' ).after( '<span id="good-to-go" style="display:block;margin-top:5px;" class="btn-success">Please wait.. <i class="icon-spinner icon-spin"></i></span>' );
            $( '#sign-form-valid' ).hide();
        }
    },
    onFieldError: function ( field, constraint ) {
        $( '#sign-form-valid' ).show();
        $( '#good-to-go' ).remove();
    }
} } );



$( '#signup-form' ).parsley( { listeners: {
    onFormSubmit: function ( isFormValid, event ) {
        if ( isFormValid && !$( '#good-to-go').length ) {
            $( '#signup-form-valid' ).after( '<span id="good-to-go" style="display:block;margin-top:5px;" class="btn-disabled">Please wait.. <i class="icon-spinner icon-spin"></i></span>' );
            $( '#signup-form-valid' ).hide();
        }
    },
    onFieldError: function ( field, constraint ) {
        $( '#signup-form-valid' ).show();
        $( '#good-to-go' ).remove();
    }
} } );

$( '#password-form' ).parsley( { listeners: {
    onFormSubmit: function ( isFormValid, event ) {
        if ( isFormValid && !$( '#good-to-go').length ) {
            $( '#password-form-valid' ).after( '<span id="good-to-go" style="display:block;margin-top:5px;" class="btn-disabled">Please wait.. <i class="icon-spinner icon-spin"></i></span>' );
            $( '#password-form-valid' ).hide();
        }
    },
    onFieldError: function ( field, constraint ) {
        $( '#password-form-valid' ).show();
        $( '#good-to-go' ).remove();
    }
} } );

$( '#wizard-form' ).parsley( { listeners: {
    onFormSubmit: function ( isFormValid, event ) {
        if ( isFormValid && !$( '#good-to-go').length ) {
            $( '#wizard-form-valid' ).after( '<span id="good-to-go" style="display:block;margin-top:5px;" class="btn-disabled">Please wait.. <i class="icon-spinner icon-spin"></i></span>' );
            $( '#wizard-form-valid' ).hide();
        }
    },
    onFieldError: function ( field, constraint ) {
        $( '#wizard-form-valid' ).show();
        $( '#good-to-go' ).remove();
    }
} } );

$( '#validate-basic-form' ).parsley( { listeners: {
    onFormSubmit: function ( isFormValid, event ) {
        if ( isFormValid && !$( '#good-to-go').length ) {
            $( '#validate-basic-form-valid' ).after( '<span id="good-to-go" style="display:block;margin-top:5px;" class="btn-disabled">Please wait.. <i class="icon-spinner icon-spin"></i></span>' );
            $( '#validate-basic-form-valid' ).hide();
        }
    },
    onFieldError: function ( field, constraint ) {
        $( '#validate-basic-form-valid' ).show();
        $( '#good-to-go' ).remove();
    }
} } );

$( '#validate-basic-form-dark' ).parsley( { listeners: {
    onFormSubmit: function ( isFormValid, event ) {
        if ( isFormValid && !$( '#good-to-go').length ) {
            $( '#validate-basic-form-dark-valid' ).after( '<span id="good-to-go" style="display:block;margin-top:5px;" class="btn-disabled">Please wait.. <i class="icon-spinner icon-spin"></i></span>' );
            $( '#validate-basic-form-dark-valid' ).hide();
        }
    },
    onFieldError: function ( field, constraint ) {
        $( '#validate-basic-form-dark-valid' ).show();
        $( '#good-to-go' ).remove();
    }
} } );

$( '#validate-password-form' ).parsley( { listeners: {
    onFormSubmit: function ( isFormValid, event ) {
        if ( isFormValid && !$( '#good-to-go').length ) {
            $( '#validate-password-form-valid' ).after( '<span id="good-to-go" style="display:block;margin-top:5px;" class="btn-disabled">Please wait.. <i class="icon-spinner icon-spin"></i></span>' );
            $( '#validate-password-form-valid' ).hide();
        }
    },
    onFieldError: function ( field, constraint ) {
        $( '#validate-password-form-valid' ).show();
        $( '#good-to-go' ).remove();
    }
} } );

$( '#validate-password-dark-form' ).parsley( { listeners: {
    onFormSubmit: function ( isFormValid, event ) {
        if ( isFormValid && !$( '#good-to-go').length ) {
            $( '#validate-password-dark-form-valid' ).after( '<span id="good-to-go" style="display:block;margin-top:5px;" class="btn-disabled">Please wait.. <i class="icon-spinner icon-spin"></i></span>' );
            $( '#validate-password-dark-form-valid' ).hide();
        }
    },
    onFieldError: function ( field, constraint ) {
        $( '#validate-password-dark-form-valid' ).show();
        $( '#good-to-go' ).remove();
    }
} } );

$( '#validate-advanced-form' ).parsley( { listeners: {
    onFormSubmit: function ( isFormValid, event ) {
        if ( isFormValid && !$( '#good-to-go').length ) {
            $( '#validate-advanced-form-valid' ).after( '<span id="good-to-go" style="display:block;margin-top:5px;" class="btn-disabled">Please wait.. <i class="icon-spinner icon-spin"></i></span>' );
            $( '#validate-advanced-form-valid' ).hide();
        }
    },
    onFieldError: function ( field, constraint ) {
        $( '#validate-advanced-form-valid' ).show();
        $( '#good-to-go' ).remove();
    }
} } );

$( '#validate-advanced-form-dark' ).parsley( { listeners: {
    onFormSubmit: function ( isFormValid, event ) {
        if ( isFormValid && !$( '#good-to-go').length ) {
            $( '#validate-advanced-form-dark-valid' ).after( '<span id="good-to-go" style="display:block;margin-top:5px;" class="btn-disabled">Please wait.. <i class="icon-spinner icon-spin"></i></span>' );
            $( '#validate-advanced-form-dark-valid' ).hide();
        }
    },
    onFieldError: function ( field, constraint ) {
        $( '#validate-advanced-form-dark-valid' ).show();
        $( '#good-to-go' ).remove();
    }
} } );

$( '#sign-form' ).parsley( { listeners: {
    onFormSubmit: function ( isFormValid, event ) {
        if ( isFormValid && !$( '#good-to-go').length ) {
            $( '#sign-form-valid' ).after( '<span id="good-to-go" style="display:block;margin-top:5px;" class="btn-disabled">Please wait.. <i class="icon-spinner icon-spin"></i></span>' );
            $( '#sign-form-valid' ).hide();
        }
    },
    onFieldError: function ( field, constraint ) {
        $( '#sign-form-valid' ).show();
        $( '#good-to-go' ).remove();
    }
} } );



$( '#parsley-multiple' ).parsley( {
validators: {
multiple: function ( val, multiple ) {
return val % multiple === 0;
}
}
, messages: {
multiple: "This value should be a multiple of %s"
}
} );


(function($){

  $('.switch-checkbox').each(function(){
    var $input = $('input', this);
    $input.hide().wrap('<span class="switch">');
    $input.after('<span class="switch-container"><span class="on">OUI</span><span class="mid"></span><span class="off">NON</span></span>');
  })

})(jQuery);

/************* hide left side *********/

$(document).ready(function(){
  $("#side-toggle").click(function(){
    $(".content").toggleClass("content-min");
  });
});

$(document).ready(function(){
  $("#search-toggle").click(function(){
    $(".search").toggleClass("search-hide");
  });
});


/************* checkbox through  *********/

$(document).ready(function(){
  $("#through-1").click(function(){
    $(".through-1").toggleClass("through-line");
  });
});

$(document).ready(function(){
  $("#through-2").click(function(){
    $(".through-2").toggleClass("through-line");
  });
});

$(document).ready(function(){
  $("#through-3").click(function(){
    $(".through-3").toggleClass("through-line");
  });
});

$(document).ready(function(){
  $("#through-4").click(function(){
    $(".through-4").toggleClass("through-line");
  });
});

$(document).ready(function(){
  $("#through-5").click(function(){
    $(".through-5").toggleClass("through-line");
  });
});

$(document).ready(function(){
  $("#through-6").click(function(){
    $(".through-6").toggleClass("through-line");
  });
});

$(document).ready(function(){
  $("#through-7").click(function(){
    $(".through-7").toggleClass("through-line");
  });
});

$(document).ready(function(){
  $("#through-8").click(function(){
    $(".through-8").toggleClass("through-line");
  });
});

$(document).ready(function(){
  $("#through-9").click(function(){
    $(".through-9").toggleClass("through-line");
  });
});

$(document).ready(function(){
  $("#through-10").click(function(){
    $(".through-10").toggleClass("through-line");
  });
});



/************* scroll style  *********/

jQuery('#scrooly-todo').scrooly({
// step of the scrollbar
    step: 15,
// tracks opacity
    opacity: 0.5,
// tracks toggle speed
    speed: 200
});

jQuery('#scrooly-chat').scrooly({
// step of the scrollbar
    step: 15,
// tracks opacity
    opacity: 0.5,
// tracks toggle speed
    speed: 200
});

/* 

<div class="sidebar-quick hidden-phone">
    <a class="first" href="#"><img src="assets/images/quick-1.png" alt="doc" class="thumbnail-avatar"></a>
    <a href="#"><img src="assets/images/quick-2.png" alt="doc" class="thumbnail-avatar"></a>
    <a href="#"><img src="assets/images/quick-3.png" alt="doc" class="thumbnail-avatar"></a>
    <a href="#"><img src="assets/images/quick-4.png" alt="doc" class="thumbnail-avatar"></a>
 </div> 

<div class="block span6">
    
    <div class="block-body">

        <label for="test" class="checkbox rounded-checkbox">
            <input  value="1" type="checkbox" id="test" class="checkbox">
            <span class="check"><span></span></span>
            Hey salut coche cette case !
        </label>


        <label for="test2" class="checkbox">
            <span class="switch">
              <input  value="1" type="checkbox" id="test2">
              <span class="switch-container"><span class="on">On</span>
                <span class="mid"></span>
                <span class="off">Off</span></span>
            </span>
            Hey salut coche cette case !
        </label>

        <label for="#">
        <input type="radio" id="radio-1-1" name="radio-1-set" class="regular-radio" checked /><label for="radio-1-1"></label>
        <input type="radio" id="radio-1-2" name="radio-1-set" class="regular-radio" /><label for="radio-1-2"></label>
        </label>                                                                    

    </div>
</div>         

*/         

