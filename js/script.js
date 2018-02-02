$(document).ready(function() {

    /*ADD SMOOTH SCROOLING
     ********************************/
    //Add scroolspy to <body>
    $("body").scrollspy({ targer: ".navbar", offset: 50 });

    //Add smooth scrooling on all links with class page scroll
    $(".page-scrool").click(function(event) {
        //Make shure this.hash has a value before overriding defauld begavior
        if (this.hash !== "") {
            //Prevent default anchor click behavior
            event.preventDefault();

            //Store hash
            var hash = this.hash;

            //Using jQuery's animate method to add smoooth page scroll
            //The optional number (800) specifies the number of miliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {

                //Add hash (#) to URL when done scrooling (default click behavior)
                window.location.hash = hash;
            });
        }
    });

    /* NAVBAR TRANSITION SCRIPT
     ******************************/
    function collapseNavbar() {
        $(".navbar").offset().top > 50 ? $(".fixed-top").addClass("top-nav-collapse") : $(".fixed-top").removeClass("top-nav-collapse");
    }
    $(window).scroll(collapseNavbar);
});