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
