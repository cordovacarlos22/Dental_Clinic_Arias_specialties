
import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
const inter = Inter({ subsets: ["latin"] });
export const metadata =  {
  title: {
    default:"Clinica Arias - Especialidades Dentales",
    template:"\$ Clinica Arias - Especialidades Dentales "

  },
  description: "Atención odontológica integral para niños, adultos, adultos mayores y personas con capacidades especiales.",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
