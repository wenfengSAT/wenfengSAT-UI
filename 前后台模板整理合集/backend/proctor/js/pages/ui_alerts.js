function basic_growl(type) {
        switch(type) {
            case "info":
                $.growl({       title: 'I have a title', 
                                icon: 'fa fa-info-circle', 
                                message: 'This growl contains both a Title and a Icon'
                        }, 
                        {       template: 
                                    { 
                                        title_divider: '<br/><br/>' 
                                    },
                                type: 'info'
                        });
                break;
            
            case "success":
                $.growl({       title: 'Well done!', 
                                icon: 'fa fa-check', 
                                message: 'Change this and that and try again.'
                        }, 
                        {       template: 
                                    { 
                                        title_divider: '<br/><br/>' 
                                    },
                                type: 'success'
                        });
                break;

            case "warning":
                $.growl({       title: 'Warning!', 
                                icon: 'fa fa-warning', 
                                message: 'Change this and that and try again.'
                        }, 
                        {       template: 
                                    { 
                                        title_divider: '<br/><br/>' 
                                    },
                                type: 'warning'
                        });
                break;

            case "danger":
                $.growl({       title: 'Oh snap!', 
                                icon: 'fa fa-times-circle', 
                                message: 'Change this and that and try again.'
                        }, 
                        {       template: 
                                    { 
                                        title_divider: '<br/><br/>' 
                                    },
                                type: 'danger'
                        });
                break;
        }
}