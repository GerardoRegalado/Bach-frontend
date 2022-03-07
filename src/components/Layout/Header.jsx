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
        <header>
            <figure>
               <Link to="/"> LOGO</Link>
            </figure>

                <nav>   
                    <ul>

                        {
						authStatus ?
						(
							<>
								<li>
									<Link
										to="/"
										onClick={() => {logoutUser()}}
									>
										Cerrar sesión		
									</Link>
								</li>
								<li>{currentUser.name}</li>
							</>
						) :
						(
							<>
								<li>
									<Link
										to="/registro"
									>
									Crear cuenta
									</Link>
								</li>
								<li>
									<Link
										to="/login"
									>
									Iniciar sesión
									</Link>
								</li>
							</>
						)

					}
                    
                    </ul>
                </nav>

        </header>

    </>
  )
}
