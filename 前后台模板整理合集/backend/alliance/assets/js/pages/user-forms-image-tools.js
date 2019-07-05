'use strict';
//  Author: ThemeREX.com
//
//  .html scripts
//

(function($) {

    $(document).ready(function() {

        "use strict";

        // Init Theme Core
        Core.init();

        // Init Demo JS
        Demo.init();


        // Init Zoom Plugin
        var zoomSelector = $('#zoom_demo');
        zoomSelector.elevateZoom({
            // borderColour: "#4a89dc", // Porthole border color
            constrainType: "height",
            constrainSize: 274,
            zoomType: "lens",
            lensSize: 190,
            containLensZoom: true,
            zoomWindowPosition: 9,
            zoomWindowFadeIn: 400,
            zoomWindowFadeOut: 400,
            lensFadeIn: 300,
            lensFadeOut: 300
        });

        // Zoom styles changer
        $('.zoom-switcher').find('a').on('click', function(e) {
            e.preventDefault();

            // Zoom Options
            var zoomStyle = $(this).attr('opt');

            // ZoomStyle Switcher
            switch (zoomStyle) {
                case '1':
                    zoomSelector.elevateZoom({
                        constrainType: "height",
                        constrainSize: 274,
                        zoomType: "lens",
                        lensSize: 190,
                        containLensZoom: true,
                        zoomWindowPosition: 9,
                        zoomWindowFadeIn: 400,
                        zoomWindowFadeOut: 400,
                        lensFadeIn: 300,
                        lensFadeOut: 300
                    });
                    break;
                case '2':
                    zoomSelector.elevateZoom({
                        zoomType: "inner",
                        cursor: "crosshair",
                        zoomWindowFadeIn: 400,
                        zoomWindowFadeOut: 400
                    });
                    break;
                case '3':
                    zoomSelector.elevateZoom({
                        tint: true,
                        tintColour: '#000',
                        tintOpacity: 0.65,
                        zoomWindowPosition: 1,
                        zoomWindowFadeIn: 400,
                        zoomWindowFadeOut: 400,
                        lensFadeIn: 300,
                        lensFadeOut: 300
                    });
                    break;
            }

            $(this).siblings().removeClass("active");
            $(this).addClass("active");
        });

        var console = window.console || {
                    log: function() {}
                },
            $alert = $('.docs-alert'),
            $message = $alert.find('.message'),
            showMessage = function(message, type) {
                $message.text(message);

                if (type) {
                    $message.addClass(type);
                }

                $alert.fadeIn();

                setTimeout(function() {
                    $alert.fadeOut();
                }, 3000);
            };

        // Cropper Demo
        (function() {
            var $image = $('.img-container > img'),
                $dataX = $('#dataX'),
                $dataY = $('#dataY'),
                $dataHeight = $('#dataHeight'),
                $dataWidth = $('#dataWidth'),
                $dataRotate = $('#dataRotate'),
                options = {
                    aspectRatio: 16 / 9,
                    preview: '.img-preview',
                    crop: function(data) {
                        $dataX.val(Math.round(data.x));
                        $dataY.val(Math.round(data.y));
                        $dataHeight.val(Math.round(data.height));
                        $dataWidth.val(Math.round(data.width));
                        $dataRotate.val(Math.round(data.rotate));
                    }
                };

            $image.on({
                'build.cropper': function(e) {
                    console.log(e.type);
                },
                'built.cropper': function(e) {
                    console.log(e.type);
                },
                'dragstart.cropper': function(e) {
                    console.log(e.type, e.dragType);
                },
                'dragmove.cropper': function(e) {
                    console.log(e.type, e.dragType);
                },
                'dragend.cropper': function(e) {
                    console.log(e.type, e.dragType);
                },
                'zoomin.cropper': function(e) {
                    console.log(e.type);
                },
                'zoomout.cropper': function(e) {
                    console.log(e.type);
                }
            }).cropper(options);

            // Methods
            $(document.body).on('click', '[data-method]', function() {
                var data = $(this).data(),
                    $target,
                    result;

                if (data.method) {
                    data = $.extend({}, data); // Clone a new one

                    if (typeof data.target !== 'undefined') {
                        $target = $(data.target);

                        if (typeof data.option === 'undefined') {
                            try {
                                data.option = JSON.parse($target.val());
                            } catch (e) {
                                console.log(e.message);
                            }
                        }
                    }

                    result = $image.cropper(data.method, data.option);

                    if (data.method === 'getCroppedCanvas') {
                        $('#getCroppedCanvasModal').modal().find('.modal-body').html(result);
                    }

                    if ($.isPlainObject(result) && $target) {
                        try {
                            $target.val(JSON.stringify(result));
                        } catch (e) {
                            console.log(e.message);
                        }
                    }

                }
            }).on('keydown', function(e) {

                switch (e.which) {
                    case 37:
                        e.preventDefault();
                        $image.cropper('move', -1, 0);
                        break;

                    case 38:
                        e.preventDefault();
                        $image.cropper('move', 0, -1);
                        break;

                    case 39:
                        e.preventDefault();
                        $image.cropper('move', 1, 0);
                        break;

                    case 40:
                        e.preventDefault();
                        $image.cropper('move', 0, 1);
                        break;
                }

            });

            // Import image
            var $inputImage = $('#inputImage'),
                URL = window.URL || window.webkitURL,
                blobURL;

            if (URL) {
                $inputImage.change(function() {
                    var files = this.files,
                        file;

                    if (files && files.length) {
                        file = files[0];

                        if (/^image\/\w+$/.test(file.type)) {
                            blobURL = URL.createObjectURL(file);
                            $image.one('built.cropper', function() {
                                URL.revokeObjectURL(blobURL); // Revoke when load complete
                            }).cropper('reset', true).cropper('replace', blobURL);
                            $inputImage.val('');
                        } else {
                            showMessage('Please choose an image file.');
                        }
                    }
                });
            } else {
                $inputImage.parent().remove();
            }

            // Options
            $('.docs-options :checkbox').on('change', function() {
                var $this = $(this);

                options[$this.val()] = $this.prop('checked');
                $image.cropper('destroy').cropper(options);
            });

            // Tooltips
            $('[data-toggle="tooltip"]').tooltip();

        }());
    });

})(jQuery);
