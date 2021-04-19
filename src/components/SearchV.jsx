import React from 'react'

class Search extends React.Component {

	state = {
		search: '',
		type: 'All',
	}

	handleKey = (event) => {
		if (event.key === 'Enter') {
			this.props.searchMovies(this.state.search)
		}
	}

	render() {
		const {search, type} = this.state
		return <div className="row">
				<div className="input-field">
					<input
						placeholder="search"
						type="search"
						className="validate"
						value={search}
						onChange={(e) => this.setState({search: e.target.value})}
					  onKeyDown={this.handleKey}
					/>
					<button className="btn search-btn" onClick={() => this.props.searchMovies(this.state.search)}>Search</button>
				</div>
			  <div className="types">
						<label>
							<input
								className="with-gap"
								type="radio" name="type"
								value={type}
								onChange={() => this.props.typeChange('All', this.state.search)}
							/>
							<span>All</span>
						</label>
					<label>
							<input
								className="with-gap"
								type="radio"
								name="type"
								value="movie"
								onChange={() => this.props.typeChange('movie', this.state.search)}
							/>
							<span>Movie</span>
						</label>
					<label>
							<input
								className="with-gap"
								type="radio"
								name="type"
								value="game"
								onChange={() => this.props.typeChange('game', this.state.search)}
							/>
							<span>Game</span>
						</label>


				</div>
			</div>
	}
}

export {Search}