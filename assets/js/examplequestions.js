var personalWeight = function () {
                $('#question1').highcharts({
                    title: {
                        text: 'Weight in 2015',
                        x: -20 //center
                    },
                    //subtitle: {
                    //    text: 'Source: WorldClimate.com',
                    //    x: -20
                    //},
                    xAxis: {
                        categories: ['Jan', 'Feb', 'Mar', 'Apr']
                    },
                    yAxis: {
                        title: {
                            text: 'Weight (lbs)'
                        },
                        plotLines: [{
                            value: 0,
                            width: 1,
                            color: '#808080'
                        }]
                    },
                    tooltip: {
                        valueSuffix: 'lbs'
                    },
                    legend: {
                        borderWidth: 0
                    },
                    series: [{
                        name: 'Weight',
                        color: 'rgba(52, 152, 219,0.6)',
                        data: [160, 165, 167, 175]
                    }]
                });
            };
            // end of "How has my weight changed in 2015?" line chart
            

            // this line chart corresponds to slide 5 - example questions. specifically, "Is there a relationship between how many Montague's sandwiches I eat and my weight?"
    var sandwichAndWeight = function () {
                $('#question2').highcharts({
                    chart: {
                        type: 'scatter',
                        zoomType: 'xy'
                    },
                    title: {
                        text: 'Sandwiches v. Weight'
                    },
                    xAxis: {
                        // min: -0.5,
                        // max: 5.5
                        title: {
                            text: "# of Sandwiches"
                        }
                    },
                    yAxis: {
                        // min: 0
                        title: {
                            text: 'Weight (lbs)'
                        }
                    },
                    /*
                    title: {
                        text: "Is there a relationship between how many Montague's sandwiches I've eaten and my weight?"
                    },
                    */
                    plotOptions: {
                        scatter: {
                            tooltip: {
                                headerFormat: '<b>Weight vs. Number of Sandwiches per Month</b><br>',
                                pointFormat: '{point.x} sandwiches, {point.y} lbs',
                            }
                        }
                    },
                    series: [{
                        name: 'Weight vs. Number of Sandwiches',
                        data: [ [5,160], [8, 165], [10, 167], [14, 175] ],
                        color: 'rgba(52, 152, 219,0.6)',
                        marker: {
                            radius: 4
                        }
                    }] // end of series

                });
            };
            // end of "Is there a relationship between how many Montague's sandwiches I eat and my weight?" scatter plot

var exampleQuestionDisplay = function(){
    personalWeight();
    sandwichAndWeight();
}

var meetupGrowthBar = function () {
    $('#meetup-bar').highcharts({
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
            name: '2008',
            color: 'rgba(8,60,50,.6)',
            data: [22, 35, 50]

        }, {
            name: '2009',
            color: 'rgba(17,124,103,.6)',
            data: [45, 51, 29, 23, 54, 21, 50, 57, 36, 89, 38, 35]

        }, {
            name: '2010',
            color: 'rgba(22,162,135,.6)',
            data: [106, 21, 25, 98, 44, 129, 44, 24, 2, 124, 28, 193, 7, 73, 52, 10, 4, 12, 177, 68, 15, 5, 14, 22, 93, 12, 34, 27, 16, 171]
        }, {
            name: '2011',
            color: 'rgba(26,188,156,.6)',
            data: [23, 15, 8, 5, 75, 15, 20, 16, 113, 170, 56, 11, 36, 30, 16, 71, 24, 79, 7, 24, 3, 47, 13, 6, 4, 20, 21, 200, 23, 5, 9, 9, 6, 10, 10, 52, 5, 14, 16, 180, 32, 112, 12, 16, 18, 9, 4, 60, 55, 5, 11, 31, 108, 23, 97, 9, 4, 46, 30, 4, 17, 266, 66, 47, 6, 22, 11, 12, 3, 51, 40, 118, 77, 47, 4, 24, 6]
        },  {
            name: '2012',
            color: 'rgba(28,201,167,.6)',
            data: [22, 4, 13, 30, 23, 30, 35, 22, 7, 131, 48, 123, 70, 6, 9, 30, 42, 14, 4, 16, 35, 75, 5, 118, 3, 55, 8, 47, 19, 30, 7, 5, 10, 30, 74, 52, 3, 65, 30, 10, 35, 49, 24, 146, 4, 30, 14, 19, 119, 10, 35, 30, 53, 56, 30, 5, 19, 40, 17, 100, 50, 30, 35, 69, 14, 2, 97, 12, 160, 41, 10, 3, 30, 14, 21, 19, 2, 54, 8, 137, 38, 31, 5, 131, 14, 4, 27, 204, 27, 20, 57, 12, 33, 123, 1, 4, 20, 21, 30, 30, 60, 5, 153, 4, 34, 25, 37, 20, 32, 39, 4, 14, 42, 3, 10, 10, 51, 105, 45, 24, 15, 7, 7, 19, 14, 31, 10, 118, 39, 29, 10, 61, 66, 18, 147, 200, 62, 10, 27, 9, 49, 15, 41, 29, 24, 20, 36, 9, 134, 17, 5, 9, 21, 80]

        },  {
            name: '2013',
            color: 'rgba(30,214,178,0.6)',
            data: [61, 21, 60, 45, 29, 2, 9, 47, 12, 11, 27, 17, 120, 113, 51, 1, 11, 6, 8, 58, 30, 62, 1, 1, 2, 2, 1, 15, 10, 12, 20, 18, 21, 8, 8, 5, 15, 8, 9, 18, 15, 27, 80, 35, 47, 40, 30, 47, 4, 36, 14, 17, 46, 6, 19, 10, 2, 10, 96, 24, 124, 16, 16, 50, 32, 60, 25, 10, 152, 33, 24, 31, 3, 34, 9, 124, 3, 15, 15, 15, 4, 238, 12, 33, 19, 50, 25, 29, 10, 5, 6, 19, 19, 45, 66, 42, 9, 13, 30, 21, 65, 13, 50, 13, 120, 50, 1, 9, 7, 22, 9, 64, 6, 9, 1, 9, 2, 22, 14, 18, 16, 17, 100, 9, 6, 29, 9, 153, 73, 112, 14, 6, 3, 9, 25, 27, 6, 11, 11, 23, 50, 8, 6, 10, 21, 62, 10, 29, 6, 19, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 104, 24, 17, 29, 120, 13, 30, 20, 53, 3, 53, 4, 25, 18, 4, 65, 21, 27, 52, 13, 9, 111, 29, 63, 12, 37, 7, 25, 15, 6, 16, 30, 1, 6, 30, 36, 29, 27, 2, 87, 5, 13, 6, 7, 120, 130, 12, 103, 19, 44, 10, 7, 33, 2, 28, 10, 13, 12, 11, 6, 10, 6, 8, 7, 5, 7, 5, 29, 36, 10, 5, 16, 6, 118, 25, 4, 47, 2, 51, 15, 113, 37, 11, 7, 28, 3, 32, 7, 10, 45, 5, 7, 38, 12, 1, 3, 34, 11, 109, 14, 14, 50, 2, 1, 2, 3, 7, 3, 2, 3, 4, 4, 1, 4, 1, 4, 2, 2, 2, 1, 1, 1, 2, 1, 4, 1, 3, 46, 108, 6, 1, 18, 7, 22, 31, 27, 49, 25, 2, 4, 5, 24, 17, 12, 5, 177, 147, 101, 36, 1, 38]
        },{
            name: '2014',
            color: 'rgba(30,214,178,0.6)',
            data: [4, 10, 128, 31, 18, 40, 42, 50, 2, 15, 10, 5, 3, 11, 8, 6, 5, 17, 8, 1, 6, 11, 29, 10, 0, 63, 7, 21, 4, 8, 108, 92, 9, 46, 14, 15, 18, 7, 28, 58, 2, 16, 6, 5, 10, 3, 1, 25, 5, 28, 30, 80, 35, 11, 19, 73, 45, 6, 6, 9, 94, 4, 49, 15, 25, 36, 4, 14, 11, 14, 68, 11, 1, 10, 10, 15, 31, 97, 3, 27, 36, 18, 17, 3, 15, 25, 4, 24, 6, 2, 6, 46, 2, 8, 59, 51, 7, 65, 107, 30, 11, 38, 4, 70, 2, 23, 8, 10, 37, 3, 22, 2, 32, 25, 38, 72, 19, 140, 7, 8, 96, 28, 13, 1, 9, 5, 26, 28, 2, 7, 5, 35, 7, 7, 19, 116, 7, 31, 8, 11, 4, 2, 12, 12, 27, 25, 8, 34, 4, 3, 85, 5, 8, 28, 71, 28, 115, 20, 18, 22, 13, 48, 1, 10, 2, 33, 18, 130, 4, 6, 101, 12, 54, 22, 2, 36, 12, 30, 6, 2, 63, 28, 81, 12, 10, 6, 2, 115, 10, 6, 32, 3, 11, 10, 175, 30, 8, 49, 2, 40, 76]
            },{
                name: '2015',
                color: 'rgba(30,214,178,0.6)',
                data: [7, 19, 7, 2, 22, 43, 6, 2, 1, 1, 2, 8, 37, 5, 73, 97, 1, 10, 4, 4, 8, 9, 60, 69, 48, 22, 31, 14, 24, 8, 24, 6, 11, 49, 51, 4, 9, 87, 16, 79, 4, 20, 22, 32, 13, 8, 81, 12, 29, 35, 27, 15, 16, 9, 71, 61, 21, 8, 2, 38, 12, 2, 18]
            }]
    });
};

