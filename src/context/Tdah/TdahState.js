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
        currentSurvey: {
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
            userID: user,
        }
    }

    const [globalState , dispatch] = useReducer(TdahReducer, initialState)
 
    const sendTdahSurvey = async (TdahForm) => {

        const res =	await axiosClient.post("/api/surveys/tdah", TdahForm)	

             console.log(res) 
        
	}

    const getSurvey = async (id) => {

        const res = await axiosClient.get("/api/surveys/tdah" + (id ? '/'+ id : ''))

        const arraySurvey = res.data.data

        dispatch({
            type: "GET_SURVEY",
            payload: arraySurvey
        })
    }

  


    
    return (
        
        <TdahContext.Provider
            	value={{
				currentSurvey : globalState.currentSurvey,
				msgError: globalState.msgError,
                sendTdahSurvey,
                getSurvey
			
			}}
		>
			{ props.children }


        </TdahContext.Provider>

    )

}
export default TdahState