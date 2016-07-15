
(function($){
    'use strict';
    var $searchField = $('#header-search_input'),
        $suggest = $('.auto-suggestion'),
        $form = $('.quick-search-component'),
        $loadMore = $('.auto-suggestion_more'),
        searchThreshold = 3,
        showMoreThreshold = 2,
        urls = {
            all: '/search/dcom/_search',
            people: '/search/dcom/_search',
            documents: '/search/dcom/_search',
            keywords: '/search/dcom/_search',
        };

    var handleKeydown = function(e) {
        if (e.keyCode === 27) {
            clearLists();
            $searchField.val('');
            $suggest.removeClass('open');
        }
    }

    $loadMore.on('click', function() {
        searchData($searchField.val(), $(this).data().type);
    })

    $searchField.on('keyup blur', function() {
        var value = $searchField.val();
        if (value.length >= searchThreshold) {
            searchData(value, 'all');
            $suggest.addClass('open');
        } else {
            $suggest.removeClass('open');
        }
    });

    $form.on('submit', function(e) {
        e.preventDefault();
        var value = $searchField.val();
        searchData(value, 'all');
        $suggest.addClass('open');
    });

    document.addEventListener('keyup', handleKeydown);

    var getJsonWithQuery = function(query) {
        return { "aggs": { "suggestions": { "terms": { "field": "_type" }, "aggs": { "view": { "top_hits": { "size": 5, "_source": ["title","description","modified","published","url","fullname","email","phone","jobtitle","imageurl"], "highlight": { "require_field_match": false, "fields": { "keyword": {"no_match_size": 50}, "title": {"no_match_size": 50}, "modified": {"no_match_size": 50}, "url": {"no_match_size": 50}, "fullname": {"no_match_size": 50}, "email": {"no_match_size": 50}, "userid": {"no_match_size": 50}, "phone": {"no_match_size": 50}, "jobtitle": {"no_match_size": 50}, "imageurl": {"no_match_size": 50} } } } } } } }, "query": { "query_string": { "query": query, "default_field": "_all", "default_operator": "and" } }, "size": 0 }
    }


    var lists = {
        keywords: {
            tpl: $('#keyword_template').html(),
            $container: $('.auto-suggestion_keyword'),
            $list: $('.auto-suggestion_keyword ul')
        },
        people: {
            tpl: $('#people_template').html(),
            $container: $('.auto-suggestion_people'),
            $list: $('.auto-suggestion_people ul')
        },
        documents: {
            tpl: $('#document_template').html(),
            $container: $('.auto-suggestion_documents'),
            $list: $('.auto-suggestion_documents ul')
        }
    }


    function clearLists() {
        for (var i in lists) {
            lists[i].$list.html('');
            lists[i].$container.removeClass('auto-suggestion-more-active');
        }
    }

    function fillLists(data) {
        for (var j = 0; j < data.view.hits.hits.length; j++) {
            lists[data.key].$list.append(Mustache.render(lists[data.key].tpl, data.view.hits.hits[j].highlight));
        }
        if (data.view.hits.hits.length >= showMoreThreshold) {
            lists[data.key].$container.addClass('auto-suggestion-more-active')
        }
    }

    function searchData(query, type){
        $.ajax({
            url: urls[type],
            type: 'POST',
            contentType: 'application/json',
            dataType: 'JSON',
            data: JSON.stringify(getJsonWithQuery(query)),
            success: function(data)
            {
                if (query === $searchField.val()) {
                    clearLists();
                    for (var i = 0; i < data.aggregations.suggestions.buckets.length; i++) {
                        fillLists(data.aggregations.suggestions.buckets[i]);
                    }
                }
            }

        });

    }
})(jQuery);