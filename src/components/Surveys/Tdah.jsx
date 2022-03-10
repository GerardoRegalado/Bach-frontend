import React from 'react'
import { useState, useContext } from 'react'
import UsersContext from './../../context/Users/UsersContext'
import PetsContext from './../../context/Pets/PetsContext'
import TdahContext from './../../context/Tdah/TdahContext'

export default function Tdah() {

  const ctxTdah = useContext(TdahContext)

  const { sendTdahSurvey } = ctxTdah

 

	const ctxUsers = useContext(UsersContext)

  const {currentUser} = ctxUsers

  const user = currentUser._id

  class TdahForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      
    }
   
  }

  const handleChange = (event) => {

    {this.setState({value: event.target.value});  }


 }
	
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
    userID:user

	})


	const handleSubmit = (event) => {	
		event.preventDefault()

		sendTdahSurvey(newTdah)

    console.log(newTdah)

	}


  return (
	<>
    <h1>Formulario de TDAH</h1>

		
		<form onSubmit={(evt) => { handleSubmit(evt) }}>

      <div>
        <h1>Pregunta 1</h1>
        <label>
			  <h2>No presta atencion a los detalles?</h2>
        <select>
          <option>Si</option>
          <option >No</option>
         </select>
        </label> 
        <input type="submit" name="questionOne" value={newTdah.questionOne} onChange={e => {handleChange(e) }}/>
			</div>

      <hr />

      <div>
        <h1>Pregunta 2</h1>
			  <h2><label>No es de su interes cualquier tipo de tareas incluyendo las recreativas?</label></h2>
        <select name="questionTwo" value={newTdah.questionTwo}>
          <option>Si</option>
          <option >No</option>
         </select>
			</div>

      <hr />

      <div>
        <h1>Pregunta 3</h1>
			  <h2><label>No escucha o no lo ve cuando le habla directamente?</label></h2>
        <select name="questionThree" value={newTdah.questionThree}>
          <option>Si</option>
          <option >No</option>
         </select>
			</div>

      <hr />

      <div>
        <h1>Pregunta 4</h1>
			  <h2><label>No sigue instrucciones o no espera a que las termine? </label></h2>
        <select name="questionFour" value={newTdah.questionFour}>
          <option>Si</option>
          <option >No</option>
         </select>
			</div>

      <hr />

      <div>
        <h1>Pregunta 5</h1>
			  <h2><label>Tiende a tener problemas en la organizacion?</label></h2>
        <select name="questionFive" value={newTdah.questionFive}>
          <option>Si</option>
          <option >No</option>
         </select>
			</div>

      <hr />

      <div>
        <h1>Pregunta 6</h1>
			  <h2><label>Tiende a ser muy imperactivo?</label></h2>
        <h3>Ej: golpes o movimientos en los asientos</h3>
        <select name="questionSix" value={newTdah.questionSix}>
          <option>Si</option>
          <option >No</option>
         </select>
			</div>

      <hr />

      <div>
        <h1>Pregunta 7</h1>
			  <h2><label>Llega a poner en riesgo su salud fisica?</label></h2>
        <h3>Ej: Corre o trepa en situaciones de peligro o donde esta prohibido</h3>
        <select name="questionSeven" value={newTdah.questionSeven}>
          <option>Si</option>
          <option >No</option>
         </select>
			</div>

      <hr />

      <div>
        <h1>Pregunta 8</h1>
			  <h2><label>No se queda en las actividades recreativas?</label></h2>
        <select name="questionEight" value={newTdah.questionEight}>
          <option>Si</option>
          <option >No</option>
         </select>
			</div>

      <hr />

      <div>
        <h1>Pregunta 9</h1>
			  <h2><label>Habla en exceso?</label></h2>
        <select name="questionNine" value={newTdah.questionNine}>
          <option>Si</option>
          <option >No</option>
         </select>
			</div>

      <hr />

      <div>
        <h1>Pregunta 10</h1>
			  <h2><label>Tiende a tener impulsividad?</label></h2>
        <select name="questionTen" value={newTdah.questionTen}>
          <option>Si</option>
          <option >No</option>
         </select>
			</div>

      <hr />

			<button type="submit">Siguiente encuesta</button>

		</form>

		



	

    
    
    </>
  )
}

