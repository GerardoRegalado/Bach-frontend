import React from 'react'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { BookOpenIcon, ChatIcon, NewspaperIcon, PhoneIcon, SaveAsIcon, SupportIcon } from '@heroicons/react/outline'



export default function Bach() {

  const supportLinks = [
    {
      name: 'Realiza una encuesta inicial',
      href: '/tdah',
      description:
        'Llena una encuesta express que nos ayudara a dar un diagnostico inicial que podra ser revisado por alguno de nuestro catalogo de especialistas con quien podras conectar para dar mas detalles',
      icon: BookOpenIcon,
    },
    {
      name: 'Visita tu perfil',
      href: '/feed',
      description:
        'Visita tu perfil y revisa tus encuestas, tambien puedes exportar tu encuesta para enviarla a un especialista',
      icon: SupportIcon,
    },
    {
      name: 'Encuentra un especialista',
      href: '/doctors',
      description:
        'Encuentra al mejor especialista en nuestra web ',
      icon: ChatIcon,
    },
  ]

 
  return (
    <>
    <div className="bg-white">
      {/* Header */}
      <div className="relative pb-32 bg-gray-800">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://concepto.de/wp-content/uploads/2015/05/psicopedagogia-1-e1548737530104.jpg"
            alt=""
          />
          <div className="absolute inset-0 bg-gray-800 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">Bienvenido</h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            En Bach, nuestro objetivo es que los padres o tutores tengan una guia para identificar transtornos en sus pequenos y puedan acercarse a un profesional
            de la salud mental para tratar mas a fondo las soluciones.

            

            <h5>"Es mas facil criar ninos fuertes que reparar adultos rotos. "</h5>

          </p>
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
       
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {supportLinks.map((link) => (
            <div key={link.name} className="flex flex-col bg-white rounded-2xl shadow-xl">
              <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                <div className="absolute top-0 p-5 inline-block bg-indigo-600 rounded-xl shadow-lg transform -translate-y-1/2">
                  <link.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-medium text-gray-900">{link.name}</h3>
                <p className="mt-4 text-base text-gray-500">{link.description}</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                <a href={link.href} className="text-base font-medium text-indigo-700 hover:text-indigo-600">
                  Llevame ahi<span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>

    <Link to="/tdah" className='text-white'>Encuesta TDAH</Link>
    </>
    
  )
}
