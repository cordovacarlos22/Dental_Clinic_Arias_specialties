import React from 'react'

const Horario = () => {

  let horarioDeAtencion = [
    {
      dia: 'Lunes',
      horario:' 8 AM - 12 PM , 2 PM- 5 PM'

    },
    {
    dia: 'Martes',
      horario: ' 8 AM - 12 PM , 2 PM- 5 PM'

    },
    {
    dia: 'Miercoles',
      horario: ' 8 AM - 12 PM , 2 PM- 5 PM'

    },
    {
      dia: 'Jueves',
      horario: ' 8 AM - 12 PM , 2 PM- 5 PM'

    },
    {
      dia: 'Viernes',
      horario: ' 8 AM - 12 PM , 2 PM- 5 PM'

    },
    {
      dia: 'Sabado',
      horario: ' 8 AM - 12 PM , 2 PM- 5 PM'

    },

    {
      dia: 'Domingo',
      horario: 'Cerrado'
    }

  ]
  return (
    <div className='text-white  p-4 '>
     
      {horarioDeAtencion.map((d)=>(
        <p
         key={d.dia}
        >{d.dia} {d.horario}</p>
      ))}
      <p>Ahora Estamos Abiertos</p>
    </div>
  )
};

export default Horario