/* Minimalist Pomodoro Timer for FreeCodeCamp Pomodoro Challenge https://www.freecodecamp.org/challenges/build-a-pomodoro-clock

There as some display bugs, when switching the clock on and off, the clock will start to count down too fast if you click the start button multiple times. 

These will not be fixed since I am preoccupied with other projects.

*/


$("#slider1").roundSlider({
    sliderType: "min-range",
    value: 30,
    radius: 155,
    width: 10,
    max: 60,
    min: 1,
    handleSize: 22,
    editableTooltip: false,
    showTooltip: false
});

$("#slider2").roundSlider({
    sliderType: "min-range",
    value: 15,
    radius: 120,
    max: 30,
    min: 1,
    width: 10,
    handleSize: 22,
    editableTooltip: false,
    showTooltip: false
})



$('document').ready(function() {
    var time = 30;
    var pause = 15;
    var totalTime = 0;
    var pauseTime = 0;
    var timerWorks = 0;
    var seconds = 0;
    var playTimer;
    var pauseHover;
    var countDown;
    var countDownDisplay;
    var phase = "work";
    var round = 1;

    $("#slider1").on('drag', function() {
    	$(".settings").removeClass("settingsShadows");
    	timerWorks = 0;
    	round = 1;
    	seconds = 0;
    	clearPlay();
    	clearPause();
        switchClock();
        showTime();
        playAppear();
        hidePause();
    })
    
    $("#slider1").on('change', function() {
        $(".settings").removeClass("settingsShadows");
    	timerWorks = 0;
    	seconds = 0;
    	round = 1;
    	clearPlay();
    	clearPause();
        switchClock();
        showTime();
        playAppear();
        hidePause();
    })

    $("#slider2").on('drag', function() {
    	$(".settings").removeClass("settingsShadows");
    	timerWorks = 0;
    	seconds = 0;
    	round = 1;
    	clearPlay();
    	clearPause();
        switchClock();
       	showBreak();
        playAppear();
        hidePause();
     	  
    })

    $("#slider2").on('change', function() {
       	$(".settings").removeClass("settingsShadows");
    	timerWorks = 0;
    	seconds = 0;
    	round = 1;
    	clearPlay();
    	clearPause();
        switchClock();
       	showBreak();
        playAppear();
        hidePause();
    })

    $("#slider1").on("stop", function() { 
    	playAppear();
        hidePause();
    })

    $("#slider2").on("stop", function() { 
    	playAppear();
        hidePause();
    })

    function showTime(){
    	$(".settings").css('padding-top', '55px');
        $(".settings").css('padding-left', '0px');
         if (seconds.toString().length == 2) {
            $("#time").html(countDownDisplay + ':' + seconds + '<br/><span class="labeler">Work</span>'); 
        } else {
            $("#time").html(countDownDisplay + ':0' + seconds + '<br/><span class="labeler">Work</span>');
        }
 
       	$(".fa-pause").fadeOut().css('display','none');
	    $(".fa-pause").css('visibility', 'hidden');
        $("#pause").css('display', 'none');
        $("#pause").css('visibility', 'hidden');
        $(".fa-play").fadeOut().css('display', 'none');
        $(".fa-play").css('visibility', 'hidden');
        if($("#time").css('display')=='none'){
	        $("#time").fadeIn().css('display', 'block');
	        $("#time").css('visibility', 'visible');
	    }
    }

      function showTimeCurrent(){
         if (seconds.toString().length == 2) {
            $("#time").html(countDownDisplay + ':' + seconds + '<br/><span class="labeler">' + phase + '</span>'); 
        } else {
            $("#time").html(countDownDisplay + ':0' + seconds + '<br/><span class="labeler">' + phase  + '</span>');
        }

       	$(".fa-pause").fadeOut().css('display','none');
	    $(".fa-pause").css('visibility', 'hidden');
        $("#pause").css('display', 'none');
        $("#pause").css('visibility', 'hidden');
        $(".fa-play").fadeOut().css('display', 'none');
        $(".fa-play").css('visibility', 'hidden');
        $(".settings").css('padding-top', '55px');
        $(".settings").css('padding-left', '0px');
        if($("#time").css('display')=='none'){
	        $("#time").fadeIn().css('display', 'block');
	        $("#time").css('visibility', 'visible');
	    }
    }



    function showBreak(){
    	$(".settings").css('padding-left', '0px');
    	$(".settings").css('padding-top', '55px');
    	$(".fa-pause").fadeOut().css('display','none');
		$(".fa-pause").css('visibility', 'hidden');
        $("#pause").html(pause + ':00' + '<br/><span class="labeler">Break</span>');
        $("#time").css('display', 'none');
        $("#time").css('visibility', 'hidden');
        $(".fa-play").fadeOut().css('display', 'none');
        $(".fa-play").css('visibility', 'hidden');
        if($("#pause").css('display')=='none'){
	        $("#pause").css('display', 'block');
	        $("#pause").css('visibility', 'visible');
	    }
    }

    function switchClock() {

        time = $("#slider1").roundSlider('option', 'value');
        pause = $("#slider2").roundSlider('option', 'value');
        totalTime = time * 60;
        pauseTime = pause * 60;
        countDown = totalTime;
        countDownDisplay = time;
   

    }

    $(".settings").mouseover(function(){
    	clearPause();
        	if(timerWorks == 1){
	    		$("#time").fadeOut().css('display','none');
		    	$("#time").fadeOut().css('visibility', 'hidden');
		    	$("#pause").css('display', 'none');
		    	$("#pause").css('visibility', 'hidden');
		    	$(".fa-play").css('display','none');
		    	$(".fa-play").css('visibility', 'hidden');
		    	$(".settings").css('padding-left','52.5px');
		    	$(".settings").css('padding-top','50px');
		    	$(".fa-pause").fadeIn().css('display','block');
		    	$(".fa-pause").fadeIn().css('visibility', 'visible');
	    }
	})

function addPause() {

	setTimeout( function(){
		    		$(".settings").css('-webkit-transition','none');
		    		$(".fa-pause").fadeOut().css('display','none');
		    		$(".fa-pause").css('visibility', 'hidden');
		    		$(".settings").css('padding-left','0px');
		    		$(".settings").css('padding-top','55px');
		    		$("#time").fadeIn().css('display','block');
		    		$("#time").fadeIn().css('visibility', 'visible');
	    
	    	}, 1000)

    setTimeout(function(){
	    		$("#time").fadeOut().css('display','none');
		    	$("#time").fadeOut().css('visibility', 'hidden');
		    	$("#pause").css('display', 'none');
		    	$("#pause").css('visibility', 'hidden');
		    	$(".fa-play").css('display','none');
		    	$(".fa-play").css('visibility', 'hidden');
		    	$(".settings").css('padding-left','52.5px');
		    	$(".settings").css('padding-top','50px');
		    	$(".fa-pause").fadeIn().css('display','block');
		    	$(".fa-pause").fadeIn().css('visibility', 'visible');
	    }, 1000)

}
	$(".settings").mouseout(function(){
	    	pauseHover = setTimeout( function(){
	    		if(timerWorks == 1){
		    		$(".settings").css('-webkit-transition','none');
		    		$(".fa-pause").fadeOut().css('display','none');
		    		$(".fa-pause").css('visibility', 'hidden');
		    		$(".settings").css('padding-left','0px');
		    		$(".settings").css('padding-top','55px');
		    		$("#time").fadeIn().css('display','block');
		    		$("#time").fadeIn().css('visibility', 'visible');
	    	}

	    	}, 2000)
    	})

 function hidePause(){
    setTimeout(function(){
    $(".fa-pause").css('display', 'none');
        $(".fa-pause").css('visibility', 'hidden');
    },500)
 }   

 function hidePlay(){
    setTimeout(function(){
        $(".fa-play").fadeOut().css('display', 'none');
        $(".fa-play").css('visibility', 'hidden')
    },500)
 }   

       ;

    $(".settings").click(function() {
    	clearPlay();
    	clearTimeout(playAppear);
    	if(timerWorks == 1){
    		timerWorks = 0;
    		$(".settings").removeClass("settingsShadows");
    		$(".settings").css('padding-left', '0px');
        	$(".settings").css('padding-top', '55px');
    		showTimeCurrent();
    		clearTimeout(pauseHover);
    		playAppear();
    		round = 1;

    	} else{
	    	$(".settings").addClass("settingsShadows");
	    	clearPlay();
	    	clearPause();
	    	clearTimeout(pauseHover);
	    	clearTimeout(playAppear);
	    	addPause();
            hidePlay();
	    	setTimeout(function(){
    		timerWorks = 1;
    	}, 500)
    	timeDeduct();
    	}
        
    })

    function clearPlay(){
    	clearTimeout(playTimer)
    }

    function clearPause(){
    	clearTimeout(pauseHover);
    }

       	playAppear = function() {
       	if(timerWorks==0){
	       		playTimer = setTimeout( function(){
		        $("#pause").fadeOut().css('display', 'none');
		        $("#pause").css('visibility', 'hidden');
		        $("#time").fadeOut().css('display', 'none');
		        $("#time").css('visibility', 'hidden');
		        $(".settings").css('padding-top', '52.5px');
		        $(".settings").css('padding-left', '65px');
		        $(".fa-play").fadeIn().css('display', 'block');
		        $(".fa-play").css('visibility', 'visible');
	        }, 2000);
        clearPause();
       	}


    	}

    function timeDeduct() {
    	
        if (seconds.toString().length == 2) {
            $("#time").html(countDownDisplay + ':' + seconds + '<br/><span class="labeler">' + phase + '</span>');
        } else {
            $("#time").html(countDownDisplay + ':0' + seconds + '<br/><span class="labeler">' + phase + '</span>');
        }

        $(".settings").css('padding-left', '0px');
        $(".settings").css('padding-top', '55px');
        $("#pause").css('display', 'none');
        $("#pause").css('visibility', 'hidden');
        $(".fa-play").fadeOut().css('display', 'none');
        $(".fa-play").css('visibility', 'hidden');
        $(".fa-pause").css('display', 'none');
        $(".fa-pause").css('visibility', 'hidden');
        $("#time").fadeIn().css('display', 'block');
        $("#time").fadeIn().css('visibility', 'visible');

        function getTime() {

            setTimeout(function() {


            	if(timerWorks == 1){
	                if (seconds.toString().length == 2) {
	                    $("#time").html(countDownDisplay + ':' + seconds + '<br/><span class="labeler">' + phase + '</span>');
	                    changeShadows();
	                } else {
	                    $("#time").html(countDownDisplay + ':0' + seconds + '<br/><span class="labeler">' +  phase + '</span>');
	                    changeShadows();
	                }

	                if (seconds == 0) {
	                    seconds = 59;
	                    countDownDisplay--;
	                }
	                seconds--;
	                countDown--;
	                if(countDown==0){

	                	if(round%2 != 0){
	                		console.log(countDown + phase);
	                		seconds = 0;
	                		countDown = pauseTime;
	                		countDownDisplay = pause;
	                		changePhase('break');
	                		round ++;
	                	} else {
	                		seconds = 0;
	                		countDown = totalTime;
	                		countDownDisplay = time;
	                		changePhase('work');
	                		round ++;
	                		}
	                }
	                
	            getTime();
	            //left of here

               	} else {
               	$(".tslider").removeClass('tsliderShadows');
           		 $(".bslider").removeClass('bsliderShadows');

               	}
            }, 1000)


        }



        getTime()

    }

     switchClock();

     function changePhase(option){

     	phase = option;

     }
    function changeShadows() {
        if ($(".tslider").css('box-shadow') == 'none') {
            $(".tslider").addClass('tsliderShadows');
            $(".bslider").addClass('bsliderShadows');
        } else {
            $(".tslider").removeClass('tsliderShadows');
            $(".bslider").removeClass('bsliderShadows');
        }
    }
 });

   
