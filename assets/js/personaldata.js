console.log("initializing personaldata.js");

var lambertChart1Options = {
    chart: {
        type: 'bar',
        renderTo: 'lambert-chart1',
        backgroundColor:'rgba(255, 255, 255, 0)',
            style: {
                fontFamily: 'Inconsolata'
            }
    },
    legend: {
      itemStyle: {
         fontSize: '.75em',
      },
    },
    title: {
        text: 'Daily Computer Usage',
        style: {
            fontSize: '.90em'
        }
    },
    xAxis: [{
        minorTickLength: 0,
        max: 11,
        tickInterval: 1,
        reversed: false
    }, { // mirror axis on right side
        minorTickLength: 0,
        opposite: true,
        reversed: false,
    }],
    yAxis: {
        title: {
            text: null
        },
    },
    plotOptions: {
        tooltip: {
            headerFormat: '<b>{series.name}</b><br>'
        },
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        },
        series: {
            stacking: 'normal'
        }
    },
    series: [{
        name: 'Productive (min)',
        color: 'rgba(243, 156, 18,0.6)',
        data: []
    }, {
        name: 'Unproductive (min)',
        color: 'rgba(211, 84, 0,0.6)',
        data: []
    }]
    };

var lambertChart2Options = {
        chart: {
            type: 'scatter',
            zoomType: 'xy',
            renderTo: 'lambert-chart2',
            backgroundColor:'rgba(255, 255, 255, 0)',
            style: {
                fontFamily: 'Inconsolata'
            }
        },
        legend: {
          itemStyle: {
             fontSize: '.75em',
          },
        },
        title: {
            text: 'Smoothie Trips v Cost',
            style: {
                fontSize: '.90em'
            }
        },
        xAxis: {
            min: 0,
            title: {
                enabled: true,
                text: 'Number of Trips',
                style:{
                    fontSize: '.75em'
                }
            },
            showLastLabel: true
        },
        yAxis: {
            min: 0,
            labels:{
              styles:{
                  fontSize: '.75em'
                }
            },
            title: {
                text: 'Cost (USD)',
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
            name: 'Smoothie Trip',
            color: 'rgba(243, 156, 18,0.6)',
            data: []
        }]
    };

var lambertChart3Options = {
    chart:{
        renderTo: 'lambert-chart3',
        style: {
            fontFamily: 'Inconsolata'
        }
    },
    legend: {
      itemStyle: {
         fontSize: '.75em',
      },
    },
    title: {
        text: 'Good vs. Bad Sleep Weeks',
        style:{
                fontSize: '.90em'
            }
    },
    xAxis: {
        labels:{
          style:{
              fontSize: '.5em'
            }
        },
        categories: [],
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
            text: 'Hours'
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }],
    },
    plotOptions: {
        line: {
            marker: {
                enabled: false
            }
        }
    },
    tooltip: {
        valueSuffix: 'plays',
        styles:{
              fontSize: '.5em'
            }
    },
    series: [{
        name: 'Good Sleep',
        color: 'rgba(243, 156, 18,0.6)',
        data: []
        },{
        name: 'Bad Sleep',
        color: 'rgba(211, 84, 0,0.6)',
        data: []
        },
    ]
};

//#########################################
//Options & Functions for Ashwini Data
//#########################################


$(function () {
    $('#ashwini-chart1').highcharts({
        chart: {
            type: 'column',
            style: {
                fontFamily: 'Inconsolata'
            }
        },
        legend: {
          itemStyle: {
             fontSize: '.75em',
          },
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
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
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

var ashwiniChart2Options = {
        chart:{
            renderTo: 'ashwini-chart2',
            style: {
                fontFamily: 'Inconsolata'
            }
        },
        legend: {
          itemStyle: {
             fontSize: '.75em',
          },
        },
        title: {
            text: 'SoundCloud Hits',
            style:{
                    fontSize: '.90em'
                }
        },
        xAxis: {
            labels:{
              style:{
                  fontSize: '.5em'
                }
            },
            categories: [],
            style:{
                    fontSize: '.5em'
                }
        },
        yAxis: {
            min: 0,
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
            color: 'rgba(26, 188, 156,0.6)',
            data: []
        }]
    };

$(function () {
    $('#ashwini-chart3').highcharts({
        chart: {
            type: 'funnel',
            marginleft: '50px'
        },
        title: {
            text: 'The Internship Struggle',
            style:{
                fontSize: '.75em'
            }
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: false,
                    format: '<b>{point.name}</b>',
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
                    softConnector: false
                },
                neckWidth: '30%',
                neckHeight: '25%'

                //-- Other available options
                // height: pixels or percent
                // width: pixels or percent
            }
        },
        legend: {
            enabled: false
        },
        series: [{
            name: 'Internship Stats',
            data: [
                ['Applications',   80],
                ['Rejects',       20],
                ['Callbacks', 30],
                ['Phone Interviews',    15],
                ['On Site Interviews',    2],
                ['Offers Made', 2],
                ['Accepted', 1]
            ]
        }]
    });
});

//#########################################
//Options for Ricky Chart Data
//#########################################

var rickyChart1Options = {
        chart: {
            type: 'column',
            renderTo: 'ricky-chart1',
            backgroundColor:'rgba(255, 255, 255, 0)',
            style: {
                fontFamily: 'Inconsolata'
            }
        },
        legend: {
          itemStyle: {
             fontSize: '.75em',
          },
        },
        title: {
            text: 'Daily Steps',
            style: {
                fontSize: '.90em'
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
            max: 33000,
            tickInterval: 11000,
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
            backgroundColor:'rgba(255, 255, 255, 0)',
            style: {
                fontFamily: 'Inconsolata'
            }
        },
        legend: {
          itemStyle: {
             fontSize: '.75em',
          },
        },
        title: {
            text: 'Time Asleep v. Sleep Quality',
            style: {
                fontSize: '.90em'
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
            backgroundColor:'rgba(255, 255, 255, 0)',
            style: {
                fontFamily: 'Inconsolata'
            }
        },
        legend: {
          itemStyle: {
             fontSize: '.75em',
          },
        },
        title: {
            text: 'Portfolio Traffic',
            style: {
                fontSize: '.90em'
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
//Chart functions for Ashwini's personal data
//#########################################
var ashwiniChart2 = function(data) {
    console.log("Processing data for Ashwini's 2nd chart");
    var ashwiniChart2Categories = new Array();
    var ashwiniChart2Data = new Array();
    //populates the arrays with data from personaldata JSON
    $.map(data.team.ashwini.chart2, function(soundCloudObject, int){
        var years = soundCloudObject['Year'];
        var hits = soundCloudObject['Hits'];
        ashwiniChart2Categories.push(years);
        ashwiniChart2Data.push(hits);
        });
    //pushes data to the series in lambertchart1options
    ashwiniChart2Options.series[0].data = ashwiniChart2Data;
    ashwiniChart2Options.xAxis.categories = ashwiniChart2Categories;
};

//#########################################
//Chart functions for Lambert's personal data
//#########################################
var lambertChart1 = function(data) {
    console.log("Processing data for Lambert's 1st chart");
    var lambertChart1Productive = new Array();
    var lambertChart1Unproductive = new Array();
    //populates the arrays with data from personaldata JSON
    $.map(data.team.andrew.chart1, function(productivityObject, int){
        var productive = productivityObject['Productive'];
        var unproductive = productivityObject['Unproductive'];
        lambertChart1Unproductive.push(productive);
        lambertChart1Productive.push(unproductive * -1);
        });
    //pushes data to the series in lambertchart1options
    lambertChart1Options.series[0].data = lambertChart1Unproductive;
    lambertChart1Options.series[1].data = lambertChart1Productive;
};

var lambertChart2 = function(data){
    console.log("Processing data for Lambert's 2nd chart");
    var lambertChart2Data = new Array();
        $.map(data.team.andrew.chart2, function(smoothieObject, int){
            var seriesData = [smoothieObject['Smoothie Trips'], smoothieObject['Total Spent']];
            lambertChart2Data.push(seriesData);
        });
    lambertChart2Options.series[0].data = lambertChart2Data;
};

var lambertChart3 = function(data){
    console.log("Processing data for Lambert's 3rd chart");
    lambertChart3Options.series[0].data = data.team.andrew.chart3['Good Sleep'];
    lambertChart3Options.series[1].data = data.team.andrew.chart3['Bad Sleep'];
};

//#########################################
//Batch Processor for Lambert's charts
//#########################################
var lambertChartProcessor = function(data){
    lambertChart1(data);
    lambertChart2(data);
    lambertChart3(data);
}

//#########################################
//Batch Processor for Ashwini's charts
//#########################################
var ashwiniChartProcessor = function(data){
    ashwiniChart2(data);
}


//#########################################
//Batch Processor for Ricky's charts
//#########################################
var rickyChartProcessor = function(data){
    rickyChart1(data);
    rickyChart2(data);
    rickyChart3(data);
}

//###############################################
//Calling personaldata.json and populating charts
//###############################################
var chartProcessor = function () {
    var url =  "assets/json/personaldata.json";
    $.getJSON(url,function(data){
        lambertChartProcessor(data);
        ashwiniChartProcessor(data);
        rickyChartProcessor(data);
    });
};

