var $collcontent = $('#coll-content');
    $collcontent.on('show.bs.collapse','.collapse', function() {
    $collcontent.find('.collapse.in').collapse('hide');
});

$(document).ready(function() {
    $(".coll-toggle").click(function () {
        $(".coll-toggle").removeClass("active");
        $(this).addClass("active");
    });
    $('#n1').click(function(){
        index = $(this).index();
        $(".coll-toggle").removeClass("active");
        $("#b1").addClass("active");
    });
    $('#n2').click(function(){
        index = $(this).index();
        $(".coll-toggle").removeClass("active");
        $("#b2").addClass("active");
    });
    $('#n3').click(function(){
        index = $(this).index();
        $(".coll-toggle").removeClass("active");
        $("#b3").addClass("active");
    });
    $('#n4').click(function(){
        index = $(this).index();
        $(".coll-toggle").removeClass("active");
        $("#b4").addClass("active");
    });
    $('#n5').click(function(){
        index = $(this).index();
        $(".coll-toggle").removeClass("active");
        $("#b5").addClass("active");
    });
    $('#n6').click(function(){
        index = $(this).index();
        $(".coll-toggle").removeClass("active");
        $("#b6").addClass("active");
    });
});


