"use strict"; 
var routes = [
  // Index page
  {
    path: '/',
    url: './index.html',
    name: 'home',
  },
  // Magazine 2 page
  {
    path: '/magazine2/',
    url: './pages/magazine2.html',
    name: 'magazine2',
  },
  // Classic Blog
  {
    path: '/classic-blog/',
    url: './pages/classic-blog.html',
    name: 'classic-blog',
  },
  // Masonry Blog
  {
    path: '/masonry-blog/',
    url: './pages/masonry-blog.html',
    name: 'masonry-blog',
  },
  // Classic List Blog
  {
    path: '/classic-list-blog/',
    url: './pages/classic-list-blog.html',
    name: 'classic-list-blog',
  },
  // List Blog
  {
    path: '/list-blog/',
    url: './pages/list-blog.html',
    name: 'list-blog',
  },
  // Classic Blog V2
  {
    path: '/classic-blog2/',
    url: './pages/classic-blog2.html',
    name: 'classic-blog2',
  },
  // Single Post
  {
    path: '/single-post/',
    url: './pages/single-post.html',
    name: 'single-post',
  },
  // photography Homepage
  {
    path: '/photography/',
    url: './pages/photography.html',
    name: 'photography',
  },
	// photography Single
  {
    path: '/photography-single/',
    url: './pages/photography-single.html',
    name: '/photography-single/',
  },
	// dashboard
  {
    path: '/dashboard/',
    url: './pages/dashboard.html',
    name: '/dashboard/',
	on: {
		pageInit: function() {
			displayChartOne();
			displayReports();
		}
	}
  },
	// dashboard page 2
  {
    path: '/dashboard-2/',
    url: './pages/dashboard-2.html',
    name: '/dashboard-2/',
	on: {
		pageInit: function() {
			displayChartTwo();
			displayReports2();
		}
	}
  },
	// Movies
  {
    path: '/movies/',
    url: './pages/movies.html',
    name: '/movies/',
  },
	// Movie Single
  {
    path: '/single-movie/',
    url: './pages/single-movie.html',
    name: '/single-movie/',
  },
	// Shop
  {
    path: '/shop/',
    url: './pages/shop.html',
    name: '/shop/',
  },
	// Shop List
  {
    path: '/shop-list/',
    url: './pages/shop-list.html',
    name: '/shop-list/',
	on: {
		pageInit: function() {
			var range = app.range.create({
			  el: '.price-filter',
			  on: {
				change: function (e) {
				  $$('.price-value').text('$'+(e.value[0])+' - $'+(e.value[1]));
				}
			  }
			});
		}
	}
  },
	// Shop Single
  {
    path: '/shop-single/',
    url: './pages/shop-single.html',
    name: '/shop-single/',
  },
	// Bag
  {
    path: '/bag/',
    url: './pages/bag.html',
    name: '/bag/',
  },
	// Checkout
  {
    path: '/checkout/',
    url: './pages/checkout.html',
    name: '/checkout/',
  },
	// Messages
  {
    path: '/messages/',
    url: './pages/messages.html',
    name: '/messages/',
  },
	// Friends
  {
    path: '/friends/',
    url: './pages/friends.html',
    name: '/friends/',
  },
	// Search
  {
    path: '/search/',
    url: './pages/search.html',
    name: '/search/',
  },
	// Profile
  {
    path: '/profile/',
    url: './pages/profile.html',
    name: '/profile/',
  },
	// Calls
  {
    path: '/calls/',
    url: './pages/calls.html',
    name: '/calls/',
  },
	// Notifications
  {
    path: '/notifications/',
    url: './pages/notifications.html',
    name: '/notifications/',
  },
	// Cover
  {
    path: '/cover/',
    url: './pages/cover.html',
    name: '/cover/',
  },
	// Walk
  {
    path: '/walk1/',
    url: './pages/walk1.html',
    name: '/walk1/',
  },
	// Walk 2
  {
    path: '/walk2/',
    url: './pages/walk2.html',
    name: '/walk2/',
  },
	// Login
  {
    path: '/login/',
    url: './pages/login.html',
    name: '/login/',
  },
	// Register
  {
    path: '/register/',
    url: './pages/register.html',
    name: '/register/',
  },
	// Forgot Password
  {
    path: '/forgot-password/',
    url: './pages/forgot-password.html',
    name: '/forgot-password/',
  },
	// Subscribe
  {
    path: '/subscribe/',
    url: './pages/subscribe.html',
    name: '/subscribe/',
  },
  // Login Social
  {
    path: '/login-social/',
    url: './pages/login-social.html',
    name: '/login-social/',
  },
	// Pages
  {
    path: '/pages/',
    url: './pages/pages.html',
    name: '/pages/',
  },
	// Slide 1
  {
    path: '/slide1/',
    url: './pages/slide1.html',
    name: '/slide1/',
  },
	// Slide 2
  {
    path: '/slide2/',
    url: './pages/slide2.html',
    name: '/slide2/',
  },
	// Slide 3
  {
    path: '/slide3/',
    url: './pages/slide3.html',
    name: '/slide3/',
  },
	// Slide 4
  {
    path: '/slide4/',
    url: './pages/slide4.html',
    name: '/slide4/',
  },
	// Slide 5
  {
    path: '/slide5/',
    url: './pages/slide5.html',
    name: '/slide5/',
  },
	// Slide 6
  {
    path: '/slide6/',
    url: './pages/slide6.html',
    name: '/slide6/',
  },
	// Slide 7
  {
    path: '/slide7/',
    url: './pages/slide7.html',
    name: '/slide7/',
  },
	// Slide 8
  {
    path: '/slide8/',
    url: './pages/slide8.html',
    name: '/slide8/',
  },
	// List 2
  {
    path: '/list2/',
    url: './pages/list2.html',
    name: '/list2/',
  },
	// List 3
  {
    path: '/list3/',
    url: './pages/list3.html',
    name: '/list3/',
  },
	// Masonry
  {
    path: '/masonry/',
    url: './pages/masonry.html',
    name: '/masonry/',
  },
	// Tab
  {
    path: '/tab/',
    url: './pages/tab.html',
    name: '/tab/',
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
