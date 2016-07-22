import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import config from '../../config';

class Button extends Component{
	render(){
		const { props } = this;
		return (
			<TouchableOpacity
				style={[styles.btn,{
					backgroundColor:props.backgroundColor,
					padding:props.padding
				}]}
			>
				<Text
					style={[styles.text]}
				>
					{props.text}
				</Text>
			</TouchableOpacity>
		)
	}
}

Button.defaultProps = {
	radius : 4,
	backgroundColor : config.color.googleBlue,
	text : 'im is button',
	padding : 10
}

const styles = StyleSheet.create({
	btn : {
		borderRadius : 4
	},
	text : {
		fontSize : 14
	}
})

export default Button
