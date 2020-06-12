<!DOCTYPE html>
<!--[if IE 9]>         <html class="ie9 no-focus"> <![endif]-->
<!--[if gt IE 9]><!--> <html class="no-focus"> <!--<![endif]-->
<head>
<meta charset="utf-8">
<!--















THIS IS THE DEMO VERSION OF THE UI FRAMEWORK!
COMMENTS ARE REMOVED, CODE IS COMPRESSED AND CODE STYLE IS ALTERED!

IN THE FULL VERSION
    THE CODE IS INDENTED CORRECTLY AND WELL COMMENTED!
    YOU GET AN EXTENSIVE DOCUMENTATION TO GET YOU STARTED!
    YOU GET THE PHP VERSION (ALONG WITH THE HTML VERSION) WHICH HAS EXTRA FEATURES!
    YOU GET THE LessCSS FILES OF THE UI FRAMEWORK
    YOU GET GRUNT FILES FOR LIVE-COMPILING LessCSS FILES AND BUILDING YOU OWN UI FRAMEWORK
    YOU GET ACCESS TO FRAMEWORK UPDATES WITH NEW FEATURES AND PLUGIN UPGRADES
    I CAN PROVIDE SUPPORT IF YOU NEED IT :-)

THANK YOU FOR HAVING A LOOK!

** A LICENSE MUST BE ACQUIRED FOR LEGAL USE -> LINK: http://goo.gl/vNS3I **
** PLEASE SUPPORT ME IF YOU LIKE MY WORK, IT HELPS ME CONTINUE, THANK YOU VERY MUCH! **















-->
<title>OneUI - Admin Dashboard Template & UI Framework | DEMO</title>
<meta name="description" content="OneUI - Admin Dashboard Template & UI Framework created by pixelcave and published on Themeforest | This is the demo of OneUI! You need to purchase a license for legal use! | DEMO">
<meta name="author" content="pixelcave">
<meta name="robots" content="noindex, nofollow">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1.0">
<link rel="shortcut icon" href="assets/img/favicons/favicon.png">
<link rel="icon" type="image/png" href="assets/img/favicons/favicon-16x16.png" sizes="16x16">
<link rel="icon" type="image/png" href="assets/img/favicons/favicon-32x32.png" sizes="32x32">
<link rel="icon" type="image/png" href="assets/img/favicons/favicon-96x96.png" sizes="96x96">
<link rel="icon" type="image/png" href="assets/img/favicons/favicon-160x160.png" sizes="160x160">
<link rel="icon" type="image/png" href="assets/img/favicons/favicon-192x192.png" sizes="192x192">
<link rel="apple-touch-icon" sizes="57x57" href="assets/img/favicons/apple-touch-icon-57x57.png">
<link rel="apple-touch-icon" sizes="60x60" href="assets/img/favicons/apple-touch-icon-60x60.png">
<link rel="apple-touch-icon" sizes="72x72" href="assets/img/favicons/apple-touch-icon-72x72.png">
<link rel="apple-touch-icon" sizes="76x76" href="assets/img/favicons/apple-touch-icon-76x76.png">
<link rel="apple-touch-icon" sizes="114x114" href="assets/img/favicons/apple-touch-icon-114x114.png">
<link rel="apple-touch-icon" sizes="120x120" href="assets/img/favicons/apple-touch-icon-120x120.png">
<link rel="apple-touch-icon" sizes="144x144" href="assets/img/favicons/apple-touch-icon-144x144.png">
<link rel="apple-touch-icon" sizes="152x152" href="assets/img/favicons/apple-touch-icon-152x152.png">
<link rel="apple-touch-icon" sizes="180x180" href="assets/img/favicons/apple-touch-icon-180x180.png">
<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400italic,600,700%7COpen+Sans:300,400,400italic,600,700"><link rel="stylesheet" href="assets/css/bootstrap.min-1.3.css">
<link rel="stylesheet" id="css-main" href="assets/css/oneui.min-1.3.css">
</head>
<body><div id="page-container" class="sidebar-l sidebar-o side-scroll header-navbar-fixed">
<aside id="side-overlay">
<div id="side-overlay-scroll">
<div class="side-header side-content">
<button class="btn btn-default pull-right" type="button" data-toggle="layout" data-action="side_overlay_close">
<i class="fa fa-times"></i>
</button>
<span>
<img class="img-avatar img-avatar32" src="assets/img/avatars/avatar10.jpg" alt="">
<span class="font-w600 push-10-l">Adam Hall</span>
</span>
</div>
<div class="side-content remove-padding-t">
<div class="block pull-r-l border-t">
<ul class="nav nav-tabs nav-tabs-alt nav-justified" data-toggle="tabs">
<li class="active">
<a href="#tabs-side-overlay-overview"><i class="fa fa-fw fa-coffee"></i> Overview</a>
</li>
<li>
<a href="#tabs-side-overlay-sales"><i class="fa fa-fw fa-line-chart"></i> Sales</a>
</li>
</ul>
<div class="block-content tab-content">
<div class="tab-pane fade fade-right in active" id="tabs-side-overlay-overview">
<div class="block pull-r-l">
<div class="block-header bg-gray-lighter">
<ul class="block-options">
<li>
<button type="button" data-toggle="block-option" data-action="refresh_toggle" data-action-mode="demo"><i class="si si-refresh"></i></button>
</li>
<li>
<button type="button" data-toggle="block-option" data-action="content_toggle"></button>
</li>
</ul>
<h3 class="block-title">Recent Activity</h3>
</div>
<div class="block-content">
<ul class="list list-activity">
<li>
<i class="si si-wallet text-success"></i>
<div class="font-w600">New sale ($15)</div>
<div><a href="javascript:void(0)">Admin Template</a></div>
<div><small class="text-muted">3 min ago</small></div>
</li>
<li>
<i class="si si-pencil text-info"></i>
<div class="font-w600">You edited the file</div>
<div><a href="javascript:void(0)"><i class="fa fa-file-text-o"></i> Documentation.doc</a></div>
<div><small class="text-muted">15 min ago</small></div>
</li>
<li>
<i class="si si-close text-danger"></i>
<div class="font-w600">Project deleted</div>
<div><a href="javascript:void(0)">Line Icon Set</a></div>
<div><small class="text-muted">4 hours ago</small></div>
</li>
</ul>
</div>
</div>
<div class="block pull-r-l">
<div class="block-header bg-gray-lighter">
<ul class="block-options">
<li>
<button type="button" data-toggle="block-option" data-action="refresh_toggle" data-action-mode="demo"><i class="si si-refresh"></i></button>
</li>
<li>
<button type="button" data-toggle="block-option" data-action="content_toggle"></button>
</li>
</ul>
<h3 class="block-title">Online Friends</h3>
</div>
<div class="block-content block-content-full">
<ul class="nav-users remove-margin-b">
<li>
<a href="base_pages_profile.php">
<img class="img-avatar" src="assets/img/avatars/avatar6.jpg" alt="">
<i class="fa fa-circle text-success"></i> Tiffany Kim
<div class="font-w400 text-muted"><small>Copywriter</small></div>
</a>
</li>
<li>
<a href="base_pages_profile.php">
<img class="img-avatar" src="assets/img/avatars/avatar12.jpg" alt="">
<i class="fa fa-circle text-success"></i> Joshua Munoz
<div class="font-w400 text-muted"><small>Web Developer</small></div>
</a>
</li>
<li>
<a href="base_pages_profile.php">
<img class="img-avatar" src="assets/img/avatars/avatar2.jpg" alt="">
<i class="fa fa-circle text-success"></i> Amanda Powell
<div class="font-w400 text-muted"><small>Web Designer</small></div>
</a>
</li>
<li>
<a href="base_pages_profile.php">
<img class="img-avatar" src="assets/img/avatars/avatar5.jpg" alt="">
<i class="fa fa-circle text-warning"></i> Lisa Gordon
<div class="font-w400 text-muted"><small>Photographer</small></div>
</a>
</li>
<li>
<a href="base_pages_profile.php">
<img class="img-avatar" src="assets/img/avatars/avatar9.jpg" alt="">
<i class="fa fa-circle text-warning"></i> Adam Hall
<div class="font-w400 text-muted"><small>Graphic Designer</small></div>
</a>
</li>
</ul>
</div>
</div>
<div class="block pull-r-l">
<div class="block-header bg-gray-lighter">
<ul class="block-options">
<li>
<button type="button" data-toggle="block-option" data-action="content_toggle"></button>
</li>
</ul>
<h3 class="block-title">Quick Settings</h3>
</div>
<div class="block-content">
<form class="form-bordered" action="index.php" method="post" onsubmit="return false;">
<div class="form-group">
<div class="row">
<div class="col-xs-8">
<div class="font-s13 font-w600">Online Status</div>
<div class="font-s13 font-w400 text-muted">Show your status to all</div>
</div>
<div class="col-xs-4 text-right">
<label class="css-input switch switch-sm switch-primary push-10-t">
<input type="checkbox"><span></span>
</label>
</div>
</div>
</div>
<div class="form-group">
<div class="row">
<div class="col-xs-8">
<div class="font-s13 font-w600">Auto Updates</div>
<div class="font-s13 font-w400 text-muted">Keep up to date</div>
</div>
<div class="col-xs-4 text-right">
<label class="css-input switch switch-sm switch-primary push-10-t">
<input type="checkbox"><span></span>
</label>
</div>
</div>
</div>
<div class="form-group">
<div class="row">
<div class="col-xs-8">
<div class="font-s13 font-w600">Notifications</div>
<div class="font-s13 font-w400 text-muted">Do you need them?</div>
</div>
<div class="col-xs-4 text-right">
<label class="css-input switch switch-sm switch-primary push-10-t">
<input type="checkbox" checked><span></span>
</label>
</div>
</div>
</div>
<div class="form-group">
<div class="row">
<div class="col-xs-8">
<div class="font-s13 font-w600">API Access</div>
<div class="font-s13 font-w400 text-muted">Enable/Disable access</div>
</div>
<div class="col-xs-4 text-right">
<label class="css-input switch switch-sm switch-primary push-10-t">
<input type="checkbox" checked><span></span>
</label>
</div>
</div>
</div>
</form>
</div>
</div>
</div>
<div class="tab-pane fade fade-left" id="tabs-side-overlay-sales">
<div class="block pull-r-l">
<div class="block-content pull-t">
<div class="row items-push">
<div class="col-xs-6">
<div class="font-w700 text-gray-darker text-uppercase">Sales</div>
<a class="h3 font-w300 text-primary" href="javascript:void(0)">22030</a>
</div>
<div class="col-xs-6">
<div class="font-w700 text-gray-darker text-uppercase">Balance</div>
<a class="h3 font-w300 text-primary" href="javascript:void(0)">$ 4.589,00</a>
</div>
</div>
</div>
<div class="block-content block-content-full block-content-mini bg-gray-lighter">
<div class="row">
<div class="col-xs-6">
<span class="font-w600 font-s13 text-gray-darker text-uppercase">Today</span>
</div>
<div class="col-xs-6 text-right">
<span class="font-s13 text-muted">$996</span>
</div>
</div>
</div>
<div class="block-content">
<ul class="list list-activity pull-r-l">
<li>
<i class="fa fa-circle text-success"></i>
<div class="font-w600">New sale! + $249</div>
<div><small class="text-muted">3 min ago</small></div>
</li>
<li>
<i class="fa fa-circle text-success"></i>
<div class="font-w600">New sale! + $129</div>
<div><small class="text-muted">50 min ago</small></div>
</li>
<li>
<i class="fa fa-circle text-success"></i>
<div class="font-w600">New sale! + $119</div>
<div><small class="text-muted">2 hours ago</small></div>
</li>
<li>
<i class="fa fa-circle text-success"></i>
<div class="font-w600">New sale! + $499</div>
<div><small class="text-muted">3 hours ago</small></div>
</li>
</ul>
</div>
<div class="block-content block-content-full block-content-mini bg-gray-lighter">
<div class="row">
<div class="col-xs-6">
<span class="font-w600 font-s13 text-gray-darker text-uppercase">Yesterday</span>
</div>
<div class="col-xs-6 text-right">
<span class="font-s13 text-muted">$765</span>
</div>
</div>
</div>
<div class="block-content">
<ul class="list list-activity pull-r-l">
<li>
<i class="fa fa-circle text-success"></i>
<div class="font-w600">New sale! + $249</div>
<div><small class="text-muted">26 hours ago</small></div>
</li>
<li>
<i class="fa fa-circle text-danger"></i>
<div class="font-w600">Product Purchase - $50</div>
<div><small class="text-muted">28 hours ago</small></div>
</li>
<li>
<i class="fa fa-circle text-success"></i>
<div class="font-w600">New sale! + $119</div>
<div><small class="text-muted">29 hours ago</small></div>
</li>
<li>
<i class="fa fa-circle text-danger"></i>
<div class="font-w600">Paypal Withdrawal - $300</div>
<div><small class="text-muted">37 hours ago</small></div>
</li>
<li>
<i class="fa fa-circle text-success"></i>
<div class="font-w600">New sale! + $129</div>
<div><small class="text-muted">39 hours ago</small></div>
</li>
<li>
<i class="fa fa-circle text-success"></i>
<div class="font-w600">New sale! + $119</div>
<div><small class="text-muted">45 hours ago</small></div>
</li>
<li>
<i class="fa fa-circle text-success"></i>
<div class="font-w600">New sale! + $499</div>
<div><small class="text-muted">46 hours ago</small></div>
</li>
</ul>
</div>
<div class="text-center">
<small><a href="javascript:void(0)">Load More..</a></small>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</aside><nav id="sidebar">
<div id="sidebar-scroll">
<div class="sidebar-content">
<div class="side-header side-content bg-white-op">
<button class="btn btn-link text-gray pull-right hidden-md hidden-lg" type="button" data-toggle="layout" data-action="sidebar_close">
<i class="fa fa-times"></i>
</button>
<div class="btn-group pull-right">
<button class="btn btn-link text-gray dropdown-toggle" data-toggle="dropdown" type="button">
<i class="si si-drop"></i>
</button>
<ul class="dropdown-menu dropdown-menu-right font-s13 sidebar-mini-hide">
<li>
<a data-toggle="theme" data-theme="default" tabindex="-1" href="javascript:void(0)">
<i class="fa fa-circle text-default pull-right"></i> <span class="font-w600">Default</span>
</a>
</li>
<li>
<a data-toggle="theme" data-theme="assets/css/themes/amethyst.min-1.3.css" tabindex="-1" href="javascript:void(0)">
<i class="fa fa-circle text-amethyst pull-right"></i> <span class="font-w600">Amethyst</span>
</a>
</li>
<li>
<a data-toggle="theme" data-theme="assets/css/themes/city.min-1.3.css" tabindex="-1" href="javascript:void(0)">
<i class="fa fa-circle text-city pull-right"></i> <span class="font-w600">City</span>
</a>
</li>
<li>
<a data-toggle="theme" data-theme="assets/css/themes/flat.min-1.3.css" tabindex="-1" href="javascript:void(0)">
<i class="fa fa-circle text-flat pull-right"></i> <span class="font-w600">Flat</span>
</a>
</li>
<li>
<a data-toggle="theme" data-theme="assets/css/themes/modern.min-1.3.css" tabindex="-1" href="javascript:void(0)">
<i class="fa fa-circle text-modern pull-right"></i> <span class="font-w600">Modern</span>
</a>
</li>
<li>
<a data-toggle="theme" data-theme="assets/css/themes/smooth.min-1.3.css" tabindex="-1" href="javascript:void(0)">
<i class="fa fa-circle text-smooth pull-right"></i> <span class="font-w600">Smooth</span>
</a>
</li>
</ul>
</div>
<a class="h5 text-white" href="index.php">
<i class="fa fa-circle-o-notch text-primary"></i> <span class="h4 font-w600 sidebar-mini-hide">ne</span>
</a>
</div>
<div class="side-content">
<ul class="nav-main">
<li>
<a href="index.php"><i class="si si-speedometer"></i><span class="sidebar-mini-hide">Dashboard</span></a>
</li>
<li class="nav-main-heading"><span class="sidebar-mini-hide">User Interface</span></li>
<li>
<a class="nav-submenu" data-toggle="nav-submenu" href="#"><i class="si si-badge"></i><span class="sidebar-mini-hide">UI Elements</span></a>
<ul>
<li>
<a href="base_ui_widgets.php">Widgets</a>
</li>
<li>
<a class="nav-submenu" data-toggle="nav-submenu" href="#">Blocks</a>
<ul>
<li>
<a href="base_ui_blocks.php">Styles</a>
</li>
<li>
<a href="base_ui_blocks_api.php">Blocks API</a>
</li>
<li>
<a href="base_ui_blocks_draggable.php">Draggable</a>
</li>
</ul>
</li>
<li>
<a href="base_ui_grid.php">Grid</a>
</li>
<li>
<a href="base_ui_typography.php">Typography</a>
</li>
<li>
<a href="base_ui_icons.php">Icons</a>
</li>
<li>
<a href="base_ui_buttons.php">Buttons</a>
</li>
<li>
<a href="base_ui_activity.php">Activity</a>
</li>
<li>
<a href="base_ui_tabs.php">Tabs</a>
</li>
<li>
<a href="base_ui_tiles.php">Tiles</a>
</li>
<li>
<a href="base_ui_ribbons.php">Ribbons</a>
</li>
<li>
<a class="nav-submenu" data-toggle="nav-submenu" href="#">Chat</a>
<ul>
<li>
<a href="base_ui_chat_full.php">Full</a>
</li>
<li>
<a href="base_ui_chat_fixed.php">Fixed</a>
</li>
<li>
<a href="base_ui_chat_popup.php">Popup</a>
</li>
</ul>
</li>
<li>
<a href="base_ui_timeline.php">Timeline</a>
</li>
<li>
<a href="base_ui_navigation.php">Navigation</a>
</li>
<li>
<a href="base_ui_modals_tooltips.php">Modals &amp; Tooltips</a>
</li>
<li>
<a href="base_ui_color_themes.php">Color Themes</a>
</li>
</ul>
</li>
<li>
<a class="nav-submenu" data-toggle="nav-submenu" href="#"><i class="si si-grid"></i><span class="sidebar-mini-hide">Tables</span></a>
<ul>
<li>
<a href="base_tables_styles.php">Styles</a>
</li>
<li>
<a href="base_tables_responsive.php">Responsive</a>
</li>
<li>
<a href="base_tables_tools.php">Tools</a>
</li>
<li>
<a href="base_tables_pricing.php">Pricing</a>
</li>
<li>
<a href="base_tables_datatables.php">DataTables</a>
</li>
</ul>
</li>
<li class="open">
<a class="nav-submenu" data-toggle="nav-submenu" href="#"><i class="si si-note"></i><span class="sidebar-mini-hide">Forms</span></a>
<ul>
<li>
<a class="active" href="base_forms_premade.php">Pre-made</a>
</li>
<li>
<a href="base_forms_elements.php">Elements</a>
</li>
<li>
<a href="base_forms_pickers_more.php">Pickers &amp; More</a>
</li>
<li>
<a href="base_forms_editors.php">Text Editors</a>
</li>
<li>
<a href="base_forms_validation.php">Validation</a>
</li>
<li>
<a href="base_forms_wizard.php">Wizard</a>
</li>
</ul>
</li>
<li class="nav-main-heading"><span class="sidebar-mini-hide">Develop</span></li>
<li>
<a class="nav-submenu" data-toggle="nav-submenu" href="#"><i class="si si-wrench"></i><span class="sidebar-mini-hide">Components</span></a>
<ul>
<li>
<a href="base_comp_images.php">Images</a>
</li>
<li>
<a href="base_comp_charts.php">Charts</a>
</li>
<li>
<a href="base_comp_calendar.php">Calendar</a>
</li>
<li>
<a href="base_comp_sliders.php">Sliders</a>
</li>
<li>
<a href="base_comp_animations.php">Animations</a>
</li>
<li>
<a href="base_comp_scrolling.php">Scrolling</a>
</li>
<li>
<a href="base_comp_syntax_highlighting.php">Syntax Highlighting</a>
</li>
<li>
<a href="base_comp_rating.php">Rating</a>
</li>
<li>
<a href="base_comp_treeview.php">Tree View</a>
</li>
<li>
<a class="nav-submenu" data-toggle="nav-submenu" href="#">Maps</a>
<ul>
<li>
<a href="base_comp_maps.php">Google</a>
</li>
<li>
<a href="base_comp_maps_full.php">Google Full</a>
</li>
<li>
<a href="base_comp_maps_vector.php">Vector</a>
</li>
</ul>
</li>
<li>
<a class="nav-submenu" data-toggle="nav-submenu" href="#">Gallery</a>
<ul>
<li>
<a href="base_comp_gallery_simple.php">Simple</a>
</li>
<li>
<a href="base_comp_gallery_advanced.php">Advanced</a>
</li>
</ul>
</li>
</ul>
</li>
<li>
<a class="nav-submenu" data-toggle="nav-submenu" href="#"><i class="si si-magic-wand"></i><span class="sidebar-mini-hide">Layouts</span></a>
<ul>
<li>
<a href="base_layouts_api.php">Layout API</a>
</li>
<li>
<a href="base_layouts_default.php">Default</a>
</li>
<li>
<a href="base_layouts_default_flipped.php">Default Flipped</a>
</li>
<li>
<a href="base_layouts_header_static.php">Static Header</a>
</li>
<li>
<a href="base_layouts_sidebar_mini_hoverable.php">Mini Sidebar (Hoverable)</a>
</li>
<li>
<a href="base_layouts_side_overlay_hoverable.php">Side Overlay (Hoverable)</a>
</li>
<li>
<a href="base_layouts_side_overlay_open.php">Side Overlay (Open)</a>
</li>
<li>
<a href="base_layouts_side_native_scrolling.php">Side Native Scrolling</a>
</li>
<li>
<a href="base_layouts_sidebar_hidden.php">Hidden Sidebar</a>
</li>
</ul>
</li>
<li>
<a class="nav-submenu" data-toggle="nav-submenu" href="#"><i class="si si-puzzle"></i><span class="sidebar-mini-hide">Multi Level Menu</span></a>
<ul>
<li>
<a href="#">Link 1-1</a>
</li>
<li>
<a href="#">Link 1-2</a>
</li>
<li>
<a class="nav-submenu" data-toggle="nav-submenu" href="#">Sub Level 2</a>
<ul>
<li>
<a href="#">Link 2-1</a>
</li>
<li>
<a href="#">Link 2-2</a>
</li>
<li>
<a class="nav-submenu" data-toggle="nav-submenu" href="#">Sub Level 3</a>
<ul>
<li>
<a href="#">Link 3-1</a>
</li>
<li>
<a href="#">Link 3-2</a>
</li>
<li>
<a class="nav-submenu" data-toggle="nav-submenu" href="#">Sub Level 4</a>
<ul>
<li>
<a href="#">Link 4-1</a>
</li>
<li>
<a href="#">Link 4-2</a>
</li>
<li>
<a class="nav-submenu" data-toggle="nav-submenu" href="#">Sub Level 5</a>
<ul>
<li>
<a href="#">Link 5-1</a>
</li>
<li>
<a href="#">Link 5-2</a>
</li>
<li>
<a class="nav-submenu" data-toggle="nav-submenu" href="#">Sub Level 6</a>
<ul>
<li>
<a href="#">Link 6-1</a>
</li>
<li>
<a href="#">Link 6-2</a>
</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li class="nav-main-heading"><span class="sidebar-mini-hide">Pages</span></li>
<li>
<a class="nav-submenu" data-toggle="nav-submenu" href="#"><i class="si si-layers"></i><span class="sidebar-mini-hide">Generic</span></a>
<ul>
<li>
<a href="base_pages_blank.php">Blank</a>
</li>
<li>
<a href="base_pages_search.php">Search Results</a>
</li>
<li>
<a href="base_pages_invoice.php">Invoice</a>
</li>
<li>
<a href="base_pages_faq.php">FAQ</a>
</li>
<li>
<a href="base_pages_inbox.php">Inbox</a>
</li>
<li>
<a class="nav-submenu" data-toggle="nav-submenu" href="#">User Profile</a>
<ul>
<li>
<a href="base_pages_profile.php">Profile</a>
</li>
<li>
<a href="base_pages_profile_v2.php">Profile v2</a>
</li>
<li>
<a href="base_pages_profile_edit.php">Profile Edit</a>
</li>
</ul>
</li>
<li>
<a class="nav-submenu" data-toggle="nav-submenu" href="#">Forum</a>
<ul>
<li>
<a href="base_pages_forum_categories.php">Categories</a>
</li>
<li>
<a href="base_pages_forum_topics.php">Topics</a>
</li>
<li>
<a href="base_pages_forum_discussion.php">Discussion</a>
</li>
<li>
<a href="base_pages_forum_new_topic.php">New Topic</a>
</li>
</ul>
</li>
<li>
<a class="nav-submenu" data-toggle="nav-submenu" href="#">Authentication</a>
<ul>
<li>
<a href="base_pages_login.php">Log In</a>
</li>
<li>
<a href="base_pages_login_v2.php">Log In v2</a>
</li>
<li>
<a href="base_pages_register.php">Register</a>
</li>
<li>
<a href="base_pages_register_v2.php">Register v2</a>
</li>
<li>
<a href="base_pages_lock.php">Lock Screen</a>
</li>
<li>
<a href="base_pages_lock_v2.php">Lock Screen v2</a>
</li>
<li>
<a href="base_pages_reminder.php">Password Reminder</a>
</li>
<li>
<a href="base_pages_reminder_v2.php">Password Reminder v2</a>
</li>
</ul>
</li>
<li>
<a href="base_pages_coming_soon.php">Coming Soon</a>
</li>
<li>
<a href="base_pages_maintenance.php">Maintenance</a>
</li>
</ul>
</li>
<li>
<a class="nav-submenu" data-toggle="nav-submenu" href="#"><i class="si si-fire"></i><span class="sidebar-mini-hide">Error Pages</span></a>
<ul>
<li>
<a href="base_pages_400.php">400</a>
</li>
<li>
<a href="base_pages_401.php">401</a>
</li>
<li>
<a href="base_pages_403.php">403</a>
</li>
<li>
<a href="base_pages_404.php">404</a>
</li>
<li>
<a href="base_pages_500.php">500</a>
</li>
<li>
<a href="base_pages_503.php">503</a>
</li>
</ul>
</li>
<li class="nav-main-heading"><span class="sidebar-mini-hide">Apps</span></li>
<li>
<a href="frontend_home.php"><i class="si si-rocket"></i><span class="sidebar-mini-hide">Frontend</span></a>
</li>
</ul>
</div>
</div>
</div>
</nav><header id="header-navbar" class="content-mini content-mini-full">
<ul class="nav-header pull-right">
<li>
<div class="btn-group">
<button class="btn btn-default btn-image dropdown-toggle" data-toggle="dropdown" type="button">
<img src="assets/img/avatars/avatar10.jpg" alt="Avatar">
<span class="caret"></span>
</button>
<ul class="dropdown-menu dropdown-menu-right">
<li class="dropdown-header">Profile</li>
<li>
<a tabindex="-1" href="base_pages_inbox.php">
<i class="si si-envelope-open pull-right"></i>
<span class="badge badge-primary pull-right">3</span>Inbox
</a>
</li>
<li>
<a tabindex="-1" href="base_pages_profile.php">
<i class="si si-user pull-right"></i>
<span class="badge badge-success pull-right">1</span>Profile
</a>
</li>
<li>
<a tabindex="-1" href="javascript:void(0)">
<i class="si si-settings pull-right"></i>Settings
</a>
</li>
<li class="divider"></li>
<li class="dropdown-header">Actions</li>
<li>
<a tabindex="-1" href="base_pages_lock.php">
<i class="si si-lock pull-right"></i>Lock Account
</a>
</li>
<li>
<a tabindex="-1" href="base_pages_login.php">
<i class="si si-logout pull-right"></i>Log out
</a>
</li>
</ul>
</div>
</li>
<li>
<button class="btn btn-default" data-toggle="layout" data-action="side_overlay_toggle" type="button">
<i class="fa fa-tasks"></i>
</button>
</li>
</ul>
<ul class="nav-header pull-left">
<li class="hidden-md hidden-lg">
<button class="btn btn-default" data-toggle="layout" data-action="sidebar_toggle" type="button">
<i class="fa fa-navicon"></i>
</button>
</li>
<li class="hidden-xs hidden-sm">
<button class="btn btn-default" data-toggle="layout" data-action="sidebar_mini_toggle" type="button">
<i class="fa fa-ellipsis-v"></i>
</button>
</li>
<li>
<button class="btn btn-default pull-right" data-toggle="modal" data-target="#apps-modal" type="button">
<i class="si si-grid"></i>
</button>
</li>
<li class="visible-xs">
<button class="btn btn-default" data-toggle="class-toggle" data-target=".js-header-search" data-class="header-search-xs-visible" type="button">
<i class="fa fa-search"></i>
</button>
</li>
<li class="js-header-search header-search">
<form class="form-horizontal" action="base_pages_search.php" method="post">
<div class="form-material form-material-primary input-group remove-margin-t remove-margin-b">
<input class="form-control" type="text" id="base-material-text" name="base-material-text" placeholder="Search..">
<span class="input-group-addon"><i class="si si-magnifier"></i></span>
</div>
</form>
</li>
</ul>
</header><main id="main-container"><div class="content bg-gray-lighter">
<div class="row items-push">
<div class="col-sm-7">
<h1 class="page-heading">
Pre-Made Forms <small>Save time and get a head start with ready designed forms.</small>
</h1>
</div>
<div class="col-sm-5 text-right hidden-xs">
<ol class="breadcrumb push-10-t">
<li>Forms</li>
<li><a class="link-effect" href="">Pre-Made</a></li>
</ol>
</div>
</div>
</div>
<div class="content content-narrow">
<h2 class="content-heading">Lock Forms</h2>
<div class="row">
<div class="col-lg-4">
<div class="block block-themed">
<div class="block-header bg-danger">
<ul class="block-options">
<li>
<button type="button" data-toggle="block-option" data-action="refresh_toggle" data-action-mode="demo"><i class="si si-refresh"></i></button>
</li>
<li>
<button type="button" data-toggle="block-option" data-action="content_toggle"></button>
</li>
</ul>
<h3 class="block-title">Bootstrap</h3>
</div>
<div class="block-content">
<div class="text-center push-10-t push-30">
<img class="img-avatar img-avatar96" src="assets/img/avatars/avatar4.jpg" alt="">
</div>
<form class="form-horizontal" action="base_forms_premade.php" method="post" onsubmit="return false;">
<div class="form-group">
<label class="col-xs-12" for="lock1-password">Password</label>
<div class="col-xs-12">
<input class="form-control" type="password" id="lock1-password" name="lock1-password" placeholder="Enter your password..">
</div>
</div>
<div class="form-group">
<div class="col-xs-12">
<button class="btn btn-sm btn-danger" type="submit"><i class="fa fa-unlock push-5-r"></i> Unlock</button>
</div>
</div>
</form>
</div>
</div>
</div>
<div class="col-lg-4">
<div class="block block-themed">
<div class="block-header bg-danger">
<ul class="block-options">
<li>
<button type="button" data-toggle="block-option" data-action="refresh_toggle" data-action-mode="demo"><i class="si si-refresh"></i></button>
</li>
<li>
<button type="button" data-toggle="block-option" data-action="content_toggle"></button>
</li>
</ul>
<h3 class="block-title">Material</h3>
</div>
<div class="block-content">
<div class="text-center push-10-t push-30">
<img class="img-avatar img-avatar96" src="assets/img/avatars/avatar10.jpg" alt="">
</div>
<form class="form-horizontal push-10" action="base_forms_premade.php" method="post" onsubmit="return false;">
<div class="form-group">
<div class="col-xs-12">
<div class="form-material">
<input class="form-control" type="password" id="lock2-password" name="lock2-password" placeholder="Enter your password..">
<label for="lock2-password">Password</label>
</div>
</div>
</div>
<div class="form-group">
<div class="col-xs-12">
<button class="btn btn-sm btn-danger" type="submit"><i class="fa fa-unlock push-5-r"></i> Unlock</button>
</div>
</div>
</form>
</div>
</div>
</div>
<div class="col-lg-4">
<div class="block block-themed">
<div class="block-header bg-danger">
<ul class="block-options">
<li>
<button type="button" data-toggle="block-option" data-action="refresh_toggle" data-action-mode="demo"><i class="si si-refresh"></i></button>
</li>
<li>
<button type="button" data-toggle="block-option" data-action="content_toggle"></button>
</li>
</ul>
<h3 class="block-title">Material (floating)</h3>
</div>
<div class="block-content">
<div class="text-center push-10-t push-30">
<img class="img-avatar img-avatar96" src="assets/img/avatars/avatar1.jpg" alt="">
</div>
<form class="form-horizontal push-10" action="base_forms_premade.php" method="post" onsubmit="return false;">
<div class="form-group">
<div class="col-xs-12">
<div class="form-material floating">
<input class="form-control" type="password" id="lock3-password" name="lock3-password">
<label for="lock3-password">Password</label>
</div>
</div>
</div>
<div class="form-group">
<div class="col-xs-12">
<button class="btn btn-sm btn-danger" type="submit"><i class="fa fa-unlock push-5-r"></i> Unlock</button>
</div>
</div>
</form>
</div>
</div>
</div>
</div>
<h2 class="content-heading">Login Forms</h2>
<div class="row">
<div class="col-lg-4">
<div class="block block-themed">
<div class="block-header bg-primary">
<ul class="block-options">
<li>
<button type="button" data-toggle="block-option" data-action="refresh_toggle" data-action-mode="demo"><i class="si si-refresh"></i></button>
</li>
<li>
<button type="button" data-toggle="block-option" data-action="content_toggle"></button>
</li>
</ul>
<h3 class="block-title">Bootstrap</h3>
</div>
<div class="block-content">
<form class="form-horizontal push-5-t" action="base_forms_premade.php" method="post" onsubmit="return false;">
<div class="form-group">
<label class="col-xs-12" for="login1-username">Username</label>
<div class="col-xs-12">
<input class="form-control" type="text" id="login1-username" name="login1-username" placeholder="Enter your username..">
</div>
</div>
<div class="form-group">
<label class="col-xs-12" for="login1-password">Password</label>
<div class="col-xs-12">
<input class="form-control" type="password" id="login1-password" name="login1-password" placeholder="Enter your password..">
</div>
</div>
<div class="form-group">
<div class="col-xs-12">
<label class="css-input switch switch-sm switch-primary">
<input type="checkbox" id="login1-remember-me" name="login1-remember-me"><span></span> Remember Me?
</label>
</div>
</div>
<div class="form-group">
<div class="col-xs-12">
<button class="btn btn-sm btn-primary" type="submit"><i class="fa fa-arrow-right push-5-r"></i> Log in</button>
</div>
</div>
</form>
</div>
</div>
</div>
<div class="col-lg-4">
<div class="block block-themed">
<div class="block-header bg-primary">
<ul class="block-options">
<li>
<button type="button" data-toggle="block-option" data-action="refresh_toggle" data-action-mode="demo"><i class="si si-refresh"></i></button>
</li>
<li>
<button type="button" data-toggle="block-option" data-action="content_toggle"></button>
</li>
</ul>
<h3 class="block-title">Material</h3>
</div>
<div class="block-content">
<form class="form-horizontal push-10-t push-10" action="base_forms_premade.php" method="post" onsubmit="return false;">
<div class="form-group">
<div class="col-xs-12">
<div class="form-material">
<input class="form-control" type="text" id="login2-username" name="login2-username" placeholder="Enter your username..">
<label for="login2-username">Username</label>
</div>
</div>
</div>
<div class="form-group">
<div class="col-xs-12">
<div class="form-material">
<input class="form-control" type="password" id="login2-password" name="login2-password" placeholder="Enter your password..">
<label for="login2-password">Password</label>
</div>
</div>
</div>
<div class="form-group">
<div class="col-xs-12">
<label class="css-input switch switch-sm switch-info">
<input type="checkbox" id="login2-remember-me" name="login2-remember-me"><span></span> Remember Me?
</label>
</div>
</div>
<div class="form-group">
<div class="col-xs-12">
<button class="btn btn-sm btn-primary" type="submit"><i class="fa fa-arrow-right push-5-r"></i> Log in</button>
</div>
</div>
</form>
</div>
</div>
</div>
<div class="col-lg-4">
<div class="block block-themed">
<div class="block-header bg-primary">
<ul class="block-options">
<li>
<button type="button" data-toggle="block-option" data-action="refresh_toggle" data-action-mode="demo"><i class="si si-refresh"></i></button>
</li>
<li>
<button type="button" data-toggle="block-option" data-action="content_toggle"></button>
</li>
</ul>
<h3 class="block-title">Material (floating)</h3>
</div>
<div class="block-content">
<form class="form-horizontal push-10-t push-10" action="base_forms_premade.php" method="post" onsubmit="return false;">
<div class="form-group">
<div class="col-xs-12">
<div class="form-material floating">
<input class="form-control" type="text" id="login3-username" name="login3-username">
<label for="login3-username">Username</label>
</div>
</div>
</div>
<div class="form-group">
<div class="col-xs-12">
<div class="form-material floating">
<input class="form-control" type="password" id="login3-password" name="login3-password">
<label for="login3-password">Password</label>
</div>
</div>
</div>
<div class="form-group">
<div class="col-xs-12">
<label class="css-input switch switch-sm switch-primary">
<input type="checkbox" id="login3-remember-me" name="login3-remember-me"><span></span> Remember Me?
</label>
</div>
</div>
<div class="form-group">
<div class="col-xs-12">
<button class="btn btn-sm btn-primary" type="submit"><i class="fa fa-arrow-right push-5-r"></i> Log in</button>
</div>
</div>
</form>
</div>
</div>
</div>
</div>
<h2 class="content-heading">Register Forms</h2>
<div class="row">
<div class="col-lg-4">
<div class="block block-themed">
<div class="block-header bg-success">
<ul class="block-options">
<li>
<button type="button" data-toggle="block-option" data-action="refresh_toggle" data-action-mode="demo"><i class="si si-refresh"></i></button>
</li>
<li>
<button type="button" data-toggle="block-option" data-action="content_toggle"></button>
</li>
</ul>
<h3 class="block-title">Bootstrap</h3>
</div>
<div class="block-content">
<form class="form-horizontal push-5-t" action="base_forms_premade.php" method="post" onsubmit="return false;">
<div class="form-group">
<label class="col-xs-12" for="register1-username">Username</label>
<div class="col-xs-12">
<input class="form-control" type="text" id="register1-username" name="register1-username" placeholder="Enter your username..">
</div>
</div>
<div class="form-group">
<label class="col-xs-12" for="register1-email">Email</label>
<div class="col-xs-12">
<input class="form-control" type="email" id="register1-email" name="register1-email" placeholder="Enter your email..">
</div>
</div>
<div class="form-group">
<label class="col-xs-12" for="register1-password">Password</label>
<div class="col-xs-12">
<input class="form-control" type="password" id="register1-password" name="register1-password" placeholder="Enter your password..">
</div>
</div>
<div class="form-group">
<label class="col-xs-12" for="register1-password2">Confirm Password</label>
<div class="col-xs-12">
<input class="form-control" type="password" id="register1-password2" name="register1-password2" placeholder="Confirm your password..">
</div>
</div>
<div class="form-group">
<div class="col-xs-12">
<label class="css-input switch switch-sm switch-success">
<input type="checkbox" id="register1-terms" name="register1-terms"><span></span> Agree to terms?
</label>
</div>
</div>
<div class="form-group">
<div class="col-xs-12">
<button class="btn btn-sm btn-success" type="submit"><i class="fa fa-plus push-5-r"></i> Register</button>
</div>
</div>
</form>
</div>
</div>
</div>
<div class="col-lg-4">
<div class="block block-themed">
<div class="block-header bg-success">
<ul class="block-options">
<li>
<button type="button" data-toggle="block-option" data-action="refresh_toggle" data-action-mode="demo"><i class="si si-refresh"></i></button>
</li>
<li>
<button type="button" data-toggle="block-option" data-action="content_toggle"></button>
</li>
</ul>
<h3 class="block-title">Material</h3>
</div>
<div class="block-content">
<form class="form-horizontal push-10-t push-10" action="base_forms_premade.php" method="post" onsubmit="return false;">
<div class="form-group">
<div class="col-xs-12">
<div class="form-material">
<input class="form-control" type="text" id="register2-username" name="register2-username" placeholder="Enter your username..">
<label for="register2-username">Username</label>
</div>
</div>
</div>
<div class="form-group">
<div class="col-xs-12">
<div class="form-material">
<input class="form-control" type="email" id="register2-email" name="register2-email" placeholder="Enter your email..">
<label for="register2-email">Email</label>
</div>
</div>
</div>
<div class="form-group">
<div class="col-xs-12">
<div class="form-material">
<input class="form-control" type="password" id="register2-password" name="register2-password" placeholder="Enter your password..">
<label for="register2-password">Password</label>
</div>
</div>
</div>
<div class="form-group">
<div class="col-xs-12">
<div class="form-material">
<input class="form-control" type="password" id="register2-password2" name="register2-password2" placeholder="Confirm your password..">
<label for="register2-password2">Confirm Password</label>
</div>
</div>
</div>
<div class="form-group">
<div class="col-xs-12">
<label class="css-input switch switch-sm switch-success">
<input type="checkbox" id="register2-terms" name="register2-terms"><span></span> Agree to terms?
</label>
</div>
</div>
<div class="form-group">
<div class="col-xs-12">
<button class="btn btn-sm btn-success" type="submit"><i class="fa fa-plus push-5-r"></i> Register</button>
</div>
</div>
</form>
</div>
</div>
</div>
<div class="col-lg-4">
<div class="block block-themed">
<div class="block-header bg-success">
<ul class="block-options">
<li>
<button type="button" data-toggle="block-option" data-action="refresh_toggle" data-action-mode="demo"><i class="si si-refresh"></i></button>
</li>
<li>
<button type="button" data-toggle="block-option" data-action="content_toggle"></button>
</li>
</ul>
<h3 class="block-title">Material (floating)</h3>
</div>
<div class="block-content">
<form class="form-horizontal push-10-t push-10" action="base_forms_premade.php" method="post" onsubmit="return false;">
<div class="form-group">
<div class="col-xs-12">
<div class="form-material floating">
<input class="form-control" type="text" id="register3-username" name="register3-username">
<label for="register3-username">Username</label>
</div>
</div>
</div>
<div class="form-group">
<div class="col-xs-12">
<div class="form-material floating">
<input class="form-control" type="email" id="register3-email" name="register3-email">
<label for="register3-email">Email</label>
</div>
</div>
</div>
<div class="form-group">
<div class="col-xs-12">
<div class="form-material floating">
<input class="form-control" type="password" id="register3-password" name="register3-password">
<label for="register3-password">Password</label>
</div>
</div>
</div>
<div class="form-group">
<div class="col-xs-12">
<div class="form-material floating">
<input class="form-control" type="password" id="register3-password2" name="register3-password2">
<label for="register3-password2">Confirm Password</label>
</div>
</div>
</div>
<div class="form-group">
<div class="col-xs-12">
<label class="css-input switch switch-sm switch-success">
<input type="checkbox" id="register3-terms" name="register3-terms"><span></span> Agree to terms?
</label>
</div>
</div>
<div class="form-group">
<div class="col-xs-12">
<button class="btn btn-sm btn-success" type="submit"><i class="fa fa-plus push-5-r"></i> Register</button>
</div>
</div>
</form>
</div>
</div>
</div>
</div>
<div class="row">
<div class="col-lg-4">
<div class="block block-themed">
<div class="block-header bg-success">
<ul class="block-options">
<li>
<button type="button" data-toggle="block-option" data-action="refresh_toggle" data-action-mode="demo"><i class="si si-refresh"></i></button>
</li>
<li>
<button type="button" data-toggle="block-option" data-action="content_toggle"></button>
</li>
</ul>
<h3 class="block-title">Bootstrap</h3>
</div>
<div class="block-content">
<form class="form-horizontal push-5-t" action="base_forms_premade.php" method="post" onsubmit="return false;">
<div class="form-group">
<div class="col-xs-6">
<label for="register4-firstname">Firstname</label>
<input class="form-control" type="text" id="register4-firstname" name="register4-firstname" placeholder="Enter your firstname..">
</div>
<div class="col-xs-6">
<label for="register4-lastname">Lastname</label>
<input class="form-control" type="text" id="register4-lastname" name="register4-lastname" placeholder="Enter your lastname..">
</div>
</div>
<div class="form-group">
<label class="col-xs-12" for="register4-account">Company</label>
<div class="col-xs-12">
<div class="input-group">
<input class="form-control" type="text" id="register4-account" name="register4-account" placeholder="Company's name..">
<span class="input-group-addon">.example.com</span>
</div>
</div>
</div>
<div class="form-group">
<label class="col-xs-12" for="register4-email">Email</label>
<div class="col-xs-12">
<div class="input-group">
<input class="form-control" type="email" id="register4-email" name="register4-email" placeholder="Enter your email..">
<span class="input-group-addon"><i class="fa fa-envelope-o"></i></span>
</div>
</div>
</div>
<div class="form-group">
<label class="col-xs-12" for="register4-password">Password</label>
<div class="col-xs-12">
<div class="input-group">
<input class="form-control" type="password" id="register4-password" name="register4-password" placeholder="Enter your password..">
<span class="input-group-addon"><i class="fa fa-asterisk"></i></span>
</div>
</div>
</div>
<div class="form-group">
<label class="col-xs-12" for="register4-password2">Confirm Password</label>
<div class="col-xs-12">
<div class="input-group">
<input class="form-control" type="password" id="register4-password2" name="register4-password2" placeholder="Enter your password..">
<span class="input-group-addon"><i class="fa fa-asterisk"></i></span>
</div>
</div>
</div>
<div class="form-group">
<div class="col-xs-12">
<label class="css-input css-checkbox css-checkbox-success">
<input type="checkbox" id="register4-terms" name="register4-terms"><span></span> Agree to terms?
</label>
</div>
</div>
<div class="form-group">
<div class="col-xs-12">
<button class="btn btn-sm btn-success" type="submit"><i class="fa fa-plus push-5-r"></i> Register</button>
</div>
</div>
</form>
</div>
</div>
</div>
<div class="col-lg-4">
<div class="block block-themed">
<div class="block-header bg-success">
<ul class="block-options">
<li>
<button type="button" data-toggle="block-option" data-action="refresh_toggle" data-action-mode="demo"><i class="si si-refresh"></i></button>
</li>
<li>
<button type="button" data-toggle="block-option" data-action="content_toggle"></button>
</li>
</ul>
<h3 class="block-title">Material</h3>
</div>
<div class="block-content">
<form class="form-horizontal push-10-t push-10" action="base_forms_premade.php" method="post" onsubmit="return false;">
<div class="form-group">
<div class="col-xs-6">
<div class="form-material">
<input class="form-control" type="text" id="register5-firstname" name="register5-firstname" placeholder="Enter your firstname..">
<label for="register5-firstname">Firstname</label>
</div>
</div>
<div class="col-xs-6">
<div class="form-material">
<input class="form-control" type="text" id="register5-lastname" name="register5-lastname" placeholder="Enter your lastname..">
<label for="register5-lastname">Lastname</label>
</div>
</div>
</div>
<div class="form-group">
<div class="col-xs-12">
<div class="form-material input-group">
<input class="form-control" type="text" id="register5-account" name="register5-account" placeholder="Company's name..">
<label for="register5-account">Company</label>
<span class="input-group-addon">.example.com</span>
</div>
</div>
</div>
<div class="form-group">
<div class="col-xs-12">
<div class="form-material input-group">
<input class="form-control" type="email" id="register5-email" name="register5-email" placeholder="Enter your email..">
<label for="register5-email">Email</label>
<span class="input-group-addon"><i class="fa fa-envelope-o"></i></span>
</div>
</div>
</div>
<div class="form-group">
<div class="col-xs-12">
<div class="form-material input-group">
<input class="form-control" type="password" id="register5-password" name="register5-password" placeholder="Enter your password..">
<label for="register5-password">Password</label>
<span class="input-group-addon"><i class="fa fa-asterisk"></i></span>
</div>
</div>
</div>
<div class="form-group">
<div class="col-xs-12">
<div class="form-material input-group">
<input class="form-control" type="password" id="register5-password2" name="register5-password2" placeholder="Confirm your password..">
<label for="register5-password2">Confirm Password</label>
<span class="input-group-addon"><i class="fa fa-asterisk"></i></span>
</div>
</div>
</div>
<div class="form-group">
<div class="col-xs-12">
<label class="css-input css-checkbox css-checkbox-success">
<input type="checkbox" id="register5-terms" name="register5-terms"><span></span> Agree to terms?
</label>
</div>
</div>
<div class="form-group">
<div class="col-xs-12">
<button class="btn btn-sm btn-success" type="submit"><i class="fa fa-plus push-5-r"></i> Register</button>
</div>
</div>
</form>
</div>
</div>
</div>
<div class="col-lg-4">
<div class="block block-themed">
<div class="block-header bg-success">
<ul class="block-options">
<li>
<button type="button" data-toggle="block-option" data-action="refresh_toggle" data-action-mode="demo"><i class="si si-refresh"></i></button>
</li>
<li>
<button type="button" data-toggle="block-option" data-action="content_toggle"></button>
</li>
</ul>
<h3 class="block-title">Material (floating)</h3>
</div>
<div class="block-content">
<form class="form-horizontal push-10-t push-10" action="base_forms_premade.php" method="post" onsubmit="return false;">
<div class="form-group">
<div class="col-xs-6">
<div class="form-material floating">
<input class="form-control" type="text" id="register6-firstname" name="register6-firstname">
<label for="register6-firstname">Firstname</label>
</div>
</div>
<div class="col-xs-6">
<div class="form-material floating">
<input class="form-control" type="text" id="register6-lastname" name="register6-lastname">
<label for="register6-lastname">Lastname</label>
</div>
</div>
</div>
<div class="form-group">
<div class="col-xs-12">
<div class="form-material input-group floating">
<input class="form-control" type="text" id="register6-account" name="register6-account">
<label for="register6-account">Company</label>
<span class="input-group-addon">.example.com</span>
</div>
</div>
</div>
<div class="form-group">
<div class="col-xs-12">
<div class="form-material input-group floating">
<input class="form-control" type="email" id="register6-email" name="register6-email">
<label for="register6-email">Email</label>
<span class="input-group-addon"><i class="fa fa-envelope-o"></i></span>
</div>
</div>
</div>
<div class="form-group">
<div class="col-xs-12">
<div class="form-material input-group floating">
<input class="form-control" type="password" id="register6-password" name="register6-password">
<label for="register6-password">Password</label>
<span class="input-group-addon"><i class="fa fa-asterisk"></i></span>
</div>
</div>
</div>
<div class="form-group">
<div class="col-xs-12">
<div class="form-material input-group floating">
<input class="form-control" type="password" id="register6-password2" name="register6-password2">
<label for="register6-password2">Confirm Password</label>
<span class="input-group-addon"><i class="fa fa-asterisk"></i></span>
</div>
</div>
</div>
<div class="form-group">
<div class="col-xs-12">
<label class="css-input css-checkbox css-checkbox-success">
<input type="checkbox" id="register6-terms" name="register6-terms"><span></span> Agree to terms?
</label>
</div>
</div>
<div class="form-group">
<div class="col-xs-12">
<button class="btn btn-sm btn-success" type="submit"><i class="fa fa-plus push-5-r"></i> Register</button>
</div>
</div>
</form>
</div>
</div>
</div>
</div>
<h2 class="content-heading">Contact Forms</h2>
<div class="row">
<div class="col-lg-4">
<div class="block block-themed">
<div class="block-header bg-info">
<ul class="block-options">
<li>
<button type="button" data-toggle="block-option" data-action="refresh_toggle" data-action-mode="demo"><i class="si si-refresh"></i></button>
</li>
<li>
<button type="button" data-toggle="block-option" data-action="content_toggle"></button>
</li>
</ul>
<h3 class="block-title">Bootstrap</h3>
</div>
<div class="block-content">
<form class="form-horizontal push-5-t" action="base_forms_premade.php" method="post" onsubmit="return false;">
<div class="form-group">
<div class="col-xs-6">
<label for="contact1-firstname">Firstname</label>
<input class="form-control" type="text" id="contact1-firstname" name="contact1-firstname" placeholder="Enter your firstname..">
</div>
<div class="col-xs-6">
<label for="contact1-lastname">Lastname</label>
<input class="form-control" type="text" id="contact1-lastname" name="contact1-lastname" placeholder="Enter your lastname..">
</div>
</div>
<div class="form-group">
<label class="col-xs-12" for="contact1-email">Email</label>
<div class="col-xs-12">
<div class="input-group">
<input class="form-control" type="email" id="contact1-email" name="contact1-email" placeholder="Enter your email..">
<span class="input-group-addon"><i class="fa fa-envelope-o"></i></span>
</div>
</div>
</div>
<div class="form-group">
<label class="col-xs-12" for="contact1-subject">Where?</label>
<div class="col-xs-12">
<select class="form-control" id="contact1-subject" name="contact1-subject" size="1">
<option value="1">Support</option>
<option value="2">Billing</option>
<option value="3">Management</option>
<option value="4">Feature Request</option>
</select>
</div>
</div>
<div class="form-group">
<label class="col-xs-12" for="contact1-msg">Message</label>
<div class="col-xs-12">
<textarea class="form-control" id="contact1-msg" name="contact1-msg" rows="7" placeholder="Enter your message.."></textarea>
<div class="help-block">Feel free to use common tags: &lt;blockquote&gt;, &lt;strong&gt;, &lt;em&gt;</div>
</div>
</div>
<div class="form-group">
<div class="col-xs-12">
<button class="btn btn-sm btn-info" type="submit"><i class="fa fa-send push-5-r"></i> Send Message</button>
</div>
</div>
</form>
</div>
</div>
</div>
<div class="col-lg-4">
<div class="block block-themed">
<div class="block-header bg-info">
<ul class="block-options">
<li>
<button type="button" data-toggle="block-option" data-action="refresh_toggle" data-action-mode="demo"><i class="si si-refresh"></i></button>
</li>
<li>
<button type="button" data-toggle="block-option" data-action="content_toggle"></button>
</li>
</ul>
<h3 class="block-title">Material</h3>
</div>
<div class="block-content">
<form class="form-horizontal push-10-t push-10" action="base_forms_premade.php" method="post" onsubmit="return false;">
<div class="form-group">
<div class="col-xs-6">
<div class="form-material">
<input class="form-control" type="text" id="contact2-firstname" name="contact2-firstname" placeholder="Enter your firstname..">
<label for="contact2-firstname">Firstname</label>
</div>
</div>
<div class="col-xs-6">
<div class="form-material">
<input class="form-control" type="text" id="contact2-lastname" name="contact2-lastname" placeholder="Enter your lastname..">
<label for="contact2-lastname">Lastname</label>
</div>
</div>
</div>
<div class="form-group">
<div class="col-xs-12">
<div class="form-material input-group">
<input class="form-control" type="email" id="contact2-email" name="contact2-email" placeholder="Enter your email..">
<label for="contact2-email">Email</label>
<span class="input-group-addon"><i class="fa fa-envelope-o"></i></span>
</div>
</div>
</div>
<div class="form-group">
<div class="col-xs-12">
<div class="form-material">
<select class="form-control" id="contact2-subject" name="contact2-subject" size="1">
<option value="1">Support</option>
<option value="2">Billing</option>
<option value="3">Management</option>
<option value="4">Feature Request</option>
</select>
<label for="contact2-subject">Where?</label>
</div>
</div>
</div>
<div class="form-group">
<div class="col-xs-12">
<div class="form-material">
<textarea class="form-control" id="contact2-msg" name="contact2-msg" rows="7" placeholder="Enter your message.."></textarea>
<label for="contact2-msg">Message</label>
</div>
<div class="help-block text-right">Feel free to use common tags: &lt;blockquote&gt;, &lt;strong&gt;, &lt;em&gt;</div>
</div>
</div>
<div class="form-group">
<div class="col-xs-12">
<button class="btn btn-sm btn-info" type="submit"><i class="fa fa-send push-5-r"></i> Send Message</button>
</div>
</div>
</form>
</div>
</div>
</div>
<div class="col-lg-4">
<div class="block block-themed">
<div class="block-header bg-info">
<ul class="block-options">
<li>
<button type="button" data-toggle="block-option" data-action="refresh_toggle" data-action-mode="demo"><i class="si si-refresh"></i></button>
</li>
<li>
<button type="button" data-toggle="block-option" data-action="content_toggle"></button>
</li>
</ul>
<h3 class="block-title">Material (floating)</h3>
</div>
<div class="block-content">
<form class="form-horizontal push-10-t push-10" action="base_forms_premade.php" method="post" onsubmit="return false;">
<div class="form-group">
<div class="col-xs-6">
<div class="form-material floating">
<input class="form-control" type="text" id="contact3-firstname" name="contact3-firstname">
<label for="contact3-firstname">Firstname</label>
</div>
</div>
<div class="col-xs-6">
<div class="form-material floating">
<input class="form-control" type="text" id="contact3-lastname" name="contact3-lastname">
<label for="contact3-lastname">Lastname</label>
</div>
</div>
</div>
<div class="form-group">
<div class="col-xs-12">
<div class="form-material floating input-group">
<input class="form-control" type="email" id="contact3-email" name="contact3-email">
<label for="contact3-email">Email</label>
<span class="input-group-addon"><i class="fa fa-envelope-o"></i></span>
</div>
</div>
</div>
<div class="form-group">
<div class="col-xs-12">
<div class="form-material floating">
<select class="form-control" id="contact3-subject" name="contact3-subject" size="1">
<option value="1">Support</option>
<option value="2">Billing</option>
<option value="3">Management</option>
<option value="4">Feature Request</option>
</select>
<label for="contact3-subject">Where?</label>
</div>
</div>
</div>
<div class="form-group">
<div class="col-xs-12">
<div class="form-material floating">
<textarea class="form-control" id="contact3-msg" name="contact3-msg" rows="7"></textarea>
<label for="contact3-msg">Message</label>
</div>
<div class="help-block text-right">Feel free to use common tags: &lt;blockquote&gt;, &lt;strong&gt;, &lt;em&gt;</div>
</div>
</div>
<div class="form-group">
<div class="col-xs-12">
<button class="btn btn-sm btn-info" type="submit"><i class="fa fa-send push-5-r"></i> Send Message</button>
</div>
</div>
</form>
</div>
</div>
</div>
</div>
<h2 class="content-heading">Mega Form</h2>
<div class="block block-bordered">
<div class="block-header bg-gray-lighter">
<ul class="block-options">
<li>
<button type="button" data-toggle="block-option" data-action="refresh_toggle" data-action-mode="demo"><i class="si si-refresh"></i></button>
</li>
<li>
<button type="button" data-toggle="block-option" data-action="content_toggle"></button>
</li>
</ul>
<h3 class="block-title">Multiple Columns</h3>
</div>
<div class="block-content">
<form class="form-horizontal push-10-t push-10" action="base_forms_premade.php" method="post" onsubmit="return false;">
<div class="row">
<div class="col-sm-7">
<div class="form-group">
<div class="col-xs-6">
<label for="mega-firstname">Firstname</label>
<input class="form-control input-lg" type="text" id="mega-firstname" name="mega-firstname" placeholder="Enter your firstname..">
</div>
<div class="col-xs-6">
<label for="mega-lastname">Lastname</label>
<input class="form-control input-lg" type="text" id="mega-lastname" name="mega-lastname" placeholder="Enter your lastname..">
</div>
</div>
</div>
<div class="col-sm-5">
<div class="form-group">
<div class="col-xs-12">
<label for="mega-lastname">Username</label>
<input class="form-control input-lg" type="text" id="mega-username" name="mega-username" placeholder="Enter your username..">
</div>
</div>
</div>
</div>
<div class="row">
<div class="col-sm-7">
<div class="form-group">
<div class="col-xs-12">
<label for="mega-bio">Bio</label>
<textarea class="form-control input-lg" id="mega-bio" name="mega-bio" rows="22" placeholder="Enter a few details about yourself.."></textarea>
</div>
</div>
</div>
<div class="col-sm-5">
<div class="form-group">
<div class="col-xs-12">
<label for="mega-city">Where do you live?</label>
<input class="form-control input-lg" type="text" id="mega-city" name="mega-city" placeholder="Enter your location..">
</div>
</div>
<div class="form-group">
<div class="col-xs-12">
<label for="mega-skills">Skills</label>
<select class="form-control" id="mega-skills" name="mega-skills" size="7" multiple>
<option value="1">HTML</option>
<option value="2">CSS</option>
<option value="3">JavaScript</option>
<option value="4">PHP</option>
<option value="5">Ruby</option>
<option value="6">Photoshop</option>
<option value="7">Illustrator</option>
</select>
</div>
</div>
<div class="form-group">
<div class="col-xs-6">
<label for="mega-age">Age</label>
<input class="form-control input-lg" type="text" id="mega-age" name="mega-age" placeholder="Enter your age..">
</div>
</div>
<div class="form-group">
<label class="col-xs-12">Gender</label>
<div class="col-xs-12">
<label class="css-input css-radio css-radio-warning push-10-r">
<input type="radio" name="mega-gender-group"><span></span> Female
</label>
<label class="css-input css-radio css-radio-warning">
<input type="radio" name="mega-gender-group"><span></span> Male
</label>
</div>
</div>
</div>
</div>
<div class="form-group">
<div class="col-xs-12">
<button class="btn btn-warning" type="submit"><i class="fa fa-check push-5-r"></i> Complete Profile</button>
</div>
</div>
</form>
</div>
</div>
</div>
</main>
<footer id="page-footer" class="content-mini content-mini-full font-s12 bg-gray-lighter clearfix">
<div class="pull-right">
Crafted with <i class="fa fa-heart text-city"></i> by <a class="font-w600" href="http://goo.gl/vNS3I" target="_blank">pixelcave</a>
</div>
<div class="pull-left">
<a class="font-w600" href="http://goo.gl/6LF10W" target="_blank">OneUI 1.3</a> &copy; <span class="js-year-copy"></span>
</div>
</footer>
</div>
<div class="modal fade" id="apps-modal" tabindex="-1" role="dialog" aria-hidden="true">
<div class="modal-sm modal-dialog modal-dialog-top">
<div class="modal-content">
<div class="block block-themed block-transparent">
<div class="block-header bg-primary-dark">
<ul class="block-options">
<li>
<button data-dismiss="modal" type="button"><i class="si si-close"></i></button>
</li>
</ul>
<h3 class="block-title">Apps</h3>
</div>
<div class="block-content">
<div class="row text-center">
<div class="col-xs-6">
<a class="block block-rounded" href="index.php">
<div class="block-content text-white bg-default">
<i class="si si-speedometer fa-2x"></i>
<div class="font-w600 push-15-t push-15">Backend</div>
</div>
</a>
</div>
<div class="col-xs-6">
<a class="block block-rounded" href="frontend_home.php">
<div class="block-content text-white bg-modern">
<i class="si si-rocket fa-2x"></i>
<div class="font-w600 push-15-t push-15">Frontend</div>
</div>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div><script src="assets/js/oneui.min-1.3.js"></script><script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create', 'UA-16158021-6', 'auto');ga('send', 'pageview');</script>
</body>
</html>