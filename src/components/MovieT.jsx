function MovieT(props) {
	return <div className="row">
		<div className="col s12 m6">
			<div className="card">
				<div className="card-image">
					<img src={props.src} />
						<span className="card-title">{props.title}</span>
						<a className="btn-floating halfway-fab waves-effect waves-light red"><i
							className="material-icons">add</i></a>
				</div>
				<div className="card-content">
					<p>I am a very simple card. I am good at containing small bits of information. I am convenient because I
						require little markup to use effectively.</p>
					Year <span>{props.year}</span>
				</div>
			</div>
		</div>
	</div>
}

export {MovieT}