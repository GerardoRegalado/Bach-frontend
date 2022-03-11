// ./src/components/Auth/Register.js

import { useState, useContext } from 'react'

import UsersContext from './../../context/Users/UsersContext'

export default function Register() {


  const ctxUser = useContext(UsersContext)

  const {
    registerUser
  } = ctxUser


  const [data, setData] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    address:"",
    phone:"",
    age: "", 
    living: "",
    
  })


  const handleChange = (event) => {
    
    setData({
      ...data,
      [event.target.name]: event.target.value
    })

  }

  const handleSubmit = (event) => {
    event.preventDefault()

    registerUser(data)

  }

  return (
    <>
      <form onSubmit={(evt) => { handleSubmit(evt) }}>

        <div className=" block text-sm font-medium text-gray-700">
        <label>Nombre</label>
        <div className="mt-1">
        <input 
          name="name"
          value={data.name}
          onChange={(evt) => { handleChange(evt) }}
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-50 sm:text-sm border-gray-300 rounded-md"
          placeholder="you@example.com"
        />
        </div>
        </div>
        <br />

        <div className="block text-sm font-medium text-gray-700">
        <label>Apellido</label>
        <div className="mt-1">
        <input 
          name="lastname"
          value={data.lastname}
          onChange={(evt) => { handleChange(evt) }} 
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-50 sm:text-sm border-gray-300 rounded-md"
          placeholder="you@example.com"
        />
        </div>
        </div>
        <br />

        <div className="block text-sm font-medium text-gray-700">
        <label>Email</label>
        <div className="mt-1">
        <input 
          name="email"
          value={data.email}
          onChange={(evt) => { handleChange(evt) }}
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-50 sm:text-sm border-gray-300 rounded-md"
          placeholder="you@example.com"
        />
        </div>
        </div>
        <br />

        <div className="block text-sm font-medium text-gray-700">
        <label>Contraseña</label>
        <div className="mt-1">
        <input  
          name="password"
          value={data.password}
          onChange={(evt) => { handleChange(evt) }}
          type="password"
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-50 sm:text-sm border-gray-300 rounded-md"
          placeholder="you@example.com"
        />
        </div>
        </div>
        <br />

        <div className="block text-sm font-medium text-gray-700">
        <label>Direccion</label>
        <div className="mt-1">
        <input  
          name="address"
          value={data.address}
          onChange={(evt) => { handleChange(evt) }}
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-50 sm:text-sm border-gray-300 rounded-md"
          placeholder="you@example.com"
        />
        </div>
        </div>
        <br />

        <div className="block text-sm font-medium text-gray-700">
        <label>Phone</label>
        <div className="mt-1">
        <input  
          name="phone"
          value={data.phone}
          onChange={(evt) => { handleChange(evt) }}
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-50 sm:text-sm border-gray-300 rounded-md"
          placeholder="you@example.com"
          
        />
        </div>
        </div>
        <br />

        <div className="block text-sm font-medium text-gray-700">
        <label>Age</label>
        <div className="mt-1">
        <input  
          name="age"
          value={data.age}
          onChange={(evt) => { handleChange(evt) }}
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-50 sm:text-sm border-gray-300 rounded-md"
          placeholder="you@example.com"
        />
        </div>
        </div>
        <br />

          <div className="block text-sm font-medium text-gray-700">
          <label>Living</label>
          <div className="mt-1">
          <input  
            name="living"
            value={data.living}
            onChange={(evt) => { handleChange(evt) }}
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-50 sm:text-sm border-gray-300 rounded-md"
            placeholder="you@example.com"
          
          />
          </div>
          </div>

        <div>
        <button type="submit" className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Crear usuario</button>
        </div>
        
      </form>
    </>
  )
}