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
<span class="font-w600 push-10-l">Dennis Ross</span>
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
<i class="fa fa-circle text-success"></i> Susan Elliott
<div class="font-w400 text-muted"><small>Copywriter</small></div>
</a>
</li>
<li>
<a href="base_pages_profile.php">
<img class="img-avatar" src="assets/img/avatars/avatar11.jpg" alt="">
<i class="fa fa-circle text-success"></i> Vincent Sims
<div class="font-w400 text-muted"><small>Web Developer</small></div>
</a>
</li>
<li>
<a href="base_pages_profile.php">
<img class="img-avatar" src="assets/img/avatars/avatar3.jpg" alt="">
<i class="fa fa-circle text-success"></i> Denise Watson
<div class="font-w400 text-muted"><small>Web Designer</small></div>
</a>
</li>
<li>
<a href="base_pages_profile.php">
<img class="img-avatar" src="assets/img/avatars/avatar6.jpg" alt="">
<i class="fa fa-circle text-warning"></i> Linda Moore
<div class="font-w400 text-muted"><small>Photographer</small></div>
</a>
</li>
<li>
<a href="base_pages_profile.php">
<img class="img-avatar" src="assets/img/avatars/avatar12.jpg" alt="">
<i class="fa fa-circle text-warning"></i> Jack Greene
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
<a href="base_forms_premade.php">Pre-made</a>
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
<a class="active" href="base_forms_wizard.php">Wizard</a>
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
<div class="col-sm-8">
<h1 class="page-heading">
Form Wizards <small>Step by step form submissions will become a valuable tool for you and your users.</small>
</h1>
</div>
<div class="col-sm-4 text-right hidden-xs">
<ol class="breadcrumb push-10-t">
<li>Forms</li>
<li><a class="link-effect" href="">Wizard</a></li>
</ol>
</div>
</div>
</div>
<div class="content content-narrow">
<h2 class="content-heading">Simple Wizards</h2>
<div class="row">
<div class="col-lg-6">
<div class="js-wizard-simple block">
<ul class="nav nav-tabs nav-justified">
<li class="active">
<a href="#simple-classic-step1" data-toggle="tab">1. Personal</a>
</li>
<li>
<a href="#simple-classic-step2" data-toggle="tab">2. Details</a>
</li>
<li>
<a href="#simple-classic-step3" data-toggle="tab">3. Extra</a>
</li>
</ul>
<form class="form-horizontal" action="base_forms_wizard.php" method="post">
<div class="block-content tab-content">
<div class="tab-pane push-30-t push-50 active" id="simple-classic-step1">
<div class="form-group">
<div class="col-sm-8 col-sm-offset-2">
<label for="simple-classic-firstname">First Name</label>
<input class="form-control" type="text" id="simple-classic-firstname" name="simple-classic-firstname" placeholder="Please enter your firstname">
</div>
</div>
<div class="form-group">
<div class="col-sm-8 col-sm-offset-2">
<label for="simple-classic-lastname">Last Name</label>
<input class="form-control" type="text" id="simple-classic-lastname" name="simple-classic-lastname" placeholder="Please enter your lastname">
</div>
</div>
<div class="form-group">
<div class="col-sm-8 col-sm-offset-2">
<label for="simple-classic-email">Email</label>
<input class="form-control" type="email" id="simple-classic-email" name="simple-classic-email" placeholder="Please enter your email">
</div>
</div>
</div>
<div class="tab-pane push-30-t push-50" id="simple-classic-step2">
<div class="form-group">
<div class="col-sm-8 col-sm-offset-2">
<label for="simple-classic-details">Details</label>
<textarea class="form-control" id="simple-classic-details" name="simple-classic-details" rows="9" placeholder="Share something about yourself"></textarea>
</div>
</div>
</div>
<div class="tab-pane push-30-t push-50" id="simple-classic-step3">
<div class="form-group">
<div class="col-sm-8 col-sm-offset-2">
<label for="simple-classic-city">City</label>
<input class="form-control" type="text" id="simple-classic-city" name="simple-classic-city" placeholder="Where do you live?">
</div>
</div>
<div class="form-group">
<div class="col-sm-8 col-sm-offset-2">
<label for="simple-classic-skills">Skills</label>
<select class="form-control" id="simple-classic-skills" name="simple-classic-skills" size="1">
<option value="">Please select your best skill</option>
<option value="1">Photoshop</option>
<option value="2">HTML</option>
<option value="3">CSS</option>
<option value="4">JavaScript</option>
</select>
</div>
</div>
<div class="form-group">
<div class="col-sm-8 col-sm-offset-2">
<label class="css-input switch switch-sm switch-primary" for="simple-classic-terms">
<input type="checkbox" id="simple-classic-terms" name="simple-classic-terms"><span></span> Agree with the <a data-toggle="modal" data-target="#modal-terms" href="#">terms</a>
</label>
</div>
</div>
</div>
</div>
<div class="block-content block-content-mini block-content-full border-t">
<div class="row">
<div class="col-xs-6">
<button class="wizard-prev btn btn-default" type="button"><i class="fa fa-arrow-left"></i> Previous</button>
</div>
<div class="col-xs-6 text-right">
<button class="wizard-next btn btn-default" type="button">Next <i class="fa fa-arrow-right"></i></button>
<button class="wizard-finish btn btn-primary" type="submit"><i class="fa fa-check"></i> Submit</button>
</div>
</div>
</div>
</form>
</div>
</div>
<div class="col-lg-6">
<div class="js-wizard-simple block">
<ul class="nav nav-tabs nav-tabs-alt nav-justified">
<li class="active">
<a href="#simple-step1" data-toggle="tab">1. Personal</a>
</li>
<li>
<a href="#simple-step2" data-toggle="tab">2. Details</a>
</li>
<li>
<a href="#simple-step3" data-toggle="tab">3. Extra</a>
</li>
</ul>
<form class="form-horizontal" action="base_forms_wizard.php" method="post">
<div class="block-content tab-content">
<div class="tab-pane fade in push-30-t push-50 active" id="simple-step1">
<div class="form-group">
<div class="col-sm-8 col-sm-offset-2">
<div class="form-material">
<input class="form-control" type="text" id="simple-firstname" name="simple-firstname" placeholder="Please enter your firstname">
<label for="simple-firstname">First Name</label>
</div>
</div>
</div>
<div class="form-group">
<div class="col-sm-8 col-sm-offset-2">
<div class="form-material">
<input class="form-control" type="text" id="simple-lastname" name="simple-lastname" placeholder="Please enter your lastname">
<label for="simple-lastname">Last Name</label>
</div>
</div>
</div>
<div class="form-group">
<div class="col-sm-8 col-sm-offset-2">
<div class="form-material">
<input class="form-control" type="email" id="simple-email" name="simple-email" placeholder="Please enter your email">
<label for="simple-email">Email</label>
</div>
</div>
</div>
</div>
<div class="tab-pane fade push-30-t push-50" id="simple-step2">
<div class="form-group">
<div class="col-sm-8 col-sm-offset-2">
<div class="form-material">
<textarea class="form-control" id="simple-details" name="simple-details" rows="9" placeholder="Share something about yourself"></textarea>
<label for="simple-details">Details</label>
</div>
</div>
</div>
</div>
<div class="tab-pane fade push-30-t push-50" id="simple-step3">
<div class="form-group">
<div class="col-sm-8 col-sm-offset-2">
<div class="form-material">
<input class="form-control" type="text" id="simple-city" name="simple-city" placeholder="Where do you live?">
<label for="simple-city">City</label>
</div>
</div>
</div>
<div class="form-group">
<div class="col-sm-8 col-sm-offset-2">
<div class="form-material">
<select class="form-control" id="simple-skills" name="simple-skills" size="1">
<option value="">Please select your best skill</option>
<option value="1">Photoshop</option>
<option value="2">HTML</option>
<option value="3">CSS</option>
<option value="4">JavaScript</option>
</select>
<label for="simple-skills">Skills</label>
</div>
</div>
</div>
<div class="form-group">
<div class="col-sm-8 col-sm-offset-2">
<label class="css-input switch switch-sm switch-primary" for="simple-terms">
<input type="checkbox" id="simple-terms" name="simple-terms"><span></span> Agree with the <a data-toggle="modal" data-target="#modal-terms" href="#">terms</a>
</label>
</div>
</div>
</div>
</div>
<div class="block-content block-content-mini block-content-full border-t">
<div class="row">
<div class="col-xs-6">
<button class="wizard-prev btn btn-warning" type="button"><i class="fa fa-arrow-circle-o-left"></i> Previous</button>
</div>
<div class="col-xs-6 text-right">
<button class="wizard-next btn btn-success" type="button">Next <i class="fa fa-arrow-circle-o-right"></i></button>
<button class="wizard-finish btn btn-primary" type="submit"><i class="fa fa-check-circle-o"></i> Submit</button>
</div>
</div>
</div>
</form>
</div>
</div>
</div>
<h2 class="content-heading">Wizards with Progress</h2>
<div class="row">
<div class="col-lg-6">
<div class="js-wizard-simple block">
<ul class="nav nav-tabs nav-justified">
<li class="active">
<a href="#simple-classic-progress-step1" data-toggle="tab">1. Personal</a>
</li>
<li>
<a href="#simple-classic-progress-step2" data-toggle="tab">2. Details</a>
</li>
<li>
<a href="#simple-classic-progress-step3" data-toggle="tab">3. Extra</a>
</li>
</ul>
<form class="form-horizontal" action="base_forms_wizard.php" method="post">
<div class="block-content block-content-mini block-content-full border-b">
<div class="wizard-progress progress progress-mini remove-margin-b">
<div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 0"></div>
</div>
</div>
<div class="block-content tab-content">
<div class="tab-pane fade fade-up in push-30-t push-50 active" id="simple-classic-progress-step1">
<div class="form-group">
<div class="col-sm-8 col-sm-offset-2">
<label for="simple-classic-progress-firstname">First Name</label>
<input class="form-control" type="text" id="simple-classic-progress-firstname" name="simple-classic-progress-firstname" placeholder="Please enter your firstname">
</div>
</div>
<div class="form-group">
<div class="col-sm-8 col-sm-offset-2">
<label for="simple-classic-progress-lastname">Last Name</label>
<input class="form-control" type="text" id="simple-classic-progress-lastname" name="simple-classic-progress-lastname" placeholder="Please enter your lastname">
</div>
</div>
<div class="form-group">
<div class="col-sm-8 col-sm-offset-2">
<label for="simple-classic-progress-email">Email</label>
<input class="form-control" type="email" id="simple-classic-progress-email" name="simple-classic-progress-email" placeholder="Please enter your email">
</div>
</div>
</div>
<div class="tab-pane fade fade-up push-30-t push-50" id="simple-classic-progress-step2">
<div class="form-group">
<div class="col-sm-8 col-sm-offset-2">
<label for="simple-classic-progress-details">Details</label>
<textarea class="form-control" id="simple-classic-progress-details" name="simple-classic-progress-details" rows="9" placeholder="Share something about yourself"></textarea>
</div>
</div>
</div>
<div class="tab-pane fade fade-up push-30-t push-50" id="simple-classic-progress-step3">
<div class="form-group">
<div class="col-sm-8 col-sm-offset-2">
<label for="simple-classic-progress-city">City</label>
<input class="form-control" type="text" id="simple-classic-progress-city" name="simple-classic-progress-city" placeholder="Where do you live?">
</div>
</div>
<div class="form-group">
<div class="col-sm-8 col-sm-offset-2">
<label for="simple-classic-progress-skills">Skills</label>
<select class="form-control" id="simple-classic-progress-skills" name="simple-classic-progress-skills" size="1">
<option value="">Please select your best skill</option>
<option value="1">Photoshop</option>
<option value="2">HTML</option>
<option value="3">CSS</option>
<option value="4">JavaScript</option>
</select>
</div>
</div>
<div class="form-group">
<div class="col-sm-8 col-sm-offset-2">
<label class="css-input switch switch-sm switch-primary" for="simple-classic-progress-terms">
<input type="checkbox" id="simple-classic-progress-terms" name="simple-classic-progress-terms"><span></span> Agree with the <a data-toggle="modal" data-target="#modal-terms" href="#">terms</a>
</label>
</div>
</div>
</div>
</div>
<div class="block-content block-content-mini block-content-full border-t">
<div class="row">
<div class="col-xs-6">
<button class="wizard-prev btn btn-default" type="button"><i class="fa fa-arrow-left"></i> Previous</button>
</div>
<div class="col-xs-6 text-right">
<button class="wizard-next btn btn-default" type="button">Next <i class="fa fa-arrow-right"></i></button>
<button class="wizard-finish btn btn-primary" type="submit"><i class="fa fa-check"></i> Submit</button>
</div>
</div>
</div>
</form>
</div>
</div>
<div class="col-lg-6">
<div class="js-wizard-simple block">
<div class="block-content block-content-mini block-content-full border-b">
<div class="wizard-progress progress active remove-margin-b">
<div class="progress-bar progress-bar-primary progress-bar-striped" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 0"></div>
</div>
</div>
<ul class="nav nav-tabs nav-tabs-alt nav-justified">
<li class="active">
<a href="#simple-progress-step1" data-toggle="tab">1. Personal</a>
</li>
<li>
<a href="#simple-progress-step2" data-toggle="tab">2. Details</a>
</li>
<li>
<a href="#simple-progress-step3" data-toggle="tab">3. Extra</a>
</li>
</ul>
<form class="form-horizontal" action="base_forms_wizard.php" method="post">
<div class="block-content tab-content">
<div class="tab-pane fade fade-right in push-30-t push-50 active" id="simple-progress-step1">
<div class="form-group">
<div class="col-sm-8 col-sm-offset-2">
<div class="form-material">
<input class="form-control" type="text" id="simple-progress-firstname" name="simple-progress-firstname" placeholder="Please enter your firstname">
<label for="simple-progress-firstname">First Name</label>
</div>
</div>
</div>
<div class="form-group">
<div class="col-sm-8 col-sm-offset-2">
<div class="form-material">
<input class="form-control" type="text" id="simple-progress-lastname" name="simple-progress-lastname" placeholder="Please enter your lastname">
<label for="simple-progress-lastname">Last Name</label>
</div>
</div>
</div>
<div class="form-group">
<div class="col-sm-8 col-sm-offset-2">
<div class="form-material">
<input class="form-control" type="email" id="simple-progress-email" name="simple-progress-email" placeholder="Please enter your email">
<label for="simple-progress-email">Email</label>
</div>
</div>
</div>
</div>
<div class="tab-pane fade fade-right push-30-t push-50" id="simple-progress-step2">
<div class="form-group">
<div class="col-sm-8 col-sm-offset-2">
<div class="form-material">
<textarea class="form-control" id="simple-progress-details" name="simple-progress-details" rows="9" placeholder="Share something about yourself"></textarea>
<label for="simple-progress-details">Details</label>
</div>
</div>
</div>
</div>
<div class="tab-pane fade fade-right push-30-t push-50" id="simple-progress-step3">
<div class="form-group">
<div class="col-sm-8 col-sm-offset-2">
<div class="form-material">
<input class="form-control" type="text" id="simple-progress-city" name="simple-progress-city" placeholder="Where do you live?">
<label for="simple-progress-city">City</label>
</div>
</div>
</div>
<div class="form-group">
<div class="col-sm-8 col-sm-offset-2">
<div class="form-material">
<select class="form-control" id="simple-progress-skills" name="simple-progress-skills" size="1">
<option value="">Please select your best skill</option>
<option value="1">Photoshop</option>
<option value="2">HTML</option>
<option value="3">CSS</option>
<option value="4">JavaScript</option>
</select>
<label for="simple-progress-skills">Skills</label>
</div>
</div>
</div>
<div class="form-group">
<div class="col-sm-8 col-sm-offset-2">
<label class="css-input switch switch-sm switch-primary" for="simple-progress-terms">
<input type="checkbox" id="simple-progress-terms" name="simple-progress-terms"><span></span> Agree with the <a data-toggle="modal" data-target="#modal-terms" href="#">terms</a>
</label>
</div>
</div>
</div>
</div>
<div class="block-content block-content-mini block-content-full border-t">
<div class="row">
<div class="col-xs-6">
<button class="wizard-prev btn btn-warning" type="button"><i class="fa fa-arrow-circle-o-left"></i> Previous</button>
</div>
<div class="col-xs-6 text-right">
<button class="wizard-next btn btn-success" type="button">Next <i class="fa fa-arrow-circle-o-right"></i></button>
<button class="wizard-finish btn btn-primary" type="submit"><i class="fa fa-check-circle-o"></i> Submit</button>
</div>
</div>
</div>
</form>
</div>
</div>
</div>
<h2 class="content-heading">Wizards with Validation</h2>
<div class="row">
<div class="col-lg-6">
<div class="js-wizard-classic-validation block">
<ul class="nav nav-tabs nav-justified">
<li class="active">
<a class="inactive" href="#validation-classic-step1" data-toggle="tab">1. Personal</a>
</li>
<li>
<a class="inactive" href="#validation-classic-step2" data-toggle="tab">2. Details</a>
</li>
<li>
<a class="inactive" href="#validation-classic-step3" data-toggle="tab">3. Extra</a>
</li>
</ul>
<form class="js-form1 validation form-horizontal" action="base_forms_wizard.php" method="post">
<div class="block-content tab-content">
<div class="tab-pane push-30-t push-50 active" id="validation-classic-step1">
<div class="form-group">
<div class="col-sm-8 col-sm-offset-2">
<label for="validation-classic-firstname">First Name</label>
<input class="form-control" type="text" id="validation-classic-firstname" name="validation-classic-firstname" placeholder="Please enter your firstname">
</div>
</div>
<div class="form-group">
<div class="col-sm-8 col-sm-offset-2">
<label for="validation-classic-lastname">Last Name</label>
<input class="form-control" type="text" id="validation-classic-lastname" name="validation-classic-lastname" placeholder="Please enter your lastname">
</div>
</div>
<div class="form-group">
<div class="col-sm-8 col-sm-offset-2">
<label for="validation-classic-email">Email</label>
<input class="form-control" type="email" id="validation-classic-email" name="validation-classic-email" placeholder="Please enter your email">
</div>
</div>
</div>
<div class="tab-pane push-30-t push-50" id="validation-classic-step2">
<div class="form-group">
<div class="col-sm-8 col-sm-offset-2">
<label for="validation-classic-details">Details</label>
<textarea class="form-control" id="validation-classic-details" name="validation-classic-details" rows="9" placeholder="Share something about yourself"></textarea>
</div>
</div>
</div>
<div class="tab-pane push-30-t push-50" id="validation-classic-step3">
<div class="form-group">
<div class="col-sm-8 col-sm-offset-2">
<label for="validation-classic-city">City</label>
<input class="form-control" type="text" id="validation-classic-city" name="validation-classic-city" placeholder="Where do you live?">
</div>
</div>
<div class="form-group">
<div class="col-sm-8 col-sm-offset-2">
<label for="validation-classic-skills">Skills</label>
<select class="form-control" id="validation-classic-skills" name="validation-classic-skills" size="1">
<option value="">Please select your best skill</option>
<option value="1">Photoshop</option>
<option value="2">HTML</option>
<option value="3">CSS</option>
<option value="4">JavaScript</option>
</select>
</div>
</div>
<div class="form-group">
<div class="col-sm-8 col-sm-offset-2">
<label class="css-input switch switch-sm switch-primary" for="validation-classic-terms">
<input type="checkbox" id="validation-classic-terms" name="validation-classic-terms"><span></span> Agree with the <a data-toggle="modal" data-target="#modal-terms" href="#">terms</a>
</label>
</div>
</div>
</div>
</div>
<div class="block-content block-content-mini block-content-full border-t">
<div class="row">
<div class="col-xs-6">
<button class="wizard-prev btn btn-default" type="button"><i class="fa fa-arrow-left"></i> Previous</button>
</div>
<div class="col-xs-6 text-right">
<button class="wizard-next btn btn-default" type="button">Next <i class="fa fa-arrow-right"></i></button>
<button class="wizard-finish btn btn-primary" type="submit"><i class="fa fa-check"></i> Submit</button>
</div>
</div>
</div>
</form>
</div>
</div>
<div class="col-lg-6">
<div class="js-wizard-validation block">
<ul class="nav nav-tabs nav-tabs-alt nav-justified">
<li class="active">
<a class="inactive" href="#validation-step1" data-toggle="tab">1. Personal</a>
</li>
<li>
<a class="inactive" href="#validation-step2" data-toggle="tab">2. Details</a>
</li>
<li>
<a class="inactive" href="#validation-step3" data-toggle="tab">3. Extra</a>
</li>
</ul>
<form class="js-form2 form-horizontal" action="base_forms_wizard.php" method="post">
<div class="block-content tab-content">
<div class="tab-pane fade fade-right in push-30-t push-50 active" id="validation-step1">
<div class="form-group">
<div class="col-sm-8 col-sm-offset-2">
<div class="form-material">
<input class="form-control" type="text" id="validation-firstname" name="validation-firstname" placeholder="Please enter your firstname">
<label for="validation-firstname">First Name</label>
</div>
</div>
</div>
<div class="form-group">
<div class="col-sm-8 col-sm-offset-2">
<div class="form-material">
<input class="form-control" type="text" id="validation-lastname" name="validation-lastname" placeholder="Please enter your lastname">
<label for="validation-lastname">Last Name</label>
</div>
</div>
</div>
<div class="form-group">
<div class="col-sm-8 col-sm-offset-2">
<div class="form-material">
<input class="form-control" type="email" id="validation-email" name="validation-email" placeholder="Please enter your email">
<label for="validation-email">Email</label>
</div>
</div>
</div>
</div>
<div class="tab-pane fade fade-right push-30-t push-50" id="validation-step2">
<div class="form-group">
<div class="col-sm-8 col-sm-offset-2">
<div class="form-material">
<textarea class="form-control" id="validation-details" name="validation-details" rows="9" placeholder="Share something about yourself"></textarea>
<label for="validation-details">Details</label>
</div>
</div>
</div>
</div>
<div class="tab-pane fade fade-right push-30-t push-50" id="validation-step3">
<div class="form-group">
<div class="col-sm-8 col-sm-offset-2">
<div class="form-material">
<input class="form-control" type="text" id="validation-city" name="validation-city" placeholder="Where do you live?">
<label for="validation-city">City</label>
</div>
</div>
</div>
<div class="form-group">
<div class="col-sm-8 col-sm-offset-2">
<div class="form-material">
<select class="form-control" id="validation-skills" name="validation-skills" size="1">
<option value="">Please select your best skill</option>
<option value="1">Photoshop</option>
<option value="2">HTML</option>
<option value="3">CSS</option>
<option value="4">JavaScript</option>
</select>
<label for="validation-skills">Skills</label>
</div>
</div>
</div>
<div class="form-group">
<div class="col-sm-8 col-sm-offset-2">
<label class="css-input switch switch-sm switch-primary" for="validation-terms">
<input type="checkbox" id="validation-terms" name="validation-terms"><span></span> Agree with the <a data-toggle="modal" data-target="#modal-terms" href="#">terms</a>
</label>
</div>
</div>
</div>
</div>
<div class="block-content block-content-mini block-content-full border-t">
<div class="row">
<div class="col-xs-6">
<button class="wizard-prev btn btn-warning" type="button"><i class="fa fa-arrow-circle-o-left"></i> Previous</button>
</div>
<div class="col-xs-6 text-right">
<button class="wizard-next btn btn-success" type="button">Next <i class="fa fa-arrow-circle-o-right"></i></button>
<button class="wizard-finish btn btn-primary" type="submit"><i class="fa fa-check-circle-o"></i> Submit</button>
</div>
</div>
</div>
</form>
</div>
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
</div><div class="modal fade" id="modal-terms" tabindex="-1" role="dialog" aria-hidden="true">
<div class="modal-dialog modal-dialog-popout">
<div class="modal-content">
<div class="block block-themed block-transparent remove-margin-b">
<div class="block-header bg-primary-dark">
<ul class="block-options">
<li>
<button data-dismiss="modal" type="button"><i class="si si-close"></i></button>
</li>
</ul>
<h3 class="block-title">Terms &amp; Conditions</h3>
</div>
<div class="block-content">
<p>Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.</p>
<p>Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.</p>
<p>Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.</p>
<p>Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.</p>
<p>Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.</p>
</div>
</div>
<div class="modal-footer">
<button class="btn btn-sm btn-default" type="button" data-dismiss="modal">Close</button>
<button class="btn btn-sm btn-primary" type="button" data-dismiss="modal"><i class="fa fa-check"></i> I agree</button>
</div>
</div>
</div>
</div>
<script src="assets/js/oneui.min-1.3.js"></script><script src="assets/js/plugins/bootstrap-wizard/jquery.bootstrap.wizard.min.js"></script>
<script src="assets/js/plugins/jquery-validation/jquery.validate.min.js"></script>
<script src="assets/js/pages/base_forms_wizard.js"></script>
<script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create', 'UA-16158021-6', 'auto');ga('send', 'pageview');</script>
</body>
</html>