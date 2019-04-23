$(document).ready(function () {
        $(".list-unstyled a").eq(2).addClass('active');
    var topic = $(".list-unstyled .active").text();
    $(".lessonTopic").text(topic);

});
