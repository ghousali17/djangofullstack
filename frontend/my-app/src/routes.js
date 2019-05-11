import React from 'react';
import {Route} from 'react-router-dom';

import ArticleList from './containers/ArticleListView';
import ArticleDetail from './containers/ArticleDetailView';


//match path and load the component we want
const BaseRouter = () => (
	<div>
		<Route exact path='/' component={ArticleList} /> 
		<Route exact path='/:articleID' component={ArticleDetail} /> 
	</div>

	);

export default BaseRouter;