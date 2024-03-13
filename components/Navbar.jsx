import Link from "next/link";


const Navbar = () => {
  return (
    <nav className="bg-purple-400 h-40 flex items-center justify-between">
      <section className="logo-container mx-4">
        <Link href="/">
    
        </Link>
      </section>
      <section>section</section>
      <section>section</section>
      <section>
        <button className="bg-[#0B4F6F] text-white rounded-md p-2 m-4 hover:bg-blue-300 ">
          <Link href="./citas">
            Agende Hoy!
          </Link>
        </button>
      </section>
    </nav>
  )
}

export default Navbar