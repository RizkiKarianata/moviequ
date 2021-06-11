"use strict"; 
// Dom7
var $$ = Dom7;

// Init App
var app = new Framework7({
  root: '#app',
  theme: 'md',
  routes: routes,
  view : {
	pushState: false
  }
});


(function($) {
	$('.swipebox').swipebox();
})(jQuery);

function displayChartOne() {
	var ctx = document.getElementById("chart1").getContext('2d');
	var myChart = new Chart(ctx, {
		type: 'line',
		options: {
			legend: {
				display: false
			}
		},
		data: {
			labels: ['Jan','Feb','Mar','Apr','May','Jun',],
			datasets: [{
				backgroundColor: 'rgba(255, 99, 132, 0.2)',
				borderColor: 'rgba(255,99,132,1)',
				data: [60,65,80,90,80,95],
				label: '',
				fill: 'origin'
			}]
		}
	});
}

function displayChartTwo() {
	var ctx = document.getElementById("chart2").getContext('2d');
	var myChart = new Chart(ctx, {
		type: 'line',
		options: {
			legend: {
				display: false
			}
		},
		data: {
			labels: ['Jan','Feb','Mar','Apr','May','Jun',],
			datasets: [{
				backgroundColor: 'rgba(255, 99, 132, 0.2)',
				borderColor: 'rgba(255,99,132,1)',
				data: [60,65,80,90,80,95],
				label: '',
				fill: 'origin'
			}]
		}
	});
}

function displayReport(id,color,labels,data) {
	
	// Report 1
	var ctx = document.getElementById(id).getContext('2d');
	var myChart1 = new Chart(ctx, {
		type: 'line',
		options: {
			legend: {
				display: false
			},
			scales: {
				xAxes: [{
					gridLines: {
						display: false,
						drawBorder: false
					},
					ticks: {
						display: false
					}
				}],
				
				yAxes: [{
					gridLines: {
						display: false,
						drawBorder: false
					},
					ticks: {
						display: false
					}
				}],
				
			},
		},
		data: {
			labels: labels,
			datasets: [{
				backgroundColor: 'rgba(0, 0, 0, 0)',
				borderColor: color,
				data: data,
				label: '',
				fill: 'origin',
				pointRadius: 0,
			}]
		}
	});
}

function displayReports() {
	displayReport("report1", "#4caf50", ['Jan','Feb','Mar','Apr','May','Jun'], [0,20,10,30,35,45]);
	displayReport("report2", "#f44336", ['Jan','Feb','Mar','Apr','May','Jun'], [0,20,10,30,35,45]);
	displayReport("report3", "#2196f3", ['Jan','Feb','Mar','Apr','May','Jun'], [0,20,10,30,35,45]);
}

function displayReports2() {
	displayReport("report4", "#4caf50", ['Jan','Feb','Mar','Apr','May','Jun'], [0,20,10,30,35,45]);
	displayReport("report5", "#f44336", ['Jan','Feb','Mar','Apr','May','Jun'], [0,20,10,30,35,45]);
	displayReport("report6", "#2196f3", ['Jan','Feb','Mar','Apr','May','Jun'], [0,20,10,30,35,45]);
}