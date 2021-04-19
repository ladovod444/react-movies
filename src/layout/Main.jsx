import React from 'react'
import {Movies} from '../components/Movies';
import {Search} from '../components/Search';
import {Preloader} from '../components/Preloader';

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component{

	state = {
		movies: [],
		loading: false
	}

	// componentDidMount() {
	// 	//fetch('http://www.omdbapi.com?apikey=${API_KEY}&s=matrix&type=game')
	// 	fetch('http://www.omdbapi.com?apikey=${API_KEY}&s=matrix')
	// 		.then(result => {
	// 			//console.log('result', result)
	// 			return result.json()
	// 		})
	// 		.then(
	// 			(data) => {
	// 				console.log(data.Search);
	// 				this.setState({movies: data.Search})
	// 			})
	// }

	typeChange = (type, str) => {
		console.log('type =', type);
		//const search = str ? str : 'matrix';
		const search = str;
		console.log('search =', search);
		let url = `http://www.omdbapi.com?apikey=${API_KEY}&s=${search}`;
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
					this.setState({movies: data.Search, loading: false})
				})

	}

	searchMovies = (str, type = 'all') => {
		this.setState({loading: true})
		console.log('str =', str)
		console.log('type =', type)
		//const search = str ? str : 'matrix';
		const search = str;
		fetch(`http://www.omdbapi.com?apikey=${API_KEY}&s=${search}${type !== 'all' ? `&type=${type}` : ''}`)
			.then(result => {
				//console.log('result', result)
				return result.json()
			})
			.then(
				(data) => {
					//console.log(data.Search);
					this.setState({movies: data.Search, loading: false})
				})
	}

	render() {
		const {movies, loading} = this.state
		return <main className="container content">
			<Search searchMovies= {this.searchMovies} />
			{
				loading ? (
				<Preloader />

				) : (<Movies movies = {movies} />)
			}
		</main>
	}
}

export {Main}