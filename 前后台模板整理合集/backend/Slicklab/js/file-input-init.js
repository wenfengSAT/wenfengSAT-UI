$("#file-0").fileinput({
    'allowedFileExtensions' : ['jpg', 'png','gif'],
});
$("#file-1").fileinput({
    initialPreview: ["<img src='Desert.jpg' class='file-preview-image'>", "<img src='Jellyfish.jpg' class='file-preview-image'>"],
    initialPreviewConfig: [
        {caption: 'Desert.jpg', width: '120px', url: '#'},
        {caption: 'Jellyfish.jpg', width: '120px', url: '#'},
    ],
    uploadUrl: '#',
    allowedFileExtensions : ['jpg', 'png','gif'],
    overwriteInitial: false,
    maxFileSize: 1000,
    maxFilesNum: 10,
    //allowedFileTypes: ['image', 'video', 'flash'],
    slugCallback: function(filename) {
        return filename.replace('(', '_').replace(']', '_');
    }
});
/*
 $(".file").on('fileselect', function(event, n, l) {
 alert('File Selected. Name: ' + l + ', Num: ' + n);
 });
 */
$("#file-3").fileinput({
    showUpload: false,
    showCaption: false,
    browseClass: "btn btn-primary btn-lg",
    fileType: "any"
});
$("#file-4").fileinput({
    uploadExtraData: [
        {kvId: '10'}
    ],
});
$(".btn-warning").on('click', function() {
    if ($('#file-4').attr('disabled')) {
        $('#file-4').fileinput('enable');
    } else {
        $('#file-4').fileinput('disable');
    }
});
$(".btn-info").on('click', function() {
    $('#file-4').fileinput('refresh', {previewClass:'bg-info'});
});
/*
 $('#file-4').on('fileselectnone', function() {
 alert('Huh! You selected no files.');
 });
 $('#file-4').on('filebrowse', function() {
 alert('File browse clicked for #file-4');
 });
 */
$(document).ready(function() {
    $("#test-upload").fileinput({
        'showPreview' : false,
        'allowedFileExtensions' : ['jpg', 'png','gif'],
        'elErrorContainer': '#errorBlock'
    });
    /*
     $("#test-upload").on('fileloaded', function(event, file, previewId, index) {
     alert('i = ' + index + ', id = ' + previewId + ', file = ' + file.name);
     });
     */
});
