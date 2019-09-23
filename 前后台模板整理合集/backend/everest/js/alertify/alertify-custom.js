function reset () {
	$("#toggleCSS").attr("href", "../themes/alertify.default.css");
	alertify.set({
		labels : {
			ok     : "OK",
			cancel : "Cancel"
		},
		delay : 5000,
		buttonReverse : false,
		buttonFocus   : "ok"
	});
}

// ==============================
// Standard Dialogs
$("#alert").on( 'click', function () {
	reset();
	alertify.alert("This is an alert dialog");
	return false;
});

$("#confirm").on( 'click', function () {
	reset();
	alertify.confirm("This is a confirm dialog", function (e) {
		if (e) {
			alertify.success("You've clicked OK");
		} else {
			alertify.error("You've clicked Cancel");
		}
	});
	return false;
});

$("#prompt").on( 'click', function () {
	reset();
	alertify.prompt("This is a prompt dialog", function (e, str) {
		if (e) {
			alertify.success("You've clicked OK and typed: " + str);
		} else {
			alertify.error("You've clicked Cancel");
		}
	}, "Default Value");
	return false;
});

// ==============================
// Ajax
$("#ajax").on("click", function () {
	reset();
	alertify.confirm("Confirm?", function (e) {
		if (e) {
			alertify.alert("Successful AJAX after OK");
		} else {
			alertify.alert("Successful AJAX after Cancel");
		}
	});
});

// ==============================
// Standard Dialogs
$("#notification").on( 'click', function () {
	reset();
	alertify.log("Standard log message");
	return false;
});

$("#success").on( 'click', function () {
	reset();
	alertify.success("Success log message");
	return false;
});

$("#error").on( 'click', function () {
	reset();
	alertify.error("Error log message");
	return false;
});

// ==============================
// Custom Properties
$("#delay").on( 'click', function () {
	reset();
	alertify.set({ delay: 10000 });
	alertify.log("Hiding in 10 seconds");
	return false;
});

$("#forever").on( 'click', function () {
	reset();
	alertify.log("Will stay until clicked", "", 0);
	return false;
});

$("#labels").on( 'click', function () {
	reset();
	alertify.set({ labels: { ok: "Accept", cancel: "Deny" } });
	alertify.confirm("Confirm dialog with custom button labels", function (e) {
		if (e) {
			alertify.success("You've clicked OK");
		} else {
			alertify.error("You've clicked Cancel");
		}
	});
	return false;
});

$("#focus").on( 'click', function () {
	reset();
	alertify.set({ buttonFocus: "cancel" });
	alertify.confirm("Confirm dialog with cancel button focused", function (e) {
		if (e) {
			alertify.success("You've clicked OK");
		} else {
			alertify.error("You've clicked Cancel");
		}
	});
	return false;
});

$("#order").on( 'click', function () {
	reset();
	alertify.set({ buttonReverse: true });
	alertify.confirm("Confirm dialog with reversed button order", function (e) {
		if (e) {
			alertify.success("You've clicked OK");
		} else {
			alertify.error("You've clicked Cancel");
		}
	});
	return false;
});

// ==============================
// Custom Log
$("#custom").on( 'click', function () {
	reset();
	alertify.custom = alertify.extend("custom");
	alertify.custom("I'm a custom log message");
	return false;
});

// ==============================
// Custom Themes
$("#bootstrap").on( 'click', function () {
	reset();
	$("#toggleCSS").attr("href", "../themes/alertify.bootstrap.css");
	alertify.prompt("Prompt dialog with bootstrap theme", function (e) {
		if (e) {
			alertify.success("You've clicked OK");
		} else {
			alertify.error("You've clicked Cancel");
		}
	}, "Default Value");
	return false;
});