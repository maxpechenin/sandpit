
(function($){
    'use strict';
    var $searchField = $('#header-search_input'),
        $suggest = $('.auto-suggestion'),
        threshold = 3;
    $searchField.on('keyup blur', function() {
        var value = $searchField.val();
        if (value.length >= threshold) {
            searchData(value);
            $suggest.addClass('open');
        } else {
            $suggest.removeClass('open');
        }
    });

    var lists = {
        keywords: {
            tpl: $('#keyword_template').html(),
            $list: $('.auto-suggestion_keyword ul')
        },
        people: {
            tpl: $('#people_template').html(),
            $list: $('.auto-suggestion_people ul')
        },
        documents: {
            tpl: $('#document_template').html(),
            $list: $('.auto-suggestion_documents ul')
        }
    }


    function clearLists() {
        for (var i in lists) {
            lists[i].$list.html('');
        }
    }

    function fillList(data) {
        for (var j = 0; j < data.view.hits.hits.length; j++) {
            lists[data.key].$list.append(Mustache.render(lists[data.key].tpl, data.view.hits.hits[j].highlight))
            console.log(data.view.hits.hits[j].highlight);
        }
    }

    function searchData(query){
        $.ajax({
            type: "GET",
            dataType: "json",
            url: "/search",
            data: {query: query},
            success: function(data)
            {
                clearLists();
                for (var i = 0; i < data.aggregations.suggestions.buckets.length; i++) {
                    fillList(data.aggregations.suggestions.buckets[i]);
                }
            }

        });

    }
})(jQuery);