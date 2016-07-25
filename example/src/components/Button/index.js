import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import styles from './styles'

class Button extends Component{
	render(){
		const { props } = this;
		return (
			<TouchableOpacity
				style={[styles.btnDefault,styles[props.className],props.style]}
				onPress={ props.disabled ? null : ()=> {props.onPress(props.onPressParams)}}
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
	text : 'im is button',
	onPressParams : 'pressing',
	disabled : false,
	onPress (params){
		console.log(`pressing\nparmas:${params}`)
	}
}

Button.propType = {

}

export default Button
