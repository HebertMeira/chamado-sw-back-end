'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('/users/register', 'UserController.register')
Route.post('/users/login', 'UserController.login')
Route.get('/users/list', 'UserController.list')
Route.get('/users/search', 'UserController.search')
Route.post('/solicitations/register', 'SolicitationController.register')
Route.get('/solicitations/list', 'SolicitationController.list')