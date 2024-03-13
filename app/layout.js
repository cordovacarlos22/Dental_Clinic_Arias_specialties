
import "./globals.css";

export const metadata =  {
  

  metadataBase: new URL('http://localhost:3000'),
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
      <body>{children}</body>
    </html>
  );
}
