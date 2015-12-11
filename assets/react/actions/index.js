import * as Constants from '../constants/app';
import fetch from 'isomorphic-fetch';

export function setVisibilityFilter(){
	return {
		type: Constants.SHOW_APP,
	}
}
