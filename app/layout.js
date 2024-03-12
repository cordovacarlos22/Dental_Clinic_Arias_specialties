import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Clinica Arias - Especialidades Dentales",
  description: "Atención odontológica integral para niños, adultos, adultos mayores y personas con capacidades especiales.",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
