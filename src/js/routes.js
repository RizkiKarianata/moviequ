
import HomePage from '../pages/home.f7.html';
import NotFoundPage from '../pages/404.f7.html';

import WalkthroughPage from '../pages/walkthrough.f7.html';
import SingleMoviePage from '../pages/single-movie.f7.html';
import Movie1Page from '../pages/movie-1.f7.html';
import Movie2Page from '../pages/movie-2.f7.html';
import Movie3Page from '../pages/movie-3.f7.html';
import Movie4Page from '../pages/movie-4.f7.html';
import Movie5Page from '../pages/movie-5.f7.html';

var routes = [
{
	path: '/',
	component: HomePage,
},
{
	path: '/walkthrough/',
	component: WalkthroughPage,
},
{
	path: '/single-movie/',
	component: SingleMoviePage,
},
{
	path: '/movie-1/',
	component: Movie1Page,
},
{
	path: '/movie-2/',
	component: Movie2Page,
},
{
	path: '/movie-3/',
	component: Movie3Page,
},
{
	path: '/movie-4/',
	component: Movie4Page,
},
{
	path: '/movie-5/',
	component: Movie5Page,
},
{
	path: '(.*)',
	component: NotFoundPage,
},
];

export default routes;