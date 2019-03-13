jQuery(document).ready(function() {

    //------------------------------
    // Powerify Panels
    //------------------------------

    $('#panel-advancedoptions').panels({
        localStorage: false, 
        sortable: true,
        toggleColors: true
    });


    //------------------------------
    // Date Range Picker
    //------------------------------

    $('#daterangepicker2').daterangepicker({
    ranges: {
        'Today': [moment(), moment()],
        'Yesterday': [moment().subtract('days', 1), moment().subtract('days', 1)],
        'Last 7 Days': [moment().subtract('days', 6), moment()],
        'Last 30 Days': [moment().subtract('days', 29), moment()],
        'This Month': [moment().startOf('month'), moment().endOf('month')],
        'Last Month': [moment().subtract('month', 1).startOf('month'), moment().subtract('month', 1).endOf('month')]
    },
    opens: 'right',
    startDate: moment().subtract('days', 29),
    endDate: moment()
    },
    function(start, end) {
        $('#daterangepicker2 span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    });

    //------------------------------
    // Switch
    //------------------------------

    Switchery(document.querySelector('.js-switch-success'), {color: getBrandColor('success')});


    //------------------------------
    // Easy Pie Charts
    //------------------------------


    try {
        $('.easypiechart#bandwidth').easyPieChart({
            barColor: "rgba(255, 255, 255, 0.6)",
            trackColor: 'rgba(255, 255, 255, 0.2)',
            scaleColor: 'rgba(255, 255, 255, 0.8)',
            scaleLength: 0,
            lineCap: 'square',
            lineWidth: 4,
            size: 80,
            onStep: function(from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });

        $('.easypiechart#ramusage').easyPieChart({
            barColor: "rgba(255, 255, 255, 0.6)",
            trackColor: 'rgba(255, 255, 255, 0.2)',
            scaleColor: 'rgba(255, 255, 255, 0.8)',
            scaleLength: 0,
            lineCap: 'square',
            lineWidth: 4,
            size: 80,
            onStep: function(from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });

        $('.easypiechart#serverload').easyPieChart({
            barColor: "rgba(255, 255, 255, 0.6)",
            trackColor: 'rgba(255, 255, 255, 0.2)',
            scaleColor: 'rgba(255, 255, 255, 0.8)',
            scaleLength: 0,
            lineCap: 'square',
            lineWidth: 4,
            size: 80,
            onStep: function(from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });
        $('.easypiechart#space').easyPieChart({
            barColor: "rgba(255, 255, 255, 0.6)",
            trackColor: 'rgba(255, 255, 255, 0.2)',
            scaleColor: 'rgba(255, 255, 255, 0.8)',
            scaleLength: 0,
            lineCap: 'square',
            lineWidth: 4,
            size: 80,
            onStep: function(from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });


        $('#updatePieCharts').on('click', function() {
            $('.easypiechart#bandwidth').data('easyPieChart').update(Math.random()*100);
            $('.easypiechart#ramusage').data('easyPieChart').update(Math.random()*100);
            $('.easypiechart#serverload').data('easyPieChart').update(Math.random()*100);
            $('.easypiechart#space').data('easyPieChart').update(Math.random()*100);
            return false;
        });
    }
    catch(error) {}




// map

    $mapworld = $(".map-world");

    $mapworld.mapael({
        map : {
            name : "world_countries",
            zoom : {
                enabled : true,
                maxLevel : 10
            },
            defaultArea: {
                attrs : {
                    stroke : "#fff", 
                    "stroke-width" : 1
                }
            }
        },
        legend : {
            area : {
                marginLeft : 5,
                display : true,
                title :"Population by country", 
                titleAttrs : {
                    "font-size": 17,
                    "font-family": "Source Sans Pro",
                    fill : "#666"
                            
                        },
                labelAttrs : {
                    "font-size": 13,
                    "font-family": "Source Sans Pro",
                    fill : "#666"
                },
                slices : [
                    {
                        max :5000000, 
                        attrs : {
                            fill : "#d5dbdb"
                        },
                        label :"Less than 5,000,000",
                        size : 10
                    },
                    {
                        min :5000000, 
                        max :10000000, 
                        attrs : {
                            fill : "#bfc9ca"
                        },
                        label :"5,000,000 to 10,000,000",
                        size : 10
                    },
                    {
                        min :10000000, 
                        max :50000000, 
                        attrs : {
                            fill : "#aab7b8"
                        },
                        label :"10,000,000 to 50,000,000",
                        size : 10
                    },
                    {
                        min :50000000, 
                        attrs : {
                            fill : "#95a5a6"
                        },
                        label :"more than 50 million",
                        size : 10
                    }
                ]
            },
            plot :{
                display : true,
                marginLeft : 5,
                title: "Some cities",
                titleAttrs : {
                    "font-size": 17,
                    "font-family": "Source Sans Pro",
                    fill : "#666"
                            
                        },
                labelAttrs : {
                    "font-size": 13,
                    "font-family": "Source Sans Pro",
                    fill : "#666"
                },
                slices : [
                    {
                        max :500000, 
                        attrs : {
                            fill : "#e36d4f"
                        },
                        attrsHover :{
                            transform : "s1.5",
                            "stroke-width" : 1
                        }, 
                        label :"less than 500,000", 
                        size : 10
                    },
                    {
                        min :500000, 
                        max :1000000, 
                        attrs : {
                            fill : "#e36d4f"
                        },
                        attrsHover :{
                            transform : "s1.5",
                            "stroke-width" : 1
                        }, 
                        label :"500,000 to 1,000,000", 
                        size : 20
                    },
                    {
                        min :1000000, 
                        attrs : {
                            fill : "#e36d4f"
                        },
                        attrsHover :{
                            transform : "s1.5",
                            "stroke-width" : 1
                        }, 
                        label :"more than 1 million", 
                        size : 30
                    }
                ]
            }
        },
        plots : {
            'paris' : {
                latitude :48.86, 
                longitude :2.3444, 
                value : 500000000, 
                tooltip: {content : "Paris<br />Population: 500,000,000"}
            },
            'newyork' : {
                latitude :40.667, 
                longitude :-73.833, 
                value : 200001, 
                tooltip: {content : "New york<br />Population: 200,001"}
            },
            'sydney' : {
                latitude :-33.917, 
                longitude :151.167, 
                value : 600000, 
                tooltip: {content : "Sydney<br />Population: 600,000"}
            },
            'brasilia' : {
                latitude :-15.781682, 
                longitude :-47.924195, 
                value : 200000001, 
                tooltip: {content : "Brasilia<br />Population: 200,000,001"}
            },
            'tokyo': {
                latitude :35.687418, 
                longitude :139.692306, 
                value : 200001, 
                tooltip: {content : "Tokyo<br />Population: 200,001"}
            }
        },
        areas: {
            "AF": {
                "value": "35320445",
                "attrs": {
                    "href": "#"
                },
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Afghanistan<\/span><br \/>Population : 35,320,445"
                }
            },
            "ZA": {
                "value": "50586757",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">South Africa<\/span><br \/>Population : 50,586,757"
                }
            },
            "AL": {
                "value": "3215988",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Albania<\/span><br \/>Population : 3,215,988"
                }
            },
            "DZ": {
                "value": "35980193",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Algeria<\/span><br \/>Population : 35,980,193"
                }
            },
            "DE": {
                "value": "81726000",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Germany<\/span><br \/>Population : 81,726,000"
                }
            },
            "AD": {
                "value": "86165",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Andorra<\/span><br \/>Population : 86,165"
                }
            },
            "AO": {
                "value": "19618432",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Angola<\/span><br \/>Population : 19,618,432"
                }
            },
            "AG": {
                "value": "89612",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Antigua And Barbuda<\/span><br \/>Population : 89,612"
                }
            },
            "SA": {
                "value": "28082541",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Saudi Arabia<\/span><br \/>Population : 28,082,541"
                }
            },
            "AR": {
                "value": "40764561",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Argentina<\/span><br \/>Population : 40,764,561"
                }
            },
            "AM": {
                "value": "3100236",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Armenia<\/span><br \/>Population : 3,100,236"
                }
            },
            "AU": {
                "value": "22620600",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Australia<\/span><br \/>Population : 22,620,600"
                }
            },
            "AT": {
                "value": "8419000",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Austria<\/span><br \/>Population : 8,419,000"
                }
            },
            "AZ": {
                "value": "9168000",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Azerbaijan<\/span><br \/>Population : 9,168,000"
                }
            },
            "BS": {
                "value": "347176",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Bahamas<\/span><br \/>Population : 347,176"
                }
            },
            "BH": {
                "value": "1323535",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Bahrain<\/span><br \/>Population : 1,323,535"
                }
            },
            "BD": {
                "value": "150493658",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Bangladesh<\/span><br \/>Population : 150,493,658"
                }
            },
            "BB": {
                "value": "273925",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Barbados<\/span><br \/>Population : 273,925"
                }
            },
            "BE": {
                "value": "11008000",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Belgium<\/span><br \/>Population : 11,008,000"
                }
            },
            "BZ": {
                "value": "356600",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Belize<\/span><br \/>Population : 356,600"
                }
            },
            "BJ": {
                "value": "9099922",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Benin<\/span><br \/>Population : 9,099,922"
                }
            },
            "BT": {
                "value": "738267",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Bhutan<\/span><br \/>Population : 738,267"
                }
            },
            "BY": {
                "value": "9473000",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Belarus<\/span><br \/>Population : 9,473,000"
                }
            },
            "MM": {
                "value": "48336763",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Myanmar<\/span><br \/>Population : 48,336,763"
                }
            },
            "BO": {
                "value": "10088108",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Bolivia, Plurinational State Of<\/span><br \/>Population : 10,088,108"
                }
            },
            "BA": {
                "value": "3752228",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Bosnia And Herzegovina<\/span><br \/>Population : 3,752,228"
                }
            },
            "BW": {
                "value": "2030738",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Botswana<\/span><br \/>Population : 2,030,738"
                }
            },
            "BR": {
                "value": "196655014",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Brazil<\/span><br \/>Population : 196,655,014"
                }
            },
            "BN": {
                "value": "405938",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Brunei Darussalam<\/span><br \/>Population : ,405,938"
                }
            },
            "BG": {
                "value": "7476000",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Bulgaria<\/span><br \/>Population : 7,476,000"
                }
            },
            "BF": {
                "value": "16967845",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Burkina Faso<\/span><br \/>Population : 16,967,845"
                }
            },
            "BI": {
                "value": "8575172",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Burundi<\/span><br \/>Population : 8,575,172"
                }
            },
            "KH": {
                "value": "14305183",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Cambodia<\/span><br \/>Population : 14,305,183"
                }
            },
            "CM": {
                "value": "20030362",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Cameroon<\/span><br \/>Population : 20,030,362"
                }
            },
            "CA": {
                "value": "34482779",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Canada<\/span><br \/>Population : 34,482,779"
                }
            },
            "CV": {
                "value": "500585",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Cape Verde<\/span><br \/>Population : 500,585"
                }
            },
            "CF": {
                "value": "4486837",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Central African Republic<\/span><br \/>Population : 4,486,837"
                }
            },
            "CL": {
                "value": "17269525",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Chile<\/span><br \/>Population : 17,269,525"
                }
            },
            "CN": {
                "value": "1344130000",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">China<\/span><br \/>Population : 1344,130,000"
                }
            },
            "CY": {
                "value": "1116564",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Cyprus<\/span><br \/>Population : 1,116,564"
                }
            },
            "CO": {
                "value": "46927125",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Colombia<\/span><br \/>Population : 46,927,125"
                }
            },
            "KM": {
                "value": "753943",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Comoros<\/span><br \/>Population : 753,943"
                }
            },
            "CG": {
                "value": "4139748",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Congo<\/span><br \/>Population : 4,139,748"
                }
            },
            "CD": {
                "value": "67757577",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Congo, The Democratic Republic Of The<\/span><br \/>Population : 67,757,577"
                }
            },
            "KP": {
                "value": "24451285",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Korea, Democratic People's Republic Of<\/span><br \/>Population : 24,451,285"
                }
            },
            "KR": {
                "value": "49779000",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Korea, Republic Of<\/span><br \/>Population : 49,779,000"
                }
            },
            "CR": {
                "value": "4726575",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Costa Rica<\/span><br \/>Population : 4,726,575"
                }
            },
            "CI": {
                "value": "20152894",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">C\u00d4te D'ivoire<\/span><br \/>Population : 20,152,894"
                }
            },
            "HR": {
                "value": "4407000",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Croatia<\/span><br \/>Population : 4,407,000"
                }
            },
            "CU": {
                "value": "11253665",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Cuba<\/span><br \/>Population : 11,253,665"
                }
            },
            "DK": {
                "value": "5574000",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Denmark<\/span><br \/>Population : 5,574,000"
                }
            },
            "DJ": {
                "value": "905564",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Djibouti<\/span><br \/>Population : 905,564"
                }
            },
            "DM": {
                "value": "67675",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Dominica<\/span><br \/>Population : 67,675"
                }
            },
            "EG": {
                "value": "82536770",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Egypt<\/span><br \/>Population : 82,536,770"
                }
            },
            "AE": {
                "value": "7890924",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">United Arab Emirates<\/span><br \/>Population : 7,890,924"
                }
            },
            "EC": {
                "value": "14666055",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Ecuador<\/span><br \/>Population : 14,666,055"
                }
            },
            "ER": {
                "value": "5415280",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Eritrea<\/span><br \/>Population : 5,415,280"
                }
            },
            "ES": {
                "value": "46235000",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Spain<\/span><br \/>Population : 46,235,000"
                }
            },
            "EE": {
                "value": "1340000",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Estonia<\/span><br \/>Population : 1,340,000"
                }
            },
            "US": {
                "value": "311591917",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">United States<\/span><br \/>Population : 311,591,917"
                }
            },
            "ET": {
                "value": "84734262",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Ethiopia<\/span><br \/>Population : 84,734,262"
                }
            },
            "FJ": {
                "value": "868406",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Fiji<\/span><br \/>Population : 868,406"
                }
            },
            "FI": {
                "value": "5387000",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Finland<\/span><br \/>Population : 5,387,000"
                }
            },
            "FR": {
                "value": "65436552",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">France<\/span><br \/>Population : 65,436,552"
                }
            },
            "GA": {
                "value": "1534262",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Gabon<\/span><br \/>Population : 1,534,262"
                }
            },
            "GM": {
                "value": "1776103",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Gambia<\/span><br \/>Population : 1,776,103"
                }
            },
            "GE": {
                "value": "4486000",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Georgia<\/span><br \/>Population : 4,486,000"
                }
            },
            "GH": {
                "value": "24965816",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Ghana<\/span><br \/>Population : 24,965,816"
                }
            },
            "GR": {
                "value": "11304000",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Greece<\/span><br \/>Population : 11,304,000"
                }
            },
            "GD": {
                "value": "104890",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Grenada<\/span><br \/>Population : ,104,890"
                }
            },
            "GT": {
                "value": "14757316",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Guatemala<\/span><br \/>Population : 14,757,316"
                }
            },
            "GN": {
                "value": "10221808",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Guinea<\/span><br \/>Population : 10,221,808"
                }
            },
            "GQ": {
                "value": "720213",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Equatorial Guinea<\/span><br \/>Population : 720,213"
                }
            },
            "GW": {
                "value": "1547061",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Guinea-bissau<\/span><br \/>Population : 1,547,061"
                }
            },
            "GY": {
                "value": "756040",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Guyana<\/span><br \/>Population : 756,040"
                }
            },
            "HT": {
                "value": "10123787",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Haiti<\/span><br \/>Population : 10,123,787"
                }
            },
            "HN": {
                "value": "7754687",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Honduras<\/span><br \/>Population : 7,754,687"
                }
            },
            "HU": {
                "value": "9971000",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Hungary<\/span><br \/>Population : 9,971,000"
                }
            },
            "JM": {
                "value": "2709300",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Jamaica<\/span><br \/>Population : 2,709,300"
                }
            },
            "JP": {
                "value": "127817277",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Japan<\/span><br \/>Population : 127,817,277"
                }
            },
            "MH": {
                "value": "54816",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Marshall Islands<\/span><br \/>Population : 54,816"
                }
            },
            "PW": {
                "value": "20609",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Palau<\/span><br \/>Population : 20,609"
                }
            },
            "SB": {
                "value": "552267",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Solomon Islands<\/span><br \/>Population : 552,267"
                }
            },
            "IN": {
                "value": "1241491960",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">India<\/span><br \/>Population : 1241,491,960"
                }
            },
            "ID": {
                "value": "242325638",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Indonesia<\/span><br \/>Population : 242,325,638"
                }
            },
            "JO": {
                "value": "6181000",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Jordan<\/span><br \/>Population : 6,181,000"
                }
            },
            "IR": {
                "value": "74798599",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Iran, Islamic Republic Of<\/span><br \/>Population : 74,798,599"
                }
            },
            "IQ": {
                "value": "32961959",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Iraq<\/span><br \/>Population : 32,961,959"
                }
            },
            "IE": {
                "value": "4487000",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Ireland<\/span><br \/>Population : 4,487,000"
                }
            },
            "IS": {
                "value": "319000",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Iceland<\/span><br \/>Population : 319,000"
                }
            },
            "IL": {
                "value": "7765700",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Israel<\/span><br \/>Population : 7,765,700"
                }
            },
            "IT": {
                "value": "60770000",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Italy<\/span><br \/>Population : 60,770,000"
                }
            },
            "KZ": {
                "value": "16558459",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Kazakhstan<\/span><br \/>Population : 16,558,459"
                }
            },
            "KE": {
                "value": "41609728",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Kenya<\/span><br \/>Population : 41,609,728"
                }
            },
            "KG": {
                "value": "5507000",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Kyrgyzstan<\/span><br \/>Population : 5,507,000"
                }
            },
            "KI": {
                "value": "101093",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Kiribati<\/span><br \/>Population : 101,093"
                }
            },
            "KW": {
                "value": "2818042",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Kuwait<\/span><br \/>Population : 2,818,042"
                }
            },
            "LA": {
                "value": "6288037",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Lao People's Democratic Republic<\/span><br \/>Population : 6,288,037"
                }
            },
            "LS": {
                "value": "2193843",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Lesotho<\/span><br \/>Population : 2,193,843"
                }
            },
            "LV": {
                "value": "2220000",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Latvia<\/span><br \/>Population : 2,220,000"
                }
            },
            "LB": {
                "value": "4259405",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Lebanon<\/span><br \/>Population : 4,259,405"
                }
            },
            "LR": {
                "value": "4128572",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Liberia<\/span><br \/>Population : 4,128,572"
                }
            },
            "LY": {
                "value": "6422772",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Libya<\/span><br \/>Population : 6,422,772"
                }
            },
            "LI": {
                "value": "36304",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Liechtenstein<\/span><br \/>Population : 36,304"
                }
            },
            "LT": {
                "value": "3203000",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Lithuania<\/span><br \/>Population : 3,203,000"
                }
            },
            "LU": {
                "value": "517000",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Luxembourg<\/span><br \/>Population : 517,000"
                }
            },
            "MK": {
                "value": "2063893",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Macedonia, The Former Yugoslav Republic Of<\/span><br \/>Population : 2,063,893"
                }
            },
            "MG": {
                "value": "21315135",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Madagascar<\/span><br \/>Population : 21,315,135"
                }
            },
            "MY": {
                "value": "28859154",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Malaysia<\/span><br \/>Population : 28,859,154"
                }
            },
            "MW": {
                "value": "15380888",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Malawi<\/span><br \/>Population : 15,380,888"
                }
            },
            "MV": {
                "value": "320081",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Maldives<\/span><br \/>Population : 320,081"
                }
            },
            "ML": {
                "value": "15839538",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Mali<\/span><br \/>Population : 15,839,538"
                }
            },
            "MT": {
                "value": "419000",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Malta<\/span><br \/>Population : 419,000"
                }
            },
            "MA": {
                "value": "32272974",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Morocco<\/span><br \/>Population : 32,272,974"
                }
            },
            "MU": {
                "value": "1286051",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Mauritius<\/span><br \/>Population : 1,286,051"
                }
            },
            "MR": {
                "value": "3541540",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Mauritania<\/span><br \/>Population : 3,541,540"
                }
            },
            "MX": {
                "value": "114793341",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Mexico<\/span><br \/>Population : 114,793,341"
                }
            },
            "FM": {
                "value": "111542",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Micronesia, Federated States Of<\/span><br \/>Population : ,111,542"
                }
            },
            "MD": {
                "value": "3559000",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Moldova, Republic Of<\/span><br \/>Population : 3,559,000"
                }
            },
            "MC": {
                "value": "35427",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Monaco<\/span><br \/>Population : 35,427"
                }
            },
            "MN": {
                "value": "2800114",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Mongolia<\/span><br \/>Population : 2,800,114"
                }
            },
            "ME": {
                "value": "632261",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Montenegro<\/span><br \/>Population : 632,261"
                }
            },
            "MZ": {
                "value": "23929708",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Mozambique<\/span><br \/>Population : 23,929,708"
                }
            },
            "NA": {
                "value": "2324004",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Namibia<\/span><br \/>Population : 2,324,004"
                }
            },
            "NP": {
                "value": "30485798",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Nepal<\/span><br \/>Population : 30,485,798"
                }
            },
            "NI": {
                "value": "5869859",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Nicaragua<\/span><br \/>Population : 5,869,859"
                }
            },
            "NE": {
                "value": "16068994",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Niger<\/span><br \/>Population : 16,068,994"
                }
            },
            "NG": {
                "value": "162470737",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Nigeria<\/span><br \/>Population : 162,470,737"
                }
            },
            "NO": {
                "value": "4952000",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Norway<\/span><br \/>Population : 4,952,000"
                }
            },
            "NZ": {
                "value": "4405200",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">New Zealand<\/span><br \/>Population : 4,405,200"
                }
            },
            "OM": {
                "value": "2846145",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Oman<\/span><br \/>Population : 2,846,145"
                }
            },
            "UG": {
                "value": "34509205",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Uganda<\/span><br \/>Population : 34,509,205"
                }
            },
            "UZ": {
                "value": "29341200",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Uzbekistan<\/span><br \/>Population : 29,341,200"
                }
            },
            "PK": {
                "value": "176745364",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Pakistan<\/span><br \/>Population : 176,745,364"
                }
            },
            "PS": {
                "value": "4019433",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Palestine, State Of<\/span><br \/>Population : 4,019,433"
                }
            },
            "PA": {
                "value": "3571185",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Panama<\/span><br \/>Population : 3,571,185"
                }
            },
            "PG": {
                "value": "7013829",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Papua New Guinea<\/span><br \/>Population : 7,013,829"
                }
            },
            "PY": {
                "value": "6568290",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Paraguay<\/span><br \/>Population : 6,568,290"
                }
            },
            "NL": {
                "value": "16696000",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Netherlands<\/span><br \/>Population : 16,696,000"
                }
            },
            "PE": {
                "value": "29399817",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Peru<\/span><br \/>Population : 29,399,817"
                }
            },
            "PH": {
                "value": "94852030",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Philippines<\/span><br \/>Population : 94,852,030"
                }
            },
            "PL": {
                "value": "38216000",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Poland<\/span><br \/>Population : 38,216,000"
                }
            },
            "PT": {
                "value": "10637000",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Portugal<\/span><br \/>Population : 10,637,000"
                }
            },
            "QA": {
                "value": "1870041",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Qatar<\/span><br \/>Population : 1,870,041"
                }
            },
            "DO": {
                "value": "10056181",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Dominican Republic<\/span><br \/>Population : 10,056,181"
                }
            },
            "RO": {
                "value": "21390000",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Romania<\/span><br \/>Population : 21,390,000"
                }
            },
            "GB": {
                "value": "62641000",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">United Kingdom<\/span><br \/>Population : 62,641,000"
                }
            },
            "RU": {
                "value": "141930000",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Russian Federation<\/span><br \/>Population : 141,930,000"
                }
            },
            "RW": {
                "value": "10942950",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Rwanda<\/span><br \/>Population : 10,942,950"
                }
            },
            "KN": {
                "value": "53051",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Saint Kitts And Nevis<\/span><br \/>Population : 53,051"
                }
            },
            "SM": {
                "value": "31735",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">San Marino<\/span><br \/>Population : 31,735"
                }
            },
            "VC": {
                "value": "109365",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Saint Vincent And The Grenadines<\/span><br \/>Population : 109,365"
                }
            },
            "LC": {
                "value": "176000",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Saint Lucia<\/span><br \/>Population : 176,000"
                }
            },
            "SV": {
                "value": "6227491",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">El Salvador<\/span><br \/>Population : 6,227,491"
                }
            },
            "WS": {
                "value": "183874",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Samoa<\/span><br \/>Population : 183,874"
                }
            },
            "ST": {
                "value": "168526",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Sao Tome And Principe<\/span><br \/>Population : 168,526"
                }
            },
            "SN": {
                "value": "12767556",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Senegal<\/span><br \/>Population : 12,767,556"
                }
            },
            "RS": {
                "value": "7261000",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Serbia<\/span><br \/>Population : 7,261,000"
                }
            },
            "SC": {
                "value": "86000",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Seychelles<\/span><br \/>Population : 86,000"
                }
            },
            "SL": {
                "value": "5997486",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Sierra Leone<\/span><br \/>Population : 5,997,486"
                }
            },
            "SG": {
                "value": "5183700",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Singapore<\/span><br \/>Population : 5,183,700"
                }
            },
            "SK": {
                "value": "5440000",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Slovakia<\/span><br \/>Population : 5,440,000"
                }
            },
            "SI": {
                "value": "2052000",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Slovenia<\/span><br \/>Population : 2,052,000"
                }
            },
            "SO": {
                "value": "9556873",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Somalia<\/span><br \/>Population : 9,556,873"
                }
            },
            "SD": {
                "value": "34318385",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Sudan<\/span><br \/>Population : 34,318,385"
                }
            },
            "SS": {
                "value": "10314021",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">South Sudan<\/span><br \/>Population : 10,314,021"
                }
            },
            "LK": {
                "value": "20869000",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Sri Lanka<\/span><br \/>Population : 20,869,000"
                }
            },
            "SE": {
                "value": "9453000",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Sweden<\/span><br \/>Population : 9,453,000"
                }
            },
            "CH": {
                "value": "7907000",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Switzerland<\/span><br \/>Population : 7,907,000"
                }
            },
            "SR": {
                "value": "529419",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Suriname<\/span><br \/>Population : 529,419"
                }
            },
            "SZ": {
                "value": "1067773",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Swaziland<\/span><br \/>Population : 1,067,773"
                }
            },
            "SY": {
                "value": "20820311",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Syrian Arab Republic<\/span><br \/>Population : 20,820,311"
                }
            },
            "TJ": {
                "value": "6976958",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Tajikistan<\/span><br \/>Population : 6,976,958"
                }
            },
            "TZ": {
                "value": "46218486",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Tanzania, United Republic Of<\/span><br \/>Population : 46,218,486"
                }
            },
            "TD": {
                "value": "11525496",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Chad<\/span><br \/>Population : 11,525,496"
                }
            },
            "CZ": {
                "value": "10546000",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Czech Republic<\/span><br \/>Population : 10,546,000"
                }
            },
            "TH": {
                "value": "69518555",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Thailand<\/span><br \/>Population : 69,518,555"
                }
            },
            "TL": {
                "value": "1175880",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Timor-leste<\/span><br \/>Population : 1,175,880"
                }
            },
            "TG": {
                "value": "6154813",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Togo<\/span><br \/>Population : 6,154,813"
                }
            },
            "TO": {
                "value": "104509",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Tonga<\/span><br \/>Population : 104,509"
                }
            },
            "TT": {
                "value": "1346350",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Trinidad And Tobago<\/span><br \/>Population : 1,346,350"
                }
            },
            "TN": {
                "value": "10673800",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Tunisia<\/span><br \/>Population : 10,673,800"
                }
            },
            "TM": {
                "value": "5105301",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Turkmenistan<\/span><br \/>Population : 5,105,301"
                }
            },
            "TR": {
                "value": "73639596",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Turkey<\/span><br \/>Population : 73,639,596"
                }
            },
            "TV": {
                "value": "9847",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Tuvalu<\/span><br \/>Population : 9,847"
                }
            },
            "VU": {
                "value": "245619",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Vanuatu<\/span><br \/>Population : 245,619"
                }
            },
            "VE": {
                "value": "29278000",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Venezuela, Bolivarian Republic Of<\/span><br \/>Population : 29,278,000"
                }
            },
            "VN": {
                "value": "87840000",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Viet Nam<\/span><br \/>Population : 87,840,000"
                }
            },
            "UA": {
                "value": "45706100",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Ukraine<\/span><br \/>Population : 45,706,100"
                }
            },
            "UY": {
                "value": "3368595",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Uruguay<\/span><br \/>Population : 3,368,595"
                }
            },
            "YE": {
                "value": "24799880",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Yemen<\/span><br \/>Population : 24,799,880"
                }
            },
            "ZM": {
                "value": "13474959",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Zambia<\/span><br \/>Population : 13,474,959"
                }
            },
            "ZW": {
                "value": "12754378",
                "href" : "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Zimbabwe<\/span><br \/>Population : 12,754,378"
                }
            }
        }
    });


    // Zoom on mousewheel with mousewheel jQuery plugin
    // $mapworld.on("mousewheel", function(e) {
    //     if (e.deltaY > 0) {
    //         $mapworld.trigger("zoom", $mapworld.data("zoomLevel") + 1);
    //         console.log("zoom");
    //     } else {
    //         $mapworld.trigger("zoom", $mapworld.data("zoomLevel") - 1);
    //     }
            
    //     return false;
    // });


    //------------------------------
    // Flot
    //------------------------------

        var d1 = [];
        for (var i = 0; i <= 30; i += 1) {
            d1.push([i, parseInt(Math.random() * 70 + 135)]);
        }

        var d2 = [];
        for (var i = 0; i <= 30; i += 1) {
            d2.push([i, parseInt(Math.random() * 20) + 5]);
        }

        var d3 = [];
        for (var i = 0; i <= 30; i += 1) {
            d3.push([i, parseInt(Math.random() * 70 + 40)]);
        }

        var stack = false,
            bars = true,
            lines = true,
            steps = false;

        function plotWithOptions() {
            $.plot("#visitors-stats", [{
                    data: d1, 
                    label: "Page Views",
                    lines: {
                        show: lines,
                        fill: 0.1,
                        //fillColor: {colors: [{opacity: 0.01}, {opacity: 0.2}]},
                        steps: steps,
                        lineWidth: 1.25
                    },
                    points: {
                        show: true,
                        radius: 1.875
                    }
                }, {
                    data: d2, 
                    label: "New Users",
                    bars: {
                        show: bars,
                        barWidth: 0.2,
                        fill: 0.4,
                        lineWidth: 1,
                        align: "center"
                    },
                    points: {
                        show: false,
                        radius: 2.5
                    }
                }, {
                    data: d3, 
                    label: "Unique Visits",
                    lines: {
                        show: lines,
                        fill: 0.1,
                        //fillColor: {colors: [{opacity: 0.01}, {opacity: 0.2}]},
                        steps: steps,
                        lineWidth: 2.5
                    },
                    points: {
                        show: true,
                        radius: 2.5
                    }

                }], {
                series: {
                    shadowSize: 0,
                    stack: stack

                },
                grid: {
                    labelMargin: 10,
                    hoverable: true,
                    clickable: true,
                    borderWidth: 0,
                    borderColor: 'rgba(0, 0, 0, 0.06)'
                },
                yaxis: { 
                    tickColor: 'rgba(0, 0, 0, 0.04)', 
                    font: {
                        color: 'rgba(0, 0, 0, 0.4)'
                    }
                },
                xaxis: { 
                    tickColor: 'rgba(0, 0, 0, 0.04)',
                    tickDecimals: 0,
                    ticks: 20,
                    //autoscaleMargin: 0.05,

                    font: {
                        color: 'rgba(0, 0, 0, 0.4)'
                    }
                },
                //colors: [getBrandColor('gray'), getBrandColor('primary'), getBrandColor('success')],
                colors: ["#d0d2d6", "#34495e", "#b4c4d4"],
                tooltip: true,
                tooltipOpts: {
                    content: "%s: %y"
                }
                
            });
        }

        plotWithOptions();

        // flot 2

        var do1 = [];
        var do2 = [];
        // var do3 = [];

        for (var i = 1; i < 13; i++) {
            do1.push([i, parseInt(Math.random() * 30 + 20)]);
            do2.push([i, parseInt(Math.random() * 30 + 10)]);
            // do3.push([i, parseInt(Math.random() * 10 + 10)]);
        }

     
        var dos = new Array();

        dos.push({
            data:do1,
            label: "Budgeted",
            bars: {
                show: true,
                barWidth: 0.125,
                lineWidth: 1,
                fill: 0.4,
                order: 1
            }
        });
        dos.push({
            data:do2,
            label: "Actual",
            bars: {
                show: true,
                barWidth: 0.125,
                lineWidth: 1,
                fill: 0.4,
                order: 2,
            }
        });
        // dos.push({
        //     data:do3,
        //     label: "Profits",
        //     bars: {
        //         show: true,
        //         barWidth: 0.1,
        //         lineWidth: 1,
        //         fill: 0.4,
        //         order: 3,
        //     }
        // });

        var stack = false,
            bars = true,
            lines = true,
            steps = false;

        function plotWithOptions2() {
            $.plot($("#revenues-stats"), dos, {
                series: {
                    bars: {
                        show: true,
                        //lineWidth: 0.75
                    }
                },
                grid: {
                    labelMargin: 10,
                    hoverable: true,
                    clickable: true,
                    tickColor: 'rgba(0, 0, 0, 0.06)',
                    borderWidth: 0,
                    borderColor: 'rgba(0, 0, 0, 0.06)'
                },
                //colors: ["#cacfd7", "#959eb0", "#58d68d"], 
                colors: [getBrandColor('gray'), getBrandColor('midnightblue'), getBrandColor('info')],
                tooltip: true,
                tooltipOpts: {
                    content: "%s: %y"
                },
                xaxis: {
                    autoscaleMargin: 0.05,
                    tickColor: 'rgba(0, 0, 0, 0.00)',
                    ticks: [[1, "Jan"], [2, "Feb"], [3, "Mar"], [4, "Apr"],[5, "May"], [6, "Jun"], [7, "Jul"], [8, "Aug"],[9, "Sep"], [10, "Oct"], [11, "Nov"], [12, "Dec"]],
                    tickDecimals: 0,
                    font: {
                        color: 'rgba(0, 0, 0, 0.4)'
                    }
                },
                yaxis: {
                    //ticks: [0, 25, 50, 75, 100, 125, 150],
                    tickColor: 'rgba(0, 0, 0, 0.04)',
                    font: {
                        color: 'rgba(0, 0, 0, 0.4)'
                    },
                    tickFormatter: function (val, axis) {
                        return "$" + val + "K";
                    }
                },
                legend : {
                    //labelBoxBorderColor: 'transparent'
                }
            });
        }

        plotWithOptions2();




// live dynamic

    var dxta = [],
        totalPoints = 300;
    var updateInterval = 1000;

    function getRandomData() {

        if (dxta.length > 0)
            dxta = dxta.slice(1);

        // Do a random walk

        while (dxta.length < totalPoints) {

            var prev = dxta.length > 0 ? dxta[dxta.length - 1] : 50,
                y = prev + Math.random() * 10 - 5;

            if (y < 0) {
                y = 0;
            } else if (y > 100) {
                y = 100;
            }

            dxta.push(y);
        }

        // Zip the generated y values with the x values

        var res = [];
        for (var i = 0; i < dxta.length; ++i) {
            res.push([i, dxta[i]])
        }

        return res;
    }

    var plot = $.plot("#server-load", [ getRandomData() ], {
        series: {
                lines: {
                show: true,
                lineWidth: 0.75,
                fill: 0.15,
                fillColor: { colors: [ { opacity: 0.01 }, { opacity: 0.3 } ] }
            },
            shadowSize: 0   // Drawing is faster without shadows
        },
        grid: {
            labelMargin: 10,
            hoverable: true,
            clickable: true,
            borderWidth: 0,
            borderColor: 'rgba(0, 0, 0, 0.06)'
        },
        yaxis: {
            min: 0,
            max: 100,
            tickColor: 'transparent',
            font: {color: 'rgba(0, 0, 0, 0.4)'},
        },
        xaxis: {
            show: false
        },
        colors: ["#95a5a6"],
        tooltip: true,
        tooltipOpts: {
            content: "CPU Utilization: %y%"
        }

    });

    function update() {

        if ($('#live-dynamic-switch:checked').length>0) {

            plot.setData([getRandomData()]);

            // Since the axes don't change, we don't need to call plot.setupGrid()

            plot.draw();
        }
        setTimeout(update, updateInterval);
    }

    update();





// $('#demo-clicky').click(function() {
//   console.log(plot_statistics);
// });







    // Demo for FullCalendar with Drag/Drop internal


    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    var calendar = $('#calendar-drag').fullCalendar({
        header: {
            left: 'title',
            right: 'prev,next month,agendaWeek,agendaDay'
        },
        titleFormat: {
            day: "ddd, MMM d, yy"
        },
        selectable: true,
        selectHelper: true,
        select: function(start, end, allDay) {
            var title = prompt('Event Title:');
            if (title) {
                calendar.fullCalendar('renderEvent',
                    {
                        title: title,
                        start: start,
                        end: end,
                        allDay: allDay
                    },
                    true // make the event "stick"
                );
            }
            calendar.fullCalendar('unselect');
        },
        editable: true,
        events: [
            {
                title: 'All Day Event',
                start: new Date(y, m, 8),
                backgroundColor: getBrandColor('midnightblue')
            },
            {
                title: 'Long Event',
                start: new Date(y, m, d-5),
                end: new Date(y, m, d-2),
                backgroundColor: getBrandColor('primary')
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: new Date(y, m, d-3, 16, 0),
                allDay: false,
                backgroundColor: getBrandColor('success')
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: new Date(y, m, d+4, 16, 0),
                allDay: false,
                backgroundColor: getBrandColor('success')
            },
            {
                title: 'Meeting',
                start: new Date(y, m, d, 10, 30),
                allDay: false,
                backgroundColor: getBrandColor('alizarin')
            },
            {
                title: 'Lunch',
                start: new Date(y, m, d, 12, 0),
                end: new Date(y, m, d, 14, 0),
                allDay: false,
                backgroundColor: getBrandColor('inverse')
            },
            {
                title: 'Birthday Party',
                start: new Date(y, m, d+1, 19, 0),
                end: new Date(y, m, d+1, 22, 30),
                allDay: false,
                backgroundColor: getBrandColor('warning')
            },
            {
                title: 'Click for Google',
                start: new Date(y, m, 28),
                end: new Date(y, m, 29),
                url: 'http://google.com/',
                backgroundColor: getBrandColor('inverse')
            }
        ],
        buttonText: {
            prev: '<i class="fa fa-angle-left"></i>',
            next: '<i class="fa fa-angle-right"></i>',
            prevYear: '<i class="fa fa-angle-double-left"></i>',  // <<
            nextYear: '<i class="fa fa-angle-double-right"></i>',  // >>
            today:    '<span class="hidden-xs">Today</span><span class="visible-xs">T</span>',
            month:    '<span class="hidden-xs">Month</span><span class="visible-xs">M</span>',
            week:     '<span class="hidden-xs">Week</span><span class="visible-xs">W</span>',
            day:      '<span class="hidden-xs">Day</span><span class="visible-xs">D</span>'
        }
    });

    $("#sortable-tasks, #completed-tasks").sortable({
      connectWith: ".connectedSortable",
      receive: function (event, ui) {
        $(ui.item[0]).find('.iCheck-helper')[0].dropped = true;
        $(ui.item[0]).find('.iCheck-helper').click()
      }
    }).disableSelection();

    $('#sortable-tasks .iCheck-helper, #completed-tasks .iCheck-helper').on('click', function () {
        if ($(this)[0].dropped == true) { $(this)[0].dropped = false; return; }
        if ($(this).closest('#sortable-tasks').length)
            $(this).closest('li').appendTo('#completed-tasks');
        else
            $(this).closest('li').appendTo('#sortable-tasks');
    });

});





//Info Tiles: Sparkline Variant
$("#tileorders").sparkline([112,182,130,191,75,214,159,138,156,120], {
    type: 'bar',
    barColor: 'rgba(255, 255, 255, 0.3)',
    barSpacing: 1,
    height: '13',
    barWidth: 3
});

$("#tilemembers").sparkline([41,38,73,49,51,20,55,13,35,23], {
    type: 'bar',
    barColor: 'rgba(255, 255, 255, 0.3)',
    barSpacing: 1,
    height: '13',
    barWidth: 3
});

$("#tiletickets").sparkline([50,100,78], { 
    type: 'pie',
    sliceColors: ['rgba(255, 255, 255, 0.75)','rgba(255, 255, 255, 0.5)','rgba(255, 255, 255, 0.25)'],
    height: '13',
    width: '13'
});

$("#tilerevenues").sparkline([11270,17257,15014,13107,15538,13439,17915,23874,16677,12003], {
    type: 'line',
    lineColor: 'rgba(255, 255, 255, 0.3)',
    lineWidth: '1.5',
    fillColor: 'transparent',
    height: '13',
    minSpotColor: false,
    maxSpotColor: false,
    spotColor: false,
    spotRadius: '0',
    highlightSpotColor: '#fff',
    highlightLineColor: '#fff',
    width: '40'
});

$("#tileprofits").sparkline([412,382,130,191,215,204,559,738,456,239], {
    type: 'line',
    lineColor: 'rgba(255, 255, 255, 0.3)',
    lineWidth: '1.5',
    fillColor: 'transparent',
    height: '13',
    minSpotColor: false,
    maxSpotColor: false,
    spotColor: false,
    spotRadius: '0',
    highlightSpotColor: '#fff',
    highlightLineColor: '#fff',
    width: '48'
});
