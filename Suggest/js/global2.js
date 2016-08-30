
(function($){
    'use strict';
    var $searchField = $('#header-search_input'),
        $suggest = $('.auto-suggestion'),
        $form = $('.quick-search-component'),
        $loadMore = $('.auto-suggestion_more'),
        searchThreshold = 3,
        showMoreThreshold = 2,
        urls = {
            all: {
                url: 'http://40.127.88.96/search',
                param: 'q'
            },
            web: {
                url: 'http://40.127.88.96/search',
                param: 'k'
            },
            item: {
                url: 'http://40.127.88.96/search',
                param: 'k'
            },
            cash: {
                url: 'http://40.127.88.96/search',
                param: 'k'
            }
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

    var lists = {
        web: {
            tpl: $('#web_template').html(),
            $container: $('.auto-suggestion_keyword'),
            $list: $('.auto-suggestion_keyword ul')
        },
        item: {
            tpl: $('#item_template').html(),
            $container: $('.auto-suggestion_item'),
            $list: $('.auto-suggestion_item ul')
        },
        cash: {
            tpl: $('#cash_template').html(),
            $container: $('.auto-suggestion_cash'),
            $list: $('.auto-suggestion_cash ul')
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
            lists[data.key].$list.append(Mustache.render(lists[data.key].tpl, data.view.hits.hits[j]._source));
        }
        if (data.view.hits.hits.length >= showMoreThreshold) {
            lists[data.key].$container.addClass('auto-suggestion-more-active')
            console.log(data.key);
        }
    }

    function searchData(query, type){
        var data = {};
        data[urls[type].param] = query;
        $.ajax({
            url: urls[type].url,
            contentType: 'application/json',
            dataType: 'jsonp',
            data: data,
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