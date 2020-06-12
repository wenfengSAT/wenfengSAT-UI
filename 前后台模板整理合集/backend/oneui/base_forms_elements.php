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
<img class="img-avatar" src="assets/img/avatars/avatar1.jpg" alt="">
<i class="fa fa-circle text-success"></i> Susan Elliott
<div class="font-w400 text-muted"><small>Copywriter</small></div>
</a>
</li>
<li>
<a href="base_pages_profile.php">
<img class="img-avatar" src="assets/img/avatars/avatar16.jpg" alt="">
<i class="fa fa-circle text-success"></i> Keith Simpson
<div class="font-w400 text-muted"><small>Web Developer</small></div>
</a>
</li>
<li>
<a href="base_pages_profile.php">
<img class="img-avatar" src="assets/img/avatars/avatar5.jpg" alt="">
<i class="fa fa-circle text-success"></i> Judy Alvarez
<div class="font-w400 text-muted"><small>Web Designer</small></div>
</a>
</li>
<li>
<a href="base_pages_profile.php">
<img class="img-avatar" src="assets/img/avatars/avatar8.jpg" alt="">
<i class="fa fa-circle text-warning"></i> Evelyn Willis
<div class="font-w400 text-muted"><small>Photographer</small></div>
</a>
</li>
<li>
<a href="base_pages_profile.php">
<img class="img-avatar" src="assets/img/avatars/avatar9.jpg" alt="">
<i class="fa fa-circle text-warning"></i> Roger Hart
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
<a class="active" href="base_forms_elements.php">Elements</a>
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
<div class="col-sm-8">
<h1 class="page-heading">
Form Elements <small>Carefully designed elements that will ensure a great experience for your users.</small>
</h1>
</div>
<div class="col-sm-4 text-right hidden-xs">
<ol class="breadcrumb push-10-t">
<li>Forms</li>
<li><a class="link-effect" href="">Form Elements</a></li>
</ol>
</div>
</div>
</div>
<div class="content content-narrow">
<h2 class="content-heading">Material Design</h2>
<div class="row">
<div class="col-md-6">
<div class="block">
<div class="block-header">
<ul class="block-options">
<li>
<button type="button"><i class="si si-settings"></i></button>
</li>
</ul>
<h3 class="block-title">Static Labels</h3>
</div>
<div class="block-content block-content-narrow">
<form class="form-horizontal push-10-t" action="base_forms_elements_modern.php" method="post" onsubmit="return false;">
<div class="form-group">
<div class="col-sm-9">
<div class="form-material">
<input class="form-control" type="text" id="material-text" name="material-text" placeholder="Please enter your username">
<label for="material-text">Username</label>
</div>
</div>
</div>
<div class="form-group">
<div class="col-sm-9">
<div class="form-material">
<input class="form-control" type="password" id="material-password" name="material-password" placeholder="Please enter your password">
<label for="material-password">Password</label>
</div>
</div>
</div>
<div class="form-group">
<div class="col-xs-12">
<div class="form-material">
<input class="form-control" type="email" id="material-email" name="material-email" placeholder="Please enter your email">
<label for="material-email">Email</label>
</div>
</div>
</div>
<div class="form-group">
<div class="col-xs-6">
<div class="form-material">
<input class="form-control" type="text" id="material-gridf" name="material-gridf" placeholder="col-xs-6">
<label for="material-gridf">Grid Input</label>
</div>
</div>
<div class="col-xs-6">
<div class="form-material">
<input class="form-control" type="text" id="material-gridl" name="material-gridl" placeholder="col-xs-6">
<label for="material-gridl">Grid Input</label>
</div>
</div>
</div>
<div class="form-group">
<div class="col-xs-12">
<div class="form-material">
<textarea class="form-control" id="material-textarea-small" name="material-textarea-small" rows="3" placeholder="Please add a comment"></textarea>
<label for="material-textarea-small">Textarea Small</label>
</div>
</div>
</div>
<div class="form-group">
<div class="col-xs-12">
<div class="form-material">
<textarea class="form-control" id="material-textarea-large" name="material-textarea-large" rows="8" placeholder="Please add a comment"></textarea>
<label for="material-textarea-large">Textarea Large</label>
</div>
</div>
</div>
<div class="form-group">
<div class="col-sm-9">
<div class="form-material form-material-primary">
<input class="form-control" type="text" id="material-color-primary" name="material-color-primary" placeholder="On focus">
<label for="material-color-primary">Primary Color</label>
</div>
</div>
</div>
<div class="form-group">
<div class="col-sm-9">
<div class="form-material form-material-success">
<input class="form-control" type="text" id="material-color-success" name="material-color-success" placeholder="On focus">
<label for="material-color-success">Success Color</label>
</div>
</div>
</div>
<div class="form-group">
<div class="col-sm-9">
<div class="form-material form-material-info">
<input class="form-control" type="text" id="material-color-info" name="material-color-info" placeholder="On focus">
<label for="material-color-info">Info Color</label>
</div>
</div>
</div>
<div class="form-group">
<div class="col-sm-9">
<div class="form-material form-material-warning">
<input class="form-control" type="text" id="material-color-warning" name="material-color-warning" placeholder="On focus">
<label for="material-color-warning">Warning Color</label>
</div>
</div>
</div>
<div class="form-group">
<div class="col-sm-9">
<div class="form-material form-material-danger">
<input class="form-control" type="text" id="material-color-danger" name="material-color-danger" placeholder="On focus">
<label for="material-color-danger">Danger Color</label>
</div>
</div>
</div>
<div class="form-group has-success">
<div class="col-sm-9">
<div class="form-material">
<input class="form-control" type="text" id="material-success" name="material-success" placeholder="Success State">
<label for="material-success">Success</label>
</div>
</div>
</div>
<div class="form-group has-info">
<div class="col-sm-9">
<div class="form-material">
<input class="form-control" type="text" id="material-info" name="material-info" placeholder="Info State">
<label for="material-info">Info</label>
</div>
</div>
</div>
<div class="form-group has-warning">
<div class="col-sm-9">
<div class="form-material">
<input class="form-control" type="text" id="material-warning" name="material-warning" placeholder="Warning State">
<label for="material-warning">Warning</label>
</div>
</div>
</div>
<div class="form-group has-error">
<div class="col-sm-9">
<div class="form-material">
<input class="form-control" type="text" id="material-error" name="material-error" placeholder="Error State">
<label for="material-error">Error</label>
</div>
</div>
</div>
<div class="form-group">
<div class="col-sm-9">
<div class="form-material">
<input class="form-control" type="text" id="material-help" name="material-help">
<label for="material-help">With Help</label>
<div class="help-block text-right">This is a help block!</div>
</div>
</div>
</div>
<div class="form-group">
<div class="col-sm-9">
<div class="form-material">
<input class="form-control" type="text" id="material-disabled" name="material-disabled" disabled>
<label for="material-disabled">Disabled</label>
</div>
</div>
</div>
<div class="form-group">
<div class="col-sm-9">
<div class="form-material">
<select class="form-control" id="material-select" name="material-select" size="1">
<option>...</option>
<option value="1">Option #1</option>
<option value="2">Option #2</option>
<option value="3">Option #3</option>
</select>
<label for="material-select">Please Select</label>
</div>
</div>
</div>
<div class="form-group">
<div class="col-sm-9">
<button class="btn btn-sm btn-primary" type="submit">Submit</button>
</div>
</div>
</form>
</div>
</div>
</div>
<div class="col-md-6">
<div class="block">
<div class="block-header">
<ul class="block-options">
<li>
<button type="button"><i class="si si-settings"></i></button>
</li>
</ul>
<h3 class="block-title">Floating Labels</h3>
</div>
<div class="block-content block-content-narrow">
<form class="form-horizontal push-10-t" action="base_forms_elements_modern.php" method="post" onsubmit="return false;">
<div class="form-group">
<div class="col-sm-9">
<div class="form-material floating">
<input class="form-control" type="text" id="material-text2" name="material-text2">
<label for="material-text2">Username</label>
</div>
</div>
</div>
<div class="form-group">
<div class="col-sm-9">
<div class="form-material floating">
<input class="form-control" type="password" id="material-password2" name="material-password2">
<label for="material-password2">Password</label>
</div>
</div>
</div>
<div class="form-group">
<div class="col-xs-12">
<div class="form-material floating">
<input class="form-control" type="email" id="material-email2" name="material-email2">
<label for="material-email2">Email</label>
</div>
</div>
</div>
<div class="form-group">
<div class="col-xs-6">
<div class="form-material floating">
<input class="form-control" type="text" id="material-gridf2" name="material-gridf2">
<label for="material-gridf2">Grid Input</label>
</div>
</div>
<div class="col-xs-6">
<div class="form-material floating">
<input class="form-control" type="text" id="material-gridl2" name="material-gridl2">
<label for="material-gridl2">Grid Input</label>
</div>
</div>
</div>
<div class="form-group">
<div class="col-xs-12">
<div class="form-material floating">
<textarea class="form-control" id="material-textarea-small2" name="material-textarea-small2" rows="3"></textarea>
<label for="material-textarea-small2">Textarea Small</label>
</div>
</div>
</div>
<div class="form-group">
<div class="col-xs-12">
<div class="form-material floating">
<textarea class="form-control" id="material-textarea-large2" name="material-textarea-large2" rows="8"></textarea>
<label for="material-textarea-large2">Textarea Large</label>
</div>
</div>
</div>
<div class="form-group">
<div class="col-sm-9">
<div class="form-material form-material-primary floating">
<input class="form-control" type="text" id="material-color-primary2" name="material-color-primary2">
<label for="material-color-primary2">Primary Color (On focus)</label>
</div>
</div>
</div>
<div class="form-group">
<div class="col-sm-9">
<div class="form-material form-material-success floating">
<input class="form-control" type="text" id="material-color-success2" name="material-color-success2">
<label for="material-color-success2">Success Color (On focus)</label>
</div>
</div>
</div>
<div class="form-group">
<div class="col-sm-9">
<div class="form-material form-material-info floating">
<input class="form-control" type="text" id="material-color-info2" name="material-color-info2">
<label for="material-color-info2">Info Color (On focus)</label>
</div>
</div>
</div>
<div class="form-group">
<div class="col-sm-9">
<div class="form-material form-material-warning floating">
<input class="form-control" type="text" id="material-color-warning2" name="material-color-warning2">
<label for="material-color-warning2">Warning Color (On focus)</label>
</div>
</div>
</div>
<div class="form-group">
<div class="col-sm-9">
<div class="form-material form-material-danger floating">
<input class="form-control" type="text" id="material-color-danger2" name="material-color-danger2">
<label for="material-color-danger2">Danger Color (On focus)</label>
</div>
</div>
</div>
<div class="form-group has-success">
<div class="col-sm-9">
<div class="form-material floating">
<input class="form-control" type="text" id="material-success2" name="material-success2">
<label for="material-success2">Success</label>
</div>
</div>
</div>
<div class="form-group has-info">
<div class="col-sm-9">
<div class="form-material floating">
<input class="form-control" type="text" id="material-info2" name="material-info2">
<label for="material-info2">Info</label>
</div>
</div>
</div>
<div class="form-group has-warning">
<div class="col-sm-9">
<div class="form-material floating">
<input class="form-control" type="text" id="material-warning2" name="material-warning2">
<label for="material-warning2">Warning</label>
</div>
</div>
</div>
<div class="form-group has-error">
<div class="col-sm-9">
<div class="form-material floating">
<input class="form-control" type="text" id="material-error2" name="material-error2">
<label for="material-error2">Error</label>
</div>
</div>
</div>
<div class="form-group">
<div class="col-sm-9">
<div class="form-material floating">
<input class="form-control" type="text" id="material-help2" name="material-help2">
<label for="material-help2">With Help</label>
<div class="help-block text-right">This is a help block!</div>
</div>
</div>
</div>
<div class="form-group">
<div class="col-sm-9">
<div class="form-material floating">
<input class="form-control" type="text" id="material-disabled2" name="material-disabled2" disabled>
<label for="material-disabled2">Disabled</label>
</div>
</div>
</div>
<div class="form-group">
<div class="col-sm-9">
<div class="form-material floating">
<select class="form-control" id="material-select2" name="material-select2" size="1">
<option></option>
<option value="1">Option #1</option>
<option value="2">Option #2</option>
<option value="3">Option #3</option>
</select>
<label for="material-select2">Please Select</label>
</div>
</div>
</div>
<div class="form-group">
<div class="col-sm-9">
<button class="btn btn-sm btn-primary" type="submit">Submit</button>
</div>
</div>
</form>
</div>
</div>
</div>
</div>
<h2 class="content-heading">Bootstrap Design</h2>
<div class="row">
<div class="col-md-6">
<div class="block">
<div class="block-header">
<ul class="block-options">
<li>
<button type="button"><i class="si si-settings"></i></button>
</li>
</ul>
<h3 class="block-title">Default Elements</h3>
</div>
<div class="block-content block-content-narrow">
<form class="form-horizontal" action="base_forms_elements.php" method="post" enctype="multipart/form-data" onsubmit="return false;">
<div class="form-group">
<label class="col-xs-12">Static</label>
<div class="col-sm-9">
<div class="form-control-static">Username</div>
</div>
</div>
<div class="form-group">
<label class="col-xs-12" for="example-text-input">Text</label>
<div class="col-sm-9">
<input class="form-control" type="text" id="example-text-input" name="example-text-input" placeholder="Text..">
<div class="help-block">Further info about this input</div>
</div>
</div>
<div class="form-group">
<label class="col-xs-12" for="example-email-input">Email</label>
<div class="col-sm-9">
<input class="form-control" type="email" id="example-email-input" name="example-email-input" placeholder="Email..">
</div>
</div>
<div class="form-group">
<label class="col-xs-12" for="example-password-input">Password</label>
<div class="col-sm-9">
<input class="form-control" type="password" id="example-password-input" name="example-password-input" placeholder="Password..">
</div>
</div>
<div class="form-group has-success">
<label class="col-xs-12" for="example-text-input-success">Success State</label>
<div class="col-sm-9">
<input class="form-control" type="text" id="example-text-input-success" name="example-text-input-success" placeholder="Success State..">
</div>
</div>
<div class="form-group has-info">
<label class="col-xs-12" for="example-text-input-info">Info State</label>
<div class="col-sm-9">
<input class="form-control" type="text" id="example-text-input-info" name="example-text-input-info" placeholder="Info State..">
</div>
</div>
<div class="form-group has-warning">
<label class="col-xs-12" for="example-text-input-warning">Warning State</label>
<div class="col-sm-9">
<input class="form-control" type="text" id="example-text-input-warning" name="example-text-input-warning" placeholder="Warning State..">
</div>
</div>
<div class="form-group has-error">
<label class="col-xs-12" for="example-text-input-error">Error State</label>
<div class="col-sm-9">
<input class="form-control" type="text" id="example-text-input-error" name="example-text-input-error" placeholder="Error State..">
</div>
</div>
<div class="form-group">
<label class="col-xs-12" for="example-disabled-input">Disabled</label>
<div class="col-sm-9">
<input class="form-control" type="text" id="example-disabled-input" name="example-disabled-input" placeholder="Disabled.." disabled>
</div>
</div>
<div class="form-group">
<label class="col-xs-12" for="example-textarea-input">Textarea</label>
<div class="col-xs-12">
<textarea class="form-control" id="example-textarea-input" name="example-textarea-input" rows="6" placeholder="Content.."></textarea>
</div>
</div>
<div class="form-group">
<label class="col-xs-12" for="example-select">Select</label>
<div class="col-sm-9">
<select class="form-control" id="example-select" name="example-select" size="1">
<option value="0">Please select</option>
<option value="1">Option #1</option>
<option value="2">Option #2</option>
<option value="3">Option #3</option>
</select>
</div>
</div>
<div class="form-group">
<label class="col-xs-12" for="example-multiple-select">Multiple Select</label>
<div class="col-sm-9">
<select class="form-control" id="example-multiple-select" name="example-multiple-select" size="5" multiple>
<option value="1">Option #1</option>
<option value="2">Option #2</option>
<option value="3">Option #3</option>
<option value="4">Option #4</option>
<option value="5">Option #5</option>
<option value="6">Option #6</option>
<option value="7">Option #7</option>
<option value="8">Option #8</option>
<option value="9">Option #9</option>
<option value="10">Option #10</option>
</select>
</div>
</div>
<div class="form-group">
<label class="col-xs-12">Radios</label>
<div class="col-xs-12">
<div class="radio">
<label for="example-radio1">
<input type="radio" id="example-radio1" name="example-radios" value="option1"> Option 1
</label>
</div>
<div class="radio">
<label for="example-radio2">
<input type="radio" id="example-radio2" name="example-radios" value="option2"> Option 2
</label>
</div>
<div class="radio">
<label for="example-radio3">
<input type="radio" id="example-radio3" name="example-radios" value="option3"> Option 3
</label>
</div>
</div>
</div>
<div class="form-group">
<label class="col-xs-12">Inline Radios</label>
<div class="col-xs-12">
<label class="radio-inline" for="example-inline-radio1">
<input type="radio" id="example-inline-radio1" name="example-inline-radios" value="option1"> One
</label>
<label class="radio-inline" for="example-inline-radio2">
<input type="radio" id="example-inline-radio2" name="example-inline-radios" value="option2"> Two
</label>
<label class="radio-inline" for="example-inline-radio3">
<input type="radio" id="example-inline-radio3" name="example-inline-radios" value="option3"> Three
</label>
</div>
</div>
<div class="form-group">
<label class="col-xs-12">Checkboxes</label>
<div class="col-xs-12">
<div class="checkbox">
<label for="example-checkbox1">
<input type="checkbox" id="example-checkbox1" name="example-checkbox1" value="option1"> Option 1
</label>
</div>
<div class="checkbox">
<label for="example-checkbox2">
<input type="checkbox" id="example-checkbox2" name="example-checkbox2" value="option2"> Option 2
</label>
</div>
<div class="checkbox">
<label for="example-checkbox3">
<input type="checkbox" id="example-checkbox3" name="example-checkbox3" value="option3"> Option 3
</label>
</div>
</div>
</div>
<div class="form-group">
<label class="col-xs-12">Inline Checkboxes</label>
<div class="col-xs-12">
<label class="checkbox-inline" for="example-inline-checkbox1">
<input type="checkbox" id="example-inline-checkbox1" name="example-inline-checkbox1" value="option1"> One
</label>
<label class="checkbox-inline" for="example-inline-checkbox2">
<input type="checkbox" id="example-inline-checkbox2" name="example-inline-checkbox2" value="option2"> Two
</label>
<label class="checkbox-inline" for="example-inline-checkbox3">
<input type="checkbox" id="example-inline-checkbox3" name="example-inline-checkbox3" value="option3"> Three
</label>
</div>
</div>
<div class="form-group">
<label class="col-xs-12" for="example-file-input">File Input</label>
<div class="col-xs-12">
<input type="file" id="example-file-input" name="example-file-input">
</div>
</div>
<div class="form-group">
<label class="col-xs-12" for="example-file-multiple-input">Multiple File Input</label>
<div class="col-xs-12">
<input type="file" id="example-file-multiple-input" name="example-file-multiple-input" multiple>
</div>
</div>
<div class="form-group">
<div class="col-xs-12">
<button class="btn btn-sm btn-primary" type="submit">Submit</button>
</div>
</div>
</form>
</div>
</div>
</div>
<div class="col-md-6">
<div class="block">
<div class="block-header">
<ul class="block-options">
<li>
<button type="button"><i class="si si-settings"></i></button>
</li>
</ul>
<h3 class="block-title">Normal Form</h3>
</div>
<div class="block-content block-content-narrow">
<form action="base_forms_elements.php" method="post" onsubmit="return false;">
<div class="form-group">
<label for="example-nf-email">Email</label>
<input class="form-control" type="email" id="example-nf-email" name="example-nf-email" placeholder="Enter Email..">
</div>
<div class="form-group">
<label for="example-nf-password">Password</label>
<input class="form-control" type="password" id="example-nf-password" name="example-nf-password" placeholder="Enter Password..">
</div>
<div class="form-group">
<button class="btn btn-sm btn-primary" type="submit">Login</button>
</div>
</form>
</div>
</div>
<div class="block">
<div class="block-header">
<ul class="block-options">
<li>
<button type="button"><i class="si si-settings"></i></button>
</li>
</ul>
<h3 class="block-title">Inline Form</h3>
</div>
<div class="block-content block-content-narrow block-content-full">
<form class="form-inline" action="base_forms_elements.php" method="post" onsubmit="return false;">
<div class="form-group">
<label class="sr-only" for="example-if-email">Email</label>
<input class="form-control" type="email" id="example-if-email" name="example-if-email" placeholder="Enter Email..">
</div>
<div class="form-group">
<label class="sr-only" for="example-if-password">Password</label>
<input class="form-control" type="password" id="example-if-password" name="example-if-password" placeholder="Enter Password..">
</div>
<div class="form-group">
<button class="btn btn-default" type="submit">Login</button>
</div>
</form>
</div>
</div>
<div class="block">
<div class="block-header">
<ul class="block-options">
<li>
<button type="button"><i class="si si-settings"></i></button>
</li>
</ul>
<h3 class="block-title">Horizontal Form</h3>
</div>
<div class="block-content block-content-narrow">
<form class="form-horizontal" action="base_forms_elements.php" method="post" onsubmit="return false;">
<div class="form-group">
<label class="col-md-3 control-label" for="example-hf-email">Email</label>
<div class="col-md-7">
<input class="form-control" type="email" id="example-hf-email" name="example-hf-email" placeholder="Enter Email..">
</div>
</div>
<div class="form-group">
<label class="col-md-3 control-label" for="example-hf-password">Password</label>
<div class="col-md-7">
<input class="form-control" type="password" id="example-hf-password" name="example-hf-password" placeholder="Enter Password..">
</div>
</div>
<div class="form-group">
<div class="col-md-9 col-md-offset-3">
<button class="btn btn-sm btn-primary" type="submit">Login</button>
</div>
</div>
</form>
</div>
</div>
<div class="block">
<div class="block-header">
<ul class="block-options">
<li>
<button type="button"><i class="si si-settings"></i></button>
</li>
</ul>
<h3 class="block-title">Input Sizes</h3>
</div>
<div class="block-content block-content-narrow">
<form action="base_forms_elements.php" method="post" onsubmit="return false;">
<div class="form-group">
<label for="example-input-small">Small Input</label>
<input class="form-control input-sm" type="text" id="example-input-small" name="example-input-small" placeholder=".input-sm">
</div>
<div class="form-group">
<label for="example-input-normal">Normal Input</label>
<input class="form-control" type="text" id="example-input-normal" name="example-input-normal" placeholder="..">
</div>
<div class="form-group">
<label for="example-input-large">Large Input</label>
<input class="form-control input-lg" type="text" id="example-input-large" name="example-input-large" placeholder=".input-lg">
</div>
<div class="form-group">
<label>Grid Inputs</label>
<div class="row">
<div class="col-xs-4">
<input class="form-control" type="text" placeholder=".col-xs-4">
</div>
</div>
</div>
<div class="form-group">
<div class="row">
<div class="col-xs-5">
<input class="form-control" type="text" placeholder=".col-xs-5">
</div>
</div>
</div>
<div class="form-group">
<div class="row">
<div class="col-xs-6">
<input class="form-control" type="text" placeholder=".col-xs-6">
</div>
</div>
</div>
<div class="form-group">
<div class="row">
<div class="col-xs-7">
<input class="form-control" type="text" placeholder=".col-xs-7">
</div>
</div>
</div>
<div class="form-group">
<div class="row">
<div class="col-xs-8">
<input class="form-control" type="text" placeholder=".col-xs-8">
</div>
</div>
</div>
<div class="form-group">
<div class="row">
<div class="col-xs-9">
<input class="form-control" type="text" placeholder=".col-xs-9">
</div>
</div>
</div>
<div class="form-group">
<div class="row">
<div class="col-xs-10">
<input class="form-control" type="text" placeholder=".col-xs-10">
</div>
</div>
</div>
<div class="form-group">
<div class="row">
<div class="col-xs-11">
<input class="form-control" type="text" placeholder=".col-xs-11">
</div>
</div>
</div>
<div class="form-group">
<div class="row">
<div class="col-xs-12">
<input class="form-control" type="text" placeholder=".col-xs-12">
</div>
</div>
</div>
<div class="form-group">
<label>Multiple Grid Inputs</label>
<div class="row">
<div class="col-xs-6">
<input class="form-control" type="text" placeholder=".col-xs-6">
</div>
<div class="col-xs-6">
<input class="form-control" type="text" placeholder=".col-xs-6">
</div>
</div>
</div>
<div class="form-group">
<div class="row">
<div class="col-xs-4">
<input class="form-control" type="text" placeholder=".col-xs-4">
</div>
<div class="col-xs-4">
<input class="form-control" type="text" placeholder=".col-xs-4">
</div>
<div class="col-xs-4">
<input class="form-control" type="text" placeholder=".col-xs-4">
</div>
</div>
</div>
<div class="form-group">
<div class="row">
<div class="col-xs-3">
<input class="form-control" type="text" placeholder=".col-xs-3">
</div>
<div class="col-xs-6">
<input class="form-control" type="text" placeholder=".col-xs-6">
</div>
<div class="col-xs-3">
<input class="form-control" type="text" placeholder=".col-xs-3">
</div>
</div>
</div>
<div class="form-group">
<button class="btn btn-sm btn-primary" type="submit">Submit</button>
</div>
</form>
</div>
</div>
</div>
</div>
<div class="row">
<div class="col-md-4">
<div class="block">
<div class="block-header">
<h3 class="block-title">Icon/Text Groups</h3>
</div>
<div class="block-content">
<form action="base_forms_elements.php" method="post" class="form-horizontal" onsubmit="return false;">
<div class="form-group">
<div class="col-md-12">
<div class="input-group">
<span class="input-group-addon"><i class="fa fa-user"></i></span>
<input class="form-control" type="text" id="example-input1-group1" name="example-input1-group1" placeholder="Username">
</div>
</div>
</div>
<div class="form-group">
<div class="col-md-12">
<div class="input-group">
<input class="form-control" type="email" id="example-input2-group1" name="example-input2-group1" placeholder="Email">
<span class="input-group-addon"><i class="fa fa-envelope-o"></i></span>
</div>
</div>
</div>
<div class="form-group">
<div class="col-md-12">
<div class="input-group">
<span class="input-group-addon"><i class="fa fa-euro"></i></span>
<input class="form-control" type="text" id="example-input3-group1" name="example-input3-group1" placeholder="..">
<span class="input-group-addon">.00</span>
</div>
</div>
</div>
<div class="form-group">
<div class="col-xs-12">
<button class="btn btn-sm btn-primary" type="submit">Submit</button>
</div>
</div>
</form>
</div>
</div>
</div>
<div class="col-md-4">
<div class="block">
<div class="block-header">
<h3 class="block-title">Button Groups</h3>
</div>
<div class="block-content">
<form action="base_forms_elements.php" method="post" class="form-horizontal" onsubmit="return false;">
<div class="form-group">
<div class="col-md-12">
<div class="input-group">
<span class="input-group-btn">
<button class="btn btn-default" type="button"><i class="fa fa-search"></i> Search</button>
</span>
<input class="form-control" type="text" id="example-input1-group2" name="example-input1-group2" placeholder="Username">
</div>
</div>
</div>
<div class="form-group">
<div class="col-md-12">
<div class="input-group">
<input class="form-control" type="email" id="example-input2-group2" name="example-input2-group2" placeholder="Email">
<span class="input-group-btn">
<button class="btn btn-default" type="button">Submit</button>
</span>
</div>
</div>
</div>
<div class="form-group">
<div class="col-md-12">
<div class="input-group">
<span class="input-group-btn">
<button class="btn btn-default" type="button"><i class="fa fa-facebook"></i></button>
</span>
<input class="form-control" type="text" id="example-input3-group2" name="example-input3-group2" placeholder="Search">
<span class="input-group-btn">
<button class="btn btn-default" type="button"><i class="fa fa-twitter"></i></button>
</span>
</div>
</div>
</div>
<div class="form-group">
<div class="col-xs-12">
<button class="btn btn-sm btn-primary" type="submit">Submit</button>
</div>
</div>
</form>
</div>
</div>
</div>
<div class="col-md-4">
<div class="block">
<div class="block-header">
<h3 class="block-title">Dropdown Groups</h3>
</div>
<div class="block-content">
<form action="base_forms_elements.php" method="post" class="form-horizontal" onsubmit="return false;">
<div class="form-group">
<div class="col-md-12">
<div class="input-group">
<div class="input-group-btn">
<button class="btn btn-default" data-toggle="dropdown" type="button"><span class="caret"></span></button>
<ul class="dropdown-menu">
<li class="dropdown-header">Profile</li>
<li>
<a tabindex="-1" href="javascript:void(0)"><span class="badge pull-right">3</span>News</a>
</li>
<li>
<a tabindex="-1" href="javascript:void(0)"><span class="badge pull-right">1</span>Messages</a>
</li>
<li class="divider"></li>
<li class="dropdown-header">More</li>
<li>
<a tabindex="-1" href="javascript:void(0)">Edit Profile..</a>
</li>
</ul>
</div>
<input class="form-control" type="text" id="example-input1-group3" name="example-input1-group3" placeholder="Username">
</div>
</div>
</div>
<div class="form-group">
<div class="col-md-12">
<div class="input-group">
<input class="form-control" type="email" id="example-input2-group3" name="example-input2-group3" placeholder="Email">
<div class="input-group-btn">
<button class="btn btn-default" data-toggle="dropdown" type="button"><span class="caret"></span></button>
<ul class="dropdown-menu dropdown-menu-right">
<li class="dropdown-header">Profile</li>
<li>
<a tabindex="-1" href="javascript:void(0)"><span class="badge pull-right">3</span>News</a>
</li>
<li>
<a tabindex="-1" href="javascript:void(0)"><span class="badge pull-right">1</span>Messages</a>
</li>
</ul>
</div>
</div>
</div>
</div>
<div class="form-group">
<div class="col-md-12">
<div class="input-group">
<div class="input-group-btn dropup">
<button class="btn btn-default" data-toggle="dropdown" type="button"><span class="caret"></span></button>
<ul class="dropdown-menu">
<li class="dropdown-header">Profile</li>
<li>
<a tabindex="-1" href="javascript:void(0)"><span class="badge pull-right">3</span>News</a>
</li>
<li>
<a tabindex="-1" href="javascript:void(0)"><span class="badge pull-right">1</span>Messages</a>
</li>
<li class="divider"></li>
<li class="dropdown-header">More</li>
<li>
<a tabindex="-1" href="javascript:void(0)">Edit Profile..</a>
</li>
</ul>
</div>
<input class="form-control" type="text" id="example-input3-group3" name="example-input3-group3" placeholder="..">
<div class="input-group-btn dropup">
<button class="btn btn-default" data-toggle="dropdown" type="button"><span class="caret"></span></button>
<ul class="dropdown-menu dropdown-menu-right">
<li class="dropdown-header">Profile</li>
<li>
<a tabindex="-1" href="javascript:void(0)"><span class="badge pull-right">3</span>News</a>
</li>
<li>
<a tabindex="-1" href="javascript:void(0)"><span class="badge pull-right">1</span>Messages</a>
</li>
<li class="divider"></li>
<li class="dropdown-header">More</li>
<li>
<a tabindex="-1" href="javascript:void(0)">Edit Profile..</a>
</li>
</ul>
</div>
</div>
</div>
</div>
<div class="form-group">
<div class="col-xs-12">
<button class="btn btn-sm btn-primary" type="submit">Submit</button>
</div>
</div>
</form>
</div>
</div>
</div>
</div>
<h2 class="content-heading">CSS Switches</h2>
<div class="row">
<div class="col-lg-4">
<div class="block">
<div class="block-header">
<h3 class="block-title">Colors</h3>
</div>
<div class="block-content">
<div class="row items-push">
<div class="col-xs-6">
<label class="css-input switch switch-default">
<input type="checkbox" checked><span></span> Default
</label>
</div>
<div class="col-xs-6">
<label class="css-input switch switch-primary">
<input type="checkbox" checked><span></span> Primary
</label>
</div>
<div class="col-xs-6">
<label class="css-input switch switch-info">
<input type="checkbox" checked><span></span> Info
</label>
</div>
<div class="col-xs-6">
<label class="css-input switch switch-success">
<input type="checkbox" checked><span></span> Success
</label>
</div>
<div class="col-xs-6">
<label class="css-input switch switch-warning">
<input type="checkbox" checked><span></span> Warning
</label>
</div>
<div class="col-xs-6">
<label class="css-input switch switch-danger">
<input type="checkbox" checked><span></span> Danger
</label>
</div>
</div>
</div>
</div>
</div>
<div class="col-lg-4">
<div class="block">
<div class="block-header">
<h3 class="block-title">Sizes</h3>
</div>
<div class="block-content">
<div class="row items-push">
<div class="col-xs-6">
<label class="css-input switch switch-sm switch-default">
<input type="checkbox" checked><span></span> Small
</label>
</div>
<div class="col-xs-6">
<label class="css-input switch switch-sm switch-primary">
<input type="checkbox" checked><span></span> Small
</label>
</div>
<div class="col-xs-6">
<label class="css-input switch switch-default">
<input type="checkbox" checked><span></span> Normal
</label>
</div>
<div class="col-xs-6">
<label class="css-input switch switch-primary">
<input type="checkbox" checked><span></span> Normal
</label>
</div>
<div class="col-xs-6">
<label class="css-input switch switch-lg switch-default">
<input type="checkbox" checked><span></span> Large
</label>
</div>
<div class="col-xs-6">
<label class="css-input switch switch-lg switch-primary">
<input type="checkbox" checked><span></span> Large
</label>
</div>
</div>
</div>
</div>
</div>
<div class="col-lg-4">
<div class="block">
<div class="block-header">
<h3 class="block-title">Shapes</h3>
</div>
<div class="block-content">
<div class="row items-push">
<div class="col-xs-6">
<label class="css-input switch switch-sm switch-default">
<input type="checkbox" checked><span></span> Rounded
</label>
</div>
<div class="col-xs-6">
<label class="css-input switch switch-square switch-sm switch-default">
<input type="checkbox" checked><span></span> Square
</label>
</div>
<div class="col-xs-6">
<label class="css-input switch switch-default">
<input type="checkbox" checked><span></span> Rounded
</label>
</div>
<div class="col-xs-6">
<label class="css-input switch switch-square switch-default">
<input type="checkbox" checked><span></span> Square
</label>
</div>
<div class="col-xs-6">
<label class="css-input switch switch-lg switch-default">
<input type="checkbox" checked><span></span> Rounded
</label>
</div>
<div class="col-xs-6">
<label class="css-input switch switch-square switch-lg switch-default">
<input type="checkbox" checked><span></span> Square
</label>
</div>
</div>
</div>
</div>
</div>
<div class="col-lg-12">
<div class="block">
<div class="block-header">
<h3 class="block-title">Disabled</h3>
</div>
<div class="block-content">
<div class="row items-push">
<div class="col-xs-6 col-sm-3">
<label class="css-input css-input-disabled switch switch-primary">
<input type="checkbox" checked disabled><span></span> Primary
</label>
</div>
<div class="col-xs-6 col-sm-3">
<label class="css-input css-input-disabled switch switch-warning">
<input type="checkbox" checked disabled><span></span> Warning
</label>
</div>
<div class="col-xs-6 col-sm-3">
<label class="css-input css-input-disabled switch switch-danger">
<input type="checkbox" checked disabled><span></span> Rounded
</label>
</div>
<div class="col-xs-6 col-sm-3">
<label class="css-input css-input-disabled switch switch-square switch-success">
<input type="checkbox" checked disabled><span></span> Square
</label>
</div>
</div>
</div>
</div>
</div>
</div>
<h2 class="content-heading">CSS Radios</h2>
<div class="row">
<div class="col-lg-6">
<div class="block">
<div class="block-header">
<h3 class="block-title">Colors</h3>
</div>
<div class="block-content">
<div class="row items-push">
<div class="col-xs-6">
<label class="css-input css-radio css-radio-default push-10-r">
<input type="radio" name="radio-group1" checked><span></span> Yes
</label>
<label class="css-input css-radio css-radio-default">
<input type="radio" name="radio-group1"><span></span> No
</label>
</div>
<div class="col-xs-6">
<label class="css-input css-radio css-radio-primary push-10-r">
<input type="radio" name="radio-group2" checked><span></span> Yes
</label>
<label class="css-input css-radio css-radio-primary">
<input type="radio" name="radio-group2"><span></span> No
</label>
</div>
<div class="col-xs-6">
<label class="css-input css-radio css-radio-info push-10-r">
<input type="radio" name="radio-group3" checked><span></span> Yes
</label>
<label class="css-input css-radio css-radio-info">
<input type="radio" name="radio-group3"><span></span> No
</label>
</div>
<div class="col-xs-6">
<label class="css-input css-radio css-radio-success push-10-r">
<input type="radio" name="radio-group4" checked><span></span> Yes
</label>
<label class="css-input css-radio css-radio-success">
<input type="radio" name="radio-group4"><span></span> No
</label>
</div>
<div class="col-xs-6">
<label class="css-input css-radio css-radio-warning push-10-r">
<input type="radio" name="radio-group5" checked><span></span> Yes
</label>
<label class="css-input css-radio css-radio-warning">
<input type="radio" name="radio-group5"><span></span> No
</label>
</div>
<div class="col-xs-6">
<label class="css-input css-radio css-radio-danger push-10-r">
<input type="radio" name="radio-group6" checked><span></span> Yes
</label>
<label class="css-input css-radio css-radio-danger">
<input type="radio" name="radio-group6"><span></span> No
</label>
</div>
</div>
</div>
</div>
</div>
<div class="col-lg-6">
<div class="block">
<div class="block-header">
<h3 class="block-title">Sizes</h3>
</div>
<div class="block-content">
<div class="row items-push">
<div class="col-xs-6">
<label class="css-input css-radio css-radio-sm css-radio-default push-10-r">
<input type="radio" name="radio-group7" checked><span></span> Agree
</label>
<label class="css-input css-radio css-radio-sm css-radio-default">
<input type="radio" name="radio-group7"><span></span> Disagree
</label>
</div>
<div class="col-xs-6">
<label class="css-input css-radio css-radio-sm css-radio-primary push-10-r">
<input type="radio" name="radio-group8" checked><span></span> Agree
</label>
<label class="css-input css-radio css-radio-sm css-radio-primary">
<input type="radio" name="radio-group8"><span></span> Disagree
</label>
</div>
<div class="col-xs-6">
<label class="css-input css-radio css-radio-default push-10-r">
<input type="radio" name="radio-group9" checked><span></span> Agree
</label>
<label class="css-input css-radio css-radio-default">
<input type="radio" name="radio-group9"><span></span> Disagree
</label>
</div>
<div class="col-xs-6">
<label class="css-input css-radio css-radio-primary push-10-r">
<input type="radio" name="radio-group10" checked><span></span> Agree
</label>
<label class="css-input css-radio css-radio-primary">
<input type="radio" name="radio-group10"><span></span> Disagree
</label>
</div>
<div class="col-xs-6">
<label class="css-input css-radio css-radio-lg css-radio-default push-10-r">
<input type="radio" name="radio-group11" checked><span></span> Agree
</label>
<label class="css-input css-radio css-radio-lg css-radio-default">
<input type="radio" name="radio-group11"><span></span> Disagree
</label>
</div>
<div class="col-xs-6">
<label class="css-input css-radio css-radio-lg css-radio-primary push-10-r">
<input type="radio" name="radio-group12" checked><span></span> Agree
</label>
<label class="css-input css-radio css-radio-lg css-radio-primary">
<input type="radio" name="radio-group12"><span></span> Disagree
</label>
</div>
</div>
</div>
</div>
</div>
<div class="col-lg-12">
<div class="block">
<div class="block-header">
<h3 class="block-title">Disabled</h3>
</div>
<div class="block-content">
<div class="row items-push text-center">
<div class="col-xs-6">
<label class="css-input css-input-disabled css-radio css-radio-primary push-10-r">
<input type="radio" name="radio-group-d1" checked disabled><span></span> Yes
</label>
<label class="css-input css-input-disabled css-radio css-radio-primary">
<input type="radio" name="radio-group-d1" disabled><span></span> No
</label>
</div>
<div class="col-xs-6">
<label class="css-input css-input-disabled css-radio css-radio-danger push-10-r">
<input type="radio" name="radio-group-d2" checked disabled><span></span> Agree
</label>
<label class="css-input css-input-disabled css-radio css-radio-danger">
<input type="radio" name="radio-group-d2" disabled><span></span> Disagree
</label>
</div>
</div>
</div>
</div>
</div>
</div>
<h2 class="content-heading">CSS Checkboxes</h2>
<div class="row">
<div class="col-lg-4">
<div class="block">
<div class="block-header">
<h3 class="block-title">Colors</h3>
</div>
<div class="block-content">
<div class="row items-push">
<div class="col-xs-6">
<label class="css-input css-checkbox css-checkbox-default">
<input type="checkbox" checked><span></span> Default
</label>
</div>
<div class="col-xs-6">
<label class="css-input css-checkbox css-checkbox-primary">
<input type="checkbox" checked><span></span> Primary
</label>
</div>
<div class="col-xs-6">
<label class="css-input css-checkbox css-checkbox-info">
<input type="checkbox" checked><span></span> Info
</label>
</div>
<div class="col-xs-6">
<label class="css-input css-checkbox css-checkbox-success">
<input type="checkbox" checked><span></span> Success
</label>
</div>
<div class="col-xs-6">
<label class="css-input css-checkbox css-checkbox-warning">
<input type="checkbox" checked><span></span> Warning
</label>
</div>
<div class="col-xs-6">
<label class="css-input css-checkbox css-checkbox-danger">
<input type="checkbox" checked><span></span> Danger
</label>
</div>
</div>
</div>
</div>
</div>
<div class="col-lg-4">
<div class="block">
<div class="block-header">
<h3 class="block-title">Sizes</h3>
</div>
<div class="block-content">
<div class="row items-push">
<div class="col-xs-6">
<label class="css-input css-checkbox css-checkbox-sm css-checkbox-default">
<input type="checkbox" checked><span></span> Small
</label>
</div>
<div class="col-xs-6">
<label class="css-input css-checkbox css-checkbox-sm css-checkbox-primary">
<input type="checkbox" checked><span></span> Small
</label>
</div>
<div class="col-xs-6">
<label class="css-input css-checkbox css-checkbox-default">
<input type="checkbox" checked><span></span> Normal
</label>
</div>
<div class="col-xs-6">
<label class="css-input css-checkbox css-checkbox-primary">
<input type="checkbox" checked><span></span> Normal
</label>
</div>
<div class="col-xs-6">
<label class="css-input css-checkbox css-checkbox-lg css-checkbox-default">
<input type="checkbox" checked><span></span> Large
</label>
</div>
<div class="col-xs-6">
<label class="css-input css-checkbox css-checkbox-lg css-checkbox-primary">
<input type="checkbox" checked><span></span> Large
</label>
</div>
</div>
</div>
</div>
</div>
<div class="col-lg-4">
<div class="block">
<div class="block-header">
<h3 class="block-title">Shapes</h3>
</div>
<div class="block-content">
<div class="row items-push">
<div class="col-xs-6">
<label class="css-input css-checkbox css-checkbox-sm css-checkbox-default">
<input type="checkbox" checked><span></span> Square
</label>
</div>
<div class="col-xs-6">
<label class="css-input css-checkbox css-checkbox-rounded css-checkbox-sm css-checkbox-default">
<input type="checkbox" checked><span></span> Rounded
</label>
</div>
<div class="col-xs-6">
<label class="css-input css-checkbox css-checkbox-default">
<input type="checkbox" checked><span></span> Square
</label>
</div>
<div class="col-xs-6">
<label class="css-input css-checkbox css-checkbox-rounded css-checkbox-default">
<input type="checkbox" checked><span></span> Rounded
</label>
</div>
<div class="col-xs-6">
<label class="css-input css-checkbox css-checkbox-lg css-checkbox-default">
<input type="checkbox" checked><span></span> Square
</label>
</div>
<div class="col-xs-6">
<label class="css-input css-checkbox css-checkbox-rounded css-checkbox-lg css-checkbox-default">
<input type="checkbox" checked><span></span> Rounded
</label>
</div>
</div>
</div>
</div>
</div>
<div class="col-lg-12">
<div class="block">
<div class="block-header">
<h3 class="block-title">Disabled</h3>
</div>
<div class="block-content">
<div class="row items-push">
<div class="col-xs-6 col-sm-3">
<label class="css-input css-input-disabled css-checkbox css-checkbox-primary">
<input type="checkbox" checked disabled><span></span> Primary
</label>
</div>
<div class="col-xs-6 col-sm-3">
<label class="css-input css-input-disabled css-checkbox css-checkbox-warning">
<input type="checkbox" checked disabled><span></span> Warning
</label>
</div>
<div class="col-xs-6 col-sm-3">
<label class="css-input css-input-disabled css-checkbox css-checkbox-danger css-checkbox-rounded">
<input type="checkbox" checked disabled><span></span> Rounded
</label>
</div>
<div class="col-xs-6 col-sm-3">
<label class="css-input css-input-disabled css-checkbox css-checkbox-success">
<input type="checkbox" checked disabled><span></span> Square
</label>
</div>
</div>
</div>
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
</div><script src="assets/js/oneui.min-1.3.js"></script><script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create', 'UA-16158021-6', 'auto');ga('send', 'pageview');</script>
</body>
</html>