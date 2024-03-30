
import Footer from '@/components/Footer'
import clinica_6 from '@/public/clinica_6.jpeg'
import Image from 'next/image'
const Acerca = () => {
  return (
    <>
      <div className="  mt-56  md:mt-62 lg:mt-40 w-screen z-0   flex  flex-wrap-reverse   p-8">
        <section className='lg:flex-1  flex justify-center flex-col  bg-brand-light rounded-sm text-center text-brand-darker'>
          <h1 className='p-6 lg:text-2xl'>
            ¡Sonría con confianza en Clínica Arias!
          </h1>
          <p className='p-6'>
            Nuestro compromiso es brindarle una experiencia dental excepcional, impulsada por la última tecnología en odontología. En Clínica Arias, entendemos la importancia de una sonrisa saludable y hermosa, y nos esforzamos por comprender completamente sus necesidades individuales para diseñar un plan de tratamiento personalizado que se adapte a usted.

            Nuestro equipo de profesionales capacitados está aquí para responder a todas sus preguntas y preocupaciones, guiándolo a lo largo de su viaje hacia una salud bucal óptima. Desde coronas dentales hasta carillas, blanqueamiento dental y extracciones de muelas del juicio, ofrecemos una amplia gama de tratamientos dentales modernos para satisfacer sus necesidades.

            Además, en Clínica Arias entendemos que las emergencias dentales pueden ocurrir en cualquier momento, por lo que nuestro equipo está disponible las 24 horas del día, los 7 días de la semana, para proporcionarle atención dental de emergencia cuando más lo necesite.

            No espere más para obtener la sonrisa que se merece. ¡Contáctenos hoy mismo para programar su primera cita o reserve su cita en línea a través de nuestro sistema de programación!
          </p>
        </section>
        <section className=' lg:flex-1 rounded-sm '>
          <Image src={clinica_6} alt='Clinica'></Image>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Acerca