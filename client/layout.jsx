Layout = React.createClass({
	render() {
		return <div className="flex flex-column" style={{minHeight: '100vh'}}>
			<nav className="flex-none white bg-black px2 py2">
				<div className="clearfix container">
					<div className="sm-col">
						<ul className="list-reset m0">
							<li className="inline-block mr2">
								<a className="white" href="/">Blog</a>
							</li>
							<li className="inline-block mr2">
								<a className="white" href="/authors">Authors</a>
							</li>
							<li className="inline-block">
								<a className="btn btn-primary bg-blue" href="/new-post">Add Post</a>
							</li>
						</ul>
					</div>
					<div className="sm-col-right">
						<ul className="list-reset m0">
							<li className="inline-block mr2">
								<a className="white" href="/graphql" target="_blank">GraphiQL</a>
							</li>
							<li className="inline-block">
								<a className="white" href="https://github.com/AdamBrodzinski/Meteor-RethinkDB-GraphQL">GitHub</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<main className="flex-auto">
				<div className="clearfix container px2 py4">
					<div className="sm-col-12 md-col-8 mx-auto">
						{this.props.content}
					</div>
				</div>
			</main>
		</div>;
	}
});
