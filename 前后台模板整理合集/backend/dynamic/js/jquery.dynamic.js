// jQuery Plugin for Dynamic admin template
// Control options and basic function of template
// version 1.0, 21.12.2014
// by SuggeElson www.suggeelson.com

(function($) {

    // here we go!
    $.dynamic = function(element, options) {

        // plugin's default options
        var defaults = {
            customScroll: {
                color: '#fff', //color of custom scroll
                rscolor: '#fff', //color of right sidebar
                size: '3px', //size in pixels
                opacity: '1', //opacity
                alwaysVisible: false //disable hide in
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
            rightSidebar: {
                fixed: true,//fixed sidebar
                rememberToggle: true //remember if sidebar is hided
            },
            sideNav : {
                toggleMode: true, //close previous open submenu before expand new
                showArrows: true,//show arrow to indicate sub
                sideNavArrowIcon: 'l-arrows-right', //arrow icon for navigation
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
                loaderColor: '#bac3d2',
                rememberSortablePosition: true //remember panel position
            },
            accordion: {
                toggleIcon: 'l-arrows-minus s16',//toggle icon for accrodion
                collapseIcon: 'l-arrows-plus s16'//collapse icon for accrodion
            },
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
                imgsrc: 'img/backtop.png', //image 
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
                openEffect: 'fadeIn',//open effect for menu see http://daneden.github.io/animate.css/
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

            //browser selector add browser class to html
            this.browserSelector();
            //activate storejs plugin
            this.storejs();
            //first impression
            this.firstImpression();
            //activate mousewheel plugin
            this.mouseWheel();
            //activate retina ready plugin
            this.retinaReady();
            //toggle sidebar
            this.toggleSidebar();
            //sidebar nav function
            this.sideBarNav();
            //set current class on nav
            this.setCurrentNav();
            //waitme plugin
            this.waitMe();
            //panels
            this.panels();
            //accordion
            this.accordions();
            //quick search
            this.quickSearch();
            //equal columns height
            this.equalHeight();

            //respondjs handle responsive view
            this.respondjs();

            //back to top
            if (plugin.settings.backToTop) {
                this.backToTop();
            }           
            //call center modal function after modal is show
            $('.modal').on('show.bs.modal', function (e) {
                //center modal
                plugin.centerModal();
            })
               
            //dropdown menu animations
            if(plugin.settings.dropdownMenu.animation) {
               this.dropdownMenuAnimations();
            }

            //center dropdown
            this.dropdownMenuFix();

            //animated progressbars
            this.animatedProgressBars();

            //responsive tables
            if (plugin.settings.tables.responsive) {
                this.responsiveTables();
            }

            //email app
            this.emailApp();

            //chat basic functions
            this.chatApp();

            //fixed header
            if(plugin.settings.header.fixed && store.get('fixed-header') == 1) {
                this.fixedHeader(true);
            }
            //fixed sidebar
            if(plugin.settings.sidebar.fixed && store.get('fixed-left-sidebar') == 1) {
                this.fixedSidebar('left');
            }
            //fixed right sidebar
            if(plugin.settings.rightSidebar.fixed && store.get('fixed-right-sidebar') == 1) {
                this.fixedSidebar('right');
            }
            
            //check if sidebar need to be toggled
            if(plugin.settings.sidebar.rememberToggle) {
                var breakpoint = plugin.getBreakPoint();
                if(store.get('sidebarToggle') == 1 && breakpoint == 'large' || store.get('sidebarToggle') == 1 && breakpoint == 'laptop') {
                    plugin.toggleLeftSidebar();
                    plugin.sideBarNavToggle();
                    plugin.collapseSideBarNav(false);
                    plugin.removeFixedSidebar('left');
                }
            }

            //check if right sidebar need to be toggled
            if(plugin.settings.rightSidebar.rememberToggle) {
                var breakpoint = plugin.getBreakPoint();
                if(store.get('rightSidebarToggle') == 1 && breakpoint == 'large' || store.get('rightSidebarToggle') == 1 && breakpoint == 'laptop') {
                    $('#toggle-right-sidebar').addClass('hide-right-sidebar');
                    plugin.hideRightSidebar();
                }
                if (store.get('rightSidebarToggle') == 1 && breakpoint == 'tablet' || store.get('rightSidebarToggle') == 1 && breakpoint == 'phone') {
                    $('#toggle-right-sidebar').addClass('hide-right-sidebar');
                }
            }

            //------------- When window is load -------------//
            $(window).load(function(){
                if (store.get('fixed-header') == 0 && store.get('fixed-right-sidebar') == 1) {
                    plugin.rightSidebarTopPosition();
                }
                plugin.stickyFooter();
            });

            //------------- Resize events -------------//
            $(window).resize(function() {
                //center bootstrap modal
                plugin.centerModal();
                plugin.stickyFooter();
            });

            //------------- Scroll events -------------//
            $(window).scroll(function() {
                if (store.get('fixed-header') == 0 && store.get('fixed-right-sidebar') == 1) {
                    plugin.rightSidebarTopPosition();
                }
                plugin.stickyFooter();
            });

        }   

        //sticky footer
        plugin.stickyFooter = function () {
            $footer = $("#footer");
            var pagewrapper = $('.page-content-wrapper');
   
            if ( (pagewrapper.height()) < $(window).height()) {
                $footer.css({
                    position: "absolute"
                });
            } else {
                $footer.css({
                    position: "static"
                });
            }
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
                    exit: 1024
                },{
                    label: 'laptop',
                    enter: 1025,
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
                store.set('fixed-header', 1);
                $('body').addClass('fixed-header');
            } else {
                $('#header').removeClass('header-fixed');
                store.set('fixed-header', 0);
                $('body').removeClass('fixed-header');
            }
        }

        //fixed sidebar
        plugin.fixedSidebar = function (val) {
            var sidebar =  $('#sidebar');
            var breakpoint = plugin.getBreakPoint();
            if (val === 'left') {
                if (breakpoint == 'large' || breakpoint == 'laptop' || !sidebar.hasClass('collapse-sidebar')) {
                    $('#sidebar').addClass('sidebar-fixed');
                    //activate slim scroll
                    $('#sidebar .sidebar-scrollarea').slimScroll({
                        position: "right",
                        height: '100%',
                        distance: '1px',
                        railVisible: false,
                        size: plugin.settings.customScroll.size,                    
                        color: plugin.settings.customScroll.color,                    
                        railOpacity: plugin.settings.customScroll.opacity,
                        railColor: plugin.settings.customScroll.railColor
                    });    
                    store.set('fixed-left-sidebar', 1);
                    $('body').addClass('fixed-left-sidebar');
                }
            }

            if (val === 'right') {
                if (breakpoint == 'large' || breakpoint == 'laptop') {
                    $('#right-sidebar').addClass('sidebar-fixed');
                    //activate slim scroll
                    $('#right-sidebar .sidebar-scrollarea').slimScroll({
                        position: "right",
                        height: '100%',
                        distance: '1px',
                        railVisible: false,
                        size: plugin.settings.customScroll.size,                    
                        color: plugin.settings.customScroll.rscolor,                    
                        railOpacity: plugin.settings.customScroll.opacity,
                        railColor: plugin.settings.customScroll.railColor
                    });   
                    store.set('fixed-right-sidebar', 1); 
                    $('body').addClass('fixed-right-sidebar');
                }
            }
        }

        //fix rightsidbear top position on scroll if header is not fixed but sidebar is
        plugin.rightSidebarTopPosition = function () {
            var scrollTop = $(document).scrollTop();
            if (scrollTop > 50 - 1) {
                $('#right-sidebar').addClass('rstop');
            } else {
                $('#right-sidebar').removeClass('rstop');
            }
        }

        //add custom scroll to desired element
        plugin.addScrollTo = function (el, position, color ) {
            el.slimScroll({
                position: position,
                height: '100%',
                distance: '1px',
                railVisible: false,
                size: plugin.settings.customScroll.size,                    
                color: color,                    
                railOpacity: plugin.settings.customScroll.opacity,
                railColor: plugin.settings.customScroll.railColor
            });  
        }

        //remove custom scroll from element
        plugin.removeScrollTo = function (el) {
            if (el.parent().hasClass('slimScrollDiv')) {
                el.parent().replaceWith(el); 
                el.attr('style', '');
            }  
        }

        //remove fixed sidebar
        plugin.removeFixedSidebar = function (val) {

            if (val === 'left') {
                var scrollarea = $('#sidebar .sidebar-scrollarea');
                $('#sidebar').removeClass('sidebar-fixed');
                plugin.removeScrollTo(scrollarea);
                store.set('fixed-left-sidebar', 0);
                $('body').removeClass('fixed-left-sidebar');
            }

            if (val === 'right') {
                var scrollarea = $('#right-sidebar .sidebar-scrollarea');
                $('#right-sidebar').removeClass('sidebar-fixed');
                plugin.removeScrollTo(scrollarea);
                store.set('fixed-right-sidebar', 0);
                $('body').removeClass('fixed-right-sidebar');
            }
        
        }

        //toggle sidebar
        plugin.toggleSidebar = function() {
            var toggleButton = $('.toggle-sidebar>a');
            var toggleRButton = $('#toggle-right-sidebar');
            var breakpoint = plugin.getBreakPoint();
            var scrollto = $("#sidebar .sidebar-scrollarea");
            var content = $(".page-content");
            var sidebar = $(".page-sidebar");

            toggleRButton.on("click", function(e){
                e.preventDefault();
                if ($(this).hasClass('hide-right-sidebar')) {
                    plugin.showRightSidebar();
                    $(this).removeClass('hide-right-sidebar');
                    store.set('rightSidebarToggle', 0);
                } else {                  
                    plugin.hideRightSidebar();
                    $(this).addClass('hide-right-sidebar');
                    store.set('rightSidebarToggle', 1);
                }
            });

            toggleButton.on("click", function(e){
                e.preventDefault();
                //sidebar 
                if (sidebar.hasClass('hide-sidebar')) {
                    plugin.showLeftSidebar();
                } else if (sidebar.hasClass('collapse-sidebar')) {
                    plugin.unToggleLeftSidebar();
                    plugin.collapseSideBarNav(true);
                } else {
                    if (breakpoint == "phone") {
                        plugin.hideLeftSidebar();
                    } else {
                        plugin.toggleLeftSidebar();
                        plugin.collapseSideBarNav(false);
                    }
                    
                }

                //remember toggle                
                if(sidebar.hasClass('collapse-sidebar')) {
                    store.set('sidebarToggle', 1);
                    plugin.sideBarNavToggle();
                } else {
                    store.set('sidebarToggle', 0);
                }
                
            });
        }

        //hide right sidebar
        plugin.hideRightSidebar = function() {
            var breakpoint = plugin.getBreakPoint();
            $('#right-sidebar').addClass('hide-sidebar');
            $('.page-content, #footer').removeClass('right-sidebar-page');
            if (breakpoint == 'laptop' || breakpoint == 'tablet' || breakpoint == 'phone') {
                $('.page-content').removeClass('rOverLap');
            }
            $('#back-to-top').removeClass('rightsidebar');
        }

        //show right sidebar
        plugin.showRightSidebar = function() {
            var breakpoint = plugin.getBreakPoint();
            $('#right-sidebar').removeClass('hide-sidebar');
            if (breakpoint == 'laptop' || breakpoint == 'tablet' || breakpoint == 'phone') {
                $('.page-content').addClass('rOverLap');
            }
            $('.page-content, #footer').addClass('right-sidebar-page');
            $('#back-to-top').addClass('rightsidebar');
        }

        //hide left sidebar
        plugin.hideLeftSidebar = function() {
            var breakpoint = plugin.getBreakPoint();
            $('.page-sidebar').addClass('hide-sidebar');
            $('.page-content, #footer').addClass('full-page');
            $('.page-content, #footer').removeClass('sidebar-page');
            if (breakpoint == 'phone' && !plugin.settings.sidebar.offCanvas) {
                $('.page-content').addClass('overLap');
            }
            if (breakpoint == 'phone' && plugin.settings.sidebar.offCanvas || breakpoint == 'tablet' && plugin.settings.sidebar.offCanvas) {
                $('.page-content, #footer').removeClass('offCanvas');
            }
        }

        //toggle left sidebar
        plugin.toggleLeftSidebar = function() {
            var breakpoint = plugin.getBreakPoint();
            var scrollto = $("#sidebar .sidebar-scrollarea");
            if (plugin.settings.sidebar.fixed) {
                plugin.removeScrollTo(scrollto);
            }
            $('.navbar-brand').addClass('collapse-sidebar');
            $('.page-sidebar').addClass('collapse-sidebar');
            $('.page-content, #footer').addClass('collapsed-sidebar');
            $('.page-content, #footer').removeClass('sidebar-page');
            if (breakpoint == 'tablet' && !plugin.settings.sidebar.offCanvas) {
                $('.page-content, #footer').removeClass('overLap');
            }
        }

        //untogle left sidebar
        plugin.unToggleLeftSidebar = function () {
            var breakpoint = plugin.getBreakPoint();
            var scrollto = $("#sidebar .sidebar-scrollarea");
            if (plugin.settings.sidebar.fixed) {
                plugin.addScrollTo(scrollto,'right',plugin.settings.customScroll.color);
            }
            if (breakpoint == 'large' || breakpoint == 'laptop' || breakpoint == 'tablet') {
                $('.navbar-brand').removeClass('collapse-sidebar');
            }            
            $('.page-sidebar').removeClass('collapse-sidebar');            
            $('.page-content, #footer').removeClass('collapsed-sidebar');
            $('.page-content, #footer').addClass('sidebar-page');
            if (breakpoint == 'tablet' && !plugin.settings.sidebar.offCanvas) {
                $('.page-content, #footer').addClass('overLap');
            }
        }

        //showleft sidebar
        plugin.showLeftSidebar = function() {
            var breakpoint = plugin.getBreakPoint();
            var scrollto = $("#sidebar .sidebar-scrollarea");
            if (plugin.settings.sidebar.fixed) {
               plugin.addScrollTo(scrollto);
            }
            $('.navbar-brand').removeClass('collapse-sidebar'); 
            $('.page-sidebar').removeClass('hide-sidebar');
            $('.page-sidebar').removeClass('collapse-sidebar');
            $('.page-content, #footer').removeClass('full-page');
            if (breakpoint == 'large' || breakpoint == 'laptop' && !plugin.settings.sidebar.offCanvas) {
                $('.page-content, #footer').removeClass('overLap');
            }
            if (breakpoint == 'phone' && !plugin.settings.sidebar.offCanvas) {
                $('.page-content, #footer').addClass('overLap');
            }

            if (breakpoint == 'phone' && plugin.settings.sidebar.offCanvas || breakpoint == 'tablet' && plugin.settings.sidebar.offCanvas) {
                $('.page-content, #footer').addClass('offCanvas');
            }
            $('.page-content, #footer').removeClass('collapsed-sidebar');
            $('.page-content, #footer').addClass('sidebar-page');
        }

        plugin.sideBarNav = function() {
            //cache the elements
            var navscroll = $('.page-sidebar .sidebar-scrollarea');
            var nav = $('.side-nav> .nav');
            var navCurrent = nav.find('li.current');
            var navLi = nav.find('li');
            var navLink = nav.find('a');
            var navSub = nav.find('li>ul.sub');

            //put hasSub class
            navSub.closest('li').addClass('hasSub');

            //put notExpand class
            if(!navSub.prev('a').hasClass('notExpand')) {
                navSub.prev('a').addClass('notExpand');
            }

            if(plugin.settings.sideNav.showArrows) {
                if(!$('side-Nav').hasClass('show-arrows')) {
                    $('side-Nav').addClass('show-arrows');
                }
                if(!navSub.prev('a').find('i.sideNav-arrow').length) {
                    navSub.prev('a').prepend('<i class="'+ plugin.settings.sideNav.sideNavArrowIcon + ' sideNav-arrow"></i>');
                }
            }

            navLink.on("click", function(e){
                var _this = $(this);
                if(_this.hasClass('notExpand')) {
                    e.preventDefault();   
                    //check if menu is collapsed
                    if (!$('.page-sidebar').hasClass('collapse-sidebar')) {
                       //check if is 3lv menu
                        if ($(this).closest('li').closest('ul').hasClass('show')) {
                            //expand ul and change class to expand
                            _this.next('ul').slideDown(plugin.settings.sideNav.subOpenSpeed, plugin.settings.sideNav.animationEasing);
                            _this.next('ul').addClass('show');
                            _this.addClass('expand').removeClass('notExpand');
                            navLi.removeClass('highlight-menu');
                            _this.closest('li.hasSub').addClass('highlight-menu');
                            _this.find('.sideNav-arrow').removeClass('rotate0').addClass('rotate90'); 
                        } else {
                            //close all expanded subs
                            navexpand = nav.find('li.hasSub .expand');
                            navexpand.next('ul').removeClass('show');
                            navexpand.next('ul').slideUp(plugin.settings.sideNav.subCloseSpeed, plugin.settings.sideNav.animationEasing); 
                            navexpand.addClass('notExpand').removeClass('expand');            
                            navexpand.find('.sideNav-arrow').removeClass('rotateM180').addClass('rotate0');            
                            //expand ul and change class to expand
                            _this.next('ul').slideDown(plugin.settings.sideNav.subOpenSpeed, plugin.settings.sideNav.animationEasing);
                            _this.next('ul').addClass('show');
                            _this.addClass('expand').removeClass('notExpand');
                            navLi.removeClass('highlight-menu');
                            _this.closest('li.hasSub').addClass('highlight-menu');
                            _this.find('.sideNav-arrow').removeClass('rotate0').addClass('rotate90'); 
                        }
                    }                                    
                } else if (_this.hasClass('expand')) {
                    e.preventDefault();
                    //collapse ul and change class to notExpand
                    _this.next('ul').removeClass('show');
                    _this.next('ul').slideUp(plugin.settings.sideNav.subCloseSpeed, plugin.settings.sideNav.animationEasing);
                    _this.addClass('notExpand').removeClass('expand');
                    _this.find('.sideNav-arrow').removeClass('rotate90').addClass('rotate0');
                    navLi.removeClass('highlight-menu');
                }
            });
        }

        plugin.sideBarNavToggle = function () {
            var nav = $('.side-nav');
            var navLi = nav.find('li');
            if (Modernizr.touch) {
                navLi.click(function(){
                    _this = $(this);
                    if(_this.hasClass('hover-li')) {
                        _this.removeClass('hover-li');
                    } else {
                        navLi.each(function(index){
                            $(this).removeClass('hover-li');
                        });
                        _this.addClass('hover-li'); 
                    }
                });
            } else {
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
            
        }

        //set current nav element
        plugin.setCurrentNav = function () {
            var domain = document.domain;
            var navig = $('.side-nav> .nav');
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
                            _this.find('.sideNav-arrow').removeClass('rotate0').addClass('rotate90');
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
                panelsid = 'dyn_' + index;
                self.attr('id', panelsid);
                
                //inject all controls per class in right side
                if(self.hasClass('toggle') || self.hasClass('panelClose') || self.hasClass('panelRefresh')) {
                    if(!panelHeading.find('.panel-controls-right').length) {
                        panelHeading.append('<div class="panel-controls panel-controls-right">');
                        panelControlsRight = panelHeading.find('.panel-controls-right');
                    } else {
                        panelControlsRight = panelHeading.find('.panel-controls-right');
                    }
                }

                //refresh
                if(self.hasClass('panelRefresh') && !panelControlsRight.find('a.panel-refresh').length) {
                    panelControlsRight.append('<a href="#" class="panel-refresh"><i class="'+ plugin.settings.panels.refreshIcon+'"></i></a>');
                }
                //Toggle
                if(self.hasClass('toggle') && !panelControlsRight.find('a.toggle').length) {
                    if (self.hasClass('panel-closed')) {
                        panelControlsRight.append('<a href="#" class="toggle panel-maximize"><i class="'+ plugin.settings.panels.collapseIcon+'"></i></a>');
                        self.find('.panel-body').slideToggle(0);
                        self.find('.panel-footer').slideToggle(0);
                        self.find('.panel-heading').toggleClass('min');
                    } else {
                        panelControlsRight.append('<a href="#" class="toggle panel-minimize"><i class="'+ plugin.settings.panels.toggleIcon+'"></i></a>');
                    }
                }
                //close
                if(self.hasClass('panelClose') && !panelControlsRight.find('a.panel-close').length) {
                    panelControlsRight.append('<a href="#" class="panel-close"><i class="'+ plugin.settings.panels.closeIcon+'"></i></a>');
                }

                //show controls on this panel every time.
                if (self.hasClass('showControls')) {
                    self.find('.panel-controls-left').addClass('panel-controls-show');
                    self.find('.panel-controls-right').addClass('panel-controls-show');
                } else if (plugin.settings.panels.showControlsOnHover) {
                    self.find('.panel-controls-left').addClass('panel-controls-hide');
                    self.find('.panel-controls-right').addClass('panel-controls-hide');
                }

                //vertical scroll
                var scroll = $(this).find('.scroll');
                var scrHeight = scroll.data('height');
                scroll.slimScroll({
                    position: "right",
                    height: '100%',
                    distance: '0',
                    railVisible: false,
                    size: plugin.settings.customScroll.size,                    
                    color: '#777',                    
                    railOpacity: plugin.settings.customScroll.opacity,
                    railColor: '#fff',
                    height: scrHeight
                });

                //horizontal scroll
                var hScroll = $(this).find('.scroll-horizontal');          
                hScroll.slimScrollHorizontal({
                    size: plugin.settings.customScroll.size,                    
                    color: '#777',                   
                    railOpacity: plugin.settings.customScroll.opacity,
                    railColor: '#fff',
                    width: '100%',
                    positon: 'bottom',
                    start: 'left',
                    railVisible: true,
                    //distance: "3px",
                });

                
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
                        color : plugin.settings.panels.loaderColor,
                       /* sizeW : '32',
                        sizeH : '32'*/
                    });
                    setTimeout(function() {
                        self.closest('.panel').waitMe("hide");
                    }, 3000);
                }

            });
            
            //sort options
            if (!$('.page-content-inner').hasClass('notSortable')) {
                
                var sortItem = $('.page-content-inner').find(".sortable-layout");
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
                    iframeFix: false,   
                    revert: true,                       
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
                        className: "modal-style2",
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

        //waitme plugin
        plugin.waitMe = function () {
            (function(e){e.fn.waitMe=function(t){return this.each(function(){function m(){n.removeClass(r+"_container");n.find("."+r).remove()}var n=e(this),r="waitMe",i,s,o,u=false,a="background-color",f="",l="",c,h,p,d;var v={init:function(){function m(){c=e('<div class="'+r+'"></div>');var t="width:"+d.sizeW+";height:"+d.sizeH;switch(d.effect){case"none":o=0;break;case"bounce":o=3;h="";p=t;break;case"rotateplane":o=1;h="";p=t;break;case"stretch":o=5;h="";p=t;break;case"orbit":o=2;h=t;p="";break;case"roundBounce":o=12;h=t;p="";break;case"win8":o=5;u=true;h=t;p=t;break;case"win8_linear":o=5;u=true;h=t;p="";break;case"ios":o=12;h=t;p="";break;case"facebook":o=3;h="";p=t;break;case"rotation":o=1;a="border-color";h="";p=t;break;case"timer":o=2;f="border-color:"+d.color;h=t;p="";break;case"pulse":o=1;a="border-color";h="";p=t;break;case"progressBar":o=1;h="";p=t;break;case"bouncePulse":o=3;h="";p=t;break}if(d.sizeW==""&&d.sizeH==""){p="";h=""}if(h!=""&&f!=""){f=";"+f}if(o>0){s=e('<div class="'+r+"_progress "+d.effect+'"></div>');for(var v=1;v<=o;++v){if(u){l+='<div class="'+r+"_progress_elem"+v+'" style="'+p+'"><div style="'+a+":"+d.color+'"></div></div>'}else{l+='<div class="'+r+"_progress_elem"+v+'" style="'+a+":"+d.color+";"+p+'"></div>'}}s=e('<div class="'+r+"_progress "+d.effect+'" style="'+h+f+'">'+l+"</div>")}if(d.text){i=e('<div class="'+r+'_text" style="color:'+d.color+'">'+d.text+"</div>")}if(n.find("> ."+r)){n.find("> ."+r).remove()}waitMeDivObj=e('<div class="'+r+'_content"></div>');waitMeDivObj.append(s,i);c.append(waitMeDivObj);if(n[0].tagName=="HTML"){n=e("body")}n.addClass(r+"_container").append(c);n.find("> ."+r).css({background:d.bg});n.find("."+r+"_content").css({marginTop:-n.find("."+r+"_content").outerHeight()/2+"px"})}var v={effect:"bounce",text:"",bg:"rgba(255,255,255,0.7)",color:"#000",sizeW:"",sizeH:""};d=e.extend(v,t);m()},hide:function(){m()}};if(v[t]){return v[t].apply(this,Array.prototype.slice.call(arguments,1))}else if(typeof t==="object"||!t){return v.init.apply(this,arguments)}e.event.special.destroyed={remove:function(e){if(e.handler){e.handler()}}}})}})(jQuery);
        }

        //back to top
        plugin.backToTop = function () {
            $(window).scroll(function(){
                if($(window).scrollTop() > 200){
                    $("#back-to-top").fadeIn(200);
                } else{
                    $("#back-to-top").fadeOut(200);
                }
            });
            
            $('#back-to-top, .back-to-top').click(function() {
                $('html, body').animate({ scrollTop:0 }, '800');
                return false;
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

        //accordion
        plugin.accordions = function() {
            var acc = $('.accordion'); //get all accordions
            acc.collapse();//activate it

            //function to put icons
            accPutIcon = function  () {
                acc.each(function(index) {
                   accExp = $(this).find('.panel-collapse.in');
                   accExp.prev('.panel-heading').addClass('content-in').find('a.accordion-toggle').append('<i class="' + plugin.settings.accordion.toggleIcon + '"></i>');
                   accNor = $(this).find('.panel-collapse').not('.panel-collapse.in');
                   accNor.prev('.panel-heading').find('a.accordion-toggle').append('<i class="' + plugin.settings.accordion.collapseIcon + '"></i>');
                });
            }

            //function to update icons
            accUpdIcon = function  () {
                acc.each(function(index) {
                   accExp = $(this).find('.panel-collapse.in');
                   accExp.prev('.panel-heading').find('i').remove();
                   accExp.prev('.panel-heading').addClass('content-in').find('a.accordion-toggle').append('<i class="' + plugin.settings.accordion.toggleIcon + '"></i>');

                   accNor = $(this).find('.panel-collapse').not('.panel-collapse.in');
                   accNor.prev('.panel-heading').find('i').remove();
                   accNor.prev('.panel-heading').removeClass('content-in').find('a.accordion-toggle').append('<i class="' + plugin.settings.accordion.collapseIcon + '"></i>');
                });
            }

            accPutIcon();

            $('.accordion').on('shown.bs.collapse', function () {
                accUpdIcon();
            }).on('hidden.bs.collapse', function () {
                accUpdIcon();
            })
    
        }

        //Update breadcrumbs
        plugin.breadCrumbs = function () {
            var breadcrumb = $('#crumb');
            var homeIcon = '<i class="'+plugin.settings.breadcrumbs.homeicon+'"></i>';
            
            var navel = $('side-Nav>li a.active');
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

            //excludes dropdown with class if you want to have forms in header and etc.
            $('.dropdown-form').click(function (e){                   
                e.stopPropagation();
            });
        }

        //expand all nav ul element
        plugin.expandSideBarNav = function () {
            nav = $('.side-Nav');
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
            nav = $('.side-nav');
            nava = nav.find('a.expand');
            navactiv = nav.find('a.active-state');
            
            if (!state) {
                nava.next('ul').slideUp(plugin.settings.sideNav.subOpenSpeed, plugin.settings.sideNav.animationEasing);
                nava.next('ul').removeClass('show');
                setTimeout(function() {
                    nava.next('ul').removeAttr('style');
                }, plugin.settings.sideNav.subCloseSpeed);    

                nava.addClass('notExpand').removeClass('expand');
                if(plugin.settings.sideNav.showArrows) {
                    nava.find('.sideNav-arrow').removeClass('rotateM180').addClass('rotate0');
                }    
            } else {
                navactiv.next('ul').slideDown(plugin.settings.sideNav.subOpenSpeed, plugin.settings.sideNav.animationEasing).addClass('show');
                navactiv.addClass('expand').removeClass('notExpand');
                if(plugin.settings.sideNav.showArrows) {
                    nava.find('.sideNav-arrow').removeClass('rotateM0').addClass('rotateM180');
                }        
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

        //waitme plugin
        plugin.waitMe = function () {
            /* waitMe - 12.05.14 */
            (function(e){e.fn.waitMe=function(g){return this.each(function(){var f=e(this),r,l,b,m=!1,n="background-color",h="",p,d,c,a,q={init:function(){a=e.extend({effect:"bounce",text:"",bg:"rgba(255,255,255,0.7)",color:"#000",sizeW:"",sizeH:""},g);p=e('<div class="waitMe"></div>');switch(a.effect){case "none":b=0;break;case "bounce":b=3;d="";c="width:"+a.sizeW+";height:"+a.sizeH;break;case "rotateplane":b=1;d="";c="width:"+a.sizeW+";height:"+a.sizeH;break;case "stretch":b=5;d="";c="width:"+a.sizeW+";height:"+
            a.sizeH;break;case "orbit":b=2;d="width:"+a.sizeW+";height:"+a.sizeH;c="";break;case "roundBounce":b=12;d="width:"+a.sizeW+";height:"+a.sizeH;c="";break;case "win8":b=5;m=!0;d="width:"+a.sizeW+";height:"+a.sizeH;c="width:"+a.sizeW+";height:"+a.sizeH;break;case "win8_linear":b=5;m=!0;d="width:"+a.sizeW+";height:"+a.sizeH;c="";break;case "ios":b=12;d="width:"+a.sizeW+";height:"+a.sizeH;c="";break;case "facebook":b=3;d="";c="width:"+a.sizeW+";height:"+a.sizeH;break;case "rotation":b=1,n="border-color",
            d="",c="width:"+a.sizeW+";height:"+a.sizeH}""==a.sizeW&&""==a.sizeH&&(d=c="");if(0<b){l=e('<div class="waitMe_progress '+a.effect+'"></div>');for(var k=1;k<=b;++k)h=m?h+('<div class="waitMe_progress_elem'+k+'" style="'+c+'"><div style="'+n+":"+a.color+'"></div></div>'):h+('<div class="waitMe_progress_elem'+k+'" style="'+n+":"+a.color+";"+c+'"></div>');l=e('<div class="waitMe_progress '+a.effect+'" style="'+d+'">'+h+"</div>")}a.text&&(r=e('<div class="waitMe_text" style="color:'+a.color+'">'+a.text+
            "</div>"));f.find("> .waitMe")&&f.find("> .waitMe").remove();waitMeDivObj=e('<div class="waitMe_content"></div>');waitMeDivObj.append(l,r);p.append(waitMeDivObj);"HTML"==f[0].tagName&&(f=e("body"));f.addClass("waitMe_container").append(p);f.find("> .waitMe").css({background:a.bg});f.find(".waitMe_content").css({marginTop:-f.find(".waitMe_content").outerHeight()/2+"px"})},hide:function(){f.removeClass("waitMe_container");f.find(".waitMe").remove()}};if(q[g])return q[g].apply(this,Array.prototype.slice.call(arguments,
            1));if("object"===typeof g||!g)return q.init.apply(this,arguments);e.event.special.destroyed={remove:function(a){a.handler&&a.handler()}}})}})(jQuery);
        }

        //animated progressbars
        plugin.animatedProgressBars = function () {
            /*! bootstrap-progressbar v0.8.3 | Copyright (c) 2012-2014 Stephan Groß | MIT license | http://www.minddust.com */
            !function(t){"use strict";var e=function(n,a){this.$element=t(n),this.options=t.extend({},e.defaults,a)};e.defaults={transition_delay:300,refresh_speed:50,display_text:"none",use_percentage:!0,percent_format:function(t){return t+"%"},amount_format:function(t,e){return t+" / "+e},update:t.noop,done:t.noop,fail:t.noop},e.prototype.transition=function(){var n=this.$element,a=n.parent(),s=this.$back_text,r=this.$front_text,i=this.options,o=parseInt(n.attr("data-transitiongoal")),h=parseInt(n.attr("aria-valuemin"))||0,d=parseInt(n.attr("aria-valuemax"))||100,f=a.hasClass("vertical"),p=i.update&&"function"==typeof i.update?i.update:e.defaults.update,u=i.done&&"function"==typeof i.done?i.done:e.defaults.done,c=i.fail&&"function"==typeof i.fail?i.fail:e.defaults.fail;if(isNaN(o))return void c("data-transitiongoal not set");var l=Math.round(100*(o-h)/(d-h));if("center"===i.display_text&&!s&&!r){this.$back_text=s=t("<span>").addClass("progressbar-back-text").prependTo(a),this.$front_text=r=t("<span>").addClass("progressbar-front-text").prependTo(n);var g;f?(g=a.css("height"),s.css({height:g,"line-height":g}),r.css({height:g,"line-height":g}),t(window).resize(function(){g=a.css("height"),s.css({height:g,"line-height":g}),r.css({height:g,"line-height":g})})):(g=a.css("width"),r.css({width:g}),t(window).resize(function(){g=a.css("width"),r.css({width:g})}))}setTimeout(function(){var t,e,c,g,_;f?n.css("height",l+"%"):n.css("width",l+"%");var x=setInterval(function(){f?(c=n.height(),g=a.height()):(c=n.width(),g=a.width()),t=Math.round(100*c/g),e=Math.round(h+c/g*(d-h)),t>=l&&(t=l,e=o,u(n),clearInterval(x)),"none"!==i.display_text&&(_=i.use_percentage?i.percent_format(t):i.amount_format(e,d,h),"fill"===i.display_text?n.text(_):"center"===i.display_text&&(s.text(_),r.text(_))),n.attr("aria-valuenow",e),p(t,n)},i.refresh_speed)},i.transition_delay)};var n=t.fn.progressbar;t.fn.progressbar=function(n){return this.each(function(){var a=t(this),s=a.data("bs.progressbar"),r="object"==typeof n&&n;s||a.data("bs.progressbar",s=new e(this,r)),s.transition()})},t.fn.progressbar.Constructor=e,t.fn.progressbar.noConflict=function(){return t.fn.progressbar=n,this}}(window.jQuery);
        }

        //browser selector
        plugin.browserSelector = function () {
            function css_browser_selector(u){var ua=u.toLowerCase(),is=function(t){return ua.indexOf(t)>-1},g='gecko',w='webkit',s='safari',o='opera',m='mobile',h=document.documentElement,b=[(!(/opera|webtv/i.test(ua))&&/msie\s(\d)/.test(ua))?('ie ie'+RegExp.$1):is('firefox/2')?g+' ff2':is('firefox/3.5')?g+' ff3 ff3_5':is('firefox/3.6')?g+' ff3 ff3_6':is('firefox/3')?g+' ff3':is('gecko/')?g:is('opera')?o+(/version\/(\d+)/.test(ua)?' '+o+RegExp.$1:(/opera(\s|\/)(\d+)/.test(ua)?' '+o+RegExp.$2:'')):is('konqueror')?'konqueror':is('blackberry')?m+' blackberry':is('android')?m+' android':is('chrome')?w+' chrome':is('iron')?w+' iron':is('applewebkit/')?w+' '+s+(/version\/(\d+)/.test(ua)?' '+s+RegExp.$1:''):is('mozilla/')?g:'',is('j2me')?m+' j2me':is('iphone')?m+' iphone':is('ipod')?m+' ipod':is('ipad')?m+' ipad':is('mac')?'mac':is('darwin')?'mac':is('webtv')?'webtv':is('win')?'win'+(is('windows nt 6.0')?' vista':''):is('freebsd')?'freebsd':(is('x11')||is('linux'))?'linux':'','js']; c = b.join(' '); h.className += ' '+c; return c;}; css_browser_selector(navigator.userAgent);
        }

        //first impression lib
        plugin.firstImpression = function () {
            window.firstImpression=function(c,f){var a,b,d,e;a=function(j,k,i){var h,g,l;if(arguments.length>1&&String(k)!=="[object Object]"){i=i||{};if(k===null||k===undefined){i.expires=-1}if(typeof i.expires==="number"){h=i.expires;l=i.expires=new Date();l.setTime(l.getTime()+h*24*60*60*1000)}i.path="/";return(document.cookie=[encodeURIComponent(j),"=",encodeURIComponent(k),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join(""))}g=new RegExp("(?:^|; )"+encodeURIComponent(j)+"=([^;]*)").exec(document.cookie);return g?decodeURIComponent(g[1]):null};if(c===undefined){c="_firstImpression"}if(f===undefined){f=730}if(c===null){a("_firstImpression",null);return}if(f===null){a(c,null);return}b=function(){return a(c)};d=function(){a(c,true,{expires:f})};e=function(){var g=b();if(!g){d()}return !g};return e()};
        }

        //Equal height for some columns
        plugin.matchHeight = function () {
            (function(c){var f=-1,g=-1,q=function(a){var b=null,d=[];c(a).each(function(){var a=c(this),l=a.offset().top-k(a.css("margin-top")),m=0<d.length?d[d.length-1]:null;null===m?d.push(a):1>=Math.floor(Math.abs(b-l))?d[d.length-1]=m.add(a):d.push(a);b=l});return d},k=function(a){return parseFloat(a)||0},n=function(a){var b={byRow:!0,remove:!1,property:"height"};"object"===typeof a&&(b=c.extend(b,a));"boolean"===typeof a&&(b.byRow=a);"remove"===a&&(b.remove=!0);return b},b=c.fn.matchHeight=function(a){a=
            n(a);if(a.remove){var e=this;this.css(a.property,"");c.each(b._groups,function(a,b){b.elements=b.elements.not(e)});return this}if(1>=this.length)return this;b._groups.push({elements:this,options:a});b._apply(this,a);return this};b._groups=[];b._throttle=80;b._maintainScroll=!1;b._beforeUpdate=null;b._afterUpdate=null;b._apply=function(a,e){var d=n(e),h=c(a),l=[h],m=c(window).scrollTop(),g=c("html").outerHeight(!0),f=h.parents().filter(":hidden");f.css("display","block");d.byRow&&(h.each(function(){var a=
            c(this),b="inline-block"===a.css("display")?"inline-block":"block";a.data("style-cache",a.attr("style"));a.css({display:b,"padding-top":"0","padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px"})}),l=q(h),h.each(function(){var a=c(this);a.attr("style",a.data("style-cache")||"").css("height","")}));c.each(l,function(a,b){var e=c(b),f=0;d.byRow&&1>=e.length||(e.each(function(){var a=c(this),b={display:"inline-block"===a.css("display")?
            "inline-block":"block"};b[d.property]="";a.css(b);a.outerHeight(!1)>f&&(f=a.outerHeight(!1));a.css("display","")}),e.each(function(){var a=c(this),b=0;"border-box"!==a.css("box-sizing")&&(b+=k(a.css("border-top-width"))+k(a.css("border-bottom-width")),b+=k(a.css("padding-top"))+k(a.css("padding-bottom")));a.css(d.property,f-b)}))});f.css("display","");b._maintainScroll&&c(window).scrollTop(m/g*c("html").outerHeight(!0));return this};b._applyDataApi=function(){var a={};c("[data-match-height], [data-mh]").each(function(){var b=
            c(this),d=b.attr("data-match-height")||b.attr("data-mh");a[d]=d in a?a[d].add(b):b});c.each(a,function(){this.matchHeight(!0)})};var p=function(a){b._beforeUpdate&&b._beforeUpdate(a,b._groups);c.each(b._groups,function(){b._apply(this.elements,this.options)});b._afterUpdate&&b._afterUpdate(a,b._groups)};b._update=function(a,e){if(e&&"resize"===e.type){var d=c(window).width();if(d===f)return;f=d}a?-1===g&&(g=setTimeout(function(){p(e);g=-1},b._throttle)):p(e)};c(b._applyDataApi);c(window).bind("load",
            function(a){b._update(!1,a)});c(window).bind("resize orientationchange",function(a){b._update(!0,a)})})(jQuery);
        }

        //Make two or more columns with equal height
        plugin.equalHeight = function () {
            plugin.matchHeight();
        }

        //quick search pluign
        plugin.quickSearch = function () {

            //quick search on chat users
            if ($('.chat-search input').length) {
                $('.chat-search input').val('').quicksearch('.user-list .list-group-item', {'removeDiacritics': true,});
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

        //chat app
        plugin.chatApp = function () {
            var userList = $('ul.user-list').not('.chat-messages');
            var users = userList.find('a');
            var chatback = $('.chat-back>a');
            var rbScroll = $('#right-sidebar .sidebar-scrollarea');
            var chatForm = $('#chat-write');

            users.click(function(){
                scrollarea = $(this).next('.chat-messages').find('ul');
                //open chat messages
                $(this).next('.chat-messages').addClass('open');
                //addscrollbar to scrollarea
                plugin.addScrollTo(scrollarea,'right',plugin.settings.customScroll.rscolor);
                if (plugin.settings.rightSidebar.fixed) {
                    //deactivate rightsidebar scroll
                    plugin.removeScrollTo(rbScroll);
                }
                //open chat type
                chatForm.addClass('open');
            });

            chatback.click(function(){
                scrollarr = $(this).closest('ul');
                //close chat messages
                $(this).closest('.chat-messages').removeClass('open');
                //remove scrollbar from scrollarea
                plugin.removeScrollTo(scrollarr);
                if (plugin.settings.rightSidebar.fixed) {
                   //add scroll to sidebar
                    plugin.addScrollTo(rbScroll, 'right', plugin.settings.customScroll.rscolor);
                }                
                //hide chat type
                chatForm.removeClass('open');
            });

        }

        plugin.removeDefaultClassess = function () {
            var breakpoint = plugin.getBreakPoint();
            var leftsidebar = $('#sidebar');
            var rightsidebar = $('#right-sidebar');
            var logo = $('#header>.navbar-brand');
            var content = $('.page-content');
            
            content.addClass('sidebar-page');
            content.addClass('right-sidebar-page');
            leftsidebar.removeClass('hidden-md hidden-sm hidden-xs');
            rightsidebar.removeClass('hidden-md hidden-sm hidden-xs');
            logo.removeClass('hide-logo hidden-xs hidden-sm');
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
                    exit: 1024
                },{
                    label: 'laptop',
                    enter: 1025,
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
                    plugin.removeDefaultClassess();
                    plugin.showRightSidebar();
                    store.set('rightSidebarToggle', 0);
                    $('#toggle-right-sidebar').removeClass('hide-right-sidebar');
                },
                exit: function() {

                }
            });
            jRes.addFunc({
                breakpoint: 'laptop',
                enter: function() {
                    plugin.removeDefaultClassess();
                    plugin.hideRightSidebar();
                },
                exit: function() {
                   
                }
            });
            jRes.addFunc({
                breakpoint: 'tablet',
                enter: function() {
                    plugin.removeDefaultClassess();
                    plugin.toggleLeftSidebar();
                    plugin.sideBarNavToggle();
                    plugin.collapseSideBarNav(false); 
                    plugin.hideRightSidebar();   
                },
                exit: function() {
                    plugin.showLeftSidebar();
                }
            });
            jRes.addFunc({
                breakpoint: 'phone',
                enter: function() {
                    plugin.removeDefaultClassess(); 
                    plugin.dropdownMenuFix();                                    
                    plugin.collapseEmailAppSidebar();
                    $('#email-content').addClass('email-content-offCanvas');
                    plugin.hideRightSidebar();
                    plugin.hideLeftSidebar();
                },
                exit: function() {
                    plugin.showLeftSidebar();
                    $('#email-content').removeClass('email-content-offCanvas');
                    plugin.expandEmailAppSidebar();
                }
            });

            return jRes;
        }

        // fire up the plugin!
        // call the "constructor" method
        plugin.init();

    }

    // add the plugin to the jQuery.fn object
    $.fn.dynamic = function(options) {

        // iterate through the DOM elements we are attaching the plugin to
        return this.each(function() {

            // if plugin has not already been attached to the element
            if (undefined == $(this).data('dynamic')) {

                // create a new instance of the plugin
                // pass the DOM element and the user-provided options as arguments
                var plugin = new $.dynamic(this, options);

                // store a reference to the plugin object
                // element.data('dynAmic').publicMethod(arg1, arg2, ... argn) or
                // element.data('dynAmic').settings.propertyName
                $(this).data('dynamic', plugin);

            }

        });

    }

})(jQuery);