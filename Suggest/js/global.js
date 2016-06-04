
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
})(jQuery);

function searchData(query){
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "js/data.js",
        data: {query: query},
        success: function(data)
        {
            $('.auto-suggestion_keyword ul').html('');
            $('.auto-suggestion_people ul').html('');
            $('.auto-suggestion_documents ul').html('');
            var keyword = data[0];
            var people = data[1];
            var documents = data[2];

            for(var keyword_count=0;keyword_count<keyword.Keyword.length;keyword_count++){
                $('.auto-suggestion_keyword ul').append('<li><a href="#">'+keyword.Keyword[keyword_count].title+'</a></li>');
            }

            for(var people_count=0;people_count<people.People.length;people_count++){
                $('.auto-suggestion_people ul').append('<li class="suggestion-item"><div class="suggestion-item_col1"><img src="/img/65x65textphoto.png" class="suggestion-item__photo" alt=""></div><div class="suggestion-item_col2"><h4 class="suggestion-item__name">'+people.People[people_count].name+'</h4><div class="suggestion-item__handle"><a href="#">'+people.People[people_count].handle+'</a></div><div class="suggestion-item__title-extension"><div>'+people.People[people_count].title+'</div><div>ex: <a href="#">'+people.People[people_count].ex+'</a></div></div><a href="#" class="suggestion-item__email" title="email">'+people.People[people_count].email+'</a></div></li>');
            }

            for(var documents_count=0;documents_count<documents.Documents.length;documents_count++){
                $('.auto-suggestion_documents ul').append('<li class="document-item"><div class="document-item_col1"><a href="'+documents.Documents[documents_count].link+'" class="document-item_icon"></a></div><div class="document-item_col2"><a href="#" class="document-item_link">'+documents.Documents[documents_count].title+'</a><div>'+documents.Documents[documents_count].size+'</div><div>Date modified: '+documents.Documents[documents_count].date+'</div></div></li>');
            }
        }

    });

}