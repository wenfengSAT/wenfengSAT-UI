var BlankonDashboard = function () {

    // =========================================================================
    // SETTINGS APP
    // =========================================================================
    var globalImgPath = '/blankon-fullpack-admin-theme/1.0.7/assets/global/img';

    return {

        // =========================================================================
        // CONSTRUCTOR APP
        // =========================================================================
        init: function () {
            BlankonDashboard.weatherIcons();
            BlankonDashboard.gritterNotification();
            BlankonDashboard.visitorChart();
            BlankonDashboard.realtimeStatusChart();
            BlankonDashboard.countNumber();
            BlankonDashboard.sessionTimeout();
            BlankonDashboard.dropzone();
        },

        // =========================================================================
        // WEATHER ICONS
        // =========================================================================
        weatherIcons: function () {
            var icons = new Skycons({"color": "white"},{"resizeClear": true}),
                list  = [
                    "clear-day", "clear-night", "partly-cloudy-day",
                    "partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind",
                    "fog"
                ],
                i;

            for(i = list.length; i--; )
                icons.set(list[i], list[i]);

            icons.play();
        },

        // =========================================================================
        // GRITTER NOTIFICATION
        // =========================================================================
        gritterNotification: function () {
            // display marketing alert only once
            if($('#wrapper').css('opacity')) {
                if (!$.cookie('intro')) {

                    // Gritter notification intro 1
                    setTimeout(function () {
                        var unique_id = $.gritter.add({
                            // (string | mandatory) the heading of the notification
                            title: 'Welcome to Blankon',
                            // (string | mandatory) the text inside the notification
                            text: 'Blankon is a theme fullpack admin template powered by Twitter bootstrap 3 front-end framework.',
                            // (string | optional) the image to display on the left
                            image: globalImgPath+'/icon/64/contact.png',
                            // (bool | optional) if you want it to fade out on its own or just sit there
                            sticky: false,
                            // (int | optional) the time you want it to be alive for before fading out
                            time: ''
                        });

                        // You can have it return a unique id, this can be used to manually remove it later using
                        setTimeout(function () {
                            $.gritter.remove(unique_id, {
                                fade: true,
                                speed: 'slow'
                            });
                        }, 12000);
                    }, 5000);

                    // Gritter notification intro 2
                    setTimeout(function () {
                        $.gritter.add({
                            // (string | mandatory) the heading of the notification
                            title: 'Playing sounds',
                            // (string | mandatory) the text inside the notification
                            text: 'Blankon made for playing small sounds, will help you with this task. Please make your sound system is active',
                            // (string | optional) the image to display on the left
                            image: globalImgPath+'/icon/64/sound.png',
                            // (bool | optional) if you want it to fade out on its own or just sit there
                            sticky: true,
                            // (int | optional) the time you want it to be alive for before fading out
                            time: ''
                        });
                    }, 8000);

                    // Set cookie intro
                    $.cookie('intro',1, {expires: 1});
                }
            }
        },

        // =========================================================================
        // VISITOR CHART & SERVER STATUS
        // =========================================================================
        visitorChart: function () {
            if($('#visitor-chart').length){
                $.plot("#visitor-chart", [{
                    label: "New Visitor",
                    color: "rgba(0, 177, 225, 0.35)",
                    data: [
                        ["Jan", 450],
                        ["Feb", 532],
                        ["Mar", 367],
                        ["Apr", 245],
                        ["May", 674],
                        ["Jun", 897],
                        ["Jul", 745]
                    ]
                }, {
                    label: "Old Visitor",
                    color: "rgba(233, 87, 63, 0.36)",
                    data: [
                        ["Jan", 362],
                        ["Feb", 452],
                        ["Mar", 653],
                        ["Apr", 756],
                        ["May", 670],
                        ["Jun", 352],
                        ["Jul", 243]
                    ]
                }], {
                    series: {
                        lines: { show: false },
                        splines: {
                            show: true,
                            tension: 0.4,
                            lineWidth: 2,
                            fill: 0.5
                        },
                        points: {
                            show: true,
                            radius: 4
                        }
                    },
                    grid: {
                        borderColor: "transparent",
                        borderWidth: 0,
                        hoverable: true,
                        backgroundColor: "transparent"
                    },
                    tooltip: true,
                    tooltipOpts: { content: "%x : %y" + " People" },
                    xaxis: {
                        tickColor: "transparent",
                        mode: "categories"
                    },
                    yaxis: { tickColor: "transparent" },
                    shadowSize: 0
                });
            }
        },

        // =========================================================================
        // REAL TIME STATUS
        // =========================================================================
        realtimeStatusChart: function () {
            if($('#realtime-status-chart').length){
                var data = [], totalPoints = 50;

                function getRandomData() {

                    if (data.length > 0)
                        data = data.slice(1);

                    // Do a random walk
                    while (data.length < totalPoints) {

                        var prev = data.length > 0 ? data[data.length - 1] : 50,
                            y = prev + Math.random() * 10 - 5;

                        if (y < 0) {
                            y = 0;
                        } else if (y > 100) {
                            y = 100;
                        }
                        data.push(y);
                    }

                    // Zip the generated y values with the x values
                    var res = [];
                    for (var i = 0; i < data.length; ++i) {
                        res.push([i, data[i]])
                    }
                    return res;
                }


                // Set up the control widget
                var updateInterval = 1000;

                var plot4 = $.plot("#realtime-status-chart", [ getRandomData() ], {
                    colors: ["#F6BB42"],
                    series: {
                        lines: {
                            fill: true,
                            lineWidth: 0
                        },
                        shadowSize: 0	// Drawing is faster without shadows
                    },
                    grid: {
                        borderColor: '#ddd',
                        borderWidth: 1,
                        labelMargin: 10
                    },
                    xaxis: {
                        color: '#eee'
                    },
                    yaxis: {
                        min: 0,
                        max: 100,
                        color: '#eee'
                    }
                });

                function update() {

                    plot4.setData([getRandomData()]);

                    // Since the axes don't change, we don't need to call plot.setupGrid()
                    plot4.draw();
                    setTimeout(update, updateInterval);
                }

                update();
            }
        },

        // =========================================================================
        // DEMO COUNT NUMBER
        // =========================================================================
        countNumber: function () {
            $.fn.digits = function(){
                return this.each(function(){
                    $(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") );
                })
            };
            function counter($selector){
                $({countNum: $('.counter-' + $selector).text()}).animate({countNum: $('.counter-' + $selector).data('counter')}, {
                    duration: 8000,
                    easing:'linear',
                    step: function() {
                        $('.counter-' + $selector).text(Math.floor(this.countNum)).digits();
                    },
                    complete: function() {
                        $('.counter-' + $selector).text(this.countNum).digits();
                    }
                });
            };
            // Check if wrapper design is opacity 1
            if($('#wrapper').css('opacity')) {
                counter('visit');
                counter('unique');
                counter('page');
            };
        },

        // =========================================================================
        // SESSION TIMEOUT
        // =========================================================================
        sessionTimeout: function () {
            if($('.demo-dashboard-session').length){
                $.sessionTimeout({
                    title: 'JUST DEMO Your session is about to expire!',
                    logoutButton: 'Logout',
                    keepAliveButton: 'Stay Connected',
                    message: 'Your session will be locked in 2 minute',
                    keepAliveUrl: '#',
                    logoutUrl: 'page-signin.html',
                    redirUrl: 'page-lock-screen.html',
                    ignoreUserActivity: true,
                    warnAfter: 120000,
                    redirAfter: 240000
                });
            }
        },

        // =========================================================================
        // DROPZONE UPLOAD
        // =========================================================================
        dropzone: function () {
            Dropzone.options.myDropzone = {
                init: function() {
                    this.on("addedfile", function(file) {
                        // Create the remove button
                        var removeButton = Dropzone.createElement("<button class='btn btn-sm btn-block btn-danger'>Remove file</button>");

                        // Capture the Dropzone instance as closure.
                        var _this = this;

                        // Listen to the click event
                        removeButton.addEventListener("click", function(e) {
                            // Make sure the button click doesn't submit the form:
                            e.preventDefault();
                            e.stopPropagation();

                            // Remove the file preview.
                            _this.removeFile(file);
                            // If you want to the delete the file on the server as well,
                            // you can do the AJAX request here.
                        });

                        // Add the button to the file preview element.
                        file.previewElement.appendChild(removeButton);
                    });
                }
            }
        }

    };

}();

// Call main app init
BlankonDashboard.init();
