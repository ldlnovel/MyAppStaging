function putlogin(options) {
	return dispatch => {
			dispatch({
					type: 'putlogin',
					payload: options,
			})
	}
}

export { putlogin }