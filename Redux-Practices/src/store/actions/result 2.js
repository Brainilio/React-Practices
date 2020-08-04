import * as actionTypes from "./actionTypes"

//synchronous
export const saveResult = (res) => {
	return {
		type: actionTypes.STORE_RESULT,
		result: res,
	}
}

//async using middelware / thunk
export const storeResult = (res) => {
	return (dispatch, getState) => {
		setTimeout(() => {
			const oldCounter = getState().ctr.counter
			console.log(oldCounter)
			dispatch(saveResult(res))
		}, 2000)
	}
}

export const delResult = (id) => {
	return {
		type: actionTypes.DELETE_RESULT,
		resultId: id,
	}
}
