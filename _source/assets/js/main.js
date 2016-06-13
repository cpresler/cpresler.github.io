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

function goToContact() {
    $('#contact-me').slideToggle();
    var env = '.contact-me > div:first-child > a';
    if($(env).hasClass('active')) {
        $(env).removeClass('active');
    } else {
        $(env).addClass('active');
    }
}

var formVal = {
    stripHTML: function(string) {
        string = string.replace(/<\/?[^>]+(>|$)/g, "_");
        return string;
    },
    isEmail: function(email) {
        var re = /.+@.+\..+/;
        return re.test(email);
    },
    nameVal: function(input) {
        var val = $(input).val().trim();
        if(val != '') {
            val = formVal.stripHTML(val);
            formVal.name = val;
            formVal.removeErrorMsg(input);
            return true;
        } else {
            formVal.addErrorMsg(input, formVal.nameError);
            return false;
        }
    },
    emailVal: function(input) {
        var val = $(input).val().trim();
        if(val != '') {
            if(formVal.isEmail(val)) {
                // is valid email remove errors
                formVal.removeErrorMsg(input);
                // store email
                formVal.email = val;
                return true;
            } else {
                formVal.addErrorMsg(input, formVal.emailError);
                return false;
            }
        } else {
            formVal.addErrorMsg(input, formVal.emailError);
            return false;
        }
    },
    addErrorMsg: function(input, msg) {
        $(input).addClass('error');
        if(!$(input).next().hasClass('error-msg')) {
            $(input).after('<div class="error-msg">' + msg + '</div>');
        }
    },
    removeErrorMsg: function(input) {
        $(input).removeClass('error');
        if($(input).next().hasClass('error-msg')) {
            $(input).next().remove();
        }
    },
    nameError: "Please enter your name.",
    emailError: "Please enter a valid email address.",
    validate: function() {
        return (!formVal.nameVal('#name') && !formVal.emailVal('#email'))
    },
    submit: function() {
        $.ajax({
            url: "https://formspree.io/hello@christypresler.com",
            method: "POST",
            data: {
                name: formVal.name,
                reply_to: formVal.email,
                subject: formVal.subject,
                message: formVal.message
            },
            dataType: "json"
        }).success(function() {
            console.log('success');
            // hide form, and show thank you
            $('#contact-me').hide();
            $('#thanks').show();
            // wipe submission data from form:
            $('#name, #email, #topic, #msg').val('');
        }).error(function() {
            console.log('error');
            $('#contact-me').hide();
            $('#form-error').html("<h3>I'm sorry there seems to have been an error!</h3><p>Please feel free to email" +
                " me directly at <a href='mailto:hello@christypresler.com'>hello@christypresler.com</a>.</p>").show();
        });
    }
};

$(document).ready(function() {
    $('.navbar-nav a, .navbar-brand, .contact > a, .button-group > .contact, .button-group > .work').click(function(){
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
    });
    $('.contact').click(function() {
        goToContact()
    });
    $('.twitter, .git, .linkedin, .behance').click(function() {
        $('#contact-me').slideUp();
        $('.contact-me > div:first-child > a').removeClass('active');
    });
    $('#contact-me > #name').blur(function() {
        formVal.nameVal(this);
    });
    $('#contact-me > #email').blur(function() {
        formVal.emailVal(this);
    });
    $('#contact-me > #topic').blur(function() {
        var val = $(this).val().trim();
        val = formVal.stripHTML(val);
        formVal.subject = val;
        console.log(formVal.subject);
    });
    $('#contact-me > #msg').blur(function() {
        formVal.message = formVal.stripHTML($(this).val());
        console.log(formVal.message);
    });
    $('#contact-me').submit(function(event) {
        if(formVal.validate()) {
            event.preventDefault();
        } else {
            event.preventDefault();
            formVal.submit();
        }
    })

});