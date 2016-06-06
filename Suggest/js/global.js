
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
        Keyword: {
            tpl: $('#keyword_template').html(),
            $list: $('.auto-suggestion_keyword ul')
        },
        People: {
            tpl: $('#people_template').html(),
            $list: $('.auto-suggestion_people ul')
        },
        Documents: {
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
        for (var i in data) {
            for (var j = 0; j < data[i].length; j++) {
                lists[i].$list.append(Mustache.render(lists[i].tpl, data[i][j]))
            }
        }
    }

    function itemContainQuery(query, item) {
        for (var i in item) {
            if (item[i].indexOf(query) !== -1)
                return true;
        }
        return false;
    }

    function filterData(data, query) {
        var filteredData = {};
        for (var i in data) {
            filteredData[i] = data[i].filter(itemContainQuery.bind(this, query));
        }
        return filteredData;
    }

    function searchData(query){
        $.ajax({
            type: "GET",
            dataType: "json",
            url: "js/data.js",
            data: {query: query},
            success: function(data)
            {
                clearLists();
                for (var i = 0; i < data.length; i++) {
                    fillList(filterData(data[i], query));
                }
            }

        });

    }
})(jQuery);