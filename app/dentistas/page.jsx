import Link from "next/link";

import logo from '@/public/logo.svg'
import Image from "next/image";

const fecthDentistas = async () => {
  let URL = process.env.URL //  GLOBAL URL
  let dentistas = await fetch(`${URL}api/dentistas`);
  dentistas = await dentistas.json();
  console.log(
    dentistas, "Dentistas"
  )
  return dentistas
}




const Dentistas = async () => {

  let dentistas = await fecthDentistas();
  return (
    <div>
      {dentistas.map((d) => (
        <>
          <Link href={`/dentistas/${d.firstName}`}>
            <Image src={logo} alt="logo"></Image>
            
              <div>
                <p>{d.firstName}</p>
                <p>{d.email}</p>
              </div>

          </Link>
        </>
      ))}
    </div>
  )
}

export default Dentistas;