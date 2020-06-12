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
<body><div class="content overflow-hidden">
<div class="row">
<div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
<div class="block block-themed animated fadeIn">
<div class="block-header bg-success">
<ul class="block-options">
<li>
<a href="#" data-toggle="modal" data-target="#modal-terms">View Terms</a>
</li>
<li>
<a href="base_pages_login.php" data-toggle="tooltip" data-placement="left" title="Log In"><i class="si si-login"></i></a>
</li>
</ul>
<h3 class="block-title">Register</h3>
</div>
<div class="block-content block-content-full block-content-narrow">
<h1 class="h2 font-w600 push-30-t push-5">OneUI</h1>
<p>Please fill the following details to create a new account.</p>
<form class="js-validation-register form-horizontal push-50-t push-50" action="base_pages_register.php" method="post">
<div class="form-group">
<div class="col-xs-12">
<div class="form-material form-material-success">
<input class="form-control" type="text" id="register-username" name="register-username" placeholder="Please enter a username">
<label for="register-username">Username</label>
</div>
</div>
</div>
<div class="form-group">
<div class="col-xs-12">
<div class="form-material form-material-success">
<input class="form-control" type="email" id="register-email" name="register-email" placeholder="Please provide your email">
<label for="register-email">Email</label>
</div>
</div>
</div>
<div class="form-group">
<div class="col-xs-12">
<div class="form-material form-material-success">
<input class="form-control" type="password" id="register-password" name="register-password" placeholder="Choose a strong password..">
<label for="register-password">Password</label>
</div>
</div>
</div>
<div class="form-group">
<div class="col-xs-12">
<div class="form-material form-material-success">
<input class="form-control" type="password" id="register-password2" name="register-password2" placeholder="..and confirm it">
<label for="register-password2">Confirm Password</label>
</div>
</div>
</div>
<div class="form-group">
<div class="col-xs-12">
<label class="css-input switch switch-sm switch-success">
<input type="checkbox" id="register-terms" name="register-terms"><span></span> I agree with terms &amp; conditions
</label>
</div>
</div>
<div class="form-group">
<div class="col-xs-12 col-sm-6 col-md-5">
<button class="btn btn-block btn-success" type="submit"><i class="fa fa-plus pull-right"></i> Sign Up</button>
</div>
</div>
</form>
</div>
</div>
</div>
</div>
</div>
<div class="push-10-t text-center animated fadeInUp">
<small class="text-muted font-w600"><span class="js-year-copy"></span> &copy; OneUI 1.3</small>
</div>
<div class="modal fade" id="modal-terms" tabindex="-1" role="dialog" aria-hidden="true">
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
<script src="assets/js/oneui.min-1.3.js"></script><script src="assets/js/plugins/jquery-validation/jquery.validate.min.js"></script>
<script src="assets/js/pages/base_pages_register.js"></script>
<script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create', 'UA-16158021-6', 'auto');ga('send', 'pageview');</script>
</body>
</html>