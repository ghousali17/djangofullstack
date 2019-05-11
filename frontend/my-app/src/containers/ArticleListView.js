import React from 'react';
import Articles from '../components/Articles';
import Axious from 'axios';


const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}
class ArticleList extends React.Component{
	//The state variable helps us store data form the back end server
	state = {
		articles:[]
	}
	
	//Its a funciton that we overwrite to handle data we receive form the server. 
	//This method is called everytime a component is rendered. 
	componentDidMount(){
		//This is a promise which is a reponse. 
		Axious.get('http://127.0.0.1:8000/api')
		.then(res =>{
			this.setState({
				articles:res.data
			});
			console.log(res.data);
		})


	}
	
	render(){
		return(
			<Articles data={this.state.articles}/>
			);
	}
}

export default ArticleList;