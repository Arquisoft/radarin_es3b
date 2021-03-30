import React from "react";

import IntervalRenderer from "react-interval-renderer";



export default class IntervalRerender extends React.Component {
	
	

   

    render() {
        return (
            <IntervalRenderer interval={this.props.time}>
				{this.props.component}
            </IntervalRenderer>
        );
    }
}