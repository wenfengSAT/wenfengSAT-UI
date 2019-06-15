/*!
 * Name: Con - Admin Dashboard with Material Design
 * Version: 2.3.0
 * Author: nK
 * Website: http://nkdev.info
 * Support: http://nk.ticksy.com
 * Purchase: http://themeforest.net/item/con-material-admin-dashboard-template/10621512?ref=nKdev
 * License: You must have a valid license purchased only from themeforest(the above link) in order to legally use the theme for your project.
 * Copyright 2015.
 */
/*
 *
 * Demo script to create settings form
 * and change some theme options
 *
 */
!function() {
  "use strict";

  var Demo = function(options) {
    // selected options
    this.options = options;

    // all elements
    this.html = document.getElementsByTagName('html')[0];
    this.body = document.getElementsByTagName('body')[0];
    this.sidebar = getElementsByClassName(document, 'yaybar')[0];
    this.sidebarLogo = getElementsByClassName(this.sidebar, 'brand-logo')[0].getElementsByTagName('img')[0];

    this.navbar = getElementsByClassName(document, 'navbar-top')[0];
    this.navbarLogo = getElementsByClassName(this.navbar, 'brand-logo')[0].getElementsByTagName('img')[0];

    this.chat = getElementsByClassName(document, 'chat')[0];

    this.styles = document.createElement("link");
    this.styles.setAttribute("rel", "stylesheet");
    this.styles.setAttribute("type", "text/css");
    document.getElementsByTagName("head")[0].appendChild(this.styles);

    this.settingsBar = document.createElement('div');
    this.settingsToggle = document.createElement('li');


    // all params list
    this.parameters = {
      Theme: {
        RTL: 'rtl',
        Color: ['red', 'pink', 'purple', 'deepPurple', 'indigo', 'blue', 'lightBlue', 'cyan', 'teal', 'green', 'lightGreen', 'lime', 'yellow', 'amber', 'orange', 'deepOrange', 'brown', 'blueGrey']
      },
      Sidebar: {
        Hide: 'yay-hide',
        HideToSmall: 'yay-hide-to-small',
        Static: 'yay-static',
        OverlapContent: 'yay-overlap-content',
        Color: {
          Dark: '',
          Light: 'yay-light'
        },
        ShowType: {
          Shrink: 'yay-shrink',
          Push: 'yay-push',
          Overlay: 'yay-overlay'
        }
      },
      Navbar: {
        Static: 'navbar-static',
        UnderSidebar: 'navbar-under',
        Color: {
          Dark: 'navbar-dark',
          Light: ''
        }
      },
      Chat: {
        Color: {
          Dark: '',
          Light: 'chat-light'
        }
      },
    };

    this.init();
  };

  Demo.DEFAULTS = {
    Theme: {
      RTL: false,
      Color: 'blue'
    },
    Sidebar: {
      Hide: false,
      HideToSmall: true,
      Static: false,
      OverlapContent: false,
      Color: 'Dark', // dark, light
      ShowType: 'Shrink' // shrink, push, overlay
    },
    Navbar: {
      Static: false,
      UnderSidebar: false,
      Color: 'Light'
    },
    Chat: {
      Color: 'Dark'
    }
  };

  // init
  Demo.prototype.init = function() {
    addClass( this.body, 'yay-notransition' );

    this.restoreData();

    this.prepareSettingsList();
    this.configSettingsBar();
    this.bindings();

    removeClass( this.body, 'yay-notransition' );
  }

  Demo.prototype.storeData = function() {
    if(localStorage) {
      localStorage['demo-data'] = JSON.stringify( this.options );
    }
  }

  Demo.prototype.restoreData = function() {
    if(localStorage && localStorage['demo-data'] && localStorage['demo-data'] != 'undefined') {
      this.options = merge(this.options, JSON.parse( localStorage['demo-data'] ));

      // apply params
      this.changeItems();
    }
  }

  Demo.prototype.clearData = function() {
    if(localStorage && localStorage['demo-data'] && localStorage['demo-data'] != 'undefined') {
      localStorage['demo-data'] = undefined;
    }
  }

  // prepare settings list
  Demo.prototype.prepareSettingsList = function() {
    var result = '';

    var num = 0;
    for(var k in this.parameters) {
      result += '<input class="demo-radio-'+num+'" type="radio" name="demo-items" id="demo-'+k+'" '+(num==0?'checked':'')+'><label for="demo-'+k+'">'+k+'</label>';
      num++;
    }

    num = 0;
    for(var k in this.parameters) {
      result += '<div class="demo-cont-'+num+' demo-cont-'+k+'">';

      for(var n in this.parameters[k]) {

        var option = this.parameters[k][n];

        if( typeof option == 'object') {
          var thisArr = Object.prototype.toString.call( option ) === '[object Array]';
          result += '<h5>'+n+'</h5>';
          for(var m in option) {
            var name = thisArr?option[m]:m;
            result += [
              '<input id="demo-'+k+'-'+n+'-'+name+'" type="radio" name="'+k+'-'+n+'" '+(this.options[k][n] == name?'checked':'')+'>',
              '<label for="demo-'+k+'-'+n+'-'+name+'">'+name+'</label>'
            ].join('');
          }
        } else {
          result += [
            '<input id="demo-'+k+'-'+n+'" type="checkbox" name="'+k+'-'+n+'" '+(this.options[k][n]?'checked':'')+'>',
            '<label for="demo-'+k+'-'+n+'">'+n+'</label>'
          ].join('');
        }
      }

      result += '</div>';
      num++;
    }

    result += '<a href="#!" id="demo-local-clear" class="tooltipped right" data-position="top" data-delay="1" data-tooltip="Changes will take effect after reloading the page">Clear Local Storage</a>';

    this.settingsBar.innerHTML = result;
  }

  // create bar and place it to page
  Demo.prototype.configSettingsBar = function() {
    var _this = this;

    /* Prepend Settings panel */
    _this.settingsBar.className = 'demo-bar z-depth-2';
    document.body.appendChild(_this.settingsBar);
    


    /* Prepend Settings Toggle button */
    _this.settingsToggle.innerHTML = '<a href="#!" class="demo-toggle"><i class="fa fa-cog"></i></a>';

    var ul = _this.navbar.getElementsByTagName('ul')[0];
    ul.insertBefore(_this.settingsToggle, ul.firstChild);
  }


  Demo.prototype.bindings = function() {
    var _this = this;
    var allinputs0 = _this.settingsBar.getElementsByTagName('div')[0].getElementsByTagName('input');
    var allinputs1 = _this.settingsBar.getElementsByTagName('div')[1].getElementsByTagName('input');
    var allinputs2 = _this.settingsBar.getElementsByTagName('div')[2].getElementsByTagName('input');
    var allinputs3 = _this.settingsBar.getElementsByTagName('div')[3].getElementsByTagName('input');

    // change inputs
    bind([allinputs0, allinputs1, allinputs2, allinputs3], 'change', function(e) {
      var path = this.id.split('-');
      var value = this.checked;

      if(path[0] && path[0] == 'demo') {
        if(typeof path[3] != 'undefined') {
          value = path[3];
        }

        _this.options[path[1]][path[2]] = value;
      }

      _this.changeItems();

      _this.storeData();
    });

    // toggle settings
    bind(_this.settingsToggle, 'click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      if(hasClass(_this.settingsBar, 'show')) {
        removeClass(_this.settingsBar, 'show');
      } else {
        addClass(_this.settingsBar, 'show');
      }
    });
    bind(_this.settingsBar, 'click', function(e) {
      e.stopPropagation();
    });
    bind(document, 'click', function(e) {
      if(hasClass(_this.settingsBar, 'show')) {
        removeClass(_this.settingsBar, 'show');
      }
    });

    // clear local storage
    bind(document.getElementById('demo-local-clear'), 'click', function(e) {
      e.preventDefault();
      _this.clearData();
    });
  }


  // change item classes
  Demo.prototype.changeItems = function() {
    for(var k in this.options) {

      switch(k) {

        case 'Sidebar':
          // remove all classes
          removeClass(this.sidebar, 'yay-hide-to-small');
          removeClass(this.sidebar, 'yay-static');
          removeClass(this.sidebar, 'yay-overlap-content');
          removeClass(this.sidebar, 'yay-light');
          removeClass(this.sidebar, 'yay-shrink');
          removeClass(this.sidebar, 'yay-push');
          removeClass(this.sidebar, 'yay-overlay');

          for(var n in this.options[k]) {
            var value = this.options[k][n];

            switch(n) {
              case 'Hide':
                if(value) {
                  addClass(document.body, 'yay-hide');
                } else {
                  removeClass(document.body, 'yay-hide');
                }
                break;
              case 'HideToSmall':
                if(value) {
                  addClass(this.sidebar, 'yay-hide-to-small');
                }
                break;
              case 'Static':
                if(value) {
                  addClass(this.sidebar, 'yay-static');
                }
                break;
              case 'OverlapContent':
                if(value) {
                  addClass(this.sidebar, 'yay-overlap-content');
                }
                break;
              case 'Color':
                if(value == 'Light') {
                  addClass(this.sidebar, 'yay-light');
                  this.sidebarLogo.src = 'assets/_con/images/logo.png';
                } else {
                  this.sidebarLogo.src = 'assets/_con/images/logo-white.png';
                }
                break;
              case 'ShowType':
                if(value == 'Shrink') {
                  addClass(this.sidebar, 'yay-shrink');
                }
                if(value == 'Push') {
                  addClass(this.sidebar, 'yay-push');
                }
                if(value == 'Overlay') {
                  addClass(this.sidebar, 'yay-overlay');
                }
                break;
            }
          }
          break;


        case 'Navbar':
          // remove all classes
          removeClass(this.navbar, 'navbar-dark');
          removeClass(this.navbar, 'navbar-static');
          removeClass(this.navbar, 'navbar-under');

          for(var n in this.options[k]) {
            var value = this.options[k][n];

            switch(n) {
              case 'Color':
                if(value == 'Dark') {
                  addClass(this.navbar, 'navbar-dark');

                  this.navbarLogo.src = 'assets/_con/images/logo-white.png';
                } else {
                  this.navbarLogo.src = 'assets/_con/images/logo.png';
                }
                break;

              case 'Static':
                if(value)
                  addClass(this.navbar, 'navbar-static');
                break;

              case 'UnderSidebar':
                if(value)
                  addClass(this.navbar, 'navbar-under');
                break;
            }
          }
          break;


        case 'Theme':
          for(var n in this.options[k]) {
            var value = this.options[k][n];

            switch(n) {
              case 'Color':
                value = deCamelCase( value );
                if(value == 'blue') {
                  this.styles.setAttribute("href", 'assets/_con/css/_con.min.css');
                } else {
                  this.styles.setAttribute("href", 'assets/_con/css/_con-' + value + '.min.css');
                }
                break;

              case 'RTL':
                if(value) {
                  addClass( this.html, 'rtl' );
                } else {
                  removeClass( this.html, 'rtl' );
                }
            }
          }
          break;


        case 'Chat':
          // remove all classes
          removeClass(this.chat, 'chat-light');

          for(var n in this.options[k]) {
            var value = this.options[k][n];

            switch(n) {
              case 'Color':
                if(value == 'Light') {
                  addClass(this.chat, 'chat-light');
                }
                break;
            }
          }
          break;
      }

    }
  }



  if(typeof conAngular == 'undefined') {
    if(getElementsByClassName(document, 'yaybar')[0]) {
      var demobar = new Demo(Demo.DEFAULTS);
    }
  }



  var Layouts = function(options) {
    this.options = options;

    this.init();
  };

  Layouts.DEFAULT = {
    'layout-top-fixed': {
      func: function() {
        removeClass(demobar.body, 'yay-hide');
        removeClass(demobar.navbar, 'navbar-under');
        removeClass(demobar.navbar, 'navbar-static');
      }
    },
    'layout-left-small': {
      func: function() {
        addClass(demobar.body, 'yay-hide');
        removeClass(demobar.navbar, 'navbar-under');
        removeClass(demobar.navbar, 'navbar-static');
        addClass(demobar.sidebar, 'yay-hide-to-small');
      }
    },
    'layout-top-static': {
      func: function() {
        removeClass(demobar.body, 'yay-hide');
        removeClass(demobar.navbar, 'navbar-under');
        addClass(demobar.navbar, 'navbar-static');
      }
    },
    'layout-top-static-left-small': {
      func: function() {
        addClass(demobar.body, 'yay-hide');
        removeClass(demobar.navbar, 'navbar-under');
        addClass(demobar.navbar, 'navbar-static');
        addClass(demobar.sidebar, 'yay-hide-to-small');
      }
    },
    'layout-top-under': {
      func: function() {
        removeClass(demobar.body, 'yay-hide');
        addClass(demobar.navbar, 'navbar-under');
        removeClass(demobar.navbar, 'navbar-static');
      }
    },
    'layout-top-under-left-small': {
      func: function() {
        addClass(demobar.body, 'yay-hide');
        addClass(demobar.navbar, 'navbar-under');
        removeClass(demobar.navbar, 'navbar-static');
        addClass(demobar.sidebar, 'yay-hide-to-small');
      }
    },
    'layout-top-under-static': {
      func: function() {
        removeClass(demobar.body, 'yay-hide');
        addClass(demobar.navbar, 'navbar-under');
        addClass(demobar.navbar, 'navbar-static');
      }
    },
    'layout-top-under-static-left-small': {
      func: function() {
        addClass(demobar.body, 'yay-hide');
        addClass(demobar.navbar, 'navbar-under');
        addClass(demobar.navbar, 'navbar-static');
        addClass(demobar.sidebar, 'yay-hide-to-small');
      }
    }
  };

  Layouts.prototype.init = function() {
    var _this = this;

    // select each layout
    for(var k in _this.options) (function(k, current) {

      current.item = getElementsByClassName(document, k)[0];
      bind(current.item, 'click', function() {
        _this.onSelect(current);
      });
      
    }(k, _this.options[k]));

    // set active first
    // addClass(_this.options['layout-top-fixed'].item, 'active');
  }


  Layouts.prototype.onSelect = function(current) {
    var _this = this;

    // remove active class for siblings
    for(var k in _this.options) {
      removeClass(_this.options[k].item, 'active');
    }

    // add class to current
    addClass(current.item, 'active');

    // call function
    if(current.func) {
      current.func();
    }
  }


  // init Layouts
  if(typeof conAngular == 'undefined') {
    if(getElementsByClassName(document, 'layout-top-fixed')[0]) {
      new Layouts(Layouts.DEFAULT);
    }
  }





  function getElementsByClassName(node,classname) {
    if (node.getElementsByClassName) { // use native implementation if available
      return node.getElementsByClassName(classname);
    } else {
      return (function getElementsByClass(searchClass,node) {
          if ( node == null )
            node = document;
          var classElements = [],
              els = node.getElementsByTagName("*"),
              elsLen = els.length,
              pattern = new RegExp("(^|\\s)"+searchClass+"(\\s|$)"), i, j;

          for (i = 0, j = 0; i < elsLen; i++) {
            if ( pattern.test(els[i].className) ) {
                classElements[j] = els[i];
                j++;
            }
          }
          return classElements;
      })(classname, node);
    }
  }


  function bind(el, ev, fn){
    if(el.length) {
      for(var k = 0, n = el.length; k < n; k++) {
        bind(el[k], ev, fn);
      }
      return;
    }
    if(window.addEventListener){ // modern browsers including IE9+
      el.addEventListener(ev, fn, false);
    } else if(window.attachEvent) { // IE8 and below
      el.attachEvent('on' + ev, fn);
    } else {
      el['on' + ev] = fn;
    }
  }

  function css(el, css) {
    for(var k in css) {
      el.style[k] = css[k];
    }
  }

  function hasClass(o, c) {
    var re = new RegExp("(^|\\s)" + c + "(\\s|$)", "g")
    return re.test(o.className);
  }

  function addClass(o, c){
    if (hasClass(o, c)) return;
    o.className = (o.className + " " + c).replace(/\s+/g, " ").replace(/(^ | $)/g, "");
  }
  
  function removeClass(o, c){
    var re = new RegExp("(^|\\s)" + c + "(\\s|$)", "g");
    o.className = o.className.replace(re, "$1").replace(/\s+/g, " ").replace(/(^ | $)/g, "");
  }

  // merge objects recursive
  function merge(obj1, obj2) {
    for (var p in obj2) {
      try {
        // Property in destination object set; update its value.
        if ( obj2[p].constructor==Object ) {
          obj1[p] = MergeRecursive(obj1[p], obj2[p]);
        } else {
          obj1[p] = obj2[p];
        }
      } catch(e) {
        // Property in destination object not set; create it and set its value.
        obj1[p] = obj2[p];
      }
    }
    return obj1;
  }

  function deCamelCase(str) {
    return str.replace(/[A-Z]/g, function($0) { return '-' + $0.toLowerCase() });
  }

}();