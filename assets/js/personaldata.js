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
$(function () {
    $('#ashwini-chart1').highcharts({
        title: {
            text: 'SoundCloud Hits',
            style:{
                    fontSize: '.75em'
                }
        },
        xAxis: {
            labels:{
              style:{
                  fontSize: '.5em'
                }
            },            
            categories: ['2008', '2009', '2010', '2011', '2012', '2013',
                '2014', '2015'],
            style:{
                    fontSize: '.5em'
                }
        },
        yAxis: {
            labels:{
              style:{
                  fontSize: '.5em'
                }
            },
            title: {
                text: 'Plays'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }],
        },
        tooltip: {
            valueSuffix: 'plays',
            styles:{
                  fontSize: '.5em'
                }
        },
        series: [{
            name: 'Soundcloud Plays',
            data: [0,0, 0,212,687,1215,1800,427]
        }]
    });
});
$(function () {
    $('#ashwini-chart2').highcharts({
        chart: {
            type: 'column'
        },
        legend: {
            layout: 'horizontal',
            itemStyle:{
                fontSize: '.5em'
            }         
        },
        title: {
            text: 'All time blog hits',
            style:{
                fontSize: '.75em'
            }
        },
        xAxis: {
            categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Number of blog hits',
                style:{
                  fontSize: '.75em'
                }
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:5px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true,
            style:{
                  fontSize: '.75em'
                }
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: '2010',
            data: [0, 0, 101, 121, 64, 57, 265, 481, 635, 142, 64, 45]

        }, {
            name: '2011',
            data: [490, 96, 87, 225, 74, 89, 123, 450, 651, 235, 334, 175]

        }, {
            name: '2012',
            data: [490, 96, 87, 225, 74, 89, 123, 450, 651, 235, 334, 175]

        }, {
            name: '2013',
            data: [505, 125, 230, 89, 400, 245, 123, 80, 56, 439, 143, 256]

        },  {
            name: '2014',
            data: [126, 540, 210, 87, 75, 152, 321, 21, 45, 28, 32, 190]

        },  {
            name: '2015',
            data: [320, 123, 430, 23, 10, 0, 0, 0, 0, 0, 0, 0]

        }]
    });
});


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

