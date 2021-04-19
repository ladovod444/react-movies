import React from 'react'

class Search extends React.Component {

	state = {
		search: '',
		type: 'all',
	}

	handleKey = (event) => {
		if (event.key === 'Enter') {
			this.props.searchMovies(this.state.search, this.state.type)
		}
	}

	handleFilter = (event) => {
		this.setState(
			() => ({type: event.target.dataset.type }),
		() => {
			this.props.searchMovies(this.state.search, this.state.type)
		})
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
						onChange={ (e) => this.setState({search: e.target.value})}
					  onKeyDown={this.handleKey}
					/>
					<button className="btn search-btn" onClick={() => this.props.searchMovies(this.state.search, this.state.type)}>Search</button>
				</div>
			  <div className="types">
						<label>
							<input
								className="with-gap"
								type="radio"
								name="type"
								data-type="all"
								onChange={this.handleFilter}
								checked={this.state.type === 'all'}
							/>
							<span>All</span>
						</label>
					<label>
							<input
								className="with-gap"
								type="radio"
								name="type"
								data-type="movie"
								onChange={this.handleFilter}
								checked={this.state.type === 'movie'}
							/>
							<span>Movie</span>
						</label>
					<label>
							<input
								className="with-gap"
								type="radio"
								name="type"
								data-type="game"
								onChange={this.handleFilter}
								checked={this.state.type === 'game'}
							/>
							<span>Game</span>
						</label>

				</div>
			</div>
	}
}

export {Search}