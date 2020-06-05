$( document ).ready(function() {
    var $image = $(".image-crop > img");

    $image.cropper({
        aspectRatio: 7 / 5,
        preview: ".img-preview"
    });
    
    $("#zoomIn").click(function() {
        $image.cropper('zoom', 0.1);
    });

    $("#zoomOut").click(function() {
        $image.cropper('zoom', -0.1);
    });

    $("#rotateLeft").click(function() {
        $image.cropper('rotate', 45);
    });

    $("#rotateRight").click(function() {
        $image.cropper('rotate', -45);
    });
    
    $("#clear").click(function() {
        $image.cropper('clear');
    });
    
    var $replaceWith = $('#replaceWith');
    $('#replace').click(function () {
      $image.cropper('replace', $replaceWith.val());
    });
    
});