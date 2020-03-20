/*
  This license is based on the new BSD template found here 
  (http://www.opensource.org/licenses/bsd-license.php)
  
  -----------------------------------------------------------------
  CodeIncubator (http://codeincubator.com)
  Copyright (c) 2009 
  by Steven Harman (http://stevenharman.net)
  
  All rights reserved.
  
  Redistribution and use in source and binary forms, with or without modification, 
  are permitted provided that the following conditions are met:
  
      * Redistributions of source code must retain the above copyright notice, 
                this list of conditions and the following disclaimer.
      * Redistributions in binary form must reproduce the above copyright notice, 
                this list of conditions and the following disclaimer in the documentation 
                and/or other materials provided with the distribution.
      * Neither the name of the CodeIncubator nor the names of its contributors 
                may be used to endorse or promote products derived from this software 
                without specific prior written permission.
  
  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND 
  ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED 
  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. 
  IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, 
  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, 
  BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, 
  DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY 
  OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE 
  OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
  OF THE POSSIBILITY OF SUCH DAMAGE.
*/

/*
  Options:
    example - a valid jQuery selector for the DOM element the grid will use to get a new base size
    offset - the number of pixels added to the width of the example element, giving the grid its new width

  Usage:
  
  // make #theGrid 10 pixles smaller than #grid_wrapper
  $("#theGrid").fluidGrid({ example:"#grid_wrapper", offset:-10 });
  
  More Info: http://stevenharman.net/blog/archive/2009/08/21/creating-a-fluid-jquery-jqgrid.aspx
  
*/

(function($) {
  jQuery.jgrid.fluid =
  {
    fluidGrid: function(options)
    {
      var grid = $(this);
      var settings = $.extend(
                        {
                          example: grid.closest('.ui-jqgrid').parent(),
                          offset: 0
                        }, options || {});
  
      var width = $(settings.example).innerWidth() + settings.offset;
      grid.setGridWidth(width);
    }
  }
})(jQuery);
jQuery.fn.extend({ fluidGrid : jQuery.jgrid.fluid.fluidGrid });