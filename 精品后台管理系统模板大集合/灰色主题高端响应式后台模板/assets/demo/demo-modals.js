    
    $('#bootbox-demo-1').click(function(){
        bootbox.alert("Hello world!");    
    });
    

    $('#bootbox-demo-2').click(function(){
        bootbox.alert("Hello world!", function() {
            alert("Hello world callback");
        });  
    });
    

    $('#bootbox-demo-3').click(function(){
        bootbox.confirm("Are you sure?", function(result) {
         alert("Confirm result: "+result);
     }); 
    });
    

    $('#bootbox-demo-4').click(function(){
        bootbox.prompt("What is your name?", function(result) {
            if (result === null) {
                alert("Prompt dismissed");
            } else {
                alert("Hi "+result);
            }
        });
    });
    

    $('#bootbox-demo-5').click(function(){
        bootbox.dialog({
            message: "I am a custom dialog",
            title: "Custom title",
            buttons: {
                    success: {
                      label: "Success!",
                      className: "btn-success",
                      callback: function() {
                        alert("great success");
                    }
                  },
                  danger: {
                    label: "Danger!",
                    className: "btn-danger",
                    callback: function() {
                        alert("uh oh, look out!");
                    }
                },
                main: {
                    label: "Click ME!",
                    className: "btn-primary",
                    callback: function() {
                        alert("Primary button");
                    }
                }
            }
        });
    });
