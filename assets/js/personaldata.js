console.log("initializing personaldata.js");

var rickyChart2Options = {
        chart: {
            type: 'scatter',
            zoomType: 'xy',
            renderTo: 'ricky-chart2'
        },
        title: {
            text: 'Time Asleep v. Sleep Quality',
            style: {
                fontSize: '.75em'
            }
        },
        xAxis: {
            min: 0,
            title: {
                enabled: true,
                text: 'Time Asleep',
                style:{
                    fontSize: '.5em'
                }
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true
        },
        yAxis: {
            min: 0,
            labels:{
              styles:{
                  fontSize: '.5em'
                }
            },
            title: {
                text: 'Sleep Quality (%)',
                style:{
                    fontSize: '.5em'
                }
            },
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br>',
                    pointFormat: '{point.x} cm, {point.y} kg'
                }
            }
        },
        series: [{
            name: 'Night',
            color: 'rgba(231, 76, 60,0.6)',
            data: []
        }]
    };

var rickyChart2Processor = function () {
    console.log("Processing data for Ricky's 2nd chart");
    var url =  "assets/json/personaldata.json";
    $.getJSON(url,function(data){
        console.log(data.team.ricky.chart2);
        var rickyChart2Data = new Array();
        $.map(data.team.ricky.chart2, function(sleepObject, int){
            var seriesData = [sleepObject['Time Asleep'], sleepObject['Sleep Quality']];
            rickyChart2Data.push(seriesData);
        });
        rickyChart2Options.series[0].data = rickyChart2Data;
    });
};
