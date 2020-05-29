$(function() {
    //===== File uploader =====//

    $("#file-uploader").pluploadQueue({
        runtimes: 'html5,html4',
        url: 'php/upload.php',
        max_file_size: '10kb',
        unique_names: true,
        filters: [
            {
                title: "Image files", extensions: "jpg,gif,png",
                title: "Text files", extensions: "txt"
            }
        ]
    });

});
