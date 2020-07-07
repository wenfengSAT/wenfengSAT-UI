$(document).ready(function(){

	/** SIDEBAR FUNCTION **/
	$('.sidebar-left ul.sidebar-menu li a').click(function() {
		"use strict";
		$('.sidebar-left li').removeClass('active');
		$(this).closest('li').addClass('active');	
		var checkElement = $(this).next();
			if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
				$(this).closest('li').removeClass('active');
				checkElement.slideUp('fast');
			}
			if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
				$('.sidebar-left ul.sidebar-menu ul:visible').slideUp('fast');
				checkElement.slideDown('fast');
			}
			if($(this).closest('li').find('ul').children().length == 0) {
				return true;
				} else {
				return false;	
			}		
	});

	if ($(window).width() < 1025) {
		$(".sidebar-left").removeClass("sidebar-nicescroller");
		$(".sidebar-right").removeClass("right-sidebar-nicescroller");
		$(".nav-dropdown-content").removeClass("scroll-nav-dropdown");
	}
	/** END SIDEBAR FUNCTION **/
	
	
	/** BUTTON TOGGLE FUNCTION **/
	$(".btn-collapse-sidebar-left").click(function(){
		"use strict";
		$(".top-navbar").toggleClass("toggle");
		$(".sidebar-left").toggleClass("toggle");
		$(".page-content").toggleClass("toggle");
		$(".icon-dinamic").toggleClass("rotate-180");
		
		if ($(window).width() > 991) {
			if($(".sidebar-right").hasClass("toggle-left") === true){
				$(".sidebar-right").removeClass("toggle-left");
				$(".top-navbar").removeClass("toggle-left");
				$(".page-content").removeClass("toggle-left");
				$(".sidebar-left").removeClass("toggle-left");
				if($(".sidebar-left").hasClass("toggle") === true){
					$(".sidebar-left").removeClass("toggle");
				}
				if($(".page-content").hasClass("toggle") === true){
					$(".page-content").removeClass("toggle");
				}
			}
		}
	});
	$(".btn-collapse-sidebar-right").click(function(){
		"use strict";
		$(".top-navbar").toggleClass("toggle-left");
		$(".sidebar-left").toggleClass("toggle-left");
		$(".sidebar-right").toggleClass("toggle-left");
		$(".page-content").toggleClass("toggle-left");
	});
	$(".btn-collapse-nav").click(function(){
		"use strict";
		$(".icon-plus").toggleClass("rotate-45");
	});
	/** END BUTTON TOGGLE FUNCTION **/
	
	
	/** BEGIN PREETY PRINT **/
	$(window).load(function() {
    "use strict";
	prettyPrint()})
	/** END PREETY PRINT **/
	

	/** BEGIN TOOLTIP FUNCTION **/
	$('.tooltips').tooltip({
	  selector: "[data-toggle=tooltip]",
	  container: "body"
	})
	$('.popovers').popover({
	  selector: "[data-toggle=popover]",
	  container: "body"
	})
	/** END TOOLTIP FUNCTION **/
	
	
	/** NICESCROLL AND SLIMSCROLL FUNCTION **/
    $(".sidebar-nicescroller").niceScroll({
		cursorcolor: "#121212",
		cursorborder: "0px solid #fff",
		cursorborderradius: "0px",
		cursorwidth: "0px"
	});
    $(".sidebar-nicescroller-visible-scroller").niceScroll({
		cursorcolor: "#121212",
		cursorborder: "0px solid #fff",
		cursorborderradius: "0px",
		cursorwidth: "5px",
		cursoropacitymax: 0.2
	});
	$(".sidebar-nicescroller").getNiceScroll().resize();
    $(".right-sidebar-nicescroller").niceScroll({
		cursorcolor: "#111",
		cursorborder: "0px solid #fff",
		cursorborderradius: "0px",
		cursorwidth: "0px"
	});
	$(".right-sidebar-nicescroller").getNiceScroll().resize();
	
	$(function () {
		"use strict";
		$('.scroll-nav-dropdown').slimScroll({
			height: '350px',
			position: 'right',
			size: '4px',
			railOpacity: 0.3
		});
	});
	
	$(function () {
		"use strict";
		$('.scroll-chat-widget').slimScroll({
			height: '330px',
			position: 'right',
			size: '4px',
			railOpacity: 0.3,
			railVisible: true,
			alwaysVisible: true,
			start : 'bottom'
		});
	});
	if ($(window).width() < 768) {
		$(".chat-wrap").removeClass("scroll-chat-widget");
	}
	/** END NICESCROLL AND SLIMSCROLL FUNCTION **/
	
	
	
	
	/** BEGIN BACK TO TOP **/
	$(function () {
		$("#back-top").hide();
	});
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});
		
		$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});
	/** END BACK TO TOP **/
	

	
	
	/** BEGIN PANEL HEADER BUTTON COLLAPSE **/
	$(function () {
		"use strict";
		$('.collapse').on('show.bs.collapse', function() {
			var id = $(this).attr('id');
			$('button.to-collapse[data-target="#' + id + '"]').html('<i class="fa fa-chevron-up"></i>');
		});
		$('.collapse').on('hide.bs.collapse', function() {
			var id = $(this).attr('id');
			$('button.to-collapse[data-target="#' + id + '"]').html('<i class="fa fa-chevron-down"></i>');
		});
		
		$('.collapse').on('show.bs.collapse', function() {
			var id = $(this).attr('id');
			$('a.block-collapse[href="#' + id + '"] span.right-icon').html('<i class="glyphicon glyphicon-minus icon-collapse"></i>');
		});
		$('.collapse').on('hide.bs.collapse', function() {
			var id = $(this).attr('id');
			$('a.block-collapse[href="#' + id + '"] span.right-icon').html('<i class="glyphicon glyphicon-plus icon-collapse"></i>');
		});
	});
	/** END PANEL HEADER BUTTON COLLAPSE **/
	
	
	
	
	/** BEGIN DATATABLE EXAMPLE **/
	if ($('#datatable-example').length > 0){
		$('#datatable-example').dataTable();
	}
	
	
	
	
	/** BEGIN SUMMERNOTE **/
	if ($('.summernote-lg').length > 0){
		$('.summernote-lg').summernote({
			height: 400
		});
	}
	
	if ($('.summernote-sm').length > 0){
		$('.summernote-sm').summernote({
			height: 200,
			  toolbar: [
				//['style', ['style']], // no style button
				['style', ['bold', 'italic', 'underline', 'clear']],
				['font', ['strike']],
				['fontsize', ['fontsize']],
				['color', ['color']],
				['para', ['ul', 'ol', 'paragraph']],
				['height', ['height']],
				//['insert', ['picture', 'link']], // no insert buttons
				//['table', ['table']], // no table button
				//['help', ['help']] //no help button
			  ]
		});
	}
	/** END SUMMERNOTE **/
	

   

	/** BEGIN CHOSEN JS **/
	$(function () {
		"use strict";
		var configChosen = {
		  '.chosen-select'           : {},
		  '.chosen-select-deselect'  : {allow_single_deselect:true},
		  '.chosen-select-no-single' : {disable_search_threshold:10},
		  '.chosen-select-no-results': {no_results_text:'Oops, nothing found!'},
		  '.chosen-select-width'     : {width:"100%"}
		}
		for (var selector in configChosen) {
		  $(selector).chosen(configChosen[selector]);
		}
	});
	/** END CHOSEN JS **/
	
	
	/** BEGIN BACK STRETCH **/
	if ($('#weather-widget-1').length > 0){
		$("#weather-widget-1").backstretch("assets/img/photo/medium/img-12.jpg");
	}
	if ($('#weather-widget-2').length > 0){
		$("#weather-widget-2").backstretch("assets/img/photo/medium/img-13.jpg");
	}
	if ($('#search-heading').length > 0){
		$("#search-heading").backstretch("assets/img/photo/medium/img-12.jpg");
	}
	if ($('#property-search-wrap').length > 0){
		$("#property-search-wrap").backstretch("assets/img/photo/medium/img-19.jpg");
	}
	/** END BACK STRETCH **/
	
	
	/** BEGIN BACK STRETCH **/
	if ($('#example-datatable').length > 0){
		$('#example-datatable').dataTable();
	}
	/** END BACK STRETCH **/
   

	/** BEGIN ICHECK **/
	/** Minimal Skins **/
	if ($('.i-black').length > 0){
		$('input.i-black').iCheck({
			checkboxClass: 'icheckbox_minimal',
			radioClass: 'iradio_minimal',
			increaseArea: '20%'
		});
	}
	if ($('.i-red').length > 0){
		$('input.i-red').iCheck({
			checkboxClass: 'icheckbox_minimal-red',
			radioClass: 'iradio_minimal-red',
			increaseArea: '20%'
		});
	}
	if ($('.i-green').length > 0){
		$('input.i-green').iCheck({
			checkboxClass: 'icheckbox_minimal-green',
			radioClass: 'iradio_minimal-green',
			increaseArea: '20%'
		});
	}
	if ($('.i-blue').length > 0){
		$('input.i-blue').iCheck({
			checkboxClass: 'icheckbox_minimal-blue',
			radioClass: 'iradio_minimal-blue',
			increaseArea: '20%'
		});
	}
	if ($('.i-aero').length > 0){
		$('input.i-aero').iCheck({
			checkboxClass: 'icheckbox_minimal-aero',
			radioClass: 'iradio_minimal-aero',
			increaseArea: '20%'
		});
	}
	if ($('.i-grey').length > 0){
		$('input.i-grey').iCheck({
			checkboxClass: 'icheckbox_minimal-grey',
			radioClass: 'iradio_minimal-grey',
			increaseArea: '20%'
		});
	}
	if ($('.i-orange').length > 0){
		$('input.i-orange').iCheck({
			checkboxClass: 'icheckbox_minimal-orange',
			radioClass: 'iradio_minimal-orange',
			increaseArea: '20%'
		});
	}
	if ($('.i-yellow').length > 0){
		$('input.i-yellow').iCheck({
			checkboxClass: 'icheckbox_minimal-yellow',
			radioClass: 'iradio_minimal-yellow',
			increaseArea: '20%'
		});
	}
	if ($('.i-pink').length > 0){
		$('input.i-pink').iCheck({
			checkboxClass: 'icheckbox_minimal-pink',
			radioClass: 'iradio_minimal-pink',
			increaseArea: '20%'
		});
	}
	if ($('.i-purple').length > 0){
		$('input.i-purple').iCheck({
			checkboxClass: 'icheckbox_minimal-purple',
			radioClass: 'iradio_minimal-purple',
			increaseArea: '20%'
		});
	}
		
	/** Square Skins **/
	if ($('.i-black-square').length > 0){
		$('input.i-black-square').iCheck({
			checkboxClass: 'icheckbox_square',
			radioClass: 'iradio_square',
			increaseArea: '20%'
		});
	}
	if ($('.i-red-square').length > 0){
		$('input.i-red-square').iCheck({
			checkboxClass: 'icheckbox_square-red',
			radioClass: 'iradio_square-red',
			increaseArea: '20%'
		});
	}
	if ($('.i-green-square').length > 0){
		$('input.i-green-square').iCheck({
			checkboxClass: 'icheckbox_square-green',
			radioClass: 'iradio_square-green',
			increaseArea: '20%'
		});
	}
	if ($('.i-blue-square').length > 0){
		$('input.i-blue-square').iCheck({
			checkboxClass: 'icheckbox_square-blue',
			radioClass: 'iradio_square-blue',
			increaseArea: '20%'
		});
	}
	if ($('.i-aero-square').length > 0){
		$('input.i-aero-square').iCheck({
			checkboxClass: 'icheckbox_square-aero',
			radioClass: 'iradio_square-aero',
			increaseArea: '20%'
		});
	}
	if ($('.i-grey-square').length > 0){
		$('input.i-grey-square').iCheck({
			checkboxClass: 'icheckbox_square-grey',
			radioClass: 'iradio_square-grey',
			increaseArea: '20%'
		});
	}
	if ($('.i-orange-square').length > 0){
		$('input.i-orange-square').iCheck({
			checkboxClass: 'icheckbox_square-orange',
			radioClass: 'iradio_square-orange',
			increaseArea: '20%'
		});
	}
	if ($('.i-yellow-square').length > 0){
		$('input.i-yellow-square').iCheck({
			checkboxClass: 'icheckbox_square-yellow',
			radioClass: 'iradio_square-yellow',
			increaseArea: '20%'
		});
	}
	if ($('.i-pink-square').length > 0){
		$('input.i-pink-square').iCheck({
			checkboxClass: 'icheckbox_square-pink',
			radioClass: 'iradio_square-pink',
			increaseArea: '20%'
		});
	}
	if ($('.i-purple-square').length > 0){
		$('input.i-purple-square').iCheck({
			checkboxClass: 'icheckbox_square-purple',
			radioClass: 'iradio_square-purple',
			increaseArea: '20%'
		});
	}
		
	/** Flat Skins **/
	if ($('.i-black-flat').length > 0){
		$('input.i-black-flat').iCheck({
			checkboxClass: 'icheckbox_flat',
			radioClass: 'iradio_flat',
			increaseArea: '20%'
		});
	}
	if ($('.i-red-flat').length > 0){
		$('input.i-red-flat').iCheck({
			checkboxClass: 'icheckbox_flat-red',
			radioClass: 'iradio_flat-red',
			increaseArea: '20%'
		});
	}
	if ($('.i-green-flat').length > 0){
		$('input.i-green-flat').iCheck({
			checkboxClass: 'icheckbox_flat-green',
			radioClass: 'iradio_flat-green',
			increaseArea: '20%'
		});
	}
	if ($('.i-blue-flat').length > 0){
		$('input.i-blue-flat').iCheck({
			checkboxClass: 'icheckbox_flat-blue',
			radioClass: 'iradio_flat-blue',
			increaseArea: '20%'
		});
	}
	if ($('.i-aero-flat').length > 0){
		$('input.i-aero-flat').iCheck({
			checkboxClass: 'icheckbox_flat-aero',
			radioClass: 'iradio_flat-aero',
			increaseArea: '20%'
		});
	}
	if ($('.i-grey-flat').length > 0){
		$('input.i-grey-flat').iCheck({
			checkboxClass: 'icheckbox_flat-grey',
			radioClass: 'iradio_flat-grey',
			increaseArea: '20%'
		});
	}
	if ($('.i-orange-flat').length > 0){
		$('input.i-orange-flat').iCheck({
			checkboxClass: 'icheckbox_flat-orange',
			radioClass: 'iradio_flat-orange',
			increaseArea: '20%'
		});
	}
	if ($('.i-yellow-flat').length > 0){
		$('input.i-yellow-flat').iCheck({
			checkboxClass: 'icheckbox_flat-yellow',
			radioClass: 'iradio_flat-yellow',
			increaseArea: '20%'
		});
	}
	if ($('.i-pink-flat').length > 0){
		$('input.i-pink-flat').iCheck({
			checkboxClass: 'icheckbox_flat-pink',
			radioClass: 'iradio_flat-pink',
			increaseArea: '20%'
		});
	}
	if ($('.i-purple-flat').length > 0){
		$('input.i-purple-flat').iCheck({
			checkboxClass: 'icheckbox_flat-purple',
			radioClass: 'iradio_flat-purple',
			increaseArea: '20%'
		});
	}
	/** END ICHECK **/
	

   

	/** BEGIN INPUT FILE **/
	if ($('.btn-file').length > 0){
		$(document)
			.on('change', '.btn-file :file', function() {
				"use strict";
				var input = $(this),
				numFiles = input.get(0).files ? input.get(0).files.length : 1,
				label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
				input.trigger('fileselect', [numFiles, label]);
		});
		$('.btn-file :file').on('fileselect', function(event, numFiles, label) {
			
			var input = $(this).parents('.input-group').find(':text'),
				log = numFiles > 1 ? numFiles + ' files selected' : label;
			
			if( input.length ) {
				input.val(log);
			} else {
				if( log ) alert(log);
			}
		});
	}
	/** END INPUT FILE **/
	
	
	
	
	/** BEGIN DATEPICKER **/
	if ($('.datepicker').length > 0){
		$('.datepicker').datepicker()
	}
	
	if ($('#datepicker1').length > 0){
		var nowTemp = new Date();
		var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);
		 
		var checkin = $('#datepicker1').datepicker({
		  onRender: function(date) {
			return date.valueOf() < now.valueOf() ? 'disabled' : '';
		  }
		}).on('changeDate', function(ev) {
		  if (ev.date.valueOf() > checkout.date.valueOf()) {
			var newDate = new Date(ev.date)
			newDate.setDate(newDate.getDate() + 1);
			checkout.setValue(newDate);
		  }
		  checkin.hide();
		  $('#datepicker2')[0].focus();
		}).data('datepicker');
		var checkout = $('#datepicker2').datepicker({
		  onRender: function(date) {
			return date.valueOf() <= checkin.date.valueOf() ? 'disabled' : '';
		  }
		}).on('changeDate', function(ev) {
		  checkout.hide();
		}).data('datepicker');
	}
	/** END DATEPICKER **/
	
	
	
	
	/** BEGIN TIMEPICKER **/
	if ($('.timepicker').length > 0){
		$('.timepicker').timepicker();
	}
	/** END TIMEPICKER **/
	
	
	
	/** BEGIN INPUT MASK **/
	$(function () {
		"use strict";
		$('.cc_masking').mask('0000-0000-0000-0000');
		$('.cc_security_masking').mask('0000');
		$('.date_masking').mask('00/00/0000');
		$('.time_masking').mask('00:00:00');
		$('.date_time_masking').mask('00/00/0000 00:00:00');
		$('.phone_us_masking').mask('(000) 000-0000');
		$('.cpf_masking').mask('000.000.000-00', {reverse: true});
		$('.money_masking').mask('000.000.000.000.000,00', {reverse: true});
		$('.money2_masking').mask("#.##0,00", {reverse: true, maxlength: false});
		$('.ip_address_masking').mask('0ZZ.0ZZ.0ZZ.0ZZ', {translation: {'Z': {pattern: /[0-9]/, optional: true}}});
		$('.ip_address_masking').mask('099.099.099.099');
		$('.percent_masking').mask('##0,00%', {reverse: true});
	});
	/** END INPUT MASK **/
	
	
	
	/** BEGIN EXAMPLE SIMPLE WIZARD **/
	if ($('.NextStep').length > 0){
		$('.NextStep').click(function(){
		"use strict";
		  var nextId = $(this).parents('.tab-pane').next().attr("id");
		  $('[href=#'+nextId+']').tab('show');
		})
	}
	if ($('.PrevStep').length > 0){
		$('.PrevStep').click(function(){
		"use strict";
		  var prevId = $(this).parents('.tab-pane').prev().attr("id");
		  $('[href=#'+prevId+']').tab('show');
		})
	}
	/** END EXAMPLE SIMPLE WIZARD **/
	
	
	
	/** BEGIN SVG WEATHER ICON **/
	if (typeof Skycons !== 'undefined'){
	var icons = new Skycons(
	  {"color": "#fff"},
	  {"resizeClear": true}
	  ),
          list  = [
            "clear-day", "clear-night", "partly-cloudy-day",
            "partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind",
            "fog"
          ],
          i;

      for(i = list.length; i--; )
      icons.set(list[i], list[i]);
      icons.play();
	};
	/** END SVG WEATHER ICON **/

	

	/** BEGIN SLIDER **/
	if ($('#sl1').length > 0){
		$('#sl1').slider({
		  formater: function(value) {
			return 'Current value: '+value;
		  }
		});
	}
	if ($('#sl2').length > 0){
		$('#sl2').slider();
	}
	if ($('#eg').length > 0){
		$('#eg input').slider();
	}
	/** END SLIDER **/
	
	

   
	/** BEGIN MAGNIFIC POPUP **/
	if ($('.magnific-popup-wrap').length > 0){
			$('.magnific-popup-wrap').each(function() {
			"use strict";
				$(this).magnificPopup({
					delegate: 'a.zooming',
					type: 'image',
					removalDelay: 300,
					mainClass: 'mfp-fade',
					gallery: {
					  enabled:true
					}
				});
			}); 
	}
	
	if ($('.inline-popups').length > 0){
			$('.inline-popups').magnificPopup({
			  delegate: 'a',
			  removalDelay: 500,
			  callbacks: {
				beforeOpen: function() {
				   this.st.mainClass = this.st.el.attr('data-effect');
				}
			  },
			  midClick: true
			});
	}
	$('.magnific-img').magnificPopup({
		type:'image',
		removalDelay: 300,
		mainClass: 'mfp-fade'
	});
	/** END MAGNIFIC POPUP **/
	


	/** BEGIN OWL CAROUSEL **/
	if ($('#owl-carousel-single-1').length > 0){
		$("#owl-carousel-single-1").owlCarousel({
		  navigation : true,
		  slideSpeed : 300,
		  paginationSpeed : 400,
		  singleItem:true,
		  navigationText : ["&lsaquo;","&rsaquo;"],
		  autoPlay : true,
		  stopOnHover : true,
		});
	}
	
	if ($('#owl-carousel-single-2').length > 0){
		$("#owl-carousel-single-2").owlCarousel({
		  navigation : false,
		  slideSpeed : 400,
		  paginationSpeed : 400,
		  singleItem:true
		});
	}
	
	if ($('#owl-lazy-load').length > 0){
	  $("#owl-lazy-load").owlCarousel({
		items : 5,
		lazyLoad : true,
		navigation : true
	  });
	}
	
	if ($('#owl-lazy-load-autoplay').length > 0){
	  $("#owl-lazy-load-autoplay").owlCarousel({
		autoPlay: 3000,
		items : 5,
		lazyLoad : true
	  });
	}
	
	if ($('#owl-lazy-load-gallery').length > 0){
	  $("#owl-lazy-load-gallery").owlCarousel({
		items : 5,
		lazyLoad : true,
		navigation : true
	  });
	}
	
	
	var Owltime = 7;
	var $progressBar,
	  $bar, 
	  $elem, 
	  isPause, 
	  tick,
	  percentTime;
	 
	if ($('#owl-single-progress-bar').length > 0){
		$("#owl-single-progress-bar").owlCarousel({
		  slideSpeed : 500,
		  paginationSpeed : 500,
		  singleItem : true,
		  afterInit : progressBar,
		  afterMove : moved,
		  startDragging : pauseOnDragging
		});
	}
 
	function progressBar(elem){
	  $elem = elem;
	  buildProgressBar();
	  start();
	}
 
	function buildProgressBar(){
	  $progressBar = $("<div>",{
		id:"OwlprogressBar"
	  });
	  $bar = $("<div>",{
		id:"Owlbar"
	  });
	  $progressBar.append($bar).prependTo($elem);
	}
		 
	function start() {
	  percentTime = 0;
	  isPause = false;
	  tick = setInterval(interval, 10);
	};
 
	function interval() {
	  if(isPause === false){
		percentTime += 1 / Owltime;
		$bar.css({
		   width: percentTime+"%"
		 });
		if(percentTime >= 100){
		  $elem.trigger('owl.next')
		}
	  }
	}
		 
	function pauseOnDragging(){
	  isPause = true;
	}
 
	function moved(){
	  clearTimeout(tick);
	  start();
	}
	/** END OWL CAROUSEL **/
	
	
	
	
	/** BEGIN REAL ESTATE DESIGN JS FUNCTION **/
	var imagesync1 = $("#imagesync1");
	var imagesync2 = $("#imagesync2");
	 
	  imagesync1.owlCarousel({
		singleItem : true,
		slideSpeed : 1000,
		navigation: false,
		pagination:false,
		afterAction : syncPosition,
		lazyLoad : true,
		responsiveRefreshRate : 200
	  });
	 
	  imagesync2.owlCarousel({
		items : 5,
		itemsDesktop      : [1199,5],
		itemsDesktopSmall : [979,4],
		itemsTablet       : [768,3],
		itemsMobile       : [479,2],
		pagination:false,
		responsiveRefreshRate : 100,
		afterInit : function(el){
		  el.find(".owl-item").eq(0).addClass("synced");
		}
	  });
	 
	  function syncPosition(el){
		var current = this.currentItem;
		$("#imagesync2")
		  .find(".owl-item")
		  .removeClass("synced")
		  .eq(current)
		  .addClass("synced")
		if($("#imagesync2").data("owlCarousel") !== undefined){
		  center(current)
		}
	  }
	 if ($('#imagesync2').length > 0){
	  $("#imagesync2").on("click", ".owl-item", function(e){
		e.preventDefault();
		var number = $(this).data("owlItem");
		imagesync1.trigger("owl.goTo",number);
	  });
	 }
	  function center(number){
		var imagesync2visible = imagesync2.data("owlCarousel").owl.visibleItems;
		var num = number;
		var found = false;
		for(var i in imagesync2visible){
		  if(num === imagesync2visible[i]){
			var found = true;
		  }
		}
	 
		if(found===false){
		  if(num>imagesync2visible[imagesync2visible.length-1]){
			imagesync2.trigger("owl.goTo", num - imagesync2visible.length+2)
		  }else{
			if(num - 1 === -1){
			  num = 0;
			}
			imagesync2.trigger("owl.goTo", num);
		  }
		} else if(num === imagesync2visible[imagesync2visible.length-1]){
		  imagesync2.trigger("owl.goTo", imagesync2visible[1])
		} else if(num === imagesync2visible[0]){
		  imagesync2.trigger("owl.goTo", num-1)
		}
		
	  }
	  
	  if ($('#property-slide-1').length > 0){
		  $("#property-slide-1").owlCarousel({
			  navigation : false,
			  pagination: false,
			  slideSpeed : 300,
			  paginationSpeed : 400,
			  singleItem:true
		  });
	  }
	  
	  if ($('#property-slide-2').length > 0){
		  $("#property-slide-2").owlCarousel({
			  navigation : false,
			  pagination: false,
			  slideSpeed : 300,
			  paginationSpeed : 400,
			  singleItem:true
		  });
	  }
	  
	  if ($('#property-slide-3').length > 0){
		  $("#property-slide-3").owlCarousel({
			  navigation : false,
			  pagination: false,
			  slideSpeed : 300,
			  paginationSpeed : 400,
			  singleItem:true
		  });
	  }
	  
	  if ($('#property-slide-4').length > 0){
		  $("#property-slide-4").owlCarousel({
			  navigation : false,
			  pagination: false,
			  slideSpeed : 300,
			  paginationSpeed : 400,
			  singleItem:true
		  });
	  }
	  
	  if ($('#property-slide-5').length > 0){
		  $("#property-slide-5").owlCarousel({
			  navigation : false,
			  pagination: false,
			  slideSpeed : 300,
			  paginationSpeed : 400,
			  singleItem:true
		  });
	  }
	  
	  if ($('#property-slide-7').length > 0){
		  $("#property-slide-7").owlCarousel({
				navigation : false,
				pagination: false,
				slideSpeed : 1000,
				paginationSpeed : 400,
				singleItem:true,
				autoPlay: 4000,
				transitionStyle : 'goDown'
		  });
	  }
	  
	  if ($('#property-slide-8').length > 0){
		  $("#property-slide-8").owlCarousel({
				navigation : false,
				pagination: false,
				slideSpeed : 1000,
				paginationSpeed : 400,
				singleItem:true,
				autoPlay: 3000,
				transitionStyle : 'fadeUp'
		  });
	  }
	/** END REAL ESTATE DESIGN JS FUNCTION **/
	
	
	
	/** BEGIN BLOG DESIGN JS FUNCTION **/
	  if ($('#blog-slide-1').length > 0){
		  $("#blog-slide-1").owlCarousel({
				navigation : false,
				pagination: false,
				slideSpeed : 1000,
				paginationSpeed : 400,
				singleItem:true,
				autoPlay: 3000,
				transitionStyle : 'goDown'
		  });
	  }
	  if ($('#blog-slide-2').length > 0){
		  $("#blog-slide-2").owlCarousel({
				navigation : false,
				pagination: false,
				slideSpeed : 1000,
				paginationSpeed : 400,
				singleItem:true
		  });
	  }
	/** END BLOG DESIGN JS FUNCTION **/
	
	
	
	/** BEGIN STORE DESIGN JS FUNCTION **/
	if ($('#store-item-carousel-1').length > 0){
	$("#store-item-carousel-1").owlCarousel({
		autoPlay: 4000,
		items : 4,
		itemsDesktop      : [1199,4],
		itemsDesktopSmall : [979,3],
		itemsTablet       : [768,2],
		itemsMobile       : [479,1],
		lazyLoad : true,
		autoHeight : true
	  });
	}
	if ($('#store-item-carousel-2').length > 0){
	  $("#store-item-carousel-2").owlCarousel({
			navigation : false,
			pagination: false,
			slideSpeed : 1000,
			paginationSpeed : 400,
			singleItem:true
	  });
	}
	if ($('#store-item-carousel-3').length > 0){
		$("#store-item-carousel-3").owlCarousel({
			autoPlay: 4000,
			items : 4,
			itemsDesktop      : [1199,4],
			itemsDesktopSmall : [979,3],
			itemsTablet       : [768,2],
			itemsMobile       : [479,1],
			lazyLoad : true,
			autoHeight : true,
			navigation : false,
			pagination: false
		  });
	}
	/** END STORE DESIGN JS FUNCTION **/
	
	
	
	/** BEGIN TILES JS FUNCTION **/
	  if ($('#tiles-slide-1').length > 0){
		  $("#tiles-slide-1").owlCarousel({
				navigation : true,
				pagination: false,
				slideSpeed : 1000,
				paginationSpeed : 400,
				singleItem:true,
				autoPlay: 3000,
				theme : "my-reminder",
				navigationText : ["&larr;","&rarr;"],
		  });
	  }
	  if ($('#tiles-slide-2').length > 0){
		  $("#tiles-slide-2").owlCarousel({
				navigation : false,
				pagination: false,
				slideSpeed : 1000,
				paginationSpeed : 400,
				singleItem:true,
				autoPlay: 3000,
				transitionStyle : 'backSlide',
				stopOnHover: true
		  });
	  }
	  if ($('#tiles-slide-3').length > 0){
		  $("#tiles-slide-3").owlCarousel({
				navigation : false,
				pagination: false,
				slideSpeed : 1000,
				paginationSpeed : 400,
				singleItem:true,
				autoPlay: 3235,
				stopOnHover: true
		  });
	  }
	/** END TILES JS FUNCTION **/
	
	
	
	/** BEGIN WIDGET MORRIS JS FUNCTION **/
	if ($('#morris-widget-1').length > 0){
	Morris.Line({
	  element: 'morris-widget-1',
	  data: [
		{ y: '2000', a: 34},
		{ y: '2001', a: 55},
		{ y: '2002', a: 60},
		{ y: '2003', a: 65},
		{ y: '2004', a: 20},
		{ y: '2005', a: 75},
		{ y: '2006', a: 55},
		{ y: '2007', a: 77},
		{ y: '2008', a: 90},
		{ y: '2009', a: 125},
		{ y: '2010', a: 100},
		{ y: '2011', a: 15},
		{ y: '2012', a: 20},
		{ y: '2013', a: 85}
	  ],
		xkey: 'y',
		ykeys: ['a'],
		labels: ['Earning (in 10K USD)'],
		resize: true,
		lineColors: ['#1F91BD'],
		pointFillColors :['#fff'],
		pointStrokeColors : ['#3EAFDB'],
		gridTextColor: ['#fff'],
		pointSize :3,
		grid: false
	});
	}
	
	if ($('#morris-widget-2').length > 0){
	//MORRIS
	Morris.Bar({
	  element: 'morris-widget-2',
	  data: [
		{ y: 'Indonesia', a: 952},
		{ y: 'India', a: 985},
		{ y: 'United Kingdom', a: 421 },
		{ y: 'United States', a: 725 },
		{ y: 'Taiwan', a: 350 },
		{ y: 'New Zealand', a: 120 },
		{ y: 'Germany', a: 85 },
		{ y: 'Thailand', a: 20 },
		{ y: 'Korea', a: 65 },
		{ y: 'Malaysia', a: 955},
		{ y: 'China', a: 785 },
		{ y: 'Philipina', a: 700 },
		{ y: 'Autralia', a: 601 },
		{ y: 'Japan', a: 50 },
		{ y: 'Singapore', a: 124}
	  ],
	  xkey: 'y',
	  ykeys: ['a'],
	  labels: ['Companies'],
	  resize: true,
	  barColors: ['#E6563C'],
	  gridTextColor: ['#E6563C'],
	  gridTextSize: 11,
	  grid :false,
	  axes: false
	});
	}
	
	
	if ($('#morris-widget-3').length > 0){
	Morris.Area({
	  element: 'morris-widget-3',
	  data: [
		{ y: '2006', a: 100, b: 90 },
		{ y: '2007', a: 75,  b: 65 },
		{ y: '2008', a: 50,  b: 40 },
		{ y: '2009', a: 75,  b: 65 },
		{ y: '2010', a: 50,  b: 40 },
		{ y: '2011', a: 75,  b: 65 },
		{ y: '2012', a: 100, b: 90 }
	  ],
	  xkey: 'y',
	  ykeys: ['a', 'b'],
	  labels: ['Series A', 'Series B'],
	  resize: true,
	  grid :false,
	  axes: false,
	  lineColors: ['#967ADC', '#D770AD']
	});
	}
	/** END WIDGET MORRIS JS FUNCTION **/
	
	
	/** BEGIN MY PHOTOS COLLECTION FUNCTION **/
	if ($('#photo-collection-1').length > 0){
	  $("#photo-collection-1").owlCarousel({
			navigation : false,
			pagination: false,
			slideSpeed : 1000,
			paginationSpeed : 400,
			singleItem:true,
			autoPlay: 3000,
			transitionStyle : 'fadeUp'
	  });
	}
	/** BEGIN MY PHOTOS COLLECTION FUNCTION **/
	
	
	
	/** BEGIN WIDGET PIE FUNCTION **/
	if ($('.widget-easy-pie-1').length > 0){
		$('.widget-easy-pie-1').easyPieChart({
			easing: 'easeOutBounce',
			barColor : '#3BAFDA',
			lineWidth: 10,
			onStep: function(from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));
			}
		});
	}
	if ($('.widget-easy-pie-2').length > 0){
		$('.widget-easy-pie-2').easyPieChart({
			easing: 'easeOutBounce',
			barColor : '#F6BA48',
			lineWidth: 10,
			onStep: function(from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));
			}
		});
	}
	/** END WIDGET PIE FUNCTION **/
	
	

if ($('#realtime-chart-widget').length > 0){
		var data1 = [];
		var totalPoints = 250;
		function GetData() {
		"use strict";
		data1.shift();
		while (data1.length < totalPoints) {
		var prev = data1.length > 0 ? data1[data1.length - 1] : 50;
		var y = prev + Math.random() * 10 - 5;
		y = y < 0 ? 0 : (y > 100 ? 100 : y);
		data1.push(y);
		}
		var result = [];
		for (var i = 0; i < data1.length; ++i) {
			result.push([i, data1[i]])
			}
		return result;
		}
		var updateInterval = 500;
		var plot = $.plot($("#realtime-chart-widget #realtime-chart-container-widget"), [
			GetData()], {
			series: {
				lines: {
					show: true,
					fill: false
				},
				shadowSize: 0
			},
			yaxis: {
				min: 0,
				max: 100,
				ticks: 10,
				show: false
			},
			xaxis: {
				show: false
			},
			grid: {
				hoverable: true,
				clickable: true,
				tickColor: "#f9f9f9",
				borderWidth: 0,
				borderColor: "#eeeeee"
			},
			colors: ["#699B29"],
			tooltip: false,
			tooltipOpts: {
				defaultTheme: false
			}
		});
		function update() {
			"use strict";
			plot.setData([GetData()]);
			plot.draw();
			setTimeout(update, updateInterval);
		}
		update();
}



	/**
	=====================
	NEW VERSION 1.2
	=====================
	**/
	if ($('.widget-easy-pie-3').length > 0){
		$('.widget-easy-pie-3').easyPieChart({
			easing: 'easeOutBounce',
			barColor : '#8CC152',
			lineWidth: 10,
			onStep: function(from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));
			}
		});
	}

	if ($('.widget-newsticker').length > 0){
		$('.widget-newsticker').newsTicker({
			row_height: 135,
			max_rows: 3,
			speed: 600,
			direction: 'up',
			duration: 4000,
			autostart: 1,
			pauseOnHover: 1,
			prevButton: $('#w-newsticker-prev'),
			nextButton: $('#w-newsticker-next')
		});
	}

	if ($('.widget-currency-ticker').length > 0){
		$('.widget-currency-ticker').newsTicker({
			row_height: 41,
			max_rows: 10,
			speed: 500,
			direction: 'up',
			duration: 3000,
			autostart: 1,
			pauseOnHover: 1
		});
	}
	
	
	if ($('#tiles-slide-4').length > 0){
	  $("#tiles-slide-4").owlCarousel({
			navigation : false,
			pagination: false,
			slideSpeed : 1000,
			paginationSpeed : 400,
			singleItem:true,
			autoPlay: 3235,
			stopOnHover: true
	  });
	}
	
	if ($('#tiles-slide-5').length > 0){
	  $("#tiles-slide-5").owlCarousel({
			navigation : false,
			pagination: false,
			slideSpeed : 1000,
			paginationSpeed : 400,
			singleItem:true,
			autoPlay: 3235,
			stopOnHover: true
	  });
	}
	
	if ($('#tiles-slide-6').length > 0){
	  $("#tiles-slide-6").owlCarousel({
			navigation : false,
			pagination: false,
			slideSpeed : 1000,
			paginationSpeed : 400,
			singleItem:true,
			autoPlay: 3235,
			stopOnHover: true
	  });
	}
	
	if ($('#remove-top-notification').length > 0){
		$("#remove-top-notification").click(function(){
			"use strict";
			$("body").removeClass("has-top-notification");
			$(".sidebar-right-heading").removeClass("has-top-notification");
			$(".top-navbar").removeClass("has-top-notification");
			$(".sidebar-left").removeClass("has-top-notification");
			$(".sidebar-right").removeClass("has-top-notification");
			$(".top-notification").addClass("close-notification");
		});
	}
	
	
	$(".btn-collapse-sidebar-left-2").click(function(){
		"use strict";
		$(".top-navbar").toggleClass("toggle");
		$(".sidebar-left").toggleClass("hsl-toggle");
		$(".page-content").toggleClass("hsl-toggle");
		if ($(window).width() > 991) {
			if($(".sidebar-right").hasClass("toggle-left") === true){
				$(".sidebar-right").removeClass("toggle-left");
				$(".top-navbar").removeClass("toggle-left");
				$(".page-content").removeClass("toggle-left");
				$(".sidebar-left").removeClass("toggle-left");
				if($(".sidebar-left").hasClass("toggle") === true){
					$(".sidebar-left").removeClass("toggle");
				}
				if($(".page-content").hasClass("toggle") === true){
					$(".page-content").removeClass("toggle");
				}
			}
		}
		if ($(window).width() < 991) {
			$(".sidebar-left").toggleClass("hsl-toggle-left");
			$(".page-content").toggleClass("hsl-toggle-left");
		}
	});
	
});