// $(window).on('scroll', function() {
//     var scrollTop = $(window).scrollTop();

//     // Adjust background positions for parallax effect
//     $('#traveler').css('background-position', '50% ' + (scrollTop * 0.1) + 'px');
//     $('#bg3').css('background-position', '50% ' + (scrollTop * 0.09) + 'px');
//     $('#bg4').css('background-position', '50% ' + (scrollTop * 0.08) + 'px');
//     $('#bg5').css('background-position', '50% ' + (scrollTop * 0.07) + 'px');
//     $('#bg6').css('background-position', '50% ' + (scrollTop * 0.06) + 'px');
//     $('#bg7').css('background-position', '50% ' + (scrollTop * 0.05) + 'px');
//     $('#bg8').css('background-position', '50% ' + (scrollTop * 0.04) + 'px');
//     $('#bg9').css('background-position', '50% ' + (scrollTop * 0.03) + 'px');
//     $('#bg10').css('background-position', '50% ' + (scrollTop * 0.02) + 'px');
//     $('#bg11').css('background-position', '50% ' + (scrollTop * 0.01) + 'px');
//     $('#bg12').css('background-position', '50% ' + (scrollTop * 0.09) + 'px');
//     $('#bg13').css('background-position', '50% ' + (scrollTop * 0.09) + 'px');
//     $('#bg14').css('background-position', '50% ' + (scrollTop * 0.09) + 'px');
//     $('#bg15').css('background-position', '50% ' + (scrollTop * 0.09) + 'px');
//     $('#bg16').css('background-position', '50% ' + (scrollTop * 0.09) + 'px');
//     $('#bg17').css('background-position', '50% ' + (scrollTop * 0.09) + 'px');
//     $('#bg18').css('background-position', '50% ' + (scrollTop * 0.09) + 'px');
//     $('#bg19').css('background-position', '50% ' + (scrollTop * 0.09) + 'px');
// });



$(window).on('scroll', function () {
    var scrollTop = $(window).scrollTop(); // Current scroll position

    // Function to calculate parallax effect with delayed start
    function parallaxBackground(selector, speed, maxOffset, delayPercentage) {
        var element = $(selector);
        var elementHeight = element.outerHeight(); // Height of the element
        var elementOffsetTop = element.offset().top; // Position relative to the document
        var delay = window.innerHeight * delayPercentage; // Delay in pixels (25% of viewport height)

        // Check if the element is in the viewport
        if (scrollTop >= elementOffsetTop - window.innerHeight && scrollTop <= elementOffsetTop + elementHeight) {
            var offsetStart = elementOffsetTop - window.innerHeight + delay; // Start position with delay

            if (scrollTop >= offsetStart) {
                var offset = (scrollTop - offsetStart) * speed; // Calculate offset based on scroll position

                // Limit the offset within the maximum range
                offset = Math.min(Math.max(offset, 0), maxOffset);

                element.css('background-position', '50% ' + offset + 'px'); // Apply the parallax effect
            }
        }
    }

    // Apply parallax effect with a 25% delay and custom offsets
    parallaxBackground('#bg1', 0.09, 550, 0.25);
    parallaxBackground('#traveler', 0.09, 500, 0.25);// Moves up to 500px after 25% delay
    parallaxBackground('#bg3', 0.09, 450, 0.25);      // Moves up to 450px after 25% delay
    parallaxBackground('#bg4', 0.09, 400, 0.25);      // Moves up to 400px after 25% delay
    parallaxBackground('#bg5', 0.09, 350, 0.25);      // Moves up to 350px after 25% delay
    parallaxBackground('#bg6', 0.09, 300, 0.25);      // Moves up to 300px after 25% delay
    parallaxBackground('#bg7', 0.09, 250, 0.25);      // Moves up to 250px after 25% delay
    parallaxBackground('#bg8', 0.09, 200, 0.25);      // Moves up to 200px after 25% delay
    parallaxBackground('#bg9', 0.09, 150, 0.25);      // Moves up to 150px after 25% delay
    parallaxBackground('#bg10', 0.09, 100, 0.25);     // Moves up to 100px after 25% delay
    parallaxBackground('#bg11', 0.09, 80, 0.25);      // Moves up to 80px after 25% delay
    parallaxBackground('#bg12', 0.09, 500, 0.25);     // Moves up to 500px after 25% delay
    parallaxBackground('#bg13', 0.09, 500, 0.25);     // Moves up to 500px after 25% delay
    parallaxBackground('#bg14', 0.09, 500, 0.25);     // Moves up to 500px after 25% delay
    parallaxBackground('#bg15', 0.09, 500, 0.25);     // Moves up to 500px after 25% delay
    parallaxBackground('#bg16', 0.09, 500, 0.25);     // Moves up to 500px after 25% delay
    parallaxBackground('#bg17', 0.09, 500, 0.25);     // Moves up to 500px after 25% delay
    parallaxBackground('#bg18', 0.09, 500, 0.25);     // Moves up to 500px after 25% delay
    parallaxBackground('#bg19', 0.09, 500, 0.25);     // Moves up to 500px after 25% delay
});
