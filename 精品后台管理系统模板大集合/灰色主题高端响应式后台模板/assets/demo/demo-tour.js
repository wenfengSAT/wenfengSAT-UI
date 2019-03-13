$(document).ready(function(){
	$("#demo").click(function(){
		bootstro.start(".bootstro", {
			onComplete : function(params)
			{
				alert("Reached end of introduction with total " + (params.idx + 1)+ " slides");
			},
			onExit : function(params)
			{
				alert("Introduction stopped at slide #" + (params.idx + 1));
			},
		});
	});
});

//<div class="col-md-4 bootstro" data-bootstro-title="I can align to [left,right,bottom,top]" data-bootstro-content="Simply because I am a popover. Specify me with &lt;b&gt;data-bootstro-placement&lt;/b&gt;" data-bootstro-placement="right" data-bootstro-width="400px" data-bootstro-step="3">