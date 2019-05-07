import React, {Component} from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox'
import '../Containers/App.css'
import Scroll from '../Components/Scroll'

class App extends Component {
	constructor(){
		super()
		this.state={
			robots:[],
			searchField:""
			}
	}
	onSearchChange=(event)=>{
		//putting the input values in the state
		this.setState({searchField:event.target.value})
	}

	componentDidMount() {
		//getting users's data from API before the render
		fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
			return response.json()
		})
		.then(users=>{
			//setting users's data in the state
			this.setState({robots:users})
		})
	}

	render(){
		//filtering robots array where (include) robots.name=input.value
		const filteredRobots=this.state.robots.filter(robots=>{
			return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
			})
		if(this.state.robots.length===0){
			return <h1 className='tc'> Loading </h1>
		}else {
	return (
		<div className='tc'>
			<h1>Robot Friends</h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<Scroll>
			<CardList robots={filteredRobots} />
			</Scroll> 
		</div>
			);
		}
	}
}
export default App;