const Tdahreducer = (globalState, action) => {


	switch (action.type) {

		case "GET_SURVEY":
			return{
				...globalState,
				TdahSurvey: action.payload
			}
		case "ERROR_MSG":
			return {
				...globalState,
				msgError: action.payload
			}

		case "RESET_ERROR_STATUS":
			return {
				...globalState,
				msgError: ""
			}

		default:
			return globalState

	}

}

export default Tdahreducer