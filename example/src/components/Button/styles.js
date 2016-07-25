import {StyleSheet, Dimensions} from 'react-native';
import { color } from '../../config';

export default StyleSheet.create({
	btnDefault : {
		borderRadius : 4,
		backgroundColor : color.default,
		padding : 10,
		justifyContent : 'center'
	},
	btnDanger : {
		backgroundColor : color.danger,
	},
	btnWarning : {
		backgroundColor : color.warning,
	},
	btnSuccess : {
		backgroundColor : color.success,
	},
	btnSecongdary : {
		backgroundColor : color.secongdary,
	},
	btnPrimary : {
		backgroundColor : color.primary,
	},
	text : {
		fontSize : 14,
		color : '#fff'
	}
})
