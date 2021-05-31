
$(document).ready(function () {
    var tanggal = new Date();
    tanggal.setHours(23, 59, 59);
    var countDownDate = tanggal.getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now_date = new Date();
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        document.getElementById("tgl_flashsale").innerHTML = hours + ":" + minutes + ":" + seconds;
        // document.getElementById("tanggal").innerHTML = tanggal;
        // document.getElementById("now").innerHTML = now_date;


        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("tgl_flashsale").innerHTML = "EXPIRED";
            location.reload(true);
        }
    }, 1000);
});