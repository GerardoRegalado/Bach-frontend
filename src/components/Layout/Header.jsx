import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import UsersContext from '../../context/Users/UsersContext'






export default function Header() {

    const ctxUser = useContext(UsersContext)

    const { 
        logoutUser,
        currentUser,
        authStatus 
    
    } = ctxUser

	

  return (
    <>
	<header className='bg-gray-800'>
	<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-gray-500 lg:border-none">

         

		
		  {
			authStatus ?
			(
				
				<>
				 	<div className="flex items-center">
            			<a href="/">
              			<img
               				className="h-10 w-auto"
                			src= "bach.png"
                			alt=""
						
              			/>
            			</a>
         			 </div>

					  <span className="ml-10 space-x-4 text-gray-700"   >{currentUser.name}</span>

					<div className="ml-10 space-x-4" >
						<Link className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" 
						to="/" onClick={() => {logoutUser()}}>
						Cerrar sesión
						</Link>
					</div>

					
				
				


				</>
				
			) 
			:
			(
				
				<>
				 		<div className="flex items-center">
            				<a href="/">
              				<img
								className="h-10 w-auto"
								src= "bach.png"
								alt=""
								width="48"
								height="100"
              				/>
            				</a>
          				</div>
					<ul>
				
					<li>
						<Link className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						to="/register">
						Crear cuenta
						</Link>
					</li>

					<li>
						<Link className="inline-flex items-center px-2.5 py-1.5 text-white"  to="/login" > ya eres miembro? inicia sesion</Link>
					</li>

					</ul>	
					
				</>
				
			)

		}

        </div>

       
	  </nav>
    </header> 

    </>
  )
  
}
