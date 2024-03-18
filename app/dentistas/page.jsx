import Link from "next/link";

import logo from '@/public/logo.svg'
import Image from "next/image";



 export async function fecthDentistas(){
   let URL = process.env.URL //  GLOBAL URL
   let dentistas = await fetch(`${URL}api/dentistas`);
    dentistas = await dentistas.json();
    console.log(dentistas);
    return dentistas;
 }





const Dentistas = async () => {

  let element = await fecthDentistas();

  return (
    <div>
      {element.map((d) => (
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