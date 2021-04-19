import React from 'react'
import {Movies} from '../components/Movies';
import {Search} from '../components/Search';
import {Preloader} from '../components/Preloader';

class Main extends React.Component{

	state = {
		movies: []
	}

	componentDidMount() {
		//fetch('http://www.omdbapi.com?apikey=508f47cc&s=matrix&type=game')
		fetch('http://www.omdbapi.com?apikey=508f47cc&s=matrix')
			.then(result => {
				//console.log('result', result)
				return result.json()
			})
			.then(
				(data) => {
					console.log(data.Search);
					this.setState({movies: data.Search})
				})
	}

	typeChange = (type, str) => {
		console.log('type =', type);
		const search = str ? str : 'matrix';
		console.log('search =', search);
		let url = `http://www.omdbapi.com?apikey=508f47cc&s=${search}`;
		if (type!== 'All') {
			url += `&type=${type}`;
		}
		fetch(url)
			.then(result => {
				//console.log('result', result)
				return result.json()
			})
			.then(
				(data) => {
					//console.log(data.Search);
					this.setState({movies: data.Search})
				})

	}

	searchMovies = (str) => {
		console.log('str =', str)
		fetch(`http://www.omdbapi.com?apikey=508f47cc&s=${str}`)
			.then(result => {
				//console.log('result', result)
				return result.json()
			})
			.then(
				(data) => {
					//console.log(data.Search);
					this.setState({movies: data.Search})
				})
	}

	render() {
		const {movies} = this.state
		return <main className="container content">
			<Search searchMovies= {this.searchMovies} typeChange = {this.typeChange} />
			{
				movies.length ? (
					<Movies movies = {movies} />
				) : <Preloader />
			}
		</main>
	}
}

export {Main}