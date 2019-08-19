/*   
Template Name: Color Admin - Responsive Admin Dashboard Template build with Twitter Bootstrap 3.3.1
Version: 1.5.0
Author: Sean Ngu
Website: http://www.seantheme.com/color-admin-v1.5/admin/
*/var handleBootstrapWizardsValidation=function(){"use strict";$("#wizard").bwizard({validating:function(e,t){if(t.index==0){if(false===$('form[name="form-wizard"]').parsley().validate("wizard-step-1")){return false}}else if(t.index==1){if(false===$('form[name="form-wizard"]').parsley().validate("wizard-step-2")){return false}}else if(t.index==2){if(false===$('form[name="form-wizard"]').parsley().validate("wizard-step-3")){return false}}}})};var FormWizardValidation=function(){"use strict";return{init:function(){handleBootstrapWizardsValidation()}}}()