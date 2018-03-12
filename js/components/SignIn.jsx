import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class SignIn extends Component{
	render(){
		return(
			<div>
				<Link to="/"><h1>Home</h1></Link>
				<h1>Sign in</h1>
				</div>
			);
	}
}


export default SignIn;