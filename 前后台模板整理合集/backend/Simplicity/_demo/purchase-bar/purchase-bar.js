jQuery(document).ready(function($){

  $('body').prepend('<div class="purchase-bar"><div class="row"><div class="col-lg-12 text-center"><a href="http://themeforest.net/item/simplicity-massive-admin-pack/6862788"><img alt="Free Support" src="http://www.creativico.com/envato/simplicity/_demo/purchase-bar/support-small.png"></a><a class="purchase-now" href="http://themeforest.net/item/simplicity-massive-admin-pack/6862788"><img alt="Purchase on ThemeForest.net" src="http://www.creativico.com/envato/simplicity/_demo/purchase-bar/purchase.png"></a><a class="close-purchase-bar" href="#"><i class="fa fa-times"></i></a></div></div></div>');

  $('a.close-purchase-bar').on('click', function(){
    $(this).parents('.purchase-bar').slideUp(800);
  });

});