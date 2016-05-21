function scrollToID(id, speed, spacing){
    if(spacing === undefined) {
        spacing = 0;
    }
    var targetOffset = $(id).offset().top - spacing;
    //console.log(targetOffset);
    $('html,body').animate({scrollTop:targetOffset}, speed);
}

function navScroll(el) {
    var scrollto = $(el).attr('href'), spacing;
    if(scrollto === '#top') {
        spacing= 100;
        $('.navbar-nav > .active').removeClass('active');
    } else {
        spacing = 50;
        // Show Active Nav
        $(el).parent().addClass('active').siblings('.active').removeClass('active');
    }
    //console.log("scrolling to " + scrollto);
    scrollToID(scrollto, 1000, spacing);

}

function hideNav(el) {
    if(true) {
        $(el).css("top:-48px;");
    } else {
        $(el).css("top:0;");
    }
}

function details(el) {
    var section = $(el).closest('.project-section'),
        project = $(section).find('.project'),
        projId = '#' + $(section).attr('id');

    //console.log("project id = " + projId);
    if(section.hasClass('active')) {
        $(section).removeClass('active');
        $(project).removeClass('col-lg-6 col-xs-12');
        //console.log('closing');
    } else {
        $(section).addClass('active');
        $(project).addClass('col-lg-6 col-xs-12');
        //console.log('opening');
    }
    //Scroll to top of project section
    scrollToID(projId, 500, 75);
}

$(document).ready(function() {
    $('.navbar-nav a, .navbar-brand').click(function(){
        navScroll(this);
    });

    // Project Details
    $('.project-section .project').click(function() {
        details(this);
    });
    $('.close-details').click(function(){
        details(this);
    });
    $('#show-more').click(function() {
        $('#more').slideToggle();
        if($(this).html() === "Show More") {
            $(this).html('Show Less');
        } else {
            $(this).html('Show More');
        }
    })
});