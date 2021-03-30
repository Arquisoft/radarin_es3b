import React from "react";


import Map from "./Map";

import { getUserLocalization } from "../../api/api";
//import { store } from 'react-notifications-component';

class GenerateResponses extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			responses: []


		};
	}




	async componentWillMount() {

		for (var element of this.props.amigos) {


			var response = await getUserLocalization(element);

			if (response.user !== "error") {

				this.state.responses.push(response);
			}
		}

	}

	async componentDidUpdate() {
		this.state.responses = [];

		for (var element of this.props.amigos) {


			var response = await getUserLocalization(element);

			if (response.user !== "error") {

				this.state.responses.push(response);
			}
		}



	}


	render() {
		return (
			<div>
				<Map responses={this.state.responses} lat={this.props.lat} lon={this.props.lon} />
			</div>

		);
	}



}

export default GenerateResponses;