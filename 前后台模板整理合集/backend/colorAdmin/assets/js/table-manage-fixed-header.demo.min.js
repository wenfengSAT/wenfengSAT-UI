/*   
Template Name: Color Admin - Responsive Admin Dashboard Template build with Twitter Bootstrap 3.3.1
Version: 1.5.0
Author: Sean Ngu
Website: http://www.seantheme.com/color-admin-v1.5/admin/
*/var handleDataTableFixedHeader=function(){"use strict";if($("#data-table").length!==0){var e=$("#data-table").DataTable({lengthMenu:[20,40,60]});new $.fn.dataTable.FixedHeader(e)}};var TableManageFixedHeader=function(){"use strict";return{init:function(){handleDataTableFixedHeader()}}}()