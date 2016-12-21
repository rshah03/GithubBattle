var React = require('react');
var transparentBg = require('../styles').transparentBg;
var Prompt = require('../components/Prompt');

var PromptContainer = React.createClass({
	contextTypes: { //For React-Router dynamic routing
		router: React.PropTypes.object.isRequired
	},
	getInitialState() {
		return {
			username: ''
		}
	},
	handleUpdateUser(e) {
		this.setState({
			username: e.target.value   
		})
	},
	handleSubmitUser(e) {
		e.preventDefault();
		var username = this.state.username;
		this.setState({
			username: ''
		});

		if (this.props.routeParams.playerOne) {
			this.context.router.push({
				pathname: '/battle',
				query: {
					playerOne: this.props.routeParams.playerOne,
					playerTwo: this.state.username
				}
			})
		} else {
			this.context.router.push('/playerTwo/' + this.state.username)
		}
	},
	render() {
		return (
			<Prompt 
				onSubmitUser={this.handleSubmitUser}
				onUpdateUser={this.handleUpdateUser}
				header={this.props.route.header}
				username={this.state.username} />
		)
	}
});

//
//URL FORMAT: http://localhost:8080/#/playerOne?_k=1u3bxk
//

module.exports = PromptContainer;