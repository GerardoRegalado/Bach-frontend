import { useReducer, useState, useContext } from 'react'

import axiosClient from './../../config/axios'

import TdahReducer from './TdahReducer'
import TdahContext from './TdahContext'

import UsersContext from '../Users/UsersContext'

const TdahState = (props) => {

    const ctxUsers = useContext(UsersContext)

    const { currentUser } = ctxUsers

    const user = currentUser._id
    
    const initialState = {
        TdahSurvey: {  
            questionOne: "",
            questionTwo: "",
            questionThree: "",
            questionFour: "",
            questionFive: "",
            questionSix: "",
            questionSeven: "",
            questionEight: "",
            questionNine: "",
            questionTen: "",
            userID:user
        }
    }

    const [globalState , dispatch] = useReducer(TdahReducer, initialState)
 
    const sendTdahSurvey = async (TdahForm) => {
		
		const res =	await axiosClient.post("/api/surveys/tdah", TdahForm)	

		

	}

    console.log(sendTdahSurvey)

    return (
        
        <TdahContext.Provider
            	value={{
				TdahSurvey : globalState.TdahSurvey,
				msgError: globalState.msgError,
                sendTdahSurvey
			
			}}
		>
			{ props.children }


        </TdahContext.Provider>

    )

}
export default TdahState