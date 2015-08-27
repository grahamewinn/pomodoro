$(document).ready(function() {  // ready
    var pomodoros = 0;          // track number of completed pomodoros
    $('#timer').html('25:00');  // set initial timer value to 25:00
    $('#pomodoros').html('Pomodoros: ' + pomodoros);  // display number of completed pomodoros
    $('#btnstart').click(function() {   // click start button
        var timeMins = 25;
        var timeSecs = 60;
        var rotations = 0;
        setInterval(function() {        // timer function
            rotations++;                // track rotation to know when to increment minutes
            if ((rotations % 61 == 0 || rotations == 1) && timeMins != '') {
                timeMins--;
            }
            timeSecs--;
            if (timeSecs >= 10) {       // normal
                $('#timer').html(timeMins + ':' + timeSecs);
            } else {
                $('#timer').html(timeMins + ':0' + timeSecs);   // if seconds less than 10, add a zero e.g. '24:09'
            }
            if (timeSecs == 0 && timeMins !== '') {     //  if there are minutes left but no seconds, reset seconds
                timeSecs = 60;
            } else if (timeSecs == 0 && timeMins == '') {   // if no seconds or minutes, you've completed a pomodoro! increment pomodoros, reset
                alert("You've completed a pomodoro!");
                pomodoros++;
            }
            if (timeMins == 0) {
                timeMins = '';      // don't display 0 for minutes
            }
        }, 1000);               // increment per second
    });
    $('#btnreset').click(function() {       // reset button refreshes page
        location.reload();
    });
});