console.log("initializing personaldata.js");

var rickyChart1Options = {
        chart: {
            type: 'column',
            renderTo: 'ricky-chart1',
            backgroundColor:'rgba(255, 255, 255, 0)'
        },
        title: {
            text: 'Daily Steps',
            style: {
                fontSize: '.75em'
            }
        },
        xAxis: {
            min: 0,
            labels:{
                enabled: false
            },
            title: {
                enabled: true,
                text: 'Time',
                style:{
                    fontSize: '.5em'
                }
            },
        },
        yAxis: {
            max: 31000,
            labels:{
              styles:{
                  fontSize: '.5em'
                }
            },
            title: {
                text: 'Number of Steps',
                style:{
                    fontSize: '.5em'
                }
            },
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Steps',
            color: 'rgba(231, 76, 60,0.6)',
            data: []
        }]
    };

var rickyChart2Options = {
        chart: {
            type: 'scatter',
            zoomType: 'xy',
            renderTo: 'ricky-chart2',
            backgroundColor:'rgba(255, 255, 255, 0)'
        },
        title: {
            text: 'Time Asleep v. Sleep Quality',
            style: {
                fontSize: '.75em'
            }
        },
        xAxis: {
            min: 0,
            max: 550,
            title: {
                enabled: true,
                text: 'Time Asleep',
                style:{
                    fontSize: '.5em'
                }
            },
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
                    pointFormat: '{point.x} min, {point.y}%'
                }
            }
        },
        series: [{
            name: 'Night',
            color: 'rgba(231, 76, 60,0.6)',
            data: []
        }]
    };

var rickyChart3Options = {
        chart: {
            renderTo: 'ricky-chart3',
            backgroundColor:'rgba(255, 255, 255, 0)'
        },
        title: {
            text: 'Portfolio Traffic',
            style: {
                fontSize: '.75em'
            }
        },
        xAxis: {
            labels:{
                enabled: false
            },
            title: {
                enabled: true,
                text: 'Time',
                style:{
                    fontSize: '.5em'
                }
            },
        },
        yAxis: {
            min: 0,
            labels:{
              styles:{
                  fontSize: '.5em'
                }
            },
            title: {
                text: 'Visits',
                style:{
                    fontSize: '.5em'
                }
            },
        },
        series: [{
            name: 'Visits',
            color: 'rgba(231, 76, 60, 0.6)',
            data: []
        }]
    };

//#########################################
//Chart functions for Ricky's personal data
//#########################################
var rickyChart1 = function(data) {
    console.log("Processing data for Ricky's 1st chart");
    var rickyChart1Data = new Array();
    $.map(data.team.ricky.chart1, function(stepObject, int){
        var seriesData = stepObject['Steps'];
        rickyChart1Data.push(seriesData);
        });
    rickyChart1Options.series[0].data = rickyChart1Data;
};

var rickyChart2 = function(data){
    console.log("Processing data for Ricky's 2nd chart");
    var rickyChart2Data = new Array();
        $.map(data.team.ricky.chart2, function(sleepObject, int){
            var seriesData = [sleepObject['Time Asleep'], sleepObject['Sleep Quality']];
            rickyChart2Data.push(seriesData);
        });
    rickyChart2Options.series[0].data = rickyChart2Data;
};

var rickyChart3 = function(data){
    console.log("Processing data for Ricky's 3rd chart");
    var rickyChart3Data = new Array();
        $.map(data.team.ricky.chart3, function(visitObject, int){
        var seriesData = visitObject['Sessions'];
        rickyChart3Data.push(seriesData);
        });
    rickyChart3Options.series[0].data = rickyChart3Data;
};

//#########################################
//Batch Processor for Ricky's charts
//#########################################
var rickyChartProcessor = function(data){
    rickyChart1(data);
    rickyChart2(data);
    rickyChart3(data);
}

var chartProcessor = function () {
    var url =  "assets/json/personaldata.json";
    $.getJSON(url,function(data){
        rickyChartProcessor(data);
    });
};
