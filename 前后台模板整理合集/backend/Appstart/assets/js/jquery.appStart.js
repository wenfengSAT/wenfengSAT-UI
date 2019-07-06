// jQuery Plugin for SprFlat admin template
// Control options and basic function of template
// version 1.0, 28.02.2013
// by SuggeElson www.suggeelson.com

(function($) {

    // here we go!
    $.appStart = function(element, options) {

        // plugin's default options
        var defaults = {
            //main color scheme for template
            //be sure to be same as colors on main.css or custom-variables.less
            colors : {
                white: '#fff',
                dark: '#2C3E50',
                red: '#EF4836',
                blue: '#1E8BC3',
                green: '#3FC380',
                yellow: '#F39C12',
                orange: '#E87E04',
                purple: '#9A12B3',
                pink: '#f78db8',
                lime: '#a8db43',
                mageta: '#e65097',
                teal: '#1BBC9B',
                black: '#000',
                brown: '#EB974E',
                gray: '#ECF0F1',
                graydarker: '#95A5A6',
                graydark: '#D2D7D3',
                graylight: '#EEEEEE',
                graylighter: '#F2F1EF'
            },
            customScroll: {
                color: '#fff', //color of custom scroll
                rscolor: '#fff', //color of right sidebar
                size: '5px', //size in pixels
                opacity: '1', //opacity
                alwaysVisible: false //disable hide in
            },
            sounds: {
                active: true, //activate sounds
                dir: 'assets/sounds/',//where sounds is located
                volume: '0.7', //sound volume
                sounds: [ //sound list
                    'loadingscreen'
                ],
                loadingScreen: 'loading', //Sound for loading screen
            },
            header: {
                fixed: true //fixed header
            },
            breadcrumbs: {
                auto: true, //auto populate breadcrumbs via js if is false you need to provide own markup see for example.
                homeicon: 'im-home6' //home icon 
            },
            sidebar: {
                fixed: true,//fixed sidebar
                rememberToggle: true, //remember if sidebar is hided
                offCanvas: true //make sidebar offcanvas in tablet and small screens
            },
            sideNav : {
                toggleMode: true, //close previous open submenu before expand new
                hover: false, //shows subs on hover or click
                showArrows: true,//show arrow to indicate sub
                sideNavArrowIcon: 'im-arrow-down2', //arrow icon for navigation
                subOpenSpeed: 300,//animation speed for open subs
                subCloseSpeed: 400,//animation speed for close subs
                animationEasing: 'linear',//animation easing
                absoluteUrl: false, //put true if use absolute path links. example http://www.host.com/dashboard instead of /dashboard
                subDir: '' //if you put template in sub dir you need to fill here. example '/html'
            },
            panels: {
                refreshIcon: 'im-spinner6',//refresh icon for panels
                toggleIcon: 'im-minus',//toggle icon for panels
                collapseIcon: 'im-plus',//colapse icon for panels
                closeIcon: 'im-close', //close icon
                showControlsOnHover: true,//Show controls only on hover.
                loadingEffect: 'facebook',//loading effect for panels. bounce, none, rotateplane, stretch, orbit, roundBounce, win8, win8_linear, ios, facebook, rotation.
                rememberSortablePosition: true //remember panel position
            },
            lockMode : {
                autoLock: true, //Lock automatic in iddle
                minutes: 5, //how many minutes before lock mode is activate automatic
                url: 'lockscreen.html' //where to redirect user after screen is lock
            },
            forms: {
                checkAndRadioTheme: 'blue', //theme for radios - aero, blue,flat, green,gray,orange,pink,purple,red,yellow
            },
            tooltips: true, //activate tooltip plugin build in bootstrap
            tables: {
                responsive: true, //make tables resposnive
                customscroll: true //ativate custom scroll for responsive tables
            },
            alerts: {
                animation: true, //animation effect toggle
                closeEffect: 'bounceOutDown' //close effect for alerts see http://daneden.github.io/animate.css/
            },
            backToTop: {
                active: true, //activate back to top
                scrolltime: 800, //scroll time speed
                imgsrc: 'assets/img/backtop.png', //image 
                width: 48, //width of image
                place: 'bottom-right', //position top-left, top-right, bottom-right, bottom-left
                fadein: 500, //fadein speed
                fadeout: 500, // fadeOut speed
                opacity: 0.5, //opacity
                marginX: 1, //X margin
                marginY: 2 //Y margin
            },
            dropdownMenu: {
                animation: true, //animation effect for dropdown
                openEffect: 'flipInY',//open effect for menu see http://daneden.github.io/animate.css/
            }

        }

        // current instance of the object
        var plugin = this;

        // this will hold the merged default, and user-provided options
        plugin.settings = {}

        var $element = $(element), // reference to the jQuery version of DOM element
            element = element;    // reference to the actual DOM element

        // the "constructor" method that gets called when the object is created
        plugin.init = function() {

            // the plugin's final properties are the merged default and 
            // user-provided options (if any)
            plugin.settings = $.extend({}, defaults, options);

            //respondjs handle responsive view
            this.respondjs();
            //activate storejs plugin
            this.storejs();
            //activate mousewheel plugin
            this.mouseWheel();
            //activate retina ready plugin
            this.retinaReady();
            //toggle sidebar
            this.toggleSidebar();
            //toggle right sidebar
            this.toggleRightSidebar();
            //sidebar nav function
            this.sideBarNav();
            //set current class on nav
            this.setCurrentNav();
            //option buttons init
            this.optionButtons();
            //chat window
            this.rightSidebar();
            //waitme plugin
            this.waitMe();
            //panels
            this.panels();
            //quick search
            this.quickSearch();
            //responsive sidebar button handle 
            this.resSidebarButton();
            //fixed header
            if(plugin.settings.header.fixed) {
                this.fixedHeader(true);
            }
            //fixed sidebar
            if(plugin.settings.sidebar.fixed) {
                this.fixedSidebar();
            }
            
            //check if sidebar need to be toggled
            if(plugin.settings.sidebar.rememberToggle) {
                var breakpoint = plugin.getBreakPoint();
                if(store.get('sidebarToggle') == 1 && breakpoint == 'large' || store.get('sidebarToggle') == 1 && breakpoint == 'laptop') {
                    plugin.toggleLeftSidebar();
                    plugin.sideBarNavToggle();
                    plugin.collapseSideBarNav();
                }
            }

            //check if sounds need to be muted
            if(store.get('sounds-mute') == 1) {
                this.muteSounds();
            } else if (plugin.settings.sounds.active) {
                this.activateSounds();
            }

            //back to top
            if (plugin.settings.backToTop) {
                this.backToTop();
            }           
            //call center modal function after modal is show
            $('.modal').on('shown.bs.modal', function (e) {
                //center modal
                plugin.centerModal();
            })
            //update breadcrumbs
            if (plugin.settings.breadcrumbs.auto) {
                this.breadCrumbs();
            }       
            //dropdown menu animations
            if(plugin.settings.dropdownMenu.animation) {
               this.dropdownMenuAnimations();
            }

            //center dropdown
            this.dropdownMenuFix();

            //handle checkbox and radios theme
            this.checkAndRadios(plugin.settings.forms.checkAndRadioTheme);

            //email app
            this.emailApp();

            //hoverdirection plugin
            this.hoverDirection();

            //responsive tables
            if (plugin.settings.tables.responsive) {
                this.responsiveTables();
            }

            //------------- Resize evetns -------------//
            $(window).resize(function() {
                //center bootstrap modal
                plugin.centerModal();
            });
        }   

        //get breakpoint
        plugin.getBreakPoint = function () {
            var jRes = jRespond([
                {
                    label: 'phone',
                    enter: 0,
                    exit: 767
                },{
                    label: 'tablet',
                    enter: 768,
                    exit: 979
                },{
                    label: 'laptop',
                    enter: 980,
                    exit: 1366
                },{
                    label: 'large',
                    enter: 1367,
                    exit: 10000
                }
            ]);

            return jRes.getBreakpoint();
        }

        // public methods
        //fixed header method
        plugin.fixedHeader = function (val) {
            if(val == true) {
                $('#header').addClass('header-fixed');
            } else {
                $('#header').removeClass('header-fixed');
            }
        }

        //fixed sidebar
        plugin.fixedSidebar = function () {
            var sidebar = $('#sidebar');
            var breakpoint = plugin.getBreakPoint();

            if (breakpoint == 'large' || breakpoint == 'laptop' || !sidebar.hasClass('collapse-sidebar')) {
                $('#sidebar').addClass('sidebar-fixed');
                //activate slim scroll
                $('#sidebar .sidebar-scrollarea').slimScroll({
                    position: "right",
                    height: '100%',
                    distance: '4px',
                    railVisible: false,
                    size: plugin.settings.customScroll.size,                    
                    color: plugin.settings.customScroll.color,                    
                    railOpacity: plugin.settings.customScroll.opacity,
                    railColor: plugin.settings.customScroll.railColor
                });    
            }
        }

        plugin.removeFixedSidebar = function () {
            var scrollarea = $('.sidebar-scrollarea');
            //deactivate slim scroll
            if (scrollarea.parent().hasClass('slimScrollDiv')) {
                console.log('slimsscroll');
                $('#sidebar').removeClass('sidebar-fixed');
                scrollarea.parent().replaceWith($('.sidebar-scrollarea')); 
                scrollarea.attr('style', '');
            }   
        }

        //toggle sidebar
        plugin.toggleSidebar = function() {
            var toggleButton = $('.toggle-sidebar>a');
            var breakpoint = plugin.getBreakPoint();
            toggleButton.on("click", function(e){ 
                e.preventDefault();
                //sound
                if (plugin.settings.sounds.active) {
                    $.ionSound.play({name: plugin.settings.sounds.toggleSidebar});
                }
                //sidebar
                $('#sidebar').toggleClass('collapse-sidebar');           
                if (breakpoint == 'tablet') {
                    if (plugin.settings.sidebar.offCanvas) {
                        $('#content').toggleClass('collapsed-sidebar offCanvas');
                    } else {
                        $('#content').toggleClass('collapsed-sidebar overLap');
                    }                    
                } else if (breakpoint == 'phone') {                   
                    if (plugin.settings.sidebar.offCanvas) {
                        $('#content').toggleClass('full-page offCanvas');
                    } else {
                        $('#content').toggleClass('full-page overLap');
                    }   
                } else {
                    $('#content').toggleClass('collapsed-sidebar');
                }
                if ($('#sidebar').hasClass('collapse-sidebar')) {
                    plugin.collapseSideBarNav(false);
                    if (plugin.settings.sidebar.fixed) {
                        plugin.removeFixedSidebar();
                    }
                } else {
                    if (plugin.settings.sidebar.fixed) {
                        plugin.fixedSidebar();
                    }
                }
                //content
                if($('#content').hasClass('full-page')) {
                    $('#content').removeClass('sidebar-page');
                    /*if (breakpoint == 'phone') {
                        $('#content').removeClass('offCanvas');
                    }*/
                    if (breakpoint == 'tablet' || breakpoint == 'phone') {
                        $('#content').removeClass('offCanvas');
                        if (plugin.settings.sidebar.offCanvas) {
                            $('#content').removeClass('overLap');
                        }
                    }
                } else if($('#content').hasClass('collapsed-sidebar')) {
                    $('#content').removeClass('sidebar-page');
                   /* if (breakpoint == 'phone') {
                        $('#content').removeClass('offCanvas');
                    }*/
                    if (breakpoint == 'tablet' || breakpoint == 'phone') {
                        $('#content').removeClass('offCanvas');
                        if (plugin.settings.sidebar.offCanvas) {
                            $('#content').removeClass('overLap');
                        }
                    }
                } else {
                    $('#content').addClass('sidebar-page');
                }
                //remember toggle                
                if($('#sidebar').hasClass('collapse-sidebar')) {
                    store.set('sidebarToggle', 1);
                    plugin.sideBarNavToggle();
                } else {
                    store.set('sidebarToggle', 0);
                }
                
            });
        }

        //hide left sidebar
        plugin.hideLeftSidebar = function() {
            var breakpoint = plugin.getBreakPoint();
            $('#sidebar').addClass('hide-sidebar');
            $('#content').addClass('full-page');
            $('#content').removeClass('sidebar-page');
            if (breakpoint == 'phone' && !plugin.settings.sidebar.offCanvas) {
                $('#content').addClass('overLap');
            }
        }

        //toggle left sidebar
        plugin.toggleLeftSidebar = function() {
            var breakpoint = plugin.getBreakPoint();
            if (plugin.settings.sidebar.fixed) {
                plugin.removeFixedSidebar();
            }
            $('#sidebar').addClass('collapse-sidebar');
            $('#content').addClass('collapsed-sidebar');
            $('#content').removeClass('sidebar-page');
            if (breakpoint == 'tablet' && !plugin.settings.sidebar.offCanvas) {
                $('#content').removeClass('overLap');
            }
        }

        //showleft sidebar
        plugin.showLeftSidebar = function() {
            var breakpoint = plugin.getBreakPoint();
            if (plugin.settings.sidebar.fixed) {
                plugin.fixedSidebar();
            }
            $('#sidebar').removeClass('hide-sidebar');
            $('#sidebar').removeClass('collapse-sidebar');
            $('#content').removeClass('full-page');
            if (breakpoint == 'large' || breakpoint == 'laptop' && !plugin.settings.sidebar.offCanvas) {
                $('#content').removeClass('overLap');
            }
            $('#content').removeClass('collapsed-sidebar');
            $('#content').addClass('sidebar-page');
        }

        //toggle right sidebar
        plugin.toggleRightSidebar = function() {
            var toggleButton = $('#toggle-right-sidebar');
            var breakpoint = plugin.getBreakPoint();
            toggleButton.on("click", function(e){ 
                e.preventDefault();
                $('#right-sidebar').toggleClass('hide-sidebar');
            });            
        }

        plugin.sideBarNav = function() {
            //cache the elements
            var navscroll = $('#sidebar .sidebar-scrollarea');
            var nav = $('#sideNav');
            var navCurrent = nav.find('li.current');
            var navLi = nav.find('li');
            var navLink = nav.find('a');
            var navSub = nav.find('li>ul.sub');

            //generate unique id for each link
            /*navLink.each(function(index) {
                $(this).attr('id', 'spr_menu_link_' + index);
            }); */

            //put hasSub class
            navSub.closest('li').addClass('hasSub');

            //put notExpand class
            if(!navSub.prev('a').hasClass('notExpand')) {
                navSub.prev('a').addClass('notExpand');
            }

            if(plugin.settings.sideNav.showArrows) {
                if(!$('#sideNav').hasClass('show-arrows')) {
                    $('#sideNav').addClass('show-arrows');
                }
                if(!navSub.prev('a').find('i.sideNav-arrow').length) {
                    navSub.prev('a').prepend('<i class="'+ plugin.settings.sideNav.sideNavArrowIcon + ' sideNav-arrow"></i>');
                }
            }

            navLi.hover(
                function () {
                    //in 
                    _this = $(this).children('a');
                    if(plugin.settings.sideNav.hover) {
                        if(_this.hasClass('notExpand')) {
                            _this.next('ul').slideDown(plugin.settings.sideNav.subOpenSpeed, plugin.settings.sideNav.animationEasing);
                            _this.next('ul').addClass('show');
                            _this.addClass('expand').removeClass('notExpand');                           
                            _this.closest('li.hasSub').addClass('highlight-menu');
                        }
                    }   
                    
                },
                function () {
                    //out 
                    _this = $(this).children('a');
                    if(plugin.settings.sideNav.hover) {
                        if (_this.hasClass('expand')) {
                            _this.next('ul').removeClass('show');
                            _this.next('ul').slideUp(plugin.settings.sideNav.subCloseSpeed, plugin.settings.sideNav.animationEasing);
                            _this.addClass('notExpand').removeClass('expand');
                            navLi.removeClass('highlight-menu');
                        }
                    }     
                }
            );

            if(!plugin.settings.sideNav.hover) {
                navLink.on("click", function(e){
                    var _this = $(this);
                    if(_this.hasClass('notExpand')) {
                        e.preventDefault();
                        if (plugin.settings.sideNav.toggleMode) {
                            //close all expanded subs
                            navexpand = nav.find('li.hasSub .expand');
                            navexpand.next('ul').removeClass('show');
                            navexpand.next('ul').slideUp(plugin.settings.sideNav.subCloseSpeed, plugin.settings.sideNav.animationEasing); 
                            navexpand.addClass('notExpand').removeClass('expand');
                            if(plugin.settings.sideNav.showArrows) {
                                navexpand.find('.sideNav-arrow').removeClass('rotateM180').addClass('rotate0');
                            }
                        }
                        //expand ul and change class to expand
                        _this.next('ul').slideDown(plugin.settings.sideNav.subOpenSpeed, plugin.settings.sideNav.animationEasing);
                        _this.next('ul').addClass('show');
                        _this.addClass('expand').removeClass('notExpand');
                        navLi.removeClass('highlight-menu');
                        _this.closest('li.hasSub').addClass('highlight-menu');
                        if(plugin.settings.sideNav.showArrows) {
                            _this.find('.sideNav-arrow').removeClass('rotate0').addClass('rotateM180');
                        }                   
                    } else if (_this.hasClass('expand')) {
                        e.preventDefault();
                        //collapse ul and change class to notExpand
                        _this.next('ul').removeClass('show');
                        _this.next('ul').slideUp(plugin.settings.sideNav.subCloseSpeed, plugin.settings.sideNav.animationEasing);
                        _this.addClass('notExpand').removeClass('expand');
                        if(plugin.settings.sideNav.showArrows) {
                            _this.find('.sideNav-arrow').removeClass('rotateM180').addClass('rotate0');
                        }
                        navLi.removeClass('highlight-menu');
                    }
                });
            }
        }

        plugin.sideBarNavToggle = function (st) {
            var nav = $('#sideNav');
            var navLi = nav.find('li');
            navLi.hover(
                function () {
                    //in 
                    $(this).addClass('hover-li');             
                },
                function () {
                    //out 
                    $(this).removeClass('hover-li');
                }
            );
        }

        //set current nav element
        plugin.setCurrentNav = function () {
            var domain = document.domain;
            var navig = $('#sideNav');
            var navLinks = navig.find('a');
            if(domain === '') {
                //domain not found
                var pageUrl = window.location.pathname.split( '/' );
                var winLoc = pageUrl.pop(); // get last item
                this.setCurrentClass(navLinks, winLoc);

            } else {
                if(plugin.settings.sideNav.absoluteUrl) {
                    //absolute url is enabled
                    var newDomain = 'http://' + domain + window.location.pathname;
                    setCurrentClass(navLinks, newDomain);
                
                } else {
                    //absolute url is disabled
                    var afterDomain = window.location.pathname.split( '/' );
                    var afterDomain = afterDomain.pop();
                    if(plugin.settings.sideNav.subDir != ''){
                        var afterDomain = window.location.pathname + plugin.settings.sideNav.subDir;
                    }
                    this.setCurrentClass(navLinks, afterDomain);
                }
            }
        }

        plugin.setCurrentClass = function (mainNavLinkAll, url) {
            mainNavLinkAll.each(function(index) {
                //convert href to array and get last element
                var href= $(this).attr('href');
                if(href === url) {
                    //set new current class
                    $(this).addClass('active');

                    ulElem = $(this).closest('ul');
                    if(ulElem.hasClass('sub')) {
                        //its a part of sub menu need to expand this menu
                        //aElem = ulElem.prev('a.hasUl').addClass('drop');
                        ulElem.addClass('show').css('display', 'block');
                        var _this = $(this).closest('li.hasSub').children('a.notExpand');
                        _this.removeClass('notExpand').addClass('expand active-state');
                        _this.closest('li.hasSub').addClass('highlight-menu');
                        
                        if(plugin.settings.sideNav.showArrows) {
                            _this.find('.sideNav-arrow').removeClass('rotate0').addClass('rotateM180');
                        }
                    } 
                } else {
                    if (url == '') {
                        url = 'index.html';
                    }
                    if (href === url) {
                        $(this).addClass('active');
                    }
                }

            });
        }

        //panels 
        plugin.panels = function () {
            //cache all panels
            var panels = $('.panel');
            
            panels.each(function( index ) {
                self = $(this);
                panelHeading = self.find('.panel-heading');
                //add id depend of first positon
                panelsid = 'jst_' + index;
                self.attr('id', panelsid);
                
                //inject all controls per class
                if(self.hasClass('toggle') || self.hasClass('panelClose') || self.hasClass('panelRefresh')) {
                    if(!panelHeading.find('.panel-controls').length) {
                        panelHeading.append('<div class="panel-controls">');
                        panelControls = panelHeading.find('.panel-controls');
                    } else {
                        panelControls = panelHeading.find('.panel-controls');
                    }
                }
    
                //refresh
                if(self.hasClass('panelRefresh') && !panelControls.find('a.panel-refresh').length) {
                    panelControls.append('<a href="#" class="panel-refresh"><i class="'+ plugin.settings.panels.refreshIcon+'"></i></a>');
                }
                //Toggle
                if(self.hasClass('toggle') && !panelControls.find('a.toggle').length) {
                    if (self.hasClass('panel-closed')) {
                        panelControls.append('<a href="#" class="toggle panel-maximize"><i class="'+ plugin.settings.panels.collapseIcon+'"></i></a>');
                        self.find('.panel-body').slideToggle(0);
                        self.find('.panel-footer').slideToggle(0);
                        self.find('.panel-heading').toggleClass('min');
                    } else {
                        panelControls.append('<a href="#" class="toggle panel-minimize"><i class="'+ plugin.settings.panels.toggleIcon+'"></i></a>');
                    }
                }
                //close
                if(self.hasClass('panelClose') && !panelControls.find('a.panel-close').length) {
                    panelControls.append('<a href="#" class="panel-close"><i class="'+ plugin.settings.panels.closeIcon+'"></i></a>');
                }

                //show controls on this panel every time.
                if (self.hasClass('showControls')) {
                    self.find('.panel-controls').addClass('panel-controls-show');
                } else if (plugin.settings.panels.showControlsOnHover) {
                    self.find('.panel-controls').addClass('panel-controls-hide');
                }
                
            });

            panelControls = panels.find('.panel-controls');
            panelControlsLink = panelControls.find('a');
          
            
            if (plugin.settings.panels.showControlsOnHover) {
                //hover on panel
                panels.hover(
                    function () {
                        //in
                        if ($(this).find('.panel-controls').hasClass('panel-controls-hide')) {
                            $(this).find('.panel-controls').fadeIn(300);
                        }
                    },
                    function () {
                        //out
                        if ($(this).find('.panel-controls').hasClass('panel-controls-hide')) {
                            $(this).find('.panel-controls').fadeOut(300);
                        }
                    }
                );
            }

            //handle clicks
            panelControlsLink.click(function(e) {
                e.preventDefault();
                self = $(this);
                thisIcon = self.find('i');
                thisPanel = self.closest('.panel');
                thisPanelBody = thisPanel.find('.panel-body');
                thisPanelFooter = thisPanel.find('.panel-footer');
                thisPanelHeading = thisPanel.find('.panel-heading');

                //close click
                if (self.hasClass('panel-close')) {
                    setTimeout(function() {thisPanel.remove();}, 500);
                }

                //minimize and maximize click
                if (self.hasClass('toggle')) {
                    //minimize panel
                    self.toggleClass('panel-minimize panel-maximize');
                    thisIcon.toggleClass(plugin.settings.panels.toggleIcon +' '+plugin.settings.panels.collapseIcon);
                    thisPanelBody.slideToggle(200);
                    thisPanelFooter.slideToggle(200);
                    thisPanelHeading.toggleClass('min');
                }
                
                //refresh
                if (self.hasClass('panel-refresh')) {              
                    self.closest('.panel').waitMe({
                        effect : plugin.settings.panels.loadingEffect,
                        text : '',
                        bg : 'rgba(255,255,255,0.7)',
                        color : plugin.settings.colors.teal
                    });
                    setTimeout(function() {
                        self.closest('.panel').waitMe("hide");
                    }, 3000);
                }

            });
            
            //sort options
            if (!$('.content-inner').hasClass('notSortable')) {
                
                var sortItem = $('.content-inner').find(".sortable-layout");
                var items = sortItem.find(".panelMove");
                var handle = items.find('.panel-heading');
                var href = window.location.href;
                var panelsPosition = "panels_position_"+ href;
                var getKeyPosition = localStorage.getItem(panelsPosition);

                if (plugin.settings.panels.rememberSortablePosition) {
                    if (getKeyPosition) {
                        var jsonPosition = JSON.parse(getKeyPosition);
                        for (var key in jsonPosition.grid) {
                            var changeOrder = sortItem.eq(key);
                            for (var key2 in jsonPosition.grid[key].section) {
                                changeOrder.append($("#" + jsonPosition.grid[key].section[key2].id))
                            }
                        }
                    }
                }
                
                sortItem.sortable({
                    items: items,
                    connectWith: sortItem,
                    handle: handle,
                    placeholder: "panel-placeholder",
                    forcePlaceholderSize: true,
                    helper: 'original',
                    forceHelperSize: true, 
                    cursor: "move",
                    delay: 200,
                    opacity: 0.8,
                    zIndex: 10000,
                    tolerance: "pointer",                           
                    update: function (event, ui) {
                        if (plugin.settings.panels.rememberSortablePosition) {
                            panelSavePosition(ui.item);
                        }                       
                    }
                });

                // reset panel position for page
                $('.reset-layout').click(function(e) {
                    bootbox.confirm({
                        message: "Warning!!! This action will reset panels position",
                        title: "Are you sure ?",
                        callback: function(result) {
                            if (result) {
                                localStorage.removeItem(panelsPosition);
                                location.reload(); 
                            }
                        }
                    });   
                    plugin.centerModal();                 
                });

                panelSavePosition = function (item) {
                    var mainArr = [];
                    sortItem.each(function () {
                        var subArr = [];
                        $(this).children('.panelMove').each(function () {
                            var subObj = {};
                            subObj.id = $(this).attr("id");
                            subArr.push(subObj)
                        });
                        var out = {
                            section: subArr
                        };
                        mainArr.push(out)
                    });
                    var storePositionObj = JSON.stringify({
                        grid: mainArr
                    });
                    if (getKeyPosition != storePositionObj) {
                        localStorage.setItem(panelsPosition, storePositionObj, null)
                    }
                }

            } 
            
        }

        //get colors
        plugin.getColors = function () {
            return plugin.settings.colors;
        }

        //back to top
        plugin.backToTop = function () {
            //GoUP 0.1.2 - Developed by Roger Vila (@_rogervila)
            (function(e){e.fn.goup=function(t){e.fn.goup.defaultOpts={appear:200,scrolltime:800,imgsrc:"http://goo.gl/VDOdQc",width:72,place:"bottom-right",fadein:500,fadeout:500,opacity:.5,marginX:2,marginY:2};var n=e.extend({},e.fn.goup.defaultOpts,t);return this.each(function(){var t=e(this);t.html("<a><img /></a>");var r=e("#goup a");var i=e("#goup a img");t.css({position:"fixed",display:"block",width:"'"+n.width+"px'","z-index":"9"});r.css("opacity",n.opacity);i.attr("src",n.imgsrc);i.width(n.width);i.hide();e(function(){e(window).scroll(function(){if(e(this).scrollTop()>n.appear)i.fadeIn(n.fadein);else i.fadeOut(n.fadeout)});e(r).hover(function(){e(this).css("opacity","1.0");e(this).css("cursor","pointer")},function(){e(this).css("opacity",n.opacity)});e(r).click(function(){e("body,html").animate({scrollTop:0},n.scrolltime);return false})});if(n.place==="top-right")t.css({top:n.marginY+"%",right:n.marginX+"%"});else if(n.place==="top-left")t.css({top:n.marginY+"%",left:n.marginX+"%"});else if(n.place==="bottom-right")t.css({bottom:n.marginY+"%",right:n.marginX+"%"});else if(n.place==="bottom-left")t.css({bottom:n.marginY+"%",left:n.marginX+"%"});else t.css({bottom:n.marginY+"%",right:n.marginX+"%"})})}})(jQuery);

            $('body').append('<div id="goup"></div>');
            $('#goup').goup({
                appear: 200,
                scrolltime: plugin.settings.backToTop.scrolltime,
                imgsrc: plugin.settings.backToTop.imgsrc,
                width: plugin.settings.backToTop.width,
                place: plugin.settings.backToTop.place,
                fadein: plugin.settings.backToTop.fadein,
                fadeout: plugin.settings.backToTop.fadeout,
                opacity: plugin.settings.backToTop.opacity,
                marginX: plugin.settings.backToTop.marginX,
                marginY: plugin.settings.backToTop.marginY,
            });
        }

        //center modal in page
        plugin.centerModal = function () {
            $('.modal').each(function(){
                if($(this).hasClass('in') == false){
                  $(this).show();
                };
                var contentHeight = $(window).height() - 60;
                var headerHeight = $(this).find('.modal-header').outerHeight() || 2;
                var footerHeight = $(this).find('.modal-footer').outerHeight() || 2;

                $(this).find('.modal-content').css({
                  'max-height': function () {
                    return contentHeight;
                  }
                });

                $(this).find('.modal-body').css({
                  'max-height': function () {
                    return contentHeight - (headerHeight + footerHeight);
                  }
                });

                $(this).find('.modal-dialog').addClass('modal-dialog-center').css({
                  'margin-top': function () {
                    return -($(this).outerHeight() / 2);
                  },
                  'margin-left': function () {
                    return -($(this).outerWidth() / 2);
                  }
                });
                if($(this).hasClass('in') == false){
                  $(this).hide();
                };
            });
        }

        // Checkboxes and radios
        plugin.checkAndRadios = function(themeColor) {
            if (themeColor == 'minimal') {
                chkClass = 'icheckbox_minimal';
                radClass = 'iradio_minimal';
            } else {
                chkClass = 'icheckbox_minimal-'+themeColor;
                radClass = 'iradio_minimal-'+themeColor;
            }
            $('input').not('.noStyle').iCheck({
                checkboxClass: chkClass,
                radioClass: radClass
            });
        }

        //Update breadcrumbs
        plugin.breadCrumbs = function () {
            var breadcrumb = $('#crumb');
            var homeIcon = '<i class="'+plugin.settings.breadcrumbs.homeicon+'"></i>';
            
            var navel = $('#sideNav>li a.active');
            var navsub = navel.closest('.nav.sub');
            //empty curmb
            breadcrumb.empty();
            breadcrumb.append('<li>'+homeIcon+'<a href="index.html">Home</a></li>');

            if (navsub.closest('li').hasClass('hasSub')) {
                //get previous
                navel1 = navsub.prev('a.expand');
                link = navel1.attr('href');
                //icon1 = navel1.children('i').not('.sideNav-arrow').prop('outerHTML');
                text1 = navel1.children('.notification').remove().end().text().trim();

                breadcrumb.append('<li>'+/*icon1*/+'<a href="'+link+'">'+text1+'</a></li>');

                //icon = navel.children('i').prop('outerHTML');
                text = navel.children('.indicator').remove().end().text();
                breadcrumb.append('<li>'+ /*icon*/ +' '+ text +'</li>');

            } else {
                //icon = navel.children('i').prop('outerHTML');
                text = navel.children('.indicator').remove().end().text();
                breadcrumb.append('<li>'/*+ icon +' '*/+ text +'</li>');
            }         

        }

        plugin.launchFullScreen = function (el) {           
            if ((document.fullScreenElement && document.fullScreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)) { 
                $('body').addClass("full-screen");
                if (document.documentElement.requestFullScreen) {
                  document.documentElement.requestFullScreen();
                } else if (document.documentElement.mozRequestFullScreen) {
                  document.documentElement.mozRequestFullScreen();
                } else if (document.documentElement.webkitRequestFullScreen) {
                  document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
                }
            } else {
                $('body').removeClass("full-screen");
                if (document.cancelFullScreen) {
                  document.cancelFullScreen();
                } else if (document.mozCancelFullScreen) {
                  document.mozCancelFullScreen();
                } else if (document.webkitCancelFullScreen) {
                  document.webkitCancelFullScreen();
                }
            }
        }

        //storejs plugin
        plugin.storejs = function () {
            /* Copyright (c) 2010-2013 Marcus Westin */
            (function(e){function o(){try{return r in e&&e[r]}catch(t){return!1}}var t={},n=e.document,r="localStorage",i="script",s;t.disabled=!1,t.set=function(e,t){},t.get=function(e){},t.remove=function(e){},t.clear=function(){},t.transact=function(e,n,r){var i=t.get(e);r==null&&(r=n,n=null),typeof i=="undefined"&&(i=n||{}),r(i),t.set(e,i)},t.getAll=function(){},t.forEach=function(){},t.serialize=function(e){return JSON.stringify(e)},t.deserialize=function(e){if(typeof e!="string")return undefined;try{return JSON.parse(e)}catch(t){return e||undefined}};if(o())s=e[r],t.set=function(e,n){return n===undefined?t.remove(e):(s.setItem(e,t.serialize(n)),n)},t.get=function(e){return t.deserialize(s.getItem(e))},t.remove=function(e){s.removeItem(e)},t.clear=function(){s.clear()},t.getAll=function(){var e={};return t.forEach(function(t,n){e[t]=n}),e},t.forEach=function(e){for(var n=0;n<s.length;n++){var r=s.key(n);e(r,t.get(r))}};else if(n.documentElement.addBehavior){var u,a;try{a=new ActiveXObject("htmlfile"),a.open(),a.write("<"+i+">document.w=window</"+i+'><iframe src="/favicon.ico"></iframe>'),a.close(),u=a.w.frames[0].document,s=u.createElement("div")}catch(f){s=n.createElement("div"),u=n.body}function l(e){return function(){var n=Array.prototype.slice.call(arguments,0);n.unshift(s),u.appendChild(s),s.addBehavior("#default#userData"),s.load(r);var i=e.apply(t,n);return u.removeChild(s),i}}var c=new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]","g");function h(e){return e.replace(/^d/,"___$&").replace(c,"___")}t.set=l(function(e,n,i){return n=h(n),i===undefined?t.remove(n):(e.setAttribute(n,t.serialize(i)),e.save(r),i)}),t.get=l(function(e,n){return n=h(n),t.deserialize(e.getAttribute(n))}),t.remove=l(function(e,t){t=h(t),e.removeAttribute(t),e.save(r)}),t.clear=l(function(e){var t=e.XMLDocument.documentElement.attributes;e.load(r);for(var n=0,i;i=t[n];n++)e.removeAttribute(i.name);e.save(r)}),t.getAll=function(e){var n={};return t.forEach(function(e,t){n[e]=t}),n},t.forEach=l(function(e,n){var r=e.XMLDocument.documentElement.attributes;for(var i=0,s;s=r[i];++i)n(s.name,t.deserialize(e.getAttribute(s.name)))})}try{var p="__storejs__";t.set(p,p),t.get(p)!=p&&(t.disabled=!0),t.remove(p)}catch(f){t.disabled=!0}t.enabled=!t.disabled,typeof module!="undefined"&&module.exports&&this.module!==module?module.exports=t:typeof define=="function"&&define.amd?define(t):e.store=t})(Function("return this")())
        }

        //mousewheel plugin
        plugin.mouseWheel = function() {
            (function($){var types=["DOMMouseScroll","mousewheel"];if($.event.fixHooks)for(var i=types.length;i;)$.event.fixHooks[types[--i]]=$.event.mouseHooks;$.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var i=types.length;i;)this.addEventListener(types[--i],handler,false);else this.onmousewheel=handler},teardown:function(){if(this.removeEventListener)for(var i=types.length;i;)this.removeEventListener(types[--i],handler,false);else this.onmousewheel=null}};$.fn.extend({mousewheel:function(fn){return fn?
this.bind("mousewheel",fn):this.trigger("mousewheel")},unmousewheel:function(fn){return this.unbind("mousewheel",fn)}});function handler(event){var orgEvent=event||window.event,args=[].slice.call(arguments,1),delta=0,returnValue=true,deltaX=0,deltaY=0;event=$.event.fix(orgEvent);event.type="mousewheel";if(orgEvent.wheelDelta)delta=orgEvent.wheelDelta/120;if(orgEvent.detail)delta=-orgEvent.detail/3;deltaY=delta;if(orgEvent.axis!==undefined&&orgEvent.axis===orgEvent.HORIZONTAL_AXIS){deltaY=0;deltaX=
-1*delta}if(orgEvent.wheelDeltaY!==undefined)deltaY=orgEvent.wheelDeltaY/120;if(orgEvent.wheelDeltaX!==undefined)deltaX=-1*orgEvent.wheelDeltaX/120;args.unshift(event,delta,deltaX,deltaY);return($.event.dispatch||$.event.handle).apply(this,args)}})(jQuery);

        }

        //hover direction plugin
        plugin.hoverDirection = function () {
            /*! jQuery Hover Direction - v0.1.0 - 2014-02-13
            * https://github.com/ptouch718/jquery-hoverdirection
            * Copyright (c) 2014 Powell May; Licensed MIT */
            !function(a){function b(a){switch(a){case 0:return"top";case 1:return"right";case 2:return"bottom";case 3:return"left"}}function c(c){var d=a(this),e=d.height(),f=d.width(),g=(c.pageX-d.offset().left-f/2)*(f>e?e/f:1),h=(c.pageY-d.offset().top-e/2)*(e>f?f/e:1),i=Math.round((Math.atan2(h,g)*(180/Math.PI)+180)/90+3)%4,k=j.cssPrefix,l="mouseleave"===c.type?"leave":"enter",m=b(i);return k+"-"+l+"-"+m}function d(b){var d=c.apply(this,[b]);a(this).addClass(d)}function e(){a(this).removeClass(function(a,b){return(b.match(g)||[]).join(" ")})}function f(a){e.apply(this),d.apply(this,[a])}var g,h="hoverDirection",i={cssPrefix:"hover"},j={},k={init:function(b){return j=a.extend(i,b),g=new RegExp("\\"+j.cssPrefix+"\\S+","g"),this.each(function(){a(this).on("mouseenter mouseleave",f)})},removeClass:function(){return e.apply(this),this},destroy:function(){return e.apply(this),this.each(function(){a(this).off("mouseenter mouseleave",f)})}};a.fn[h]=function(b){return k[b]?k[b].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof b&&b?void a.error("Method "+b+" does not exist on jQuery."+h):k.init.apply(this)}}(jQuery,window,document);
        }

        //fix dropdown menu ot top navigation in small screens
        plugin.dropdownMenuFix = function () {
            var breakpoint = plugin.getBreakPoint();
            if (breakpoint == 'phone') {
               $("ul.dropdown-menu").each(function(){
                    $(this).removeClass('right');
                    $(this).removeClass('left');
                    var parentWidth = $(this).parent().innerWidth();
                    var menuWidth = $(this).innerWidth();
                    var margin = (parentWidth / 2 ) - (menuWidth / 2);
                    margin = margin + "px";
                    $(this).css("margin-left", margin);
                });
            } else {
                $("ul.dropdown-menu").each(function(){
                    if (!$(this).hasClass('left')) {
                        var parentWidth = $(this).parent().innerWidth();
                        var menuWidth = $(this).innerWidth();
                        var margin = (parentWidth / 2 ) - (menuWidth / 2);
                        margin = margin + "px";
                        $(this).css("margin-left", margin);
                    }
                });
            }
        }

        //expand all nav ul element
        plugin.expandSideBarNav = function () {
            nav = $('#sideNav');
            nava = nav.find('a.notExpand');
            nava.next('ul').slideDown(plugin.settings.sideNav.subOpenSpeed, plugin.settings.sideNav.animationEasing);
            nava.next('ul').addClass('show');
            nava.addClass('expand').removeClass('notExpand');
            if(plugin.settings.sideNav.showArrows) {
                nava.find('.sideNav-arrow').removeClass('rotate0').addClass('rotateM180');
            }
        }

        //collapse all nav ul elements except current
        plugin.collapseSideBarNav = function (state) {
            nav = $('#sideNav');
            if (state) {
                nava = nav.find('a.expand').not('a.active-state');
            } else {
                nava = nav.find('a.expand');
            }
            
            nava.next('ul').slideUp(plugin.settings.sideNav.subOpenSpeed, plugin.settings.sideNav.animationEasing);
            nava.next('ul').removeClass('show');
            if (!state) {
                setTimeout(function() {
                     nava.next('ul').removeAttr('style');
                }, plugin.settings.sideNav.subCloseSpeed);               
            }
            nava.addClass('notExpand').removeClass('expand');
            if(plugin.settings.sideNav.showArrows) {
                nava.find('.sideNav-arrow').removeClass('rotateM180').addClass('rotate0');
            }
        }

        //animation for dropdown menus
        plugin.dropdownMenuAnimations = function () {
            openEffect = 'animated ' + plugin.settings.dropdownMenu.openEffect;

            $('.dropdown').on('show.bs.dropdown', function () {
                $(this).find('.dropdown-menu').addClass(openEffect);
            })
        }

        //retina ready images
        plugin.retinaReady = function () {
            !function(){function a(){}function b(a){return f.retinaImageSuffix+a}function c(a,c){if(this.path=a||"","undefined"!=typeof c&&null!==c)this.at_2x_path=c,this.perform_check=!1;else{if(void 0!==document.createElement){var d=document.createElement("a");d.href=this.path,d.pathname=d.pathname.replace(g,b),this.at_2x_path=d.href}else{var e=this.path.split("?");e[0]=e[0].replace(g,b),this.at_2x_path=e.join("?")}this.perform_check=!0}}function d(a){this.el=a,this.path=new c(this.el.getAttribute("src"),this.el.getAttribute("data-at2x"));var b=this;this.path.check_2x_variant(function(a){a&&b.swap()})}var e="undefined"==typeof exports?window:exports,f={retinaImageSuffix:"@2x",check_mime_type:!0,force_original_dimensions:!0};e.Retina=a,a.configure=function(a){null===a&&(a={});for(var b in a)a.hasOwnProperty(b)&&(f[b]=a[b])},a.init=function(a){null===a&&(a=e);var b=a.onload||function(){};a.onload=function(){var a,c,e=document.getElementsByTagName("img"),f=[];for(a=0;a<e.length;a+=1)c=e[a],c.getAttributeNode("data-no-retina")||f.push(new d(c));b()}},a.isRetina=function(){var a="(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)";return e.devicePixelRatio>1?!0:e.matchMedia&&e.matchMedia(a).matches?!0:!1};var g=/\.\w+$/;e.RetinaImagePath=c,c.confirmed_paths=[],c.prototype.is_external=function(){return!(!this.path.match(/^https?\:/i)||this.path.match("//"+document.domain))},c.prototype.check_2x_variant=function(a){var b,d=this;return this.is_external()?a(!1):this.perform_check||"undefined"==typeof this.at_2x_path||null===this.at_2x_path?this.at_2x_path in c.confirmed_paths?a(!0):(b=new XMLHttpRequest,b.open("HEAD",this.at_2x_path),b.onreadystatechange=function(){if(4!==b.readyState)return a(!1);if(b.status>=200&&b.status<=399){if(f.check_mime_type){var e=b.getResponseHeader("Content-Type");if(null===e||!e.match(/^image/i))return a(!1)}return c.confirmed_paths.push(d.at_2x_path),a(!0)}return a(!1)},b.send(),void 0):a(!0)},e.RetinaImage=d,d.prototype.swap=function(a){function b(){c.el.complete?(f.force_original_dimensions&&(c.el.setAttribute("width",c.el.offsetWidth),c.el.setAttribute("height",c.el.offsetHeight)),c.el.setAttribute("src",a)):setTimeout(b,5)}"undefined"==typeof a&&(a=this.path.at_2x_path);var c=this;b()},a.isRetina()&&a.init(e)}();
        }

        //countdown plugin
        plugin.countDown = function () {
            //http://rendro.github.io/countdown/
            (function(){(function(e){e.countdown=function(t,n){var r,i=this;this.el=t;this.$el=e(t);this.$el.data("countdown",this);this.init=function(){i.options=e.extend({},e.countdown.defaultOptions,n);if(i.options.refresh){i.interval=setInterval(function(){return i.render()},i.options.refresh)}i.render();return i};r=function(t){var n,r;t=Date.parse(e.isPlainObject(i.options.date)?i.options.date:new Date(i.options.date));r=(t-Date.parse(new Date))/1e3;if(r<=0){r=0;if(i.interval){i.stop()}i.options.onEnd.apply(i)}n={years:0,days:0,hours:0,min:0,sec:0,millisec:0};if(r>=365.25*86400){n.years=Math.floor(r/(365.25*86400));r-=n.years*365.25*86400}if(r>=86400){n.days=Math.floor(r/86400);r-=n.days*86400}if(r>=3600){n.hours=Math.floor(r/3600);r-=n.hours*3600}if(r>=60){n.min=Math.floor(r/60);r-=n.min*60}n.sec=r;return n};this.leadingZeros=function(e,t){if(t==null){t=2}e=String(e);while(e.length<t){e="0"+e}return e};this.update=function(e){i.options.date=e;return i};this.render=function(){i.options.render.apply(i,[r(i.options.date)]);return i};this.stop=function(){if(i.interval){clearInterval(i.interval)}i.interval=null;return i};this.start=function(t){if(t==null){t=i.options.refresh||e.countdown.defaultOptions.refresh}if(i.interval){clearInterval(i.interval)}i.render();i.options.refresh=t;i.interval=setInterval(function(){return i.render()},i.options.refresh);return i};return this.init()};e.countdown.defaultOptions={date:"June 7, 2087 15:03:25",refresh:1e3,onEnd:e.noop,render:function(t){return e(this.el).html(""+t.years+" years, "+t.days+" days, "+this.leadingZeros(t.hours)+" hours, "+this.leadingZeros(t.min)+" min and "+this.leadingZeros(t.sec)+" sec")}};e.fn.countdown=function(t){return e.each(this,function(n,r){var i;i=e(r);if(!i.data("countdown")){return i.data("countdown",new e.countdown(r,t))}})};return void 0})(jQuery)}).call(this);
        }

        //handle optionButtons for template
        plugin.optionButtons = function () {
            var oexpsubs = $('.expand-subs');
            var osearch = $('.search-in-menu');
            var oclose = $('#close-search-nav');
            var omute = $('.mute-sounds');
            var lfull = $('.launch-fullscreen');

            //search
            osearch.click(function(){
                _this = $(this);
                form = $('#search-nav');
                if (!_this.hasClass('show-search')) {
                    _this.addClass('show-search');
                    form.addClass('show-form animated fadeInDown');
                    if ($('#search-nav input').length) {
                        $('#search-nav input').val('').quicksearch('#sideNav li a', {
                            'onBefore': function () {
                                if($(this).val() != '') {
                                    plugin.expandSideBarNav();
                                }
                            },
                            'onAfter': function () {
                                if($(this).val() == '') {
                                    plugin.collapseSideBarNav(true);
                                }
                            },
                        });
                    }     
                }
            })

            //close search nav
            oclose.click(function(){
                form = $('#search-nav');
                form.removeClass('show-form');
                osearch.removeClass('show-search');
            });

            //expand subs handle
            oexpsubs.click(function(){
                _this = $(this);
                if (_this.hasClass('subs-expanded')) {
                    plugin.collapseSideBarNav(true);
                    _this.attr('title', 'Expand all SubMenus');
                    _this.attr('data-original-title', 'Expand all SubMenus');
                    _this.removeClass('subs-expanded');
                } else {
                    plugin.expandSideBarNav();
                    _this.attr('title', 'Collapse all SubMenus');
                    _this.attr('data-original-title', 'Collapse all SubMenus');
                    _this.addClass('subs-expanded');
                }
            });

            //mute sound
            omute.click(function(){
                _this = $(this);
                icon = _this.find('i');
                if (_this.hasClass('mute')) {
                    plugin.activateSounds();
                } else {
                    //mute
                    plugin.muteSounds();
                }
            });

            //launch full screen
            lfull.click(function(){
                plugin.launchFullScreen($(this));
            });

        }

        //mute sounds
        plugin.muteSounds = function() {
            var omute = $('.mute-sounds');
            icon = omute.find('i');
            $.ionSound.destroy();
            omute.attr('title', 'Enable sounds');
            omute.attr('data-original-title', 'Enable sounds');
            icon.removeClass('im-volume-medium').addClass('im-volume-mute2');
            omute.addClass('mute');
            store.set('sounds-mute', 1);
        }

        //activate sounds
        plugin.activateSounds = function() {
            var omute = $('.mute-sounds');
            icon = omute.find('i');
            omute.attr('title', 'Mute sounds');
            omute.attr('data-original-title', 'Mute sounds');
            icon.removeClass('im-volume-mute2').addClass('im-volume-medium');
            omute.removeClass('mute');
            store.set('sounds-mute', 0);
            $.ionSound({
                sounds: plugin.settings.sounds.sounds,
                path: plugin.settings.sounds.dir,             
                multiPlay: false,        
                volume: plugin.settings.sounds.volume 
            });
        }

        plugin.rightSidebar = function() {
            var rsinner = $('#right-sidebar>.sidebar-inner');

            //activate scroll
            rsinner.slimScroll({
                position: "right",
                height: '100%',
                distance: '2px',
                railVisible: false,
                size: plugin.settings.customScroll.size,                    
                color: plugin.settings.customScroll.rscolor
            });
        }

        //quick search pluign
        plugin.quickSearch = function () {

            //quick search on chat users
            if ($('.chat-search input').length) {
                $('.chat-search input').val('').quicksearch('.chat-ui li');
            }  

            //quick search on todo widget
            if ($('.todo-search input').length) {
                $('.todo-search input').val('').quicksearch('.todo-list .todo-task-item');
            } 

            //quick search on recent-users widget
            if ($('.users-search input').length) {
                $('.users-search input').val('').quicksearch('.recent-users-widget .list-group-item');
            } 

            //quick search on icons
            if ($('.icon-search input').length) {
                $('.icon-search input').val('').quicksearch('.col-lg-3', {
                    'removeDiacritics': true,
                });
            }   

            //quick search on email app toolbar
            if ($('.email-toolbar-search input').length) {
                $('.email-toolbar-search input').val('').quicksearch('.email-list tr');
            }  
        }

        //waitme plugin
        plugin.waitMe = function () {
            /* waitMe - 12.05.14 */
            (function(e){e.fn.waitMe=function(g){return this.each(function(){var f=e(this),r,l,b,m=!1,n="background-color",h="",p,d,c,a,q={init:function(){a=e.extend({effect:"bounce",text:"",bg:"rgba(255,255,255,0.7)",color:"#000",sizeW:"",sizeH:""},g);p=e('<div class="waitMe"></div>');switch(a.effect){case "none":b=0;break;case "bounce":b=3;d="";c="width:"+a.sizeW+";height:"+a.sizeH;break;case "rotateplane":b=1;d="";c="width:"+a.sizeW+";height:"+a.sizeH;break;case "stretch":b=5;d="";c="width:"+a.sizeW+";height:"+
            a.sizeH;break;case "orbit":b=2;d="width:"+a.sizeW+";height:"+a.sizeH;c="";break;case "roundBounce":b=12;d="width:"+a.sizeW+";height:"+a.sizeH;c="";break;case "win8":b=5;m=!0;d="width:"+a.sizeW+";height:"+a.sizeH;c="width:"+a.sizeW+";height:"+a.sizeH;break;case "win8_linear":b=5;m=!0;d="width:"+a.sizeW+";height:"+a.sizeH;c="";break;case "ios":b=12;d="width:"+a.sizeW+";height:"+a.sizeH;c="";break;case "facebook":b=3;d="";c="width:"+a.sizeW+";height:"+a.sizeH;break;case "rotation":b=1,n="border-color",
            d="",c="width:"+a.sizeW+";height:"+a.sizeH}""==a.sizeW&&""==a.sizeH&&(d=c="");if(0<b){l=e('<div class="waitMe_progress '+a.effect+'"></div>');for(var k=1;k<=b;++k)h=m?h+('<div class="waitMe_progress_elem'+k+'" style="'+c+'"><div style="'+n+":"+a.color+'"></div></div>'):h+('<div class="waitMe_progress_elem'+k+'" style="'+n+":"+a.color+";"+c+'"></div>');l=e('<div class="waitMe_progress '+a.effect+'" style="'+d+'">'+h+"</div>")}a.text&&(r=e('<div class="waitMe_text" style="color:'+a.color+'">'+a.text+
            "</div>"));f.find("> .waitMe")&&f.find("> .waitMe").remove();waitMeDivObj=e('<div class="waitMe_content"></div>');waitMeDivObj.append(l,r);p.append(waitMeDivObj);"HTML"==f[0].tagName&&(f=e("body"));f.addClass("waitMe_container").append(p);f.find("> .waitMe").css({background:a.bg});f.find(".waitMe_content").css({marginTop:-f.find(".waitMe_content").outerHeight()/2+"px"})},hide:function(){f.removeClass("waitMe_container");f.find(".waitMe").remove()}};if(q[g])return q[g].apply(this,Array.prototype.slice.call(arguments,
            1));if("object"===typeof g||!g)return q.init.apply(this,arguments);e.event.special.destroyed={remove:function(a){a.handler&&a.handler()}}})}})(jQuery);
        }

        //responsive search btn
        plugin.resSearchButton = function () {
            var sBtn = $('.resSearchBtn');
            var cForm = $('.closeSearchForm');
            var sForm = $('#header .navbar-form');

            sBtn.click(function(){
                sForm.addClass('show animated fadeIn');
                cForm.addClass('show');
            });

            cForm.click(function(){
                $(this).removeClass('show');
                sForm.removeClass('show animated fadeIn');
            });
        }

        //email app 
        plugin.emailApp = function () {
            var eside = $('#email-sidebar');
            var econtent = $('#email-content');

            $("#email-toggle").click(function(){
                if ($(this).hasClass('pushed')) {
                    $(this).removeClass('pushed');
                    eside.removeClass('email-sidebar-hide');
                    eside.addClass('email-sidebar-show');
                    econtent.removeClass('email-content-expand');
                    econtent.addClass('email-content-contract');
                } else {
                    $(this).addClass('pushed');
                    eside.removeClass('email-sidebar-show');
                    eside.addClass('email-sidebar-hide');
                    econtent.removeClass('email-content-contract');
                    econtent.addClass('email-content-expand');
                }
            });
        }

        //collapse email sidbear
        plugin.collapseEmailAppSidebar = function () {
            var eside = $('#email-sidebar');
            var econtent = $('#email-content');
            eside.removeClass('email-sidebar-show');
            eside.addClass('email-sidebar-hide');
            econtent.removeClass('email-content-contract');
            econtent.addClass('email-content-expand');
            $("#email-toggle").addClass('pushed');
        }

        //expand email sidbear
        plugin.expandEmailAppSidebar = function () {
            var eside = $('#email-sidebar');
            var econtent = $('#email-content');
            eside.removeClass('email-sidebar-hide');
            eside.addClass('email-sidebar-show');
            econtent.removeClass('email-content-expand');
            econtent.addClass('email-content-contract');
            $("#email-toggle").removeClass('pushed');
        }

        //responsive Sidebar button
        plugin.resSidebarButton = function () {
            var rsb = $('#showNav');
            rsb.click(function(){
                if ($(this).hasClass('sidebar-showed')) {
                    plugin.hideLeftSidebar();
                    $(this).removeClass('sidebar-showed');
                } else {
                    plugin.showLeftSidebar();
                    $(this).addClass('sidebar-showed');
                }
            });
        }

        //responsive tables
        plugin.responsiveTables = function () {
            var tables = $('.table').not('.non-responsive');
            tables.each(function( index ) {
                $(this).wrap('<div class="table-responsive" />');
                if(plugin.settings.tables.customscroll) {
                    $("div.table-responsive").slimScrollHorizontal({
                        size: plugin.settings.customScroll.size,
                        color: plugin.settings.customScroll.color,
                        railOpacity: plugin.settings.customScroll.opacity,
                        width: '100%',
                        positon: 'bottom',
                        start: 'left',
                        railVisible: true,
                        distance: "3px",
                    });
                }
            });
        }

        //respondjs plugin
        plugin.respondjs = function () {

            // call jRespond and add breakpoints
            var jRes = jRespond([
                {
                    label: 'phone',
                    enter: 0,
                    exit: 767
                },{
                    label: 'tablet',
                    enter: 768,
                    exit: 979
                },{
                    label: 'laptop',
                    enter: 980,
                    exit: 1366
                },{
                    label: 'large',
                    enter: 1367,
                    exit: 10000
                }
            ]);
            // register enter and exit functions for a single breakpoint
            jRes.addFunc({
                breakpoint: 'large',
                enter: function() {
                   
                },
                exit: function() {

                }
            });
            jRes.addFunc({
                breakpoint: 'laptop',
                enter: function() {
                    
                },
                exit: function() {
                   
                }
            });
            jRes.addFunc({
                breakpoint: 'tablet',
                enter: function() {
                    plugin.resSearchButton();
                    plugin.toggleLeftSidebar();
                    plugin.sideBarNavToggle();
                    plugin.collapseSideBarNav();                    
                },
                exit: function() {
                    plugin.showLeftSidebar();
                }
            });
            jRes.addFunc({
                breakpoint: 'phone',
                enter: function() {
                    plugin.dropdownMenuFix();                
                    plugin.resSearchButton();
                    plugin.hideLeftSidebar();
                   /* plugin.toggleLeftSidebar();
                    plugin.sideBarNavToggle();
                    plugin.collapseSideBarNav();  */
                    plugin.collapseEmailAppSidebar();
                    $('#email-content').addClass('email-content-offCanvas');
                },
                exit: function() {
                    plugin.showLeftSidebar();
                    $('#email-content').removeClass('email-content-offCanvas');
                    plugin.expandEmailAppSidebar();
                }
            });

            return jRes;
        }

        // private methods
        var foo_private_method = function() {
            // code goes here
        }

        // fire up the plugin!
        // call the "constructor" method
        plugin.init();

    }

    // add the plugin to the jQuery.fn object
    $.fn.appStart = function(options) {

        // iterate through the DOM elements we are attaching the plugin to
        return this.each(function() {

            // if plugin has not already been attached to the element
            if (undefined == $(this).data('appStart')) {

                // create a new instance of the plugin
                // pass the DOM element and the user-provided options as arguments
                var plugin = new $.appStart(this, options);

                // store a reference to the plugin object
                // element.data('appStart').publicMethod(arg1, arg2, ... argn) or
                // element.data('appStart').settings.propertyName
                $(this).data('appStart', plugin);

            }

        });

    }

})(jQuery);