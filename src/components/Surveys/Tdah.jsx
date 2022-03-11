import React from 'react'
import { useState, useContext } from 'react'
import UsersContext from './../../context/Users/UsersContext'
import PetsContext from './../../context/Pets/PetsContext'
import TdahContext from './../../context/Tdah/TdahContext'


export default function Tdah() {

  

  const ctxTdah = useContext(TdahContext)

  const { sendTdahSurvey} = ctxTdah

	const ctxUsers = useContext(UsersContext)

  const {currentUser} = ctxUsers

  const useriD = currentUser._id
  
console.log(useriD)

	const [newTdah, setNewTdah] = useState({
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
    userID: useriD,

	})
console.log(newTdah.userID);
  // const mapping = () => {
    
  //   let indexs = Object.keys(newTdah); 
  //   for(let i=0; i< newTdah.length; i++){
  //     let index = indexs[i];
  //     console.log(index);
  //   }

  //  return indexs
  // }


 
  const handleChange = (event) => {

    setNewTdah({
        ...newTdah,
        [event.target.name]: event.target.value
    })
}
	
 
	const handleSubmit = (event) => {	
		event.preventDefault()

		sendTdahSurvey(newTdah)
    alert('Encuesta creada con exito')

	}


  

  return (
	<>
    <h1>Formulario de TDAH</h1>


     
    <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
		
		<form onSubmit={(evt) => { handleSubmit(evt) }}>

    <div>
      <h1>Pregunta 1</h1>
       <label  className="block text-sm font-medium text-gray-700" >
      <h2>No presta atencion a los detalles?</h2> 
      </label>
        <select  name="questionOne" value={newTdah.questionOne} onChange={handleChange} className="mt-1 block w-50 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
          <option value=""></option>
          <option value="true">Si</option>
          <option value="false">No</option>
        </select>
      </div>
    

      <hr />

      <div>
        <h1>Pregunta 2</h1>
			  <h2>
          <label className="block text-sm font-medium text-gray-700">No es de su interes cualquier tipo de tareas incluyendo las recreativas?</label></h2>
        <select name="questionTwo" value={newTdah.questionTwo} onChange={handleChange} className="mt-1 block w-50 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
        <option value=""></option>
        <option value= "true" >Si</option>
          <option value= "false" >No</option>
         </select>
			</div>

      <hr />

      <div>
        <h1>Pregunta 3</h1>
			  <h2><label className="block text-sm font-medium text-gray-700">No escucha o no lo ve cuando le habla directamente?</label></h2>
        <select name="questionThree" value={newTdah.questionThree} onChange={handleChange} className="mt-1 block w-50 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
        <option value=""></option>
        <option value= "true" >Si</option>
          <option value= "false" >No</option>
         </select>
			</div>

      <hr />

      <div>
        <h1>Pregunta 4</h1>
			  <h2><label className="block text-sm font-medium text-gray-700">No sigue instrucciones o no espera a que las termine? </label></h2>
        <select name="questionFour" value={newTdah.questionFour} onChange={handleChange} className="mt-1 block w-50 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
        <option value=""></option>
        <option value= "true" >Si</option>
          <option value= "false" >No</option>
         </select>
			</div>

      <hr />

      <div>
        <h1>Pregunta 5</h1>
			  <h2><label className="block text-sm font-medium text-gray-700">Tiende a tener problemas en la organizacion?</label></h2>
        <select name="questionFive" value={newTdah.questionFive} onChange={handleChange} className="mt-1 block w-50 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
        <option value=""></option>
        <option value= "true" >Si</option>
          <option value= "false" >No</option>
         </select>
			</div>

      <hr />

      <div>
        <h1>Pregunta 6</h1>
			  <h2><label className="block text-sm font-medium text-gray-700">Tiende a ser muy imperactivo?</label></h2>
        <h3 className="block text-sm font-medium text-gray-700">Ej: golpes o movimientos en los asientos</h3>
        <select name="questionSix" value={newTdah.questionSix} onChange={handleChange} className="mt-1 block w-50 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
        <option value=""></option>
        <option value= "true" >Si</option>
          <option value= "false" >No</option>
         </select>
			</div>

      <hr />

      <div>
        <h1>Pregunta 7</h1>
			  <h2><label className="block text-sm font-medium text-gray-700">Llega a poner en riesgo su salud fisica?</label></h2>
        <h3 className="block text-sm font-medium text-gray-700">Ej: Corre o trepa en situaciones de peligro o donde esta prohibido</h3>
        <select name="questionSeven" value={newTdah.questionSeven} onChange={handleChange} className="mt-1 block w-50 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
        <option value=""></option>
        <option value= "true" >Si</option>
          <option value= "false" >No</option>
         </select>
			</div>

      <hr />

      <div>
        <h1>Pregunta 8</h1>
			  <h2><label className="block text-sm font-medium text-gray-700">No se queda en las actividades recreativas?</label></h2>
        <select name="questionEight" value={newTdah.questionEight} onChange={handleChange} className="mt-1 block w-50 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
        <option value=""></option>
        <option value= "true" >Si</option>
          <option value= "false" >No</option>
         </select>
			</div>

      <hr />

      <div>
        <h1>Pregunta 9</h1>
			  <h2><label className="block text-sm font-medium text-gray-700">Habla en exceso?</label></h2>
        <select name="questionNine" value={newTdah.questionNine} onChange={handleChange} className="mt-1 block w-50 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
        <option value=""></option>
        <option value= "true" >Si</option>
          <option value= "false" >No</option>
         </select>
			</div>

      <hr />

      <div>
        <h1>Pregunta 10</h1>
			  <h2><label className="block text-sm font-medium text-gray-700">Tiende a tener impulsividad?</label></h2>
        <select name="questionTen" value={newTdah.questionTen} onChange={handleChange} className="mt-1 block w-50 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
        <option value=""></option>
        <option value= "true" >Si</option>
          <option value= "false" >No</option>
         </select>
			</div>

      <hr /> 

		
 <button  type="submit"  className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
   Enviar encuesta
   </button>

 </form>


</div>


 </>

    
    

  )
}

