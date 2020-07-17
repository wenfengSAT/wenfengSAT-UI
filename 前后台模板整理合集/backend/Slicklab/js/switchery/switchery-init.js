/**
 * Created by mosaddek on 12/25/14.
 */


// Default
// if-else statement used only for fixing <IE9 issues
if (Array.prototype.forEach) {
    var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));

    elems.forEach(function(html) {
        var switchery = new Switchery(html);
    });
} else {
    var elems = document.querySelectorAll('.js-switch');

    for (var i = 0; i < elems.length; i++) {
        var switchery = new Switchery(elems[i]);
    }
}

// Disabled switch
var disabled = document.querySelector('.js-switch-disabled');
var switchery = new Switchery(disabled, { disabled: true });

var disabledOpacity = document.querySelector('.js-switch-disabled-opacity');
var switchery = new Switchery(disabledOpacity, { disabled: true, disabledOpacity: 0.75 });

// Colored switches
var blue = document.querySelector('.js-switch-blue');
var switchery = new Switchery(blue, { color: '#41b7f1' });

var pink = document.querySelector('.js-switch-pink');
var switchery = new Switchery(pink, { color: '#ff7791' });

var teal = document.querySelector('.js-switch-teal');
var switchery = new Switchery(teal, { color: '#3cc8ad' });

var red = document.querySelector('.js-switch-red');
var switchery = new Switchery(red, { color: '#db5554' });

var secondary = document.querySelector('.js-switch-secondary');
var switchery = new Switchery(secondary, { color: '#fec200', secondaryColor: '#ff8787' });

// Colored jack
var jack = document.querySelector('.js-switch-jack-color');
var switchery = new Switchery(jack, { jackColor: '#fffc00' });

// Switch sizes
var small = document.querySelector('.js-switch-small');
var switchery = new Switchery(small, { size: 'small', color: '#79d4a7', secondaryColor: '#e8e8e8' });

var small = document.querySelector('.js-switch-small2');
var switchery = new Switchery(small, { size: 'small', color: '#79d4a7', secondaryColor: '#e8e8e8' });

var small = document.querySelector('.js-switch-small3');
var switchery = new Switchery(small, { size: 'small', color: '#79d4a7', secondaryColor: '#e8e8e8' });

var small = document.querySelector('.js-switch-small4');
var switchery = new Switchery(small, { size: 'small', color: '#79d4a7', secondaryColor: '#e8e8e8' });

var small = document.querySelector('.js-switch-small5');
var switchery = new Switchery(small, { size: 'small', color: '#79d4a7', secondaryColor: '#e8e8e8' });

var small = document.querySelector('.js-switch-small6');
var switchery = new Switchery(small, { size: 'small', color: '#79d4a7', secondaryColor: '#e8e8e8' });


var small = document.querySelector('.js-switch-small-red');
var switchery = new Switchery(small, { size: 'small', color: '#e55957', secondaryColor: '#e8e8e8' });


var small = document.querySelector('.js-switch-small-green');
var switchery = new Switchery(small, { size: 'small', color: '#79d4a7', secondaryColor: '#e8e8e8' });


var small = document.querySelector('.js-switch-small-blue');
var switchery = new Switchery(small, { size: 'small', color: '#119dc9', secondaryColor: '#e8e8e8' });


var small = document.querySelector('.js-switch-small-yellow');
var switchery = new Switchery(small, { size: 'small', color: '#ffd200', secondaryColor: '#e8e8e8' });


var small = document.querySelector('.js-switch-small-purple');
var switchery = new Switchery(small, { size: 'small', color: '#8f67b1', secondaryColor: '#e8e8e8' });


var large = document.querySelector('.js-switch-large');
var switchery = new Switchery(large, { size: 'large' });

