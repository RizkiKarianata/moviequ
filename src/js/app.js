import $$ from 'dom7';
import Framework7 from 'framework7/framework7.esm.bundle.js';

// Import F7 Styles
import 'framework7/css/framework7.bundle.css';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.styl';
// Import Cordova APIs
import cordovaApp from './cordova-app.js';
// Import Routes
import routes from './routes.js';

// Import main app component
import App from '../app.f7.html';

var app = new Framework7({
  root: '#app', // App root element
  component: App, // App main component
  id: 'io.framework7.myapp', // App bundle ID
  name: 'Movieku', // App name
  theme: 'auto', // Automatic theme detection



  // App routes
  routes: routes,


  // Input settings
  input: {
    scrollIntoViewOnFocus: Framework7.device.cordova && !Framework7.device.electron,
    scrollIntoViewCentered: Framework7.device.cordova && !Framework7.device.electron,
  },
  // Cordova Statusbar settings
  statusbar: {
    iosOverlaysWebView: true,
    androidOverlaysWebView: false,
  },
  on: {
    init: function () {
      var f7 = this;
      if (f7.device.cordova) {
        // Init cordova APIs (see cordova-app.js)
        cordovaApp.init(f7);
      }
    },
  },
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


function sliders() {
  var dSwiper = app.swiper.create('.d_swiper1', {
    spaceBetween: 15,
    slidesPerView: 1.3,
    preventClicks: false,
    pagination: {
      el: '.swiper-pagination',
    },
    loop: true,
    autoplay: {
      delay: 5000,
    },
    autoHeight: true,
    observer: true
  })
  var dSwiper = app.swiper.create('.d_swiper2', {
    spaceBetween: 15,
    slidesPerView: 2.3,
    pagination: {
      el: '.swiper-pagination',
    },
    autoHeight: true,
    observer: true
  })
  var dSwiper = app.swiper.create('.d_swiper3', {
    spaceBetween: 15,
    slidesPerView: 1.2,
    pagination: {
      el: '.swiper-pagination',
    },
    autoHeight: true,
    observer: true
  })
  var dSwiper = app.swiper.create('.d_swiper4', {
    spaceBetween: 15,
    slidesPerView: 1.3,
    preventClicks: false,
    pagination: {
      el: '.swiper-pagination',
    },
    autoHeight: true,
    observer: true
  })
}
sliders()

app.on('pageInit', function(page) {sliders();})