import React from 'react';
import {Route} from 'react-router-dom';

import ArticleList from './containers/ArticleListView';
import ArticleDetail from './containers/ArticleDetailView';
import Login from './containers/Login';
import Signup from './containers/Signup';
//match path and load the component we want
const BaseRouter = () => (
	<div>
		<Route exact path='/' component={ArticleList} /> 
		<Route exact path='/articles/:articleID' component={ArticleDetail} /> 
		<Route exact path='/login' component={Login} /> 
		<Route exact path='/signup' component={Signup} /> 
	</div>

	);

export default BaseRouter;