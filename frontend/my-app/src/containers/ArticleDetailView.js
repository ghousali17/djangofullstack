import React from 'react';
import CustomForm from '../components/Form';
import Axious from 'axios';
import {Card, Button} from 'antd';


class ArticleDetail extends React.Component{
	//The state variable helps us store data form the back end server
	state = {
		article:{}
	}
	
	//Its a funciton that we overwrite to handle data we receive form the server. 
	//This method is called everytime a component is rendered. 
	componentDidMount(){
		//this matches the primary key in our base routes
		const articleID = this.props.match.params.articleID;
		//This is a promise which is a reponse. 
		Axious.get(`http://127.0.0.1:8000/api/${articleID}/`)
		.then(res =>{
			this.setState({
				article:res.data
			});
			
			console.log(res.data);
		})


	}
	
	handleDelete = (event) =>{
				//this matches the primary key in our base routes
		const articleID = this.props.match.params.articleID;
		//This is a promise which is a reponse. 
		Axious.delete(`http://127.0.0.1:8000/api/${articleID}/`);
		this.props.history.push(`/`);


	}
	render(){
		return(
			<div>
			<Card title={this.state.article.title}>
			<p>
			{this.state.article.content}
			</p>
			</Card>
			<CustomForm requestType='put' 
			articleID={this.props.match.params.articleID} 
			btnText="Update"
			/>

			<form onSubmit={this.handleDelete}>
				<Button type="danger" htmlType="submit" >
					Delete
				</Button>
			</form>
			</div>
			);
	}
}

export default ArticleDetail;