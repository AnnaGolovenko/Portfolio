$(document).ready(function() {
//Scrollspy    
     $('body').scrollspy({target: ".nav-bar", offset: 75});
     $("#nav-menu").find('a').on('click', function(event) {
        if (this.hash !== "") {
           event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
            scrollTop: $(hash).offset().top
            }, 1000, function(){
            window.location.hash = hash;
        });
      } // End if
    });
       
// Progress bar (section four)
    var progressCircle_1 = $(".progress-1").circularProgress({
        line_width: 2,
        color: "#fff",
        starting_position: 0, 
        percent: 0, 
        percentage: true,
        text: ''
    }).circularProgress('animate', 80, 2000);

    var progressCircle_2 = $(".progress-2").circularProgress({
        line_width: 2,
        color: "#fff",
        starting_position: 0, 
        percent: 0, 
        percentage: true,
        text: ''
    }).circularProgress('animate', 70, 2000);

    var progressCircle_3 = $(".progress-3").circularProgress({
        line_width: 2,
        color: "#fff",
        starting_position: 0, 
        percent: 0, 
        percentage: true,
        text: ''
    }).circularProgress('animate', 85, 2000);

    var progressCircle_4 = $(".progress-4").circularProgress({
        line_width: 2,
        color: "#fff",
        starting_position: 0, 
        percent: 0, 
        percentage: true,
        text: ''
    }).circularProgress('animate', 92, 2000);

    var progressCircle_5 = $(".progress-5").circularProgress({
        line_width: 2,
        color: "#fff",
        starting_position: 0, 
        percent: 0, 
        percentage: true,
        text: ''
    }).circularProgress('animate', 69, 2000);
});

