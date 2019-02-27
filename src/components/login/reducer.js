import objectAssign from 'object-assign';
const login = {
	test: 'sssssssssssssssssssssssaaaazzzwwwz'
};

export default function loginReducer(state = login, action) {
	switch (action.type) {
		case 'putlogin':
			return objectAssign({}, state, { test: action.payload });
		default:
			return state;
	}
};
