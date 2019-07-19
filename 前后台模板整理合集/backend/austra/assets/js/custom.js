
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


/************* ichecker *********/

$(document).ready(function(){
  $('input').iCheck({
    checkboxClass: 'icheckbox_flat-red',
    radioClass: 'iradio_flat-red'
  });
});


