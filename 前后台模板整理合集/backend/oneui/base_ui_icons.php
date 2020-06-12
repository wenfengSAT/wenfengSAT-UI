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
<img class="img-avatar" src="assets/img/avatars/avatar4.jpg" alt="">
<i class="fa fa-circle text-success"></i> Evelyn Willis
<div class="font-w400 text-muted"><small>Copywriter</small></div>
</a>
</li>
<li>
<a href="base_pages_profile.php">
<img class="img-avatar" src="assets/img/avatars/avatar14.jpg" alt="">
<i class="fa fa-circle text-success"></i> Dennis Ross
<div class="font-w400 text-muted"><small>Web Developer</small></div>
</a>
</li>
<li>
<a href="base_pages_profile.php">
<img class="img-avatar" src="assets/img/avatars/avatar8.jpg" alt="">
<i class="fa fa-circle text-success"></i> Amber Walker
<div class="font-w400 text-muted"><small>Web Designer</small></div>
</a>
</li>
<li>
<a href="base_pages_profile.php">
<img class="img-avatar" src="assets/img/avatars/avatar3.jpg" alt="">
<i class="fa fa-circle text-warning"></i> Sara Holland
<div class="font-w400 text-muted"><small>Photographer</small></div>
</a>
</li>
<li>
<a href="base_pages_profile.php">
<img class="img-avatar" src="assets/img/avatars/avatar15.jpg" alt="">
<i class="fa fa-circle text-warning"></i> Donald Barnes
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
<li class="open">
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
<a class="active" href="base_ui_icons.php">Icons</a>
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
<li>
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
Icons <small>A huge collection of multi-purpose, uniquely designed, font icons.</small>
</h1>
</div>
<div class="col-sm-5 text-right hidden-xs">
<ol class="breadcrumb push-10-t">
<li>UI Elements</li>
<li><a class="link-effect" href="">Icons</a></li>
</ol>
</div>
</div>
</div>
<div class="content">
<form action="base_ui_icons.php" method="post" onsubmit="return false;">
<div class="input-group input-group-lg">
<div class="input-group-addon">Search</div>
<input class="js-icon-search form-control" type="text" placeholder="eg: Try home or user">
</div>
</form>
</div>
<div class="content">
<div class="block">
<div class="block-header">
<h3 class="block-title">Simple Line Icons <small>160 icons with base class <code>si</code></small></h3>
</div>
<div class="block-content">
<div class="js-icon-list row items-push-2x text-center">
<div class="col-sm-6 col-lg-3">
<p><i class="si si-action-redo fa-2x"></i></p>
<code>si-action-redo</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-action-undo fa-2x"></i></p>
<code>si-action-undo</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-anchor fa-2x"></i></p>
<code>si-anchor</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-arrow-down fa-2x"></i></p>
<code>si-arrow-down</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-arrow-left fa-2x"></i></p>
<code>si-arrow-left</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-arrow-right fa-2x"></i></p>
<code>si-arrow-right</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-arrow-up fa-2x"></i></p>
<code>si-arrow-up</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-badge fa-2x"></i></p>
<code>si-badge</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-bag fa-2x"></i></p>
<code>si-bag</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-ban fa-2x"></i></p>
<code>si-ban</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-bar-chart fa-2x"></i></p>
<code>si-bar-chart</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-basket fa-2x"></i></p>
<code>si-basket</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-basket-loaded fa-2x"></i></p>
<code>si-basket-loaded</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-bell fa-2x"></i></p>
<code>si-bell</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-book-open fa-2x"></i></p>
<code>si-book-open</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-briefcase fa-2x"></i></p>
<code>si-briefcase</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-bubble fa-2x"></i></p>
<code>si-bubble</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-bubbles fa-2x"></i></p>
<code>si-bubbles</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-bulb fa-2x"></i></p>
<code>si-bulb</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-calculator fa-2x"></i></p>
<code>si-calculator</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-calendar fa-2x"></i></p>
<code>si-calendar</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-call-end fa-2x"></i></p>
<code>si-call-end</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-call-in fa-2x"></i></p>
<code>si-call-in</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-call-out fa-2x"></i></p>
<code>si-call-out</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-camcorder fa-2x"></i></p>
<code>si-camcorder</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-camera fa-2x"></i></p>
<code>si-camera</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-check fa-2x"></i></p>
<code>si-check</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-chemistry fa-2x"></i></p>
<code>si-chemistry</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-clock fa-2x"></i></p>
<code>si-clock</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-close fa-2x"></i></p>
<code>si-close</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-cloud-download fa-2x"></i></p>
<code>si-cloud-download</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-cloud-upload fa-2x"></i></p>
<code>si-cloud-upload</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-compass fa-2x"></i></p>
<code>si-compass</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-control-end fa-2x"></i></p>
<code>si-control-end</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-control-forward fa-2x"></i></p>
<code>si-control-forward</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-control-pause fa-2x"></i></p>
<code>si-control-pause</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-control-play fa-2x"></i></p>
<code>si-control-play</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-control-rewind fa-2x"></i></p>
<code>si-control-rewind</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-control-start fa-2x"></i></p>
<code>si-control-start</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-credit-card fa-2x"></i></p>
<code>si-credit-card</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-crop fa-2x"></i></p>
<code>si-crop</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-cup fa-2x"></i></p>
<code>si-cup</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-cursor fa-2x"></i></p>
<code>si-cursor</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-cursor-move fa-2x"></i></p>
<code>si-cursor-move</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-diamond fa-2x"></i></p>
<code>si-diamond</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-direction fa-2x"></i></p>
<code>si-direction</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-directions fa-2x"></i></p>
<code>si-directions</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-disc fa-2x"></i></p>
<code>si-disc</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-dislike fa-2x"></i></p>
<code>si-dislike</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-doc fa-2x"></i></p>
<code>si-doc</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-docs fa-2x"></i></p>
<code>si-docs</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-drawer fa-2x"></i></p>
<code>si-drawer</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-drop fa-2x"></i></p>
<code>si-drop</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-earphones fa-2x"></i></p>
<code>si-earphones</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-earphones-alt fa-2x"></i></p>
<code>si-earphones-alt</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-emoticon-smile fa-2x"></i></p>
<code>si-emoticon-smile</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-energy fa-2x"></i></p>
<code>si-energy</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-envelope fa-2x"></i></p>
<code>si-envelope</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-envelope-letter fa-2x"></i></p>
<code>si-envelope-letter</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-envelope-open fa-2x"></i></p>
<code>si-envelope-open</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-equalizer fa-2x"></i></p>
<code>si-equalizer</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-eye fa-2x"></i></p>
<code>si-eye</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-eyeglasses fa-2x"></i></p>
<code>si-eyeglasses</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-feed fa-2x"></i></p>
<code>si-feed</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-film fa-2x"></i></p>
<code>si-film</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-fire fa-2x"></i></p>
<code>si-fire</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-flag fa-2x"></i></p>
<code>si-flag</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-folder fa-2x"></i></p>
<code>si-folder</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-folder-alt fa-2x"></i></p>
<code>si-folder-alt</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-frame fa-2x"></i></p>
<code>si-frame</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-game-controller fa-2x"></i></p>
<code>si-game-controller</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-ghost fa-2x"></i></p>
<code>si-ghost</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-globe fa-2x"></i></p>
<code>si-globe</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-globe-alt fa-2x"></i></p>
<code>si-globe-alt</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-graduation fa-2x"></i></p>
<code>si-graduation</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-graph fa-2x"></i></p>
<code>si-graph</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-grid fa-2x"></i></p>
<code>si-grid</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-handbag fa-2x"></i></p>
<code>si-handbag</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-heart fa-2x"></i></p>
<code>si-heart</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-home fa-2x"></i></p>
<code>si-home</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-hourglass fa-2x"></i></p>
<code>si-hourglass</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-info fa-2x"></i></p>
<code>si-info</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-key fa-2x"></i></p>
<code>si-key</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-layers fa-2x"></i></p>
<code>si-layers</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-like fa-2x"></i></p>
<code>si-like</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-link fa-2x"></i></p>
<code>si-link</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-list fa-2x"></i></p>
<code>si-list</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-lock fa-2x"></i></p>
<code>si-lock</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-lock-open fa-2x"></i></p>
<code>si-lock-open</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-login fa-2x"></i></p>
<code>si-login</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-logout fa-2x"></i></p>
<code>si-logout</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-loop fa-2x"></i></p>
<code>si-loop</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-magic-wand fa-2x"></i></p>
<code>si-magic-wand</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-magnet fa-2x"></i></p>
<code>si-magnet</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-magnifier fa-2x"></i></p>
<code>si-magnifier</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-magnifier-add fa-2x"></i></p>
<code>si-magnifier-add</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-magnifier-remove fa-2x"></i></p>
<code>si-magnifier-remove</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-map fa-2x"></i></p>
<code>si-map</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-microphone fa-2x"></i></p>
<code>si-microphone</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-mouse fa-2x"></i></p>
<code>si-mouse</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-moustache fa-2x"></i></p>
<code>si-moustache</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-music-tone fa-2x"></i></p>
<code>si-music-tone</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-music-tone-alt fa-2x"></i></p>
<code>si-music-tone-alt</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-note fa-2x"></i></p>
<code>si-note</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-notebook fa-2x"></i></p>
<code>si-notebook</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-paper-clip fa-2x"></i></p>
<code>si-paper-clip</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-paper-plane fa-2x"></i></p>
<code>si-paper-plane</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-pencil fa-2x"></i></p>
<code>si-pencil</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-picture fa-2x"></i></p>
<code>si-picture</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-pie-chart fa-2x"></i></p>
<code>si-pie-chart</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-pin fa-2x"></i></p>
<code>si-pin</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-plane fa-2x"></i></p>
<code>si-plane</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-playlist fa-2x"></i></p>
<code>si-playlist</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-plus fa-2x"></i></p>
<code>si-plus</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-pointer fa-2x"></i></p>
<code>si-pointer</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-power fa-2x"></i></p>
<code>si-power</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-present fa-2x"></i></p>
<code>si-present</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-printer fa-2x"></i></p>
<code>si-printer</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-puzzle fa-2x"></i></p>
<code>si-puzzle</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-question fa-2x"></i></p>
<code>si-question</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-refresh fa-2x"></i></p>
<code>si-refresh</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-reload fa-2x"></i></p>
<code>si-reload</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-rocket fa-2x"></i></p>
<code>si-rocket</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-screen-desktop fa-2x"></i></p>
<code>si-screen-desktop</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-screen-smartphone fa-2x"></i></p>
<code>si-screen-smartphone</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-screen-tablet fa-2x"></i></p>
<code>si-screen-tablet</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-settings fa-2x"></i></p>
<code>si-settings</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-share fa-2x"></i></p>
<code>si-share</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-share-alt fa-2x"></i></p>
<code>si-share-alt</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-shield fa-2x"></i></p>
<code>si-shield</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-shuffle fa-2x"></i></p>
<code>si-shuffle</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-size-actual fa-2x"></i></p>
<code>si-size-actual</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-size-fullscreen fa-2x"></i></p>
<code>si-size-fullscreen</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-social-dribbble fa-2x"></i></p>
<code>si-social-dribbble</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-social-dropbox fa-2x"></i></p>
<code>si-social-dropbox</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-social-facebook fa-2x"></i></p>
<code>si-social-facebook</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-social-tumblr fa-2x"></i></p>
<code>si-social-tumblr</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-social-twitter fa-2x"></i></p>
<code>si-social-twitter</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-social-youtube fa-2x"></i></p>
<code>si-social-youtube</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-speech fa-2x"></i></p>
<code>si-speech</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-speedometer fa-2x"></i></p>
<code>si-speedometer</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-star fa-2x"></i></p>
<code>si-star</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-support fa-2x"></i></p>
<code>si-support</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-symbol-female fa-2x"></i></p>
<code>si-symbol-female</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-symbol-male fa-2x"></i></p>
<code>si-symbol-male</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-tag fa-2x"></i></p>
<code>si-tag</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-target fa-2x"></i></p>
<code>si-target</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-trash fa-2x"></i></p>
<code>si-trash</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-trophy fa-2x"></i></p>
<code>si-trophy</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-umbrella fa-2x"></i></p>
<code>si-umbrella</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-user fa-2x"></i></p>
<code>si-user</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-user-female fa-2x"></i></p>
<code>si-user-female</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-user-follow fa-2x"></i></p>
<code>si-user-follow</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-user-following fa-2x"></i></p>
<code>si-user-following</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-user-unfollow fa-2x"></i></p>
<code>si-user-unfollow</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-users fa-2x"></i></p>
<code>si-users</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-vector fa-2x"></i></p>
<code>si-vector</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-volume-1 fa-2x"></i></p>
<code>si-volume-1</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-volume-2 fa-2x"></i></p>
<code>si-volume-2</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-volume-off fa-2x"></i></p>
<code>si-volume-off</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-wallet fa-2x"></i></p>
<code>si-wallet</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="si si-wrench fa-2x"></i></p>
<code>si-wrench</code>
</div>
</div>
</div>
</div>
<div class="block">
<div class="block-header">
<h3 class="block-title">Font Awesome <small>585 icons with base class <code>fa</code></small></h3>
</div>
<div class="block-content">
<div class="js-icon-list row items-push-2x text-center">
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-500px fa-2x"></i></p>
<code>fa-500px</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-adjust fa-2x"></i></p>
<code>fa-adjust</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-adn fa-2x"></i></p>
<code>fa-adn</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-align-center fa-2x"></i></p>
<code>fa-align-center</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-align-justify fa-2x"></i></p>
<code>fa-align-justify</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-align-left fa-2x"></i></p>
<code>fa-align-left</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-align-right fa-2x"></i></p>
<code>fa-align-right</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-amazon fa-2x"></i></p>
<code>fa-amazon</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-ambulance fa-2x"></i></p>
<code>fa-ambulance</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-anchor fa-2x"></i></p>
<code>fa-anchor</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-android fa-2x"></i></p>
<code>fa-android</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-angellist fa-2x"></i></p>
<code>fa-angellist</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-angle-double-down fa-2x"></i></p>
<code>fa-angle-double-down</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-angle-double-left fa-2x"></i></p>
<code>fa-angle-double-left</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-angle-double-right fa-2x"></i></p>
<code>fa-angle-double-right</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-angle-double-up fa-2x"></i></p>
<code>fa-angle-double-up</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-angle-down fa-2x"></i></p>
<code>fa-angle-down</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-angle-left fa-2x"></i></p>
<code>fa-angle-left</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-angle-right fa-2x"></i></p>
<code>fa-angle-right</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-angle-up fa-2x"></i></p>
<code>fa-angle-up</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-apple fa-2x"></i></p>
<code>fa-apple</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-archive fa-2x"></i></p>
<code>fa-archive</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-area-chart fa-2x"></i></p>
<code>fa-area-chart</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-arrow-circle-down fa-2x"></i></p>
<code>fa-arrow-circle-down</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-arrow-circle-left fa-2x"></i></p>
<code>fa-arrow-circle-left</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-arrow-circle-o-down fa-2x"></i></p>
<code>fa-arrow-circle-o-down</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-arrow-circle-o-left fa-2x"></i></p>
<code>fa-arrow-circle-o-left</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-arrow-circle-o-right fa-2x"></i></p>
<code>fa-arrow-circle-o-right</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-arrow-circle-o-up fa-2x"></i></p>
<code>fa-arrow-circle-o-up</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-arrow-circle-right fa-2x"></i></p>
<code>fa-arrow-circle-right</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-arrow-circle-up fa-2x"></i></p>
<code>fa-arrow-circle-up</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-arrow-down fa-2x"></i></p>
<code>fa-arrow-down</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-arrow-left fa-2x"></i></p>
<code>fa-arrow-left</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-arrow-right fa-2x"></i></p>
<code>fa-arrow-right</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-arrow-up fa-2x"></i></p>
<code>fa-arrow-up</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-arrows-alt fa-2x"></i></p>
<code>fa-arrows-alt</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-arrows-h fa-2x"></i></p>
<code>fa-arrows-h</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-arrows-v fa-2x"></i></p>
<code>fa-arrows-v</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-arrows fa-2x"></i></p>
<code>fa-arrows</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-asterisk fa-2x"></i></p>
<code>fa-asterisk</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-at fa-2x"></i></p>
<code>fa-at</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-automobile fa-2x"></i></p>
<code>fa-automobile</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-backward fa-2x"></i></p>
<code>fa-backward</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-balance-scale fa-2x"></i></p>
<code>fa-balance-scale</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-ban fa-2x"></i></p>
<code>fa-ban</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-bank fa-2x"></i></p>
<code>fa-bank</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-bar-chart fa-2x"></i></p>
<code>fa-bar-chart</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-bar-chart-o fa-2x"></i></p>
<code>fa-bar-chart-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-barcode fa-2x"></i></p>
<code>fa-barcode</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-bars fa-2x"></i></p>
<code>fa-bars</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-battery-0 fa-2x"></i></p>
<code>fa-battery-0</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-battery-1 fa-2x"></i></p>
<code>fa-battery-1</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-battery-2 fa-2x"></i></p>
<code>fa-battery-2</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-battery-3 fa-2x"></i></p>
<code>fa-battery-3</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-battery-4 fa-2x"></i></p>
<code>fa-battery-4</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-battery-empty fa-2x"></i></p>
<code>fa-battery-empty</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-battery-full fa-2x"></i></p>
<code>fa-battery-full</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-battery-half fa-2x"></i></p>
<code>fa-battery-half</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-battery-quarter fa-2x"></i></p>
<code>fa-battery-quarter</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-battery-three-quarters fa-2x"></i></p>
<code>fa-battery-three-quarters</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-bed fa-2x"></i></p>
<code>fa-bed</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-beer fa-2x"></i></p>
<code>fa-beer</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-behance fa-2x"></i></p>
<code>fa-behance</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-behance-square fa-2x"></i></p>
<code>fa-behance-square</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-bell fa-2x"></i></p>
<code>fa-bell</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-bell-o fa-2x"></i></p>
<code>fa-bell-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-bell-slash fa-2x"></i></p>
<code>fa-bell-slash</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-bell-slash-o fa-2x"></i></p>
<code>fa-bell-slash-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-bicycle fa-2x"></i></p>
<code>fa-bicycle</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-binoculars fa-2x"></i></p>
<code>fa-binoculars</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-birthday-cake fa-2x"></i></p>
<code>fa-birthday-cake</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-bitbucket fa-2x"></i></p>
<code>fa-bitbucket</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-bitbucket-square fa-2x"></i></p>
<code>fa-bitbucket-square</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-bitcoin fa-2x"></i></p>
<code>fa-bitcoin</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-black-tie fa-2x"></i></p>
<code>fa-black-tie</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-bold fa-2x"></i></p>
<code>fa-bold</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-bolt fa-2x"></i></p>
<code>fa-bolt</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-bomb fa-2x"></i></p>
<code>fa-bomb</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-book fa-2x"></i></p>
<code>fa-book</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-bookmark fa-2x"></i></p>
<code>fa-bookmark</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-bookmark-o fa-2x"></i></p>
<code>fa-bookmark-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-briefcase fa-2x"></i></p>
<code>fa-briefcase</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-btc fa-2x"></i></p>
<code>fa-btc</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-bug fa-2x"></i></p>
<code>fa-bug</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-building fa-2x"></i></p>
<code>fa-building</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-building-o fa-2x"></i></p>
<code>fa-building-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-bullhorn fa-2x"></i></p>
<code>fa-bullhorn</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-bullseye fa-2x"></i></p>
<code>fa-bullseye</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-bus fa-2x"></i></p>
<code>fa-bus</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-buysellads fa-2x"></i></p>
<code>fa-buysellads</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-cab fa-2x"></i></p>
<code>fa-cab</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-calculator fa-2x"></i></p>
<code>fa-calculator</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-calendar fa-2x"></i></p>
<code>fa-calendar</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-calendar-check-o fa-2x"></i></p>
<code>fa-calendar-check-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-calendar-minus-o fa-2x"></i></p>
<code>fa-calendar-minus-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-calendar-plus-o fa-2x"></i></p>
<code>fa-calendar-plus-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-calendar-times-o fa-2x"></i></p>
<code>fa-calendar-times-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-calendar-o fa-2x"></i></p>
<code>fa-calendar-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-camera fa-2x"></i></p>
<code>fa-camera</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-camera-retro fa-2x"></i></p>
<code>fa-camera-retro</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-car fa-2x"></i></p>
<code>fa-car</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-caret-down fa-2x"></i></p>
<code>fa-caret-down</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-caret-left fa-2x"></i></p>
<code>fa-caret-left</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-caret-right fa-2x"></i></p>
<code>fa-caret-right</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-caret-square-o-down fa-2x"></i></p>
<code>fa-caret-square-o-down</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-caret-square-o-left fa-2x"></i></p>
<code>fa-caret-square-o-left</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-caret-square-o-right fa-2x"></i></p>
<code>fa-caret-square-o-right</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-caret-square-o-up fa-2x"></i></p>
<code>fa-caret-square-o-up</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-caret-up fa-2x"></i></p>
<code>fa-caret-up</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-cart-arrow-down fa-2x"></i></p>
<code>fa-cart-arrow-down</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-cart-plus fa-2x"></i></p>
<code>fa-cart-plus</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-cc fa-2x"></i></p>
<code>fa-cc</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-cc-amex fa-2x"></i></p>
<code>fa-cc-amex</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-cc-diners-club fa-2x"></i></p>
<code>fa-cc-diners-club</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-cc-discover fa-2x"></i></p>
<code>fa-cc-discover</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-cc-jcb fa-2x"></i></p>
<code>fa-cc-jcb</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-cc-mastercard fa-2x"></i></p>
<code>fa-cc-mastercard</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-cc-paypal fa-2x"></i></p>
<code>fa-cc-paypal</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-cc-stripe fa-2x"></i></p>
<code>fa-cc-stripe</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-cc-visa fa-2x"></i></p>
<code>fa-cc-visa</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-certificate fa-2x"></i></p>
<code>fa-certificate</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-chain fa-2x"></i></p>
<code>fa-chain</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-chain-broken fa-2x"></i></p>
<code>fa-chain-broken</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-check fa-2x"></i></p>
<code>fa-check</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-check-circle fa-2x"></i></p>
<code>fa-check-circle</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-check-circle-o fa-2x"></i></p>
<code>fa-check-circle-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-check-square fa-2x"></i></p>
<code>fa-check-square</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-check-square-o fa-2x"></i></p>
<code>fa-check-square-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-chevron-circle-down fa-2x"></i></p>
<code>fa-chevron-circle-down</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-chevron-circle-left fa-2x"></i></p>
<code>fa-chevron-circle-left</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-chevron-circle-right fa-2x"></i></p>
<code>fa-chevron-circle-right</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-chevron-circle-up fa-2x"></i></p>
<code>fa-chevron-circle-up</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-chevron-down fa-2x"></i></p>
<code>fa-chevron-down</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-chevron-left fa-2x"></i></p>
<code>fa-chevron-left</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-chevron-right fa-2x"></i></p>
<code>fa-ch</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-chevron-up fa-2x"></i></p>
<code>fa-chevron-up</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-child fa-2x"></i></p>
<code>fa-child</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-chrome fa-2x"></i></p>
<code>fa-chrome</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-clone fa-2x"></i></p>
<code>fa-clone</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-circle fa-2x"></i></p>
<code>fa-circle</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-circle-o fa-2x"></i></p>
<code>fa-circle-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-circle-o-notch fa-2x"></i></p>
<code>fa-circle-o-notch</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-circle-thin fa-2x"></i></p>
<code>fa-circle-thin</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-clipboard fa-2x"></i></p>
<code>fa-clipboard</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-clock-o fa-2x"></i></p>
<code>fa-clock-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-close fa-2x"></i></p>
<code>fa-close</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-cloud fa-2x"></i></p>
<code>fa-cloud</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-cloud-download fa-2x"></i></p>
<code>fa-cloud-download</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-cloud-upload fa-2x"></i></p>
<code>fa-cloud-upload</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-cny fa-2x"></i></p>
<code>fa-cny</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-code fa-2x"></i></p>
<code>fa-code</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-code-fork fa-2x"></i></p>
<code>fa-code-fork</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-codepen fa-2x"></i></p>
<code>fa-codepen</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-coffee fa-2x"></i></p>
<code>fa-coffee</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-cog fa-2x"></i></p>
<code>fa-cog</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-cogs fa-2x"></i></p>
<code>fa-cogs</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-columns fa-2x"></i></p>
<code>fa-columns</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-comment fa-2x"></i></p>
<code>fa-comment</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-comment-o fa-2x"></i></p>
<code>fa-comment-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-comments fa-2x"></i></p>
<code>fa-comments</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-comments-o fa-2x"></i></p>
<code>fa-comments-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-commenting fa-2x"></i></p>
<code>fa-commenting</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-commenting-o fa-2x"></i></p>
<code>fa-commenting-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-compass fa-2x"></i></p>
<code>fa-compass</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-compress fa-2x"></i></p>
<code>fa-compress</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-connectdevelop fa-2x"></i></p>
<code>fa-connectdevelop</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-contao fa-2x"></i></p>
<code>fa-contao</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-copy fa-2x"></i></p>
<code>fa-copy</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-copyright fa-2x"></i></p>
<code>fa-copyright</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-creative-commons fa-2x"></i></p>
<code>fa-creative-commons</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-credit-card fa-2x"></i></p>
<code>fa-credit-card</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-crop fa-2x"></i></p>
<code>fa-crop</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-crosshairs fa-2x"></i></p>
<code>fa-crosshairs</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-css3 fa-2x"></i></p>
<code>fa-css3</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-cube fa-2x"></i></p>
<code>fa-cube</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-cubes fa-2x"></i></p>
<code>fa-cubes</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-cut fa-2x"></i></p>
<code>fa-cut</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-cutlery fa-2x"></i></p>
<code>fa-cutlery</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-dashboard fa-2x"></i></p>
<code>fa-dashboard</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-dashcube fa-2x"></i></p>
<code>fa-dashcube</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-database fa-2x"></i></p>
<code>fa-database</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-dedent fa-2x"></i></p>
<code>fa-dedent</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-delicious fa-2x"></i></p>
<code>fa-delicious</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-desktop fa-2x"></i></p>
<code>fa-desktop</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-deviantart fa-2x"></i></p>
<code>fa-deviantart</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-diamond fa-2x"></i></p>
<code>fa-diamond</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-digg fa-2x"></i></p>
<code>fa-digg</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-dollar fa-2x"></i></p>
<code>fa-dollar</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-dot-circle-o fa-2x"></i></p>
<code>fa-dot-circle-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-download fa-2x"></i></p>
<code>fa-download</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-dribbble fa-2x"></i></p>
<code>fa-dribbble</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-dropbox fa-2x"></i></p>
<code>fa-dropbox</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-drupal fa-2x"></i></p>
<code>fa-drupal</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-edit fa-2x"></i></p>
<code>fa-edit</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-eject fa-2x"></i></p>
<code>fa-eject</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-ellipsis-h fa-2x"></i></p>
<code>fa-ellipsis-h</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-ellipsis-v fa-2x"></i></p>
<code>fa-ellipsis-v</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-empire fa-2x"></i></p>
<code>fa-empire</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-envelope fa-2x"></i></p>
<code>fa-envelope</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-envelope-o fa-2x"></i></p>
<code>fa-envelope-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-envelope-square fa-2x"></i></p>
<code>fa-envelope-square</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-eraser fa-2x"></i></p>
<code>fa-eraser</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-eur fa-2x"></i></p>
<code>fa-eur</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-euro fa-2x"></i></p>
<code>fa-euro</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-exchange fa-2x"></i></p>
<code>fa-exchange</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-exclamation fa-2x"></i></p>
<code>fa-exclamation</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-exclamation-circle fa-2x"></i></p>
<code>fa-exclamation-circle</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-exclamation-triangle fa-2x"></i></p>
<code>fa-exclamation-triangle</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-expand fa-2x"></i></p>
<code>fa-expand</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-expeditedssl fa-2x"></i></p>
<code>fa-expeditedssl</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-external-link fa-2x"></i></p>
<code>fa-external-link</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-external-link-square fa-2x"></i></p>
<code>fa-external-link-square</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-eye fa-2x"></i></p>
<code>fa-eye</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-eye-slash fa-2x"></i></p>
<code>fa-eye-slash</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-eyedropper fa-2x"></i></p>
<code>fa-eyedropper</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-facebook fa-2x"></i></p>
<code>fa-facebook</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-facebook-f fa-2x"></i></p>
<code>fa-facebook-f</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-facebook-official fa-2x"></i></p>
<code>fa-facebook-official</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-facebook-square fa-2x"></i></p>
<code>fa-facebook-square</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-fast-backward fa-2x"></i></p>
<code>fa-fast-backward</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-fast-forward fa-2x"></i></p>
<code>fa-fast-forward</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-fax fa-2x"></i></p>
<code>fa-fax</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-female fa-2x"></i></p>
<code>fa-female</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-fighter-jet fa-2x"></i></p>
<code>fa-fighter-jet</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-file fa-2x"></i></p>
<code>fa-file</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-file-archive-o fa-2x"></i></p>
<code>fa-file-archive-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-file-audio-o fa-2x"></i></p>
<code>fa-file-audio-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-file-code-o fa-2x"></i></p>
<code>fa-file-code-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-file-excel-o fa-2x"></i></p>
<code>fa-file-excel-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-file-image-o fa-2x"></i></p>
<code>fa-file-image-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-file-movie-o fa-2x"></i></p>
<code>fa-file-movie-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-file-o fa-2x"></i></p>
<code>fa-file-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-file-pdf-o fa-2x"></i></p>
<code>fa-file-pdf-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-file-photo-o fa-2x"></i></p>
<code>fa-file-photo-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-file-picture-o fa-2x"></i></p>
<code>fa-file-picture-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-file-powerpoint-o fa-2x"></i></p>
<code>fa-file-powerpoint-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-file-sound-o fa-2x"></i></p>
<code>fa-file-sound-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-file-text fa-2x"></i></p>
<code>fa-file-text</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-file-text-o fa-2x"></i></p>
<code>fa-file-text-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-file-video-o fa-2x"></i></p>
<code>fa-file-video-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-file-word-o fa-2x"></i></p>
<code>fa-file-word-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-file-zip-o fa-2x"></i></p>
<code>fa-name11</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-files-o fa-2x"></i></p>
<code>fa-files-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-film fa-2x"></i></p>
<code>fa-film</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-filter fa-2x"></i></p>
<code>fa-filter</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-fire fa-2x"></i></p>
<code>fa-fire</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-fire-extinguisher fa-2x"></i></p>
<code>fa-fire-extinguisher</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-firefox fa-2x"></i></p>
<code>fa-firefox</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-flag fa-2x"></i></p>
<code>fa-flag</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-flag-checkered fa-2x"></i></p>
<code>fa-flag-checkered</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-flag-o fa-2x"></i></p>
<code>fa-flag-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-flash fa-2x"></i></p>
<code>fa-flash</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-flask fa-2x"></i></p>
<code>fa-flask</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-flickr fa-2x"></i></p>
<code>fa-flickr</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-floppy-o fa-2x"></i></p>
<code>fa-floppy-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-folder fa-2x"></i></p>
<code>fa-folder</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-folder-o fa-2x"></i></p>
<code>fa-folder-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-folder-open fa-2x"></i></p>
<code>fa-folder-open</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-folder-open-o fa-2x"></i></p>
<code>fa-folder-open-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-font fa-2x"></i></p>
<code>fa-font</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-fonticons fa-2x"></i></p>
<code>fa-fonticons</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-forumbee fa-2x"></i></p>
<code>fa-forumbee</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-forward fa-2x"></i></p>
<code>fa-forward</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-foursquare fa-2x"></i></p>
<code>fa-foursquare</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-frown-o fa-2x"></i></p>
<code>fa-frown-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-futbol-o fa-2x"></i></p>
<code>fa-futbol-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-gamepad fa-2x"></i></p>
<code>fa-gamepad</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-gavel fa-2x"></i></p>
<code>fa-gavel</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-gbp fa-2x"></i></p>
<code>fa-gbp</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-ge fa-2x"></i></p>
<code>fa-ge</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-gear fa-2x"></i></p>
<code>fa-gear</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-gears fa-2x"></i></p>
<code>fa-gears</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-genderless fa-2x"></i></p>
<code>fa-genderless</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-get-pocket fa-2x"></i></p>
<code>fa-get-pocket</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-gg fa-2x"></i></p>
<code>fa-gg</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-gg-circle fa-2x"></i></p>
<code>fa-gg-circle</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-gift fa-2x"></i></p>
<code>fa-gift</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-git fa-2x"></i></p>
<code>fa-git</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-git-square fa-2x"></i></p>
<code>fa-git-square</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-github fa-2x"></i></p>
<code>fa-github</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-github-alt fa-2x"></i></p>
<code>fa-github-alt</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-github-square fa-2x"></i></p>
<code>fa-github-square</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-gittip fa-2x"></i></p>
<code>fa-gittip</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-glass fa-2x"></i></p>
<code>fa-glass</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-globe fa-2x"></i></p>
<code>fa-globe</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-google fa-2x"></i></p>
<code>fa-google</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-google-plus fa-2x"></i></p>
<code>fa-google-plus</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-google-plus-square fa-2x"></i></p>
<code>fa-google-plus-square</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-google-wallet fa-2x"></i></p>
<code>fa-google-wallet</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-graduation-cap fa-2x"></i></p>
<code>fa-graduation-cap</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-gratipay fa-2x"></i></p>
<code>fa-gratipay</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-group fa-2x"></i></p>
<code>fa-group</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-h-square fa-2x"></i></p>
<code>fa-h-square</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-hacker-news fa-2x"></i></p>
<code>fa-hacker-news</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-hand-grab-o fa-2x"></i></p>
<code>fa-hand-grab-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-hand-lizard-o fa-2x"></i></p>
<code>fa-hand-lizard-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-hand-paper-o fa-2x"></i></p>
<code>fa-hand-paper-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-hand-peace-o fa-2x"></i></p>
<code>fa-hand-peace-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-hand-pointer-o fa-2x"></i></p>
<code>fa-hand-pointer-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-hand-rock-o fa-2x"></i></p>
<code>fa-hand-rock-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-hand-scissors-o fa-2x"></i></p>
<code>fa-hand-scissors-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-hand-spock-o fa-2x"></i></p>
<code>fa-hand-spock-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-hand-stop-o fa-2x"></i></p>
<code>fa-hand-stop-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-hand-o-down fa-2x"></i></p>
<code>fa-hand-o-down</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-hand-o-left fa-2x"></i></p>
<code>fa-hand-o-left</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-hand-o-right fa-2x"></i></p>
<code>fa-hand-o-right</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-hand-o-up fa-2x"></i></p>
<code>fa-hand-o-up</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-hdd-o fa-2x"></i></p>
<code>fa-hdd-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-header fa-2x"></i></p>
<code>fa-header</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-headphones fa-2x"></i></p>
<code>fa-headphones</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-heart fa-2x"></i></p>
<code>fa-heart</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-heart-o fa-2x"></i></p>
<code>fa-heart-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-heartbeat fa-2x"></i></p>
<code>fa-heartbeat</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-history fa-2x"></i></p>
<code>fa-history</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-home fa-2x"></i></p>
<code>fa-home</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-hospital-o fa-2x"></i></p>
<code>fa-hospital-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-hotel fa-2x"></i></p>
<code>fa-hotel</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-hourglass fa-2x"></i></p>
<code>fa-hourglass</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-hourglass-1 fa-2x"></i></p>
<code>fa-hourglass-1</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-hourglass-2 fa-2x"></i></p>
<code>fa-hourglass-2</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-hourglass-3 fa-2x"></i></p>
<code>fa-hourglass-3</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-hourglass-end fa-2x"></i></p>
<code>fa-hourglass-end</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-hourglass-half fa-2x"></i></p>
<code>fa-hourglass-half</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-hourglass-o fa-2x"></i></p>
<code>fa-hourglass-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-hourglass-start fa-2x"></i></p>
<code>fa-hourglass-start</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-houzz fa-2x"></i></p>
<code>fa-houzz</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-html5 fa-2x"></i></p>
<code>fa-html5</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-i-cursor fa-2x"></i></p>
<code>fa-i-cursor</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-ils fa-2x"></i></p>
<code>fa-ils</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-image fa-2x"></i></p>
<code>fa-image</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-inbox fa-2x"></i></p>
<code>fa-inbox</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-indent fa-2x"></i></p>
<code>fa-indent</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-industry fa-2x"></i></p>
<code>fa-industry</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-info fa-2x"></i></p>
<code>fa-info</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-info-circle fa-2x"></i></p>
<code>fa-info-circle</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-inr fa-2x"></i></p>
<code>fa-inr</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-instagram fa-2x"></i></p>
<code>fa-instagram</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-institution fa-2x"></i></p>
<code>fa-institution</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-internet-explorer fa-2x"></i></p>
<code>fa-internet-explorer</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-ioxhost fa-2x"></i></p>
<code>fa-ioxhost</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-italic fa-2x"></i></p>
<code>fa-italic</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-joomla fa-2x"></i></p>
<code>fa-joomla</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-jpy fa-2x"></i></p>
<code>fa-jpy</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-jsfiddle fa-2x"></i></p>
<code>fa-jsfiddle</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-key fa-2x"></i></p>
<code>fa-key</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-keyboard-o fa-2x"></i></p>
<code>fa-keyboard-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-krw fa-2x"></i></p>
<code>fa-krw</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-language fa-2x"></i></p>
<code>fa-language</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-laptop fa-2x"></i></p>
<code>fa-laptop</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-lastfm fa-2x"></i></p>
<code>fa-lastfm</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-lastfm-square fa-2x"></i></p>
<code>fa-lastfm-square</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-leaf fa-2x"></i></p>
<code>fa-leaf</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-leanpub fa-2x"></i></p>
<code>fa-leanpub</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-legal fa-2x"></i></p>
<code>fa-legal</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-lemon-o fa-2x"></i></p>
<code>fa-lemon-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-level-down fa-2x"></i></p>
<code>fa-level-down</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-level-up fa-2x"></i></p>
<code>fa-level-up</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-life-bouy fa-2x"></i></p>
<code>fa-life-bouy</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-life-buoy fa-2x"></i></p>
<code>fa-life-buoy</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-life-ring fa-2x"></i></p>
<code>fa-life-ring</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-life-saver fa-2x"></i></p>
<code>fa-life-saver</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-lightbulb-o fa-2x"></i></p>
<code>fa-lightbulb-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-line-chart fa-2x"></i></p>
<code>fa-line-chart</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-link fa-2x"></i></p>
<code>fa-link</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-linkedin fa-2x"></i></p>
<code>fa-linkedin</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-linkedin-square fa-2x"></i></p>
<code>fa-linkedin-square</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-linux fa-2x"></i></p>
<code>fa-linux</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-list-alt fa-2x"></i></p>
<code>fa-list-alt</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-list-ol fa-2x"></i></p>
<code>fa-list-ol</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-list-ul fa-2x"></i></p>
<code>fa-list-ul</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-location-arrow fa-2x"></i></p>
<code>fa-location-arrow</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-lock fa-2x"></i></p>
<code>fa-lock</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-long-arrow-down fa-2x"></i></p>
<code>fa-long-arrow-down</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-long-arrow-left fa-2x"></i></p>
<code>fa-long-arrow-left</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-long-arrow-right fa-2x"></i></p>
<code>fa-long-arrow-right</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-long-arrow-up fa-2x"></i></p>
<code>fa-long-arrow-up</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-magic fa-2x"></i></p>
<code>fa-magic</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-magnet fa-2x"></i></p>
<code>fa-magnet</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-mail-forward fa-2x"></i></p>
<code>fa-mail-forward</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-mail-reply fa-2x"></i></p>
<code>fa-mail-reply</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-mail-reply-all fa-2x"></i></p>
<code>fa-mail-reply-all</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-male fa-2x"></i></p>
<code>fa-male</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-map fa-2x"></i></p>
<code>fa-map</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-map-marker fa-2x"></i></p>
<code>fa-map-marker</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-map-o fa-2x"></i></p>
<code>fa-map-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-map-pin fa-2x"></i></p>
<code>fa-map-pin</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-map-signs fa-2x"></i></p>
<code>fa-map-signs</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-mars fa-2x"></i></p>
<code>fa-mars</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-mars-double fa-2x"></i></p>
<code>fa-mars-double</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-mars-stroke fa-2x"></i></p>
<code>fa-mars-stroke</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-mars-stroke-h fa-2x"></i></p>
<code>fa-mars-stroke-h</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-mars-stroke-v fa-2x"></i></p>
<code>fa-mars-stroke-v</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-maxcdn fa-2x"></i></p>
<code>fa-maxcdn</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-meanpath fa-2x"></i></p>
<code>fa-meanpath</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-medium fa-2x"></i></p>
<code>fa-medium</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-medkit fa-2x"></i></p>
<code>fa-medkit</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-meh-o fa-2x"></i></p>
<code>fa-meh-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-mercury fa-2x"></i></p>
<code>fa-mercury</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-microphone fa-2x"></i></p>
<code>fa-microphone</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-microphone-slash fa-2x"></i></p>
<code>fa-microphone-slash</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-minus fa-2x"></i></p>
<code>fa-minus</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-minus-circle fa-2x"></i></p>
<code>fa-minus-circle</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-minus-square fa-2x"></i></p>
<code>fa-minus-square</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-minus-square-o fa-2x"></i></p>
<code>fa-minus-square-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-mobile fa-2x"></i></p>
<code>fa-mobile</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-mobile-phone fa-2x"></i></p>
<code>fa-mobile-phone</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-money fa-2x"></i></p>
<code>fa-money</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-moon-o fa-2x"></i></p>
<code>fa-moon-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-mortar-board fa-2x"></i></p>
<code>fa-mortar-board</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-motorcycle fa-2x"></i></p>
<code>fa-motorcycle</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-mouse-pointer fa-2x"></i></p>
<code>fa-mouse-pointer</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-music fa-2x"></i></p>
<code>fa-music</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-navicon fa-2x"></i></p>
<code>fa-navicon</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-neuter fa-2x"></i></p>
<code>fa-neuter</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-newspaper-o fa-2x"></i></p>
<code>fa-newspaper-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-object-group fa-2x"></i></p>
<code>fa-object-group</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-object-ungroup fa-2x"></i></p>
<code>fa-object-ungroup</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-odnoklassniki fa-2x"></i></p>
<code>fa-odnoklassniki</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-odnoklassniki-square fa-2x"></i></p>
<code>fa-odnoklassniki-square</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-opencart fa-2x"></i></p>
<code>fa-opencart</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-openid fa-2x"></i></p>
<code>fa-openid</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-opera fa-2x"></i></p>
<code>fa-opera</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-optin-monster fa-2x"></i></p>
<code>fa-optin-monster</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-outdent fa-2x"></i></p>
<code>fa-outdent</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-pagelines fa-2x"></i></p>
<code>fa-pagelines</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-paint-brush fa-2x"></i></p>
<code>fa-paint-brush</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-paper-plane fa-2x"></i></p>
<code>fa-paper-plane</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-paper-plane-o fa-2x"></i></p>
<code>fa-paper-plane-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-paperclip fa-2x"></i></p>
<code>fa-paperclip</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-paragraph fa-2x"></i></p>
<code>fa-paragraph</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-paste fa-2x"></i></p>
<code>fa-paste</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-pause fa-2x"></i></p>
<code>fa-pause</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-paw fa-2x"></i></p>
<code>fa-paw</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-paypal fa-2x"></i></p>
<code>fa-paypal</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-pencil fa-2x"></i></p>
<code>fa-pencil</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-pencil-square fa-2x"></i></p>
<code>fa-pencil-square</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-pencil-square-o fa-2x"></i></p>
<code>fa-pencil-square-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-phone fa-2x"></i></p>
<code>fa-phone</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-phone-square fa-2x"></i></p>
<code>fa-phone-square</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-photo fa-2x"></i></p>
<code>fa-photo</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-picture-o fa-2x"></i></p>
<code>fa-picture-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-pie-chart fa-2x"></i></p>
<code>fa-pie-chart</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-pied-piper fa-2x"></i></p>
<code>fa-pied-piper</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-pied-piper-alt fa-2x"></i></p>
<code>fa-pied-piper-alt</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-pinterest fa-2x"></i></p>
<code>fa-pinterest</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-pinterest-p fa-2x"></i></p>
<code>fa-pinterest-p</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-pinterest-square fa-2x"></i></p>
<code>fa-pinterest-square</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-plane fa-2x"></i></p>
<code>fa-plane</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-play fa-2x"></i></p>
<code>fa-play</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-play-circle fa-2x"></i></p>
<code>fa-play-circle</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-play-circle-o fa-2x"></i></p>
<code>fa-play-circle-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-plug fa-2x"></i></p>
<code>fa-plug</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-plus fa-2x"></i></p>
<code>fa-plus</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-plus-circle fa-2x"></i></p>
<code>fa-plus-circle</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-plus-square fa-2x"></i></p>
<code>fa-plus-square</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-plus-square-o fa-2x"></i></p>
<code>fa-plus-square-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-power-off fa-2x"></i></p>
<code>fa-power-off</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-print fa-2x"></i></p>
<code>fa-print</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-puzzle-piece fa-2x"></i></p>
<code>fa-puzzle-piece</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-qq fa-2x"></i></p>
<code>fa-qq</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-qrcode fa-2x"></i></p>
<code>fa-qrcode</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-question fa-2x"></i></p>
<code>fa-question</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-question-circle fa-2x"></i></p>
<code>fa-question-circle</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-quote-left fa-2x"></i></p>
<code>fa-quote-left</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-quote-right fa-2x"></i></p>
<code>fa-quote-right</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-ra fa-2x"></i></p>
<code>fa-ra</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-random fa-2x"></i></p>
<code>fa-random</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-rebel fa-2x"></i></p>
<code>fa-rebel</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-recycle fa-2x"></i></p>
<code>fa-recycle</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-reddit fa-2x"></i></p>
<code>fa-reddit</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-reddit-square fa-2x"></i></p>
<code>fa-reddit-square</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-refresh fa-2x"></i></p>
<code>fa-refresh</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-registered fa-2x"></i></p>
<code>fa-registered</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-remove fa-2x"></i></p>
<code>fa-remove</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-renren fa-2x"></i></p>
<code>fa-renren</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-reorder fa-2x"></i></p>
<code>fa-reorder</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-repeat fa-2x"></i></p>
<code>fa-repeat</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-reply fa-2x"></i></p>
<code>fa-reply</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-reply-all fa-2x"></i></p>
<code>fa-reply-all</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-retweet fa-2x"></i></p>
<code>fa-retweet</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-rmb fa-2x"></i></p>
<code>fa-rmb</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-road fa-2x"></i></p>
<code>fa-road</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-rocket fa-2x"></i></p>
<code>fa-rocket</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-rouble fa-2x"></i></p>
<code>fa-rouble</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-safari fa-2x"></i></p>
<code>fa-safari</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-save fa-2x"></i></p>
<code>fa-save</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-scissors fa-2x"></i></p>
<code>fa-scissors</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-search fa-2x"></i></p>
<code>fa-search</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-search-minus fa-2x"></i></p>
<code>fa-search-minus</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-search-plus fa-2x"></i></p>
<code>fa-search-plus</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-sellsy fa-2x"></i></p>
<code>fa-sellsy</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-send fa-2x"></i></p>
<code>fa-send</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-send-o fa-2x"></i></p>
<code>fa-send-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-server fa-2x"></i></p>
<code>fa-server</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-share fa-2x"></i></p>
<code>fa-share</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-share-alt fa-2x"></i></p>
<code>fa-share-alt</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-share-alt-square fa-2x"></i></p>
<code>fa-share-alt-square</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-share-square fa-2x"></i></p>
<code>fa-share-square</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-square-o fa-2x"></i></p>
<code>fa-square-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-share-square-o fa-2x"></i></p>
<code>fa-share-square-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-shekel fa-2x"></i></p>
<code>fa-shekel</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-sheqel fa-2x"></i></p>
<code>fa-sheqel</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-shield fa-2x"></i></p>
<code>fa-shield</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-ship fa-2x"></i></p>
<code>fa-ship</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-shirtsinbulk fa-2x"></i></p>
<code>fa-shirtsinbulk</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-shopping-cart fa-2x"></i></p>
<code>fa-shopping-cart</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-sign-in fa-2x"></i></p>
<code>fa-sign-in</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-sign-out fa-2x"></i></p>
<code>fa-sign-out</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-signal fa-2x"></i></p>
<code>fa-signal</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-simplybuilt fa-2x"></i></p>
<code>fa-simplybuilt</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-sitemap fa-2x"></i></p>
<code>fa-sitemap</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-skyatlas fa-2x"></i></p>
<code>fa-skyatlas</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-skype fa-2x"></i></p>
<code>fa-skype</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-slack fa-2x"></i></p>
<code>fa-slack</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-sliders fa-2x"></i></p>
<code>fa-sliders</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-slideshare fa-2x"></i></p>
<code>fa-slideshare</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-smile-o fa-2x"></i></p>
<code>fa-smile-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-soccer-ball-o fa-2x"></i></p>
<code>fa-soccer-ball-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-sort fa-2x"></i></p>
<code>fa-sort</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-sort-alpha-asc fa-2x"></i></p>
<code>fa-sort-alpha-asc</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-sort-alpha-desc fa-2x"></i></p>
<code>fa-sort-alpha-desc</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-sort-amount-asc fa-2x"></i></p>
<code>fa-sort-amount-asc</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-sort-amount-desc fa-2x"></i></p>
<code>fa-sort-amount-desc</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-sort-asc fa-2x"></i></p>
<code>fa-sort-asc</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-sort-desc fa-2x"></i></p>
<code>fa-sort-desc</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-sort-down fa-2x"></i></p>
<code>fa-sort-down</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-sort-numeric-asc fa-2x"></i></p>
<code>fa-sort-numeric-asc</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-sort-numeric-desc fa-2x"></i></p>
<code>fa-sort-numeric-desc</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-sort-up fa-2x"></i></p>
<code>fa-sort-up</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-soundcloud fa-2x"></i></p>
<code>fa-soundcloud</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-space-shuttle fa-2x"></i></p>
<code>fa-space-shuttle</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-spinner fa-2x"></i></p>
<code>fa-spinner</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-spoon fa-2x"></i></p>
<code>fa-spoon</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-spotify fa-2x"></i></p>
<code>fa-spotify</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-square fa-2x"></i></p>
<code>fa-square</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-stack-exchange fa-2x"></i></p>
<code>fa-stack-exchange</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-stack-overflow fa-2x"></i></p>
<code>fa-stack-overflow</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-star fa-2x"></i></p>
<code>fa-star</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-star-half fa-2x"></i></p>
<code>fa-star-half</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-star-half-empty fa-2x"></i></p>
<code>fa-star-half-empty</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-star-half-full fa-2x"></i></p>
<code>fa-star-half-full</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-star-half-o fa-2x"></i></p>
<code>fa-star-half-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-star-o fa-2x"></i></p>
<code>fa-star-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-steam fa-2x"></i></p>
<code>fa-steam</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-steam-square fa-2x"></i></p>
<code>fa-steam-square</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-step-backward fa-2x"></i></p>
<code>fa-step-backward</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-step-forward fa-2x"></i></p>
<code>fa-step-forward</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-stethoscope fa-2x"></i></p>
<code>fa-stethoscope</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-sticky-note fa-2x"></i></p>
<code>fa-sticky-note</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-sticky-note-o fa-2x"></i></p>
<code>fa-sticky-note-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-stop fa-2x"></i></p>
<code>fa-stop</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-street-view fa-2x"></i></p>
<code>fa-street-view</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-strikethrough fa-2x"></i></p>
<code>fa-strikethrough</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-stumbleupon fa-2x"></i></p>
<code>fa-stumbleupon</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-stumbleupon-circle fa-2x"></i></p>
<code>fa-stumbleupon-circle</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-subscript fa-2x"></i></p>
<code>fa-subscript</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-subway fa-2x"></i></p>
<code>fa-subway</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-suitcase fa-2x"></i></p>
<code>fa-suitcase</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-sun-o fa-2x"></i></p>
<code>fa-sun-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-superscript fa-2x"></i></p>
<code>fa-superscript</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-support fa-2x"></i></p>
<code>fa-support</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-table fa-2x"></i></p>
<code>fa-table</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-tablet fa-2x"></i></p>
<code>fa-tablet</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-tachometer fa-2x"></i></p>
<code>fa-tachometer</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-tag fa-2x"></i></p>
<code>fa-tag</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-tags fa-2x"></i></p>
<code>fa-tags</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-tasks fa-2x"></i></p>
<code>fa-tasks</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-taxi fa-2x"></i></p>
<code>fa-taxi</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-television fa-2x"></i></p>
<code>fa-television</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-tencent-weibo fa-2x"></i></p>
<code>fa-tencent-weibo</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-terminal fa-2x"></i></p>
<code>fa-terminal</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-text-height fa-2x"></i></p>
<code>fa-text-height</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-text-width fa-2x"></i></p>
<code>fa-text-width</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-th fa-2x"></i></p>
<code>fa-th</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-th-large fa-2x"></i></p>
<code>fa-th-large</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-th-list fa-2x"></i></p>
<code>fa-th-list</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-thumb-tack fa-2x"></i></p>
<code>fa-thumb-tack</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-thumbs-down fa-2x"></i></p>
<code>fa-thumbs-down</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-thumbs-o-down fa-2x"></i></p>
<code>fa-thumbs-o-down</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-thumbs-o-up fa-2x"></i></p>
<code>fa-thumbs-o-up</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-thumbs-up fa-2x"></i></p>
<code>fa-thumbs-up</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-ticket fa-2x"></i></p>
<code>fa-ticket</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-times fa-2x"></i></p>
<code>fa-times</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-times-circle fa-2x"></i></p>
<code>fa-times-circle</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-times-circle-o fa-2x"></i></p>
<code>fa-times-circle-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-tint fa-2x"></i></p>
<code>fa-tint</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-toggle-down fa-2x"></i></p>
<code>fa-toggle-down</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-toggle-left fa-2x"></i></p>
<code>fa-toggle-left</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-toggle-off fa-2x"></i></p>
<code>fa-toggle-off</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-toggle-on fa-2x"></i></p>
<code>fa-toggle-on</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-toggle-right fa-2x"></i></p>
<code>fa-toggle-right</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-toggle-up fa-2x"></i></p>
<code>fa-toggle-up</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-trademark fa-2x"></i></p>
<code>fa-trademark</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-train fa-2x"></i></p>
<code>fa-train</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-transgender fa-2x"></i></p>
<code>fa-transgender</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-transgender-alt fa-2x"></i></p>
<code>fa-transgender-alt</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-trash fa-2x"></i></p>
<code>fa-trash</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-trash-o fa-2x"></i></p>
<code>fa-trash-o</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-tree fa-2x"></i></p>
<code>fa-tree</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-trello fa-2x"></i></p>
<code>fa-trello</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-tripadvisor fa-2x"></i></p>
<code>fa-tripadvisor</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-trophy fa-2x"></i></p>
<code>fa-trophy</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-truck fa-2x"></i></p>
<code>fa-truck</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-try fa-2x"></i></p>
<code>fa-try</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-tty fa-2x"></i></p>
<code>fa-tty</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-tv fa-2x"></i></p>
<code>fa-tv</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-tumblr fa-2x"></i></p>
<code>fa-tumblr</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-tumblr-square fa-2x"></i></p>
<code>fa-tumblr-square</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-turkish-lira fa-2x"></i></p>
<code>fa-turkish-lira</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-twitch fa-2x"></i></p>
<code>fa-twitch</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-twitter fa-2x"></i></p>
<code>fa-twitter</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-twitter-square fa-2x"></i></p>
<code>fa-twitter-square</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-venus fa-2x"></i></p>
<code>fa-venus</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-venus-double fa-2x"></i></p>
<code>fa-venus-double</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-venus-mars fa-2x"></i></p>
<code>fa-venus-mars</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-viacoin fa-2x"></i></p>
<code>fa-viacoin</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-video-camera fa-2x"></i></p>
<code>fa-video-camera</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-vimeo fa-2x"></i></p>
<code>fa-vimeo</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-vimeo-square fa-2x"></i></p>
<code>fa-vimeo-square</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-vine fa-2x"></i></p>
<code>fa-vine</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-vk fa-2x"></i></p>
<code>fa-vk</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-volume-down fa-2x"></i></p>
<code>fa-volume-down</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-volume-off fa-2x"></i></p>
<code>fa-volume-off</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-volume-up fa-2x"></i></p>
<code>fa-volume-up</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-umbrella fa-2x"></i></p>
<code>fa-umbrella</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-underline fa-2x"></i></p>
<code>fa-underline</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-undo fa-2x"></i></p>
<code>fa-undo</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-university fa-2x"></i></p>
<code>fa-university</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-unlink fa-2x"></i></p>
<code>fa-unlink</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-unlock fa-2x"></i></p>
<code>fa-unlock</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-unlock-alt fa-2x"></i></p>
<code>fa-unlock-alt</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-unsorted fa-2x"></i></p>
<code>fa-unsorted</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-upload fa-2x"></i></p>
<code>fa-upload</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-usd fa-2x"></i></p>
<code>fa-usd</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-user fa-2x"></i></p>
<code>fa-user</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-user-md fa-2x"></i></p>
<code>fa-user-md</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-user-plus fa-2x"></i></p>
<code>fa-user-plus</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-user-secret fa-2x"></i></p>
<code>fa-user-secret</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-user-times fa-2x"></i></p>
<code>fa-user-times</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-users fa-2x"></i></p>
<code>fa-users</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-warning fa-2x"></i></p>
<code>fa-warning</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-wechat fa-2x"></i></p>
<code>fa-wechat</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-weibo fa-2x"></i></p>
<code>fa-weibo</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-weixin fa-2x"></i></p>
<code>fa-weixin</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-whatsapp fa-2x"></i></p>
<code>fa-whatsapp</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-wheelchair fa-2x"></i></p>
<code>fa-wheelchair</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-wifi fa-2x"></i></p>
<code>fa-wifi</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-wikipedia-w fa-2x"></i></p>
<code>fa-wikipedia-w</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-windows fa-2x"></i></p>
<code>fa-windows</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-won fa-2x"></i></p>
<code>fa-won</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-wordpress fa-2x"></i></p>
<code>fa-wordpress</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-wrench fa-2x"></i></p>
<code>fa-wrench</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-xing fa-2x"></i></p>
<code>fa-xing</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-xing-square fa-2x"></i></p>
<code>fa-xing-square</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-y-combinator fa-2x"></i></p>
<code>fa-y-combinator</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-y-combinator-square fa-2x"></i></p>
<code>fa-y-combinator-square</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-yahoo fa-2x"></i></p>
<code>fa-yahoo</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-yc fa-2x"></i></p>
<code>fa-yc</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-yc-square fa-2x"></i></p>
<code>fa-yc-square</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-yelp fa-2x"></i></p>
<code>fa-yelp</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-yen fa-2x"></i></p>
<code>fa-yen</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-youtube fa-2x"></i></p>
<code>fa-youtube</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-youtube-play fa-2x"></i></p>
<code>fa-youtube-play</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="fa fa-youtube-square fa-2x"></i></p>
<code>fa-youtube-square</code>
</div>
</div>
</div>
</div>
<div class="block">
<div class="block-header">
<h3 class="block-title">Glyphicons <small>260 icons with base class <code>glyphicon</code></small></h3>
</div>
<div class="block-content">
<div class="js-icon-list row items-push-2x text-center">
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-adjust fa-2x"></i></p>
<code>glyphicon-adjust</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-alert fa-2x"></i></p>
<code>glyphicon-alert</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-align-center fa-2x"></i></p>
<code>glyphicon-align-center</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-align-justify fa-2x"></i></p>
<code>glyphicon-align-justify</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-align-left fa-2x"></i></p>
<code>glyphicon-align-left</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-align-right fa-2x"></i></p>
<code>glyphicon-align-right</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-apple fa-2x"></i></p>
<code>glyphicon-apple</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-arrow-down fa-2x"></i></p>
<code>glyphicon-arrow-down</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-arrow-left fa-2x"></i></p>
<code>glyphicon-arrow-left</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-arrow-right fa-2x"></i></p>
<code>glyphicon-arrow-right</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-arrow-up fa-2x"></i></p>
<code>glyphicon-arrow-up</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-asterisk fa-2x"></i></p>
<code>glyphicon-asterisk</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-baby-formula fa-2x"></i></p>
<code>glyphicon-baby-formula</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-backward fa-2x"></i></p>
<code>glyphicon-backward</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-ban-circle fa-2x"></i></p>
<code>glyphicon-ban-circle</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-barcode fa-2x"></i></p>
<code>glyphicon-barcode</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-bed fa-2x"></i></p>
<code>glyphicon-bed</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-bell fa-2x"></i></p>
<code>glyphicon-bell</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-bishop fa-2x"></i></p>
<code>glyphicon-bishop</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-bitcoin fa-2x"></i></p>
<code>glyphicon-bitcoin</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-blackboard fa-2x"></i></p>
<code>glyphicon-blackboard</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-bold fa-2x"></i></p>
<code>glyphicon-bold</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-book fa-2x"></i></p>
<code>glyphicon-book</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-bookmark fa-2x"></i></p>
<code>glyphicon-bookmark</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-briefcase fa-2x"></i></p>
<code>glyphicon-briefcase</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-bullhorn fa-2x"></i></p>
<code>glyphicon-bullhorn</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-calendar fa-2x"></i></p>
<code>glyphicon-calendar</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-camera fa-2x"></i></p>
<code>glyphicon-camera</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-cd fa-2x"></i></p>
<code>glyphicon-cd</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-certificate fa-2x"></i></p>
<code>glyphicon-certificate</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-check fa-2x"></i></p>
<code>glyphicon-check</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-chevron-down fa-2x"></i></p>
<code>glyphicon-chevron-down</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-chevron-left fa-2x"></i></p>
<code>glyphicon-chevron-left</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-chevron-right fa-2x"></i></p>
<code>glyphicon-chevron-right</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-chevron-up fa-2x"></i></p>
<code>glyphicon-chevron-up</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-circle-arrow-down fa-2x"></i></p>
<code>glyphicon-circle-arrow-down</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-circle-arrow-left fa-2x"></i></p>
<code>glyphicon-circle-arrow-left</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-circle-arrow-right fa-2x"></i></p>
<code>glyphicon-circle-arrow-right</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-circle-arrow-up fa-2x"></i></p>
<code>glyphicon-circle-arrow-up</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-cloud fa-2x"></i></p>
<code>glyphicon-cloud</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-cloud-download fa-2x"></i></p>
<code>glyphicon-cloud-download</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-cloud-upload fa-2x"></i></p>
<code>glyphicon-cloud-upload</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-cog fa-2x"></i></p>
<code>glyphicon-cog</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-collapse-down fa-2x"></i></p>
<code>glyphicon-collapse-down</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-collapse-up fa-2x"></i></p>
<code>glyphicon-collapse-up</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-comment fa-2x"></i></p>
<code>glyphicon-comment</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-compressed fa-2x"></i></p>
<code>glyphicon-compressed</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-console fa-2x"></i></p>
<code>glyphicon-console</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-copy fa-2x"></i></p>
<code>glyphicon-copy</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-copyright-mark fa-2x"></i></p>
<code>glyphicon-copyright-mark</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-credit-card fa-2x"></i></p>
<code>glyphicon-credit-card</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-cutlery fa-2x"></i></p>
<code>glyphicon-cutlery</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-dashboard fa-2x"></i></p>
<code>glyphicon-dashboard</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-download fa-2x"></i></p>
<code>glyphicon-download</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-download-alt fa-2x"></i></p>
<code>glyphicon-download-alt</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-duplicate fa-2x"></i></p>
<code>glyphicon-duplicate</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-earphone fa-2x"></i></p>
<code>glyphicon-earphone</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-edit fa-2x"></i></p>
<code>glyphicon-edit</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-education fa-2x"></i></p>
<code>glyphicon-education</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-eject fa-2x"></i></p>
<code>glyphicon-eject</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-envelope fa-2x"></i></p>
<code>glyphicon-envelope</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-equalizer fa-2x"></i></p>
<code>glyphicon-equalizer</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-erase fa-2x"></i></p>
<code>glyphicon-erase</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-eur fa-2x"></i></p>
<code>glyphicon-eur</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-euro fa-2x"></i></p>
<code>glyphicon-euro</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-exclamation-sign fa-2x"></i></p>
<code>glyphicon-exclamation-sign</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-expand fa-2x"></i></p>
<code>glyphicon-expand</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-export fa-2x"></i></p>
<code>glyphicon-export</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-eye-close fa-2x"></i></p>
<code>glyphicon-eye-close</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-eye-open fa-2x"></i></p>
<code>glyphicon-eye-open</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-facetime-video fa-2x"></i></p>
<code>glyphicon-facetime-video</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-fast-backward fa-2x"></i></p>
<code>glyphicon-fast-backward</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-fast-forward fa-2x"></i></p>
<code>glyphicon-fast-forward</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-file fa-2x"></i></p>
<code>glyphicon-file</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-film fa-2x"></i></p>
<code>glyphicon-film</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-filter fa-2x"></i></p>
<code>glyphicon-filter</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-fire fa-2x"></i></p>
<code>glyphicon-fire</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-flag fa-2x"></i></p>
<code>glyphicon-flag</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-flash fa-2x"></i></p>
<code>glyphicon-flash</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-floppy-disk fa-2x"></i></p>
<code>glyphicon-floppy-disk</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-floppy-open fa-2x"></i></p>
<code>glyphicon-floppy-open</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-floppy-remove fa-2x"></i></p>
<code>glyphicon-floppy-remove</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-floppy-save fa-2x"></i></p>
<code>glyphicon-floppy-save</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-floppy-saved fa-2x"></i></p>
<code>glyphicon-floppy-saved</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-folder-close fa-2x"></i></p>
<code>glyphicon-folder-close</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-folder-open fa-2x"></i></p>
<code>glyphicon-folder-open</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-font fa-2x"></i></p>
<code>glyphicon-font</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-forward fa-2x"></i></p>
<code>glyphicon-forward</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-fullscreen fa-2x"></i></p>
<code>glyphicon-fullscreen</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-gbp fa-2x"></i></p>
<code>glyphicon-gbp</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-gift fa-2x"></i></p>
<code>glyphicon-gift</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-glass fa-2x"></i></p>
<code>glyphicon-glass</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-globe fa-2x"></i></p>
<code>glyphicon-globe</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-grain fa-2x"></i></p>
<code>glyphicon-grain</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-hand-down fa-2x"></i></p>
<code>glyphicon-hand-down</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-hand-left fa-2x"></i></p>
<code>glyphicon-hand-left</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-hand-right fa-2x"></i></p>
<code>glyphicon-hand-right</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-hand-up fa-2x"></i></p>
<code>glyphicon-hand-up</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-hd-video fa-2x"></i></p>
<code>glyphicon-hd-video</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-hdd fa-2x"></i></p>
<code>glyphicon-hdd</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-header fa-2x"></i></p>
<code>glyphicon-header</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-headphones fa-2x"></i></p>
<code>glyphicon-headphones</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-heart fa-2x"></i></p>
<code>glyphicon-heart</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-heart-empty fa-2x"></i></p>
<code>glyphicon-heart-empty</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-home fa-2x"></i></p>
<code>glyphicon-home</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-hourglass fa-2x"></i></p>
<code>glyphicon-hourglass</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-ice-lolly fa-2x"></i></p>
<code>glyphicon-ice-lolly</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-ice-lolly-tasted fa-2x"></i></p>
<code>glyphicon-ice-lolly-tasted</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-import fa-2x"></i></p>
<code>glyphicon-import</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-inbox fa-2x"></i></p>
<code>glyphicon-inbox</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-indent-left fa-2x"></i></p>
<code>glyphicon-indent-left</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-indent-right fa-2x"></i></p>
<code>glyphicon-indent-right</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-info-sign fa-2x"></i></p>
<code>glyphicon-info-sign</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-italic fa-2x"></i></p>
<code>glyphicon-italic</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-king fa-2x"></i></p>
<code>glyphicon-king</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-knight fa-2x"></i></p>
<code>glyphicon-knight</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-lamp fa-2x"></i></p>
<code>glyphicon-lamp</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-leaf fa-2x"></i></p>
<code>glyphicon-leaf</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-level-up fa-2x"></i></p>
<code>glyphicon-level-up</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-link fa-2x"></i></p>
<code>glyphicon-link</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-list fa-2x"></i></p>
<code>glyphicon-list</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-list-alt fa-2x"></i></p>
<code>glyphicon-list-alt</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-lock fa-2x"></i></p>
<code>glyphicon-lock</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-log-in fa-2x"></i></p>
<code>glyphicon-log-in</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-log-out fa-2x"></i></p>
<code>glyphicon-log-out</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-magnet fa-2x"></i></p>
<code>glyphicon-magnet</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-map-marker fa-2x"></i></p>
<code>glyphicon-map-marker</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-menu-down fa-2x"></i></p>
<code>glyphicon-menu-down</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-menu-hamburger fa-2x"></i></p>
<code>glyphicon-menu-hamburger</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-menu-left fa-2x"></i></p>
<code>glyphicon-menu-left</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-menu-right fa-2x"></i></p>
<code>glyphicon-menu-right</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-menu-up fa-2x"></i></p>
<code>glyphicon-menu-up</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-minus fa-2x"></i></p>
<code>glyphicon-minus</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-minus-sign fa-2x"></i></p>
<code>glyphicon-minus-sign</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-modal-window fa-2x"></i></p>
<code>glyphicon-modal-window</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-move fa-2x"></i></p>
<code>glyphicon-move</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-music fa-2x"></i></p>
<code>glyphicon-music</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-new-window fa-2x"></i></p>
<code>glyphicon-new-window</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-object-align-bottom fa-2x"></i></p>
<code>glyphicon-object-align-bottom</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-object-align-horizontal fa-2x"></i></p>
<code>glyphicon-object-align-horizontal</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-object-align-left fa-2x"></i></p>
<code>glyphicon-object-align-left</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-object-align-right fa-2x"></i></p>
<code>glyphicon-object-align-right</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-object-align-top fa-2x"></i></p>
<code>glyphicon-object-align-top</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-object-align-vertical fa-2x"></i></p>
<code>glyphicon-object-align-vertical</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-off fa-2x"></i></p>
<code>glyphicon-off</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-oil fa-2x"></i></p>
<code>glyphicon-oil</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-ok fa-2x"></i></p>
<code>glyphicon-ok</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-ok-circle fa-2x"></i></p>
<code>glyphicon-ok-circle</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-ok-sign fa-2x"></i></p>
<code>glyphicon-ok-sign</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-open fa-2x"></i></p>
<code>glyphicon-open</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-open-file fa-2x"></i></p>
<code>glyphicon-open-file</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-option-horizontal fa-2x"></i></p>
<code>glyphicon-option-horizontal</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-option-vertical fa-2x"></i></p>
<code>glyphicon-option-vertical</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-paperclip fa-2x"></i></p>
<code>glyphicon-paperclip</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-paste fa-2x"></i></p>
<code>glyphicon-paste</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-pause fa-2x"></i></p>
<code>glyphicon-pause</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-pawn fa-2x"></i></p>
<code>glyphicon-pawn</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-pencil fa-2x"></i></p>
<code>glyphicon-pencil</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-phone fa-2x"></i></p>
<code>glyphicon-phone</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-phone-alt fa-2x"></i></p>
<code>glyphicon-phone-alt</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-picture fa-2x"></i></p>
<code>glyphicon-picture</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-piggy-bank fa-2x"></i></p>
<code>glyphicon-piggy-bank</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-plane fa-2x"></i></p>
<code>glyphicon-plane</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-play fa-2x"></i></p>
<code>glyphicon-play</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-play-circle fa-2x"></i></p>
<code>glyphicon-play-circle</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-plus fa-2x"></i></p>
<code>glyphicon-plus</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-plus-sign fa-2x"></i></p>
<code>glyphicon-plus-sign</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-print fa-2x"></i></p>
<code>glyphicon-print</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-pushpin fa-2x"></i></p>
<code>glyphicon-pushpin</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-qrcode fa-2x"></i></p>
<code>glyphicon-qrcode</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-queen fa-2x"></i></p>
<code>glyphicon-queen</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-question-sign fa-2x"></i></p>
<code>glyphicon-question-sign</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-random fa-2x"></i></p>
<code>glyphicon-random</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-record fa-2x"></i></p>
<code>glyphicon-record</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-refresh fa-2x"></i></p>
<code>glyphicon-refresh</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-registration-mark fa-2x"></i></p>
<code>glyphicon-registration-mark</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-remove fa-2x"></i></p>
<code>glyphicon-remove</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-remove-circle fa-2x"></i></p>
<code>glyphicon-remove-circle</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-remove-sign fa-2x"></i></p>
<code>glyphicon-remove-sign</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-repeat fa-2x"></i></p>
<code>glyphicon-repeat</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-resize-full fa-2x"></i></p>
<code>glyphicon-resize-full</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-resize-horizontal fa-2x"></i></p>
<code>glyphicon-resize-horizontal</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-resize-small fa-2x"></i></p>
<code>glyphicon-resize-small</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-resize-vertical fa-2x"></i></p>
<code>glyphicon-resize-vertical</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-retweet fa-2x"></i></p>
<code>glyphicon-retweet</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-road fa-2x"></i></p>
<code>glyphicon-road</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-ruble fa-2x"></i></p>
<code>glyphicon-ruble</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-save fa-2x"></i></p>
<code>glyphicon-save</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-save-file fa-2x"></i></p>
<code>glyphicon-save-file</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-saved fa-2x"></i></p>
<code>glyphicon-saved</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-scale fa-2x"></i></p>
<code>glyphicon-scale</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-scissors fa-2x"></i></p>
<code>glyphicon-scissors</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-screenshot fa-2x"></i></p>
<code>glyphicon-screenshot</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-sd-video fa-2x"></i></p>
<code>glyphicon-sd-video</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-search fa-2x"></i></p>
<code>glyphicon-search</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-send fa-2x"></i></p>
<code>glyphicon-send</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-share fa-2x"></i></p>
<code>glyphicon-share</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-share-alt fa-2x"></i></p>
<code>glyphicon-share-alt</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-shopping-cart fa-2x"></i></p>
<code>glyphicon-shopping-cart</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-signal fa-2x"></i></p>
<code>glyphicon-signal</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-sort fa-2x"></i></p>
<code>glyphicon-sort</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-sort-by-alphabet fa-2x"></i></p>
<code>glyphicon-sort-by-alphabet</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-sort-by-alphabet-alt fa-2x"></i></p>
<code>glyphicon-sort-by-alphabet-alt</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-sort-by-attributes fa-2x"></i></p>
<code>glyphicon-sort-by-attributes</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-sort-by-attributes-alt fa-2x"></i></p>
<code>glyphicon-sort-by-attributes-alt</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-sort-by-order fa-2x"></i></p>
<code>glyphicon-sort-by-order</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-sort-by-order-alt fa-2x"></i></p>
<code>glyphicon-sort-by-order-alt</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-sound-5-1 fa-2x"></i></p>
<code>glyphicon-sound-5-1</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-sound-6-1 fa-2x"></i></p>
<code>glyphicon-sound-6-1</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-sound-7-1 fa-2x"></i></p>
<code>glyphicon-sound-7-1</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-sound-dolby fa-2x"></i></p>
<code>glyphicon-sound-dolby</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-sound-stereo fa-2x"></i></p>
<code>glyphicon-sound-stereo</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-star fa-2x"></i></p>
<code>glyphicon-star</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-star-empty fa-2x"></i></p>
<code>glyphicon-star-empty</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-stats fa-2x"></i></p>
<code>glyphicon-stats</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-step-backward fa-2x"></i></p>
<code>glyphicon-step-backward</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-step-forward fa-2x"></i></p>
<code>glyphicon-step-forward</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-stop fa-2x"></i></p>
<code>glyphicon-stop</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-subscript fa-2x"></i></p>
<code>glyphicon-subscript</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-subtitles fa-2x"></i></p>
<code>glyphicon-subtitles</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-sunglasses fa-2x"></i></p>
<code>glyphicon-sunglasses</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-superscript fa-2x"></i></p>
<code>glyphicon-superscript</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-tag fa-2x"></i></p>
<code>glyphicon-tag</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-tags fa-2x"></i></p>
<code>glyphicon-tags</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-tasks fa-2x"></i></p>
<code>glyphicon-tasks</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-tent fa-2x"></i></p>
<code>glyphicon-tent</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-text-background fa-2x"></i></p>
<code>glyphicon-text-background</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-text-color fa-2x"></i></p>
<code>glyphicon-text-color</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-text-height fa-2x"></i></p>
<code>glyphicon-text-height</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-text-size fa-2x"></i></p>
<code>glyphicon-text-size</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-text-width fa-2x"></i></p>
<code>glyphicon-text-width</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-th fa-2x"></i></p>
<code>glyphicon-th</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-th-large fa-2x"></i></p>
<code>glyphicon-th-large</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-th-list fa-2x"></i></p>
<code>glyphicon-th-list</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-thumbs-down fa-2x"></i></p>
<code>glyphicon-thumbs-down</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-thumbs-up fa-2x"></i></p>
<code>glyphicon-thumbs-up</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-time fa-2x"></i></p>
<code>glyphicon-time</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-tint fa-2x"></i></p>
<code>glyphicon-tint</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-tower fa-2x"></i></p>
<code>glyphicon-tower</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-transfer fa-2x"></i></p>
<code>glyphicon-transfer</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-trash fa-2x"></i></p>
<code>glyphicon-trash</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-tree-conifer fa-2x"></i></p>
<code>glyphicon-tree-conifer</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-tree-deciduous fa-2x"></i></p>
<code>glyphicon-tree-deciduous</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-triangle-bottom fa-2x"></i></p>
<code>glyphicon-triangle-bottom</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-triangle-left fa-2x"></i></p>
<code>glyphicon-triangle-left</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-triangle-right fa-2x"></i></p>
<code>glyphicon-triangle-right</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-triangle-top fa-2x"></i></p>
<code>glyphicon-triangle-top</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-volume-down fa-2x"></i></p>
<code>glyphicon-volume-down</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-volume-off fa-2x"></i></p>
<code>glyphicon-volume-off</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-volume-up fa-2x"></i></p>
<code>glyphicon-volume-up</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-unchecked fa-2x"></i></p>
<code>glyphicon-unchecked</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-upload fa-2x"></i></p>
<code>glyphicon-upload</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-usd fa-2x"></i></p>
<code>glyphicon-usd</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-user fa-2x"></i></p>
<code>glyphicon-user</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-warning-sign fa-2x"></i></p>
<code>glyphicon-warning-sign</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-wrench fa-2x"></i></p>
<code>glyphicon-wrench</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-yen fa-2x"></i></p>
<code>glyphicon-yen</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-zoom-in fa-2x"></i></p>
<code>glyphicon-zoom-in</code>
</div>
<div class="col-sm-6 col-lg-3">
<p><i class="glyphicon glyphicon-zoom-out fa-2x"></i></p>
<code>glyphicon-zoom-out</code>
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
</div><script src="assets/js/oneui.min-1.3.js"></script><script src="assets/js/pages/base_ui_icons.js"></script>
<script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create', 'UA-16158021-6', 'auto');ga('send', 'pageview');</script>
</body>
</html>