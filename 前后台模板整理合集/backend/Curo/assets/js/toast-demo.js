/*global $, toastr */
$(document).ready(function () {
    
    $('.toast-info').on('click', function () {
        toastr.info('You are not logged in'); 
    });
    
    $('.toast-success').on('click', function () {
        toastr.success("The new project was succesfully added.", "Project Added!");
    });
    
    $('.toast-warning').on('click', function () {
        toastr.warning('Autosave is not enabled.');
    });
    
    $('.toast-error').on('click', function () {
        toastr.error('Failed to remove project.');
    });
    
});