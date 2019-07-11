
$(function() {
  $.miniNotification = function(element, options) {
    var appendCloseButton, getHiddenCssProps, getVisibleCssProps, setState, state, wrapInnerElement,
      _this = this;
    this.defaults = {
      position: 'top',
      show: true,
      effect: 'slide',
      opacity: 0.95,
      time: 4000,
      showSpeed: 600,
      hideSpeed: 450,
      showEasing: '',
      hideEasing: '',
      innerDivClass: 'inner',
      closeButton: false,
      closeButtonText: 'close',
      closeButtonClass: 'close',
      hideOnClick: true,
      onLoad: function() {},
      onVisible: function() {},
      onHide: function() {},
      onHidden: function() {}
    };
    state = '';
    this.settings = {};
    this.$element = $(element);
    setState = function(_state) {
      return state = _state;
    };
    getHiddenCssProps = function() {
      var css, position;
      position = (_this.getSetting('effect')) === 'slide' ? 0 - _this.$element.outerHeight() : 0;
      css = {};
      if ((_this.getSetting('position')) === 'bottom') {
        css['bottom'] = position;
      } else {
        css['top'] = position;
      }
      if ((_this.getSetting('effect')) === 'fade') {
        css['opacity'] = 0;
      }
      return css;
    };
    getVisibleCssProps = function() {
      var css;
      css = {
        'opacity': _this.getSetting('opacity')
      };
      if ((_this.getSetting('position')) === 'bottom') {
        css['bottom'] = 0;
      } else {
        css['top'] = 0;
      }
      return css;
    };
    wrapInnerElement = function() {
      _this.$elementInner = $('<div />', {
        'class': _this.getSetting('innerDivClass')
      });
      return _this.$element.wrapInner(_this.$elementInner);
    };
    appendCloseButton = function() {
      var $closeButton;
      $closeButton = $('<a />', {
        'class': _this.getSetting('closeButtonClass'),
        'html': _this.getSetting('closeButtonText')
      });
      _this.$element.children().append($closeButton);
      return $closeButton.bind('click', function() {
        return _this.hide();
      });
    };
    this.getState = function() {
      return state;
    };
    this.getSetting = function(settingKey) {
      return this.settings[settingKey];
    };
    this.callSettingFunction = function(functionName) {
      return this.settings[functionName](element);
    };
    this.init = function() {
      var _this = this;
      setState('hidden');
      this.settings = $.extend({}, this.defaults, options);
      if (this.$element.length) {
        wrapInnerElement();
        if (this.getSetting('closeButton')) {
          appendCloseButton();
        }
        this.$element.css(getHiddenCssProps()).css({
          display: 'inline'
        });
        if (this.getSetting('show')) {
          this.show();
        }
        if (this.getSetting('hideOnClick')) {
          return this.$element.bind('click', function() {
            if (_this.getState() !== 'hiding') {
              return _this.hide();
            }
          });
        }
      }
    };
    this.show = function() {
      var _this = this;
      if (this.getState() !== 'showing' && this.getState() !== 'visible') {
        setState('showing');
        this.callSettingFunction('onLoad');
        return this.$element.animate(getVisibleCssProps(), this.getSetting('showSpeed'), this.getSetting('showEasing'), function() {
          setState('visible');
          _this.callSettingFunction('onVisible');
          return setTimeout((function() {
            return _this.hide();
          }), _this.settings.time);
        });
      }
    };
    this.hide = function() {
      var _this = this;
      if (this.getState() !== 'hiding' && this.getState() !== 'hidden') {
        setState('hiding');
        this.callSettingFunction('onHide');
        return this.$element.animate(getHiddenCssProps(), this.getSetting('hideSpeed'), this.getSetting('hideEasing'), function() {
          setState('hidden');
          return _this.callSettingFunction('onHidden');
        });
      }
    };
    this.init();
    return this;
  };
  return $.fn.miniNotification = function(options) {
    return this.each(function() {
      var plugin;
      plugin = ($(this)).data('miniNotification');
      if (plugin === void 0) {
        plugin = new $.miniNotification(this, options);
        return ($(this)).data('miniNotification', plugin);
      } else {
        return plugin.show();
      }
    });
  };
});
