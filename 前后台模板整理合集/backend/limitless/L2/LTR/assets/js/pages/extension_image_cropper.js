/* ------------------------------------------------------------------------------
*
*  # Image Cropper extension
*
*  Specific JS code additions for extension_image_cropper.html page
*
*  Version: 1.0
*  Latest update: Aug 1, 2015
*
* ---------------------------------------------------------------------------- */

$(function() {


    // Basic setup
    // ------------------------------

    // Default initialization
    $('.crop-basic').cropper();


    // Hidden overlay
    $('.crop-modal').cropper({
        modal: false
    });


    // Fixed position
    $('.crop-not-movable').cropper({
        movable: false,
        data: {
            x: 75,
            y: 50,
            width: 350,
            height: 250
        }
    });


    // Fixed size
    $('.crop-not-resizable').cropper({
        resizable: false,
        data: {
            x: 10,
            y: 10,
            width: 300,
            height: 300
        }
    });


    // Disabled autocrop
    $('.crop-auto').cropper({
        autoCrop: false 
    });


    // Disabled drag
    $('.crop-drag').cropper({
        dragCrop: false 
    });


    // 16:9 ratio
    $('.crop-16-9').cropper({
        aspectRatio: 16/9
    });


    // 4:3 ratio
    $('.crop-4-3').cropper({
        aspectRatio: 4/3
    });


    // Minimum zone size
    $('.crop-min').cropper({
        minWidth: 150,
        minHeight: 150
    });


    // Maximum zone size
    $('.crop-max').cropper({
        maxWidth: 150,
        maxHeight: 150
    });



    // Setup demo cropper
    // ------------------------------

    // Define variables
    var $cropper = $(".cropper"),
        $dataX = $("#dataX"),
        $dataY = $("#dataY"),
        $dataH = $("#dataH"),
        $dataW = $("#dataW"),
        cropper;


    // Initialize cropper with callbacks
    $cropper.cropper({
        aspectRatio: 1,
        preview: ".preview",
        data: {
            x: 208,
            y: 22
        },
        done: function(data) {
            $dataX.val(data.x);
            $dataY.val(data.y);
            $dataH.val(data.height);
            $dataW.val(data.width);
        },
        build: function(e) {
            console.log(e.type);
        },
        built: function(e) {
            console.log(e.type);
        },
        dragstart: function(e) {
            console.log(e.type);
        },
        dragmove: function(e) {
            console.log(e.type);
        },
        dragend: function(e) {
            console.log(e.type);
        }
    });

    // Get data from "data" attribute
    cropper = $cropper.data("cropper");

    // Attach callbacks
    $cropper.on({
        "build.cropper": function(e) {
            console.log(e.type);
        },
        "built.cropper": function(e) {
            console.log(e.type);
        },
        "dragstart.cropper": function(e) {
            console.log(e.type);
        },
        "dragmove.cropper": function(e) {
            console.log(e.type);
        },
        "dragend.cropper": function(e) {
            console.log(e.type);
        }
    });


    //
    // Methods
    //

    // Enable
    $("#enable").click(function() {
        $cropper.cropper("enable");
    });

    // Disable
    $("#disable").click(function() {
        $cropper.cropper("disable");
    });

    // Reset
    $("#reset").click(function() {
        $cropper.cropper("reset");
    });

    // Deep reset
    $("#reset-deep").click(function() {
        $cropper.cropper("reset", true);
    });

    // Release
    $("#release").click(function() {
        $cropper.cropper("release");
    });

    // Destroy
    $("#destroy").click(function() {
        $cropper.cropper("destroy");
    });

    // Set data
    $("#setData").click(function() {
        $cropper.cropper("setData", {
            x: $dataX.val(),
            y: $dataY.val(),
            width: $dataW.val(),
            height:$dataH.val()
        });
    });

    // Set aspect ratio
    $("#setAspectRatio").click(function() {
        $cropper.cropper("setAspectRatio", $("#aspectRatio").val());
    });

    // Set image source
    $("#setImgSrc").click(function() {
        $cropper.cropper("setImgSrc", $("#imgSrc").val());
    });

    // Get image info
    $("#getImgInfo").click(function() {
        $("#showInfo").val(JSON.stringify($cropper.cropper("getImgInfo")));
    });

    // Get data
    $("#getData").click(function() {
        $("#showData").val(JSON.stringify($cropper.cropper("getData")));
    });
    
});
