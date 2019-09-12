//------------- code editor.js -------------//
$(document).ready(function() {

	//------------- Sparklines in header stats -------------//
	$('#spark-visitors').sparkline([5,8,10,8,7,12,11,6,13,8,5,8,10,11,7,12,11,6,13,8], {
		type: 'bar',
		width: '100%',
		height: '20px',
		barColor: '#dfe2e7',
		zeroAxis: false,
	});

	$('#spark-templateviews').sparkline([12,11,6,13,8,5,8,10,12,11,6,13,8,5,8,10,12,11,6,13,8,5,8], {
		type: 'bar',
		width: '100%',
		height: '20px',
		barColor: '#dfe2e7',
		zeroAxis: false,
	});

	$('#spark-sales').sparkline([19,18,20,17,20,18,22,24,23,19,18,20,17,20,18,22,24,23,19,18,20,17], {
		type: 'bar',
		width: '100%',
		height: '20px',
		barColor: '#dfe2e7',
		zeroAxis: false,
	});
	
	//------------- Code mirror  -------------//

	//mixed mode
	var mixedMode = {
        name: "htmlmixed",
        scriptTypes: [{matches: /\/x-handlebars-template|\/x-mustache/i,
           mode: null},
          {matches: /(text|application)\/(x-)?vb(a|script)/i,
           mode: "vbscript"}]
    };
	var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
	    lineNumbers: true,
	    styleActiveLine: true,
	    matchBrackets: true,
	    theme: 'monokai',
	    mode: mixedMode
	});

	//javascript example
	var editor1 = CodeMirror.fromTextArea(document.getElementById("code1"), {
        lineNumbers: true,
        matchBrackets: true,
        theme: 'monokai',
        mode:  "javascript"
    });
	
    editor1.setSize('auto', '100%');

    //css example
    var editor2 = CodeMirror.fromTextArea(document.getElementById("code2"), {
        lineNumbers: true,
        matchBrackets: true,
        theme: 'monokai',
        mode:  "css"
    });

});