$(function(){
        
    // jsTree 
    
    // Default
    $("#jstree_default").jstree();
    
    // Checkbox Plugin
    $("#jstree_checkbox").jstree({
        "checkbox" : {
            "keep_selected_style" : false
        },
        "plugins" : [ "checkbox" ]
    });
    
    // Drag & drop plugin    
    $("#jstree_dnd").jstree({
        "core" : {"check_callback" : true},
        "plugins" : [ "dnd" ]
    });    
    
    //jstree_dnd
    
    
    // End jsTree
    
    // File upload
    $("#file-simple").fileinput({
            showUpload: false,
            showCaption: false,
            browseClass: "btn btn-danger",
            fileType: "any"
    });             
    // End File upload
    
    // File Tree
    $("#filetree").fileTree({
        root: '/',
        script: 'assets/filetree/jqueryFileTree.php',
        expandSpeed: 100,
        collapseSpeed: 100,
        multiFolder: false                    
    }, function(file) {
        alert(file);
    }, function(dir){
        setTimeout(function(){
            page_content_onresize();
        },200);                    
    });                
    // End File Tree
    
    // Image croppting 
    var imgX = $("#dci_x");
    var imgY = $("#dci_y");
    var imgW = $("#dci_w");
    var imgH = $("#dci_h");
    var crop = $(".cropping-image-wrap > img");
    
    var options = {
        aspectRatio: 1,
        done: function(data) {
            imgX.val(data.x);
            imgY.val(data.y);
            imgW.val(data.height);
            imgH.val(data.width);
        },
        preview: ".cropping-preview"
    }
    
    crop.cropper(options);    
    
    $("#crop_zoomIn").click(function() {
        crop.cropper("zoom", 0.1);
    });
    $("#crop_zoomOut").click(function() {
        crop.cropper("zoom", -0.1);
    });
    $("#crop_rotateLeft").click(function() {
        crop.cropper("rotate", -90);
    });
    $("#crop_rotateRight").click(function() {
        crop.cropper("rotate", 90);
    });    
    $("#crop_reset").click(function() {
        crop.cropper("reset");
    });
    $("#crop_clear").click(function() {
        crop.cropper("clear");
    });
    $("#crop_destroy").click(function() {
        crop.cropper("destroy");
    });
    
    $(".cropping-options :checkbox").on("change", function(e){
        
        $this = $(this);
        
        console.log($this.is(":checked"));
        
        options[$this.attr("name")] = $this.is(":checked") ? true : false;
        
        crop.cropper("destroy").cropper(options);
    }); 
    
    // End Image cropping
});      