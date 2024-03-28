
import Navbar from "@/components/Navbar"; // navbar component
import "./globals.css";
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata = {


  metadataBase: new URL(`${process.env.URL} `),
  title: " Especialidades Dentales - Clinica Arias ",
  description: "Atención odontológica integral para niños, adultos, adultos mayores y personas con capacidades especiales.",
  url: 'http://localhost:3000',
  siteName: 'Clinica Arias - Especialidades Dentales ',
  locale: 'es_SV',
  type: 'website',
  openGraph: {
    title: 'Especialidades Dentales - Clinica Arias',
    description: 'Atención odontológica integral para niños, adultos, adultos mayores y personas con capacidades especiales.',
    image: './opengraph-image.png'
  },
  twitter: {
    card: 'summary_large_image',
    site: 'http://localhost:3000',
    title: 'Especialidades Dentales - Clinica Arias',
    description: 'Atención odontológica integral para niños, adultos, adultos mayores y personas con capacidades especiales.',
    image: './opengraph-image.png'
  }
};



export default function RootLayout({ children }) {
  return (
    <html lang="es">

      <body className="w-screen h-screen p-0 m-0 box-border bg-brand-darker  relative">
        <Navbar />
        
          {children}
        
        <SpeedInsights />
      </body>
    </html>
  );
}