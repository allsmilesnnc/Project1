(function() {
    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    $.getJSON(flickerAPI, {
            tags: "Mecklenburg County, North Carolina",
            tagmode: "any",
            format: "json"
        })
        .done(function(data) {
            $.each(data.items, function(i, item) {
                $("<img>").attr("src", item.media.m).appendTo("#images");
                if (i === 5) {  //show 6 pictures
                    return false;
                }
            });
        });
})();