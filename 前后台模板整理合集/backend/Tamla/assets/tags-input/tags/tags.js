   var arrayTags = [""];
    var index = 0;

    function removeByValue(arr, val) {
        for(var i=0; i<arr.length; i++) {
            if(arr[i] == val) {
                arr.splice(i, 1);
                break;
            }
        }
        index--;
    }

    function removeTag(el) {
        tag = $(el).prev().html();
        $("#tag-"+tag).remove();
        removeByValue(arrayTags, tag);
        $("#inputTag").focus();
    }

    $(document).ready(function() {
        var inputWidth = 16;

        function insertTag(tag) {
            var liEl = '<li id="tag-'+tag+'" class="li_tags">'+
                        '<span href="javascript://" class="a_tag">'+tag+'</span>&nbsp;'+
                        '<a href="" onclick="removeTag(this); return false;"'+
                        ' class="del" id="del_'+tag+'">&times;</strong></a>'+
                        '</li>';
            return liEl;
        }

        $("#inputTag").focus().val("");
        $("#hiddenTags").val("");

        $("#inputTag").keydown(function(event) {
            var textVal = jQuery.trim($(this).val()).toLowerCase();
            var keyCode = event.which;

            // move left (left arrow pressed)
            if (keyCode == 37 && textVal == '') {
                $("#newTagInput").insertBefore($("#newTagInput").prev());
                $("#inputTag").focus();
            }

            // move right (right arrow pressed)
            if (keyCode == 39 && textVal == '') {
                $("#newTagInput").insertAfter($("#newTagInput").next());
                $("#inputTag").focus();
            }

            // delete prev tag (backspace pressed)
            if (keyCode == 8 && textVal == '') {
                deletedTag = $("#newTagInput").prev().find(".a_tag").html();
                removeByValue(arrayTags, deletedTag);
                $("#newTagInput").prev().remove();
                $("#inputTag").focus();
            }

            // delete next tag (delete pressed)
            if (keyCode == 46 && textVal == '') {
                deletedTag = $("#newTagInput").next().find(".a_tag").html();
                removeByValue(arrayTags, deletedTag);
                $("#newTagInput").next().remove();
                $("#inputTag").focus();
            }

            if ((47 < keyCode && keyCode < 106) || (keyCode == 32)) {

                if (keyCode != 32) {
                    // user still typing a tag
                    inputWidth = inputWidth + 7;
                    $(this).attr("style", "width:"+inputWidth+"px");
                    $("#newTagInput").attr("style", "width:"+inputWidth+"px");
                } else if (keyCode == 32 && (textVal != '')) {
                    // user apply new tag
                    var isExist = jQuery.inArray(textVal, arrayTags);

                    if (isExist == -1) {
                        // insert new tag (visible to user)
                        $(insertTag(textVal)).insertBefore("#newTagInput");

                        // insert new tag to js array
                        arrayTags[index] = textVal;
                        index++;
                    }
                    inputWidth = 16;
                    $(this).attr("style", "width:"+inputWidth+"px");
                    $("#newTagInput").attr("style", "width:23px")
                    $(this).val("");
                } else {
                    $(this).val("");
                }
                console.log(arrayTags, arrayTags.length);
            }
        });
    });