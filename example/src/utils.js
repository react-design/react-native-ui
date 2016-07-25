import {
	Platfrom
} from 'react-native';

export const isAndroid = function(){
	return Platfrom.OS === 'android'
}

export const isIos = function(){
	return Platfrom.OS === 'ios'
}
