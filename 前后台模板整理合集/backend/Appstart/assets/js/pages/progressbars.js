//------------- blank.js -------------//
$(document).ready(function() {

	//get object with colros from plugin and store it.
	var objColors = $('body').data('appStart').getColors();
	var colours = {
		white: objColors.white,
		dark: objColors.dark,
		red : objColors.red,
		blue: objColors.blue,
		green : objColors.green,
		yellow: objColors.yellow,
		brown: objColors.brown,
		orange : objColors.orange,
		purple : objColors.purple,
		pink : objColors.pink,
		lime : objColors.lime,
		magenta: objColors.magenta,
		teal: objColors.teal,
		textcolor: '#5a5e63',
		gray: objColors.gray
	}

	//------------- Jquery progressbars -------------//
 	$("#progressbar").progressbar({
    	value: 30
    });
    $("#progressbar1").progressbar({
    	value: 40
    });
    $("#progressbar2").progressbar({
    	value: 50
    });
    $("#progressbar3").progressbar({
    	value: 60
    });
    $("#progressbar4").progressbar({
    	value: 70
    });
    $("#progressbar5").progressbar({
    	value: 80
    });
    $("#progressbar6").progressbar({
    	value: 90
    });
    $("#progressbar7").progressbar({
    	value: 30
    });
    $("#progressbar8").progressbar({
    	value: 40
    });
    $("#progressbar10").progressbar({
    	value: 60
    });
    $("#progressbar11").progressbar({
    	value: 70
    });
    $("#progressbar12").progressbar({
    	value: 80
    });
    $("#progressbar13").progressbar({
    	value: 90
    });

    //------------- Circfull progress bar -------------//
	//dark color
	$('.progress-circular-dark').circliful({ backgroundColor: colours.gray,  foregroundColor: colours.dark	});
	//red color
	$('.progress-circular-red').circliful({ backgroundColor: colours.gray,  foregroundColor: colours.red	});
	//blue color
	$('.progress-circular-blue').circliful({ backgroundColor: colours.gray,  foregroundColor: colours.blue	});
	//green color
	$('.progress-circular-green').circliful({ backgroundColor: colours.gray,  foregroundColor: colours.green });
	//orange color
	$('.progress-circular-orange').circliful({ backgroundColor: colours.gray,  foregroundColor: colours.orange });
	//yellow color
	$('.progress-circular-yellow').circliful({ backgroundColor: colours.gray,  foregroundColor: colours.yellow });
	//pink color
	$('.progress-circular-pink').circliful({ backgroundColor: colours.gray,  foregroundColor: colours.pink	});
	//lime color
	$('.progress-circular-lime').circliful({ backgroundColor: colours.gray,  foregroundColor: colours.lime	});
	//magenta color
	$('.progress-circular-magenta').circliful({ backgroundColor: colours.gray,  foregroundColor: colours.magenta });
	//purple color
	$('.progress-circular-purple').circliful({ backgroundColor: colours.gray,  foregroundColor: colours.purple });
	
});