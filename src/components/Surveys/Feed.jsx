import React from 'react'

import {  useContext, useEffect } from 'react'
import {  Link, useNavigate } from 'react-router-dom'
import TdahContext from '../../context/Tdah/TdahContext'
import UsersContext from '../../context/Users/UsersContext'



export default function Feed() {


      const ctxUser = useContext(UsersContext)
  
      const { 
          logoutUser,
          currentUser,
          authStatus 
      
      } = ctxUser

      const ctxTdah = useContext(TdahContext)

      const { currentSurvey, getSurvey } = ctxTdah

      const surveyiD = currentSurvey._id

      getSurvey(surveyiD)

      

      console.log(surveyiD)

  return (
    <>
     
     <div className='bg-gray-800 text-white'>
      <h1><strong>BIENVENIDO A TU PERFIL</strong></h1>
      <div>{currentUser.name}</div>

      <h3>Informacion de usuario:</h3>

      
      <p>{currentUser.address}</p>
      <p>{currentUser.age}</p>

      <h1>encuestas pendientes</h1>

      {
        (!surveyiD) ? <p>TDAH survey pendiente</p> : <p>TDAH survey completada</p>
      }
</div>
    </>
  )
}
