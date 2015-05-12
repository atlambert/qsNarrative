 <script type="text/javascript" src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.5.1.min.js"></script>
 <script type="text/javascript" src="http://ajax.aspnetcdn.com/ajax/jquery.ui/1.8.10/jquery-ui.min.js"></script>
<script src="http://code.highcharts.com/highcharts.js"></script>
<script>
$(document).ready(function() {

    var options = {
        chart: {
            renderTo: 'container',
            type: 'spline'
        },
        series: [{}]
    };

    $.getJSON('personaldata.json', function(data) {
        options.series[0].data = data;
        var chart = new Highcharts.Chart(options);
    });

});

<div id="container" style="min-width: 310px; height: 400px; margin: 0 auto"></div>



$(function () {
    $('#container').highcharts({
        chart: {
            type: 'spline'
        },
        title: {
            text: 'Monthly Average Temperature'
        },
</script>

