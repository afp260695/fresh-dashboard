
$('#login').click(function()
{
    $(this).find('span').html('SUCCESS').hide().fadeIn(1000,function(){
    	$('#email').fadeOut(700);
    	$('#login').fadeOut(700,function(){
    		$('#login').find('span').html('LOGIN');
    	});
    	$('.item').hide();
    	$('.item-2').hide()
    	setTimeout(
  		function() {
    		$('.item').fadeIn(700,function(){
                var ctx = document.getElementById("canvas").getContext("2d");
                window.myLine = new Chart(ctx, config);
            });
    		$('.item-2').fadeIn(700);
  		}, 1000);
    	
    	$('#password').fadeOut(700);
    	$('.side-bar').addClass("active");
    	$('.header').addClass("active");
    	$('.footer').addClass("active");
    });
});

$('#logout').click(function()
{

	$('.side-bar').removeClass("active");
    $('.header').removeClass("active");
    $('.footer').removeClass("active");
    $('.item').fadeOut(700,function(){
        document.getElementById("canvas").getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
    });
    $('.item-2').fadeOut(700);
    $('#password').val("");
    setTimeout(
  		function() {
    		$('#email').fadeIn(700);
    		$('#login').fadeIn(700);
    		$('#password').fadeIn(700);
  	}, 1300);


    
});

$('.item-slider-icon').click(function(){
    $('.item-slider-icon').removeClass("active");
    $(this).addClass("active");
    $('.news').fadeOut(1000).fadeIn(1000);
})

Chart.defaults.global.defaultFontColor = '#f7f5f5';
Chart.defaults.global.defaultFontFamily = 'Raleway';
Chart.defaults.global.defaultFontStyle = 'bold';

var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Ags", "Sep", "Oct", "Nov", "Dec"];

var randomScalingFactor = function() {
    return Math.round(Math.random() * 370);
};

var randomColorFactor = function() {
    return Math.round(Math.random() * 255);
};
var randomColor = function(opacity) {
    return 'rgba(' + randomColorFactor() + ',' + randomColorFactor() + ',' + randomColorFactor() + ',' + (opacity || '.3') + ')';
};

var config = {
            type: 'line',
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
                datasets: [{
                    label: "Facebook",
                    data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
                    fill: false,
                    backgroundColor: "rgba(75,192,192,0.4)",
                    borderColor: "rgba(75,192,192,1)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(75,192,192,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    
                }, {
                    label: 'Instagram',
                    data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
                    fill: false,
                    backgroundColor: "rgba(75,192,192,0.4)",
                    borderColor: "rgba(75,192,192,1)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(75,192,192,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                }, {
                    label: "Twitter",
                    data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
                    fill: false,
                    backgroundColor: "rgba(75,192,192,0.4)",
                    borderColor: "rgba(75,192,192,1)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(75,192,192,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                }]
            },
            options: {
                legend: {
                    display: true,
                },
                responsive: true,
                title:{
                    display:true,
                    text:'Social Media'

                },
                tooltips: {
                    mode: 'label',
                    callbacks: {
                        // beforeTitle: function() {
                        //     return '...beforeTitle';
                        // },
                        // afterTitle: function() {
                        //     return '...afterTitle';
                        // },
                        // beforeBody: function() {
                        //     return '...beforeBody';
                        // },
                        // afterBody: function() {
                        //     return '...afterBody';
                        // },
                        // beforeFooter: function() {
                        //     return '...beforeFooter';
                        // },
                        // footer: function() {
                        //     return 'Footer';
                        // },
                        // afterFooter: function() {
                        //     return '...afterFooter';
                        // },
                    }
                },
                hover: {
                    mode: 'label'
                },
                scales: {
                    xAxes: [{
                        display: true,
                        scaleLabel: {
                            show: true,
                            labelString: 'Month'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            show: true,
                            labelString: 'Value'
                        },
                        ticks: {
                            suggestedMin: 0,
                            suggestedMax: 250,
                        }
                    }]
                }
            }
        };

/*$.each(config.data.datasets, function(i, dataset) {
    dataset.borderColor = randomColor(0.4);
    dataset.backgroundColor = randomColor(0.5);
    dataset.pointBorderColor = randomColor(0.7);
    dataset.pointBackgroundColor = randomColor(0.5);
    dataset.pointBorderWidth = 1;
});*/

