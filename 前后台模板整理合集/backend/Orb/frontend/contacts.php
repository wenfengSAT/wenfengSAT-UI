
<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8">
<meta name="keywords" content="admin template, admin dashboard, inbox templte, calendar template, form validation">
<meta name="author" content="DazeinCreative">
<meta name="description" content="ORB - Powerfull and Massive Admin Dashboard Template with tonns of useful features">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>ORB Front End | Contacts</title>
<link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
<link rel="stylesheet" type="text/css" href="css/frontend.css">
<script type="text/javascript" src="js/vendors/modernizr/modernizr.custom.js"></script>
</head>

<body>
<div class="smooth-overflow frontend"> 
  
  <!--Navigation-->
  
  <nav class="navbar navbar-inverse" role="navigation">
    <div class="container-fluid"> 
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
        <a class="navbar-brand text-blue" href="#">ORB</a> </div>
      
      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li><a href="index.html">Home</a></li>
          <li class="dropdown"> <a href="#" class="dropdown-toggle" data-toggle="dropdown">Portfolio <span class="caret"></span></a>
            <ul class="dropdown-menu" role="menu">
              <li><a href="portfolio.html">Portfolio</a></li>
              <li><a href="portfolio-item.html">Project</a></li>
            </ul>
          </li>
          <li class="dropdown"> <a href="#" class="dropdown-toggle" data-toggle="dropdown">Blog <span class="caret"></span></a>
            <ul class="dropdown-menu" role="menu">
              <li><a href="blog-post.html">Blog Post</a></li>
              <li><a href="blog.html">Blog</a></li>
            </ul>
          </li>
          <li class="dropdown"> <a href="#" class="dropdown-toggle" data-toggle="dropdown">Pages <span class="caret"></span></a>
            <ul class="dropdown-menu" role="menu">
              <li><a href="faq.html">Faq</a></li>
              <li><a href="about.html">About Us</a></li>
              <li><a href="services.html">Services</a></li>
              <li><a href="gallery.html">Gallery</a></li>
              <li><a href="registration.html">Registration</a></li>
              <li><a href="countdown.html">CountDown</a></li>
              <li><a href="contacts.php">Contact Us</a></li>
            </ul>
          </li>
          <li class="dropdown"> <a href="#" class="dropdown-toggle" data-toggle="dropdown">eCommerce<span class="caret"></span></a>
            <ul class="dropdown-menu" role="menu">
              <li><a href="products.html">Products</a></li>
              <li><a href="products-checkout.html">Checkout</a></li>
              <li><a href="product.html">Pruduct Page</a></li>
            </ul>
          </li>
        </ul>
        
        <!--Sign In Form-->
        <ul class="nav navbar-nav navbar-right">
          <li class="dropdown" id="menuLogin"> <a class="dropdown-toggle" href="#" data-toggle="dropdown" id="navLogin">Sign In</a>
            <div class="dropdown-menu">
              <form action="index.html" id="login-form" class="orb-form">
                <fieldset>
                  <section>
                    <div class="row">
                      <div class="col col-12">
                        <label class="input"> <i class="icon-append fa fa-user"></i>
                          <input type="email" name="email" placeholder="Login">
                        </label>
                      </div>
                    </div>
                  </section>
                  <section>
                    <div class="row">
                      <div class="col col-12">
                        <label class="input"> <i class="icon-append fa fa-lock"></i>
                          <input type="password" name="password" placeholder="Password">
                        </label>
                        <div class="note"><a href="#" class="modal-opener">Forgot password?</a></div>
                      </div>
                    </div>
                  </section>
                  <section>
                    <div class="row">
                      <div class="col col-12">
                        <label class="checkbox">
                          <input type="checkbox" name="remember" checked>
                          <i></i>Keep me logged in</label>
                      </div>
                    </div>
                  </section>
                </fieldset>
                <button type="submit" class="btn btn-default">Sign in</button>
                <a href="registration.html" class="btn">Register</a>
              </form>
            </div>
          </li>
        </ul>
        <!--/Sign In Form--> 
      </div>
      <!-- /.navbar-collapse --> 
    </div>
    <!-- /.container-fluid --> 
  </nav>
  
  <!--/Navigation--> 
  
  <!--Breadcrumb-->
  <div class="container">
    <div class="row">
      <div class="breadcrumb clearfix">
        <ul>
          <li><a href="index.html"><i class="fa fa-home"></i></a></li>
          <li><a href="index.html">Dashboard</a></li>
          <li class="active">Data</li>
        </ul>
        
        <!--Search-->
        <div class="site-search pull-right">
          <form action="#" id="inline-search">
            <i class="fa fa-search"></i>
            <input type="search" placeholder="Search">
          </form>
        </div>
      </div>
    </div>
  </div>
  <!--/Breadcrumb-->
  
  <div class="container frontend">
    <div class="row">
      <div class="page-header">
        <h1>Contact Us</h1>
      </div>
      
      <!--Content-->
      
      <div class="block contact-form-container">
        <div class="contact-form-container-inner">
          <div class="col-md-6 text-center contact-methods"> <i class="fa fa-envelope-o rounded-envelope-icon"></i>
            <p class="lead"> Feel free to contact us. Cras vulputate laoreet mauris, at sagittis turpis mollis ut. Aenean pretium mattis sollicitudin. Vestibulum at vulputate lectus.</p>
            <div class="row">
              <div class="col-md-6 col-sm-6 text-center text-grey"><i class="fa fa-4x fa-map-marker"></i>
                <p class="small margin-top">Our office is located in praesent id magna in diam imperdiet fermentum.  We are working <strong>Monday - Sunday from 10.00 till 23.00</strong></p>
                <address>
                <strong>Twitter, Inc.</strong><br>
                795 Folsom Ave, Suite 600
                San Francisco, CA 94107<br>
                <abbr title="Phone">P:</abbr> (123) 456-7890
                </address>
              </div>
              <div class="col-md-6 col-sm-6 text-center text-grey"><i class="fa fa-4x fa-life-ring"></i>
                <p class="small margin-top">Please specify the email address correctly. HTML 5 MarkUp. Praesent id magna in diam imperdiet fermentum. </p>
                
                <!-- Social Media Buttons -->
                <div class="social-buttons">
                  <ul class="social">
                    <li><a href="http://facebook.com/"><i class="entypo-facebook-circled"></i></a></li>
                    <li><a href="http://linkedin.com/"><i class="entypo-linkedin-circled"></i></a></li>
                    <li><a href="http://google.com/"><i class="entypo-gplus-circled"></i></a></li>
                    <li><a href="http://twitter.com/"><i class="entypo-twitter-circled"></i></a></li>
                  </ul>
                </div>
                <!--/Social Buttons-->
                
                <p class="small margin-top">Please make sure you read <a href="faq.html">FAQ page</a> before submitting a message.</p>
              </div>
            </div>
          </div>
          <div class="col-md-6 contact-form">
            <form action="demo-contacts-process.php" method="post" id="contact-form-captcha" class="orb-form">
              <header>Message Us</header>
              <fieldset>
                <div class="row">
                  <section class="col col-6">
                    <label class="input"> <i class="icon-append fa fa-user"></i>
                      <input type="text" name="name" id="name" placeholder="Name">
                    </label>
                  </section>
                  <section class="col col-6">
                    <label class="input"> <i class="icon-append fa fa-envelope-o"></i>
                      <input type="email" name="email" id="email" placeholder="Email">
                    </label>
                  </section>
                </div>
                <section>
                  <label class="input"> <i class="icon-append fa fa-tag"></i>
                    <input type="text" name="subject" id="subject" placeholder="Subject">
                  </label>
                </section>
                <section>
                  <label class="textarea"> <i class="icon-append fa fa-comment"></i>
                    <textarea rows="4" name="message" id="message" placeholder="Your Message"></textarea>
                  </label>
                </section>
                <section>
                  <label class="input input-captcha"> <img src="captcha/image.php?1433407269" width="100" height="34" alt="Captcha image" />
                    <input type="text" maxlength="6" name="captcha" id="captcha" placeholder="Enter characters below">
                  </label>
                </section>
                <section>
                  <label class="checkbox">
                    <input type="checkbox" name="copy">
                    <i></i>Send a copy to my e-mail address</label>
                </section>
              </fieldset>
              <footer>
                <button type="submit" class="btn btn-info btn-lg"><i class="fa fa-envelope"></i> Send message</button>
              </footer>
              <div class="message"> <i class="fa fa-check"></i>
                <p>Your message was successfully sent!</p>
              </div>
            </form>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
      <div class="map-container" id="map_canvas"></div>
      
      <!-- /Content--> 
    </div>
  </div>
  <!-- Page Ends --> 
  
  <!--Footer-->
  <div class="footer">
    <div class="row">
      <div class="col-md-3">
        <h3>Contacts</h3>
        <address>
        <strong>DazeinCreative</strong><br>
        795 Folsom Ave, Suite 600<br>
        San Francisco, CA 94107<br>
        <abbr title="Phone">P:</abbr> (123) 456-7890
        </address>
        <address>
        <strong>Full Name</strong><br>
        <a href="mailto:#">first.last@example.com</a>
        </address>
      </div>
      <div class="col-md-3">
        <h3>About Us</h3>
        <p> ORB — fully responsive admin template powered by BootStrap 3 Framework. ORB is packed with tons of accurately styled and predefined components, plugins and features that can be used in creation of admin dashboards, CRM and CMS panels. You can purchase ORB <a href="http://themeforest.net/item/orb-powerful-admin-dashboard/7758614">exclusevely on Themeforest</a></p>
      </div>
      <div class="col-md-3">
        <h3>Last News</h3>
        <div class="footer-news"> <span class="label bg-cold-grey">13.06</span><span class="news-text"><a href="#">Our investor is Now Godzilla incorporated</a></span> <span class="label bg-cold-grey">14.06</span><span class="news-text"><a href="#">Surfers get up-close encounter with massive whale</a></span> <span class="label bg-cold-grey">15.06</span><span class="news-text"><a href="#">Someone stole your sausage again!</a></span> </div>
      </div>
      <div class="col-md-3">
        <h3>subscribe</h3>
        
        <!--Subscription-->
        <div class="subscribe-block">
          <p class="hide-if-ok">Just enter your email address to get all our news, events and special offers.</p>
          <form action="demo-subscription-save.php" method="post" id="subscription-form" class="orb-form">
            <fieldset>
              <section>
                <label class="input">
                  <input type="email" name="email" id="email" placeholder="Your e-mail">
                </label>
                <button type="submit" class="btn btn-default">Subscribe</button>
              </section>
            </fieldset>
            <div class="message"> <i class="fa fa-check"></i>
              <p>Thanks for join our mail list!</p>
            </div>
          </form>
        </div>
        <!--/Subscription--> 
        
      </div>
    </div>
    <div class="col-md-12 margin-top">
      <p class="text-center"><strong>ORB FrontEnd</strong> by Dazein Creative &reg; &#8482; 2014. Need more templates &#8212; <a href="http://themeforest.net/user/DazeinCreative/portfolio" title="Get Templates!" target="_blank">Get em here</a>! <br/>
        Device MockUps by <a href="http://graphicburger.com/">GraphicBurger</a> | Hipster Logotypes by <a href="http://www.vectreezy.com/">Vecteezy</a> <br/>
        Free Images by <a href="http://unsplash.com/" title="Unsplash">Unsplash</a></p>
    </div>
    
    <!-- Social Media Buttons - CSS3 - Free to Remove Unneeded -->
    <div class="social-buttons">
      <ul class="social">
        <li><a href="http://facebook.com/"><i class="entypo-facebook-circled"></i></a></li>
        <li><a href="http://linkedin.com/"><i class="entypo-linkedin-circled"></i></a></li>
        <li><a href="http://google.com/"><i class="entypo-gplus-circled"></i></a></li>
        <li><a href="http://twitter.com/"><i class="entypo-twitter-circled"></i></a></li>
        <li><a href="http://pinterest.com/"><i class="entypo-pinterest-circled"></i></a></li>
        <li><a href="http://tumblr.com/"><i class="entypo-tumblr-circled"></i></a></li>
        <li><a href="http://stumbleupon.com/"><i class="entypo-stumbleupon-circled"></i></a></li>
        <li><a href="http://dribble.com/"><i class="entypo-dribbble-circled"></i></a></li>
        <li><a href="http://vimeo.com/"><i class="entypo-vimeo-circled"></i></a></li>
        <li><a href="http://mixi.com/"><i class="entypo-mixi"></i></a></li>
        <li><a href="http://lastfm.com/"><i class="entypo-lastfm-circled"></i></a></li>
        <li><a href="http://instagram.com/"><i class="entypo-instagram"></i></a></li>
        <li><a href="http://vk.com/"><i class="entypo-vkontakte"></i></a></li>
        <li><a href="http://flickr.com/"><i class="entypo-flickr-circled"></i></a></li>
      </ul>
    </div>
    <!--/Social Buttons--> 
  </div>
  <!--Footer--> 
</div>

<!-- scroll top -->
<div class="scroll-top-wrapper hidden-xs"> <i class="fa fa-angle-up"></i> </div>
<!-- /scroll top --> 

<!--Scripts--> 
<!--JQuery--> 
<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script> 
<script type="text/javascript" src="js/vendors/jquery/jquery.min.js"></script> 
<script type="text/javascript" src="js/vendors/jquery/jquery-ui.min.js"></script> 
<!--BS-->
<script type="text/javascript" src="js/vendors/bootstrap/bootstrap.min.js"></script> 

<!--Gmap--> 
<script type="text/javascript" src="js/vendors/gmap/jquery.gmap.min.js"></script> 

<!--Forms--> 
<script type="text/javascript" src="js/vendors/forms/jquery.form.min.js"></script> 
<script type="text/javascript" src="js/vendors/forms/jquery.validate.min.js"></script> 
<script type="text/javascript" src="js/vendors/forms/jquery.maskedinput.min.js"></script> 


<script type="text/javascript" src="js/frontend.js"></script>
</body>
</html>
